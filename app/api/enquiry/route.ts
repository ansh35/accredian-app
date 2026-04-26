import { NextResponse } from "next/server";
import { enquirySchema } from "@/features/landing-page/schemas/enquiry";
import fs from "fs/promises";
import path from "path";
import { kv } from "@vercel/kv";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "enquiries.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation
    const validatedData = enquirySchema.parse(body);

    const newEnquiry = {
      ...validatedData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    // ALWAYS log to console (viewable in Vercel/Production logs)
    console.log("New Enquiry Received:", JSON.stringify(newEnquiry, null, 2));

    let storageSuccess = false;
    let message = "Enquiry submitted successfully";

    // 1. Attempt Vercel KV Storage (For Production Persistence)
    try {
      if (process.env.KV_REST_API_URL) {
        await kv.lpush("enquiries", newEnquiry);
        storageSuccess = true;
      }
    } catch (kvError) {
      console.error("Vercel KV Storage failed:", kvError);
    }

    // 2. Attempt local file storage (Works locally, skipped on Vercel)
    try {
      const dataDir = path.dirname(DATA_FILE_PATH);
      
      try {
        await fs.access(dataDir);
      } catch {
        await fs.mkdir(dataDir, { recursive: true });
      }

      let enquiries = [];
      try {
        const fileData = await fs.readFile(DATA_FILE_PATH, "utf-8");
        enquiries = JSON.parse(fileData);
      } catch {
        // File doesn't exist yet
      }

      enquiries.push(newEnquiry);
      await fs.writeFile(DATA_FILE_PATH, JSON.stringify(enquiries, null, 2));
      storageSuccess = true;
    } catch (fsError) {
      console.info("Local filesystem write skipped (Environment likely Read-Only).");
    }

    if (!storageSuccess) {
      message = "Enquiry received! (Logged to console)";
    }

    return NextResponse.json({ 
      success: true, 
      message,
      enquiry: newEnquiry
    });

  } catch (error: any) {
    console.error("Enquiry API Error:", error);
    
    if (error.name === "ZodError") {
      return NextResponse.json({ 
        success: false, 
        message: "Validation failed", 
        errors: error.errors 
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: false, 
      message: "Internal server error" 
    }, { status: 500 });
  }
}
