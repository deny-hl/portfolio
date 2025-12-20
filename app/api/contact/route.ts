import { NextResponse } from "next/server";
import { validateContact, type ContactFormValues } from "@/lib/validation";

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string | null) {
  if (!ip) return false;

  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (now - record.lastRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  record.count += 1;
  record.lastRequest = now;
  rateLimitMap.set(ip, record);

  return record.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactFormValues;
  const validation = validateContact(body);

  if (!validation.isValid) {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  if (isRateLimited(request.headers.get("x-forwarded-for"))) {
    return NextResponse.json({ message: "Too many requests. Please try again." }, { status: 429 });
  }

  if (body.company) {
    return NextResponse.json({ message: "Spam detected." }, { status: 400 });
  }

  console.log("New contact submission", {
    name: body.name,
    email: body.email,
    subject: body.subject,
    message: body.message,
  });

  return NextResponse.json({ message: "Message received." }, { status: 200 });
}
