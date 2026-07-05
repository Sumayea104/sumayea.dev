import { NextResponse } from "next/server"
import { Resend } from "resend"
import { db } from "@/db"
import { contactMessages } from "@/db/schema"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // 1. Save to database
    await db.insert(contactMessages).values({
      name,
      email,
      subject,
      message,
      isRead: false,
    })

    // 2. Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",  // Resend default sender
      to: ["sumayearahman7@gmail.com"],  // Your email
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
              .container { background: #f9f9f9; border-radius: 12px; padding: 30px; }
              h2 { color: #6C63FF; margin-bottom: 20px; }
              .field { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #6C63FF; }
              .label { font-weight: 600; color: #555; font-size: 14px; }
              .value { margin-top: 5px; color: #333; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>📬 New Contact Message</h2>
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">✉️ Email</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">📝 Subject</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message}</div>
              </div>
              <p style="color: #888; font-size: 12px; text-align: center; margin-top: 20px;">
                Sent from your portfolio contact form
              </p>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}