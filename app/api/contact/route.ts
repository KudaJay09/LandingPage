import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please set RESEND_API_KEY in .env.local",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Change this to your verified domain
      to: process.env.CONTACT_EMAIL || "info@yourdomain.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
