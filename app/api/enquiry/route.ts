import { NextResponse } from "next/server";
import { enquirySchema } from "@/features/landing-page/schemas/enquiry";
import fs from "fs/promises";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "enquiries.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation
    const validatedData = enquirySchema.parse(body);

    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE_PATH);
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Read existing data or start fresh
    let enquiries = [];
    try {
      const fileData = await fs.readFile(DATA_FILE_PATH, "utf-8");
      enquiries = JSON.parse(fileData);
    } catch {
      // File doesn't exist yet
    }

    // Add new enquiry with timestamp
    const newEnquiry = {
      ...validatedData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    enquiries.push(newEnquiry);

    // Write back to file
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(enquiries, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: "Enquiry submitted successfully",
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
