import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(1, "Company name is required"),
  domain: z.string().min(1, "Please select a domain"),
  candidates: z.string().min(1, "Number of candidates is required"),
  mode: z.string().min(1, "Please select a mode of delivery"),
  location: z.string().min(1, "Location is required"),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
