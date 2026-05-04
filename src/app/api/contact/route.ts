import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/components/ContactEmail";
import React from "react";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_TO!,
      subject: `New Contact Form Submission - ${subject}`,
      react: React.createElement(ContactEmail, {
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    console.log("Resend:", data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
