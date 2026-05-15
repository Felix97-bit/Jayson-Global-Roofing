import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Residential Roofing",
  "Commercial / Flat Roofing",
  "Storm Damage",
  "Siding & Exteriors",
  "Insurance Claim",
  "Other",
] as const;

export const URGENCY_OPTIONS = [
  "ASAP",
  "Within a month",
  "Within 3 months",
  "Just exploring",
] as const;

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z
    .string()
    .min(7, "Please enter a phone number.")
    .max(30, "That phone number looks too long."),
  address: z.string().min(4, "Please enter the property address."),
  service: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: "Pick the service you need." }),
  }),
  urgency: z.enum(URGENCY_OPTIONS, {
    errorMap: () => ({ message: "Pick a rough timeframe." }),
  }),
  message: z.string().max(2000, "Please keep it under 2000 characters.").optional(),
  // Honeypot — must be empty.
  website: z.string().max(0).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
