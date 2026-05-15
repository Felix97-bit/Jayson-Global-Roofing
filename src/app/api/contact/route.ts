import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteFormSchema } from "@/lib/schema";

// Simple in-memory rate limiter: same IP can submit at most once every 30s.
// NOTE: This resets on every server restart and won't work across multiple
// serverless instances. For production traffic, swap for Upstash Redis or
// equivalent.
const lastSubmissionByIp = new Map<string, number>();
const RATE_LIMIT_MS = 30_000;

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  // Rate limit
  const last = lastSubmissionByIp.get(ip);
  const now = Date.now();
  if (last && now - last < RATE_LIMIT_MS) {
    return NextResponse.json(
      { error: "Please wait a moment before submitting again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = quoteFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Some fields are invalid.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot — silently succeed without doing anything.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  lastSubmissionByIp.set(ip, now);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? "info@jaysonglobal.com";
  const from = process.env.CONTACT_EMAIL_FROM ?? "quotes@jaysonglobal.com";

  // Allow local dev without a real key.
  if (!apiKey || apiKey.startsWith("re_placeholder")) {
    console.log("[contact] No RESEND_API_KEY configured; logging submission.", data);
    return NextResponse.json({ ok: true, dev: true }, { status: 200 });
  }

  const html = `
    <h2 style="font-family: Georgia, serif;">New Quote Request</h2>
    <table cellpadding="6" style="font-family: -apple-system, sans-serif; font-size: 14px; border-collapse: collapse;">
      <tr><td style="color:#6B6157;">Name</td><td><strong>${escapeHtml(data.name)}</strong></td></tr>
      <tr><td style="color:#6B6157;">Phone</td><td>${escapeHtml(data.phone)}</td></tr>
      <tr><td style="color:#6B6157;">Email</td><td>${escapeHtml(data.email)}</td></tr>
      <tr><td style="color:#6B6157;">Address</td><td>${escapeHtml(data.address)}</td></tr>
      <tr><td style="color:#6B6157;">Service</td><td>${escapeHtml(data.service)}</td></tr>
      <tr><td style="color:#6B6157;">Urgency</td><td>${escapeHtml(data.urgency)}</td></tr>
      ${
        data.message
          ? `<tr><td style="color:#6B6157; vertical-align:top;">Message</td><td>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</td></tr>`
          : ""
      }
    </table>
    <p style="font-family: -apple-system, sans-serif; font-size: 12px; color:#6B6157; margin-top:24px;">
      Submitted ${new Date().toISOString()} from IP ${escapeHtml(ip)}.
    </p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `[Website Quote Request] ${data.service} — ${data.name}`,
      html,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your request. Please try again or call us." },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error("[contact] Unexpected error:", e);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again or call us." },
      { status: 500 },
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
