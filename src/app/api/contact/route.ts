// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/app/emails/ContactEmail";
// import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Your Name <onboarding@resend.dev>", // replace with your verified domain if needed
      to: "abubakrshad111@gmail.com", // Replace with your destination email
      subject: `New Contact Form Submission - ${subject}`,
      react: ContactEmail({ name, email, phone, subject, message }),
    });

    if (data.error) {
      return NextResponse.json({ success: false, error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
