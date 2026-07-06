import { NextResponse } from "next/server"
import { Resend } from "resend"
import { db } from "@/db"
import { contactMessages } from "@/db/schema"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  console.log("📧 Contact API called")

  try {
    const { name, email, subject, message } = await req.json()

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Save to database
    try {
      await db.insert(contactMessages).values({
        name,
        email,
        subject,
        message,
        isRead: false,
      })
      console.log("✅ Message saved to database")
    } catch (dbError) {
      console.error("❌ Database error:", dbError)
    }

    // ✅ Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["sumayearahman7@gmail.com"], // ✅ Receiver = You
      reply_to: email, // ✅ Sender's email (reply goes here)
      subject: `Portfolio Inquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Portfolio Message</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #f6f9fc;
              }
              .container {
                background: #ffffff;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.05);
              }
              h2 {
                color: #6C63FF;
                margin-bottom: 24px;
                font-size: 24px;
                border-bottom: 3px solid #6C63FF;
                padding-bottom: 12px;
                display: inline-block;
              }
              .field {
                margin: 16px 0;
                padding: 16px 20px;
                background: #f8f9fa;
                border-radius: 10px;
                border-left: 4px solid #6C63FF;
              }
              .label {
                font-weight: 600;
                color: #6b7280;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                margin-top: 4px;
                color: #1f2937;
                font-size: 16px;
                word-wrap: break-word;
              }
              .footer {
                color: #9ca3af;
                font-size: 13px;
                text-align: center;
                margin-top: 32px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
              }
              .footer a {
                color: #6C63FF;
                text-decoration: none;
              }
              .reply-btn {
                display: inline-block;
                background: #6C63FF;
                color: white;
                padding: 10px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                margin-top: 8px;
              }
              .reply-btn:hover {
                background: #5a52d9;
              }
              .header-badge {
                display: inline-block;
                background: #6C63FF;
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-left: 8px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <h2>📬 New Portfolio Message</h2>
                <span class="header-badge">From Website</span>
              </div>

              <p style="color: #6b7280; margin-bottom: 24px;">
                Someone sent you a message from your portfolio website.
              </p>

              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value"><strong>${name}</strong></div>
              </div>

              <div class="field">
                <div class="label">✉️ Sender Email</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #6C63FF; text-decoration: none;">${email}</a>
                </div>
              </div>

              <div class="field">
                <div class="label">📝 Subject</div>
                <div class="value">${subject}</div>
              </div>

              <div class="field" style="border-left-color: #f59e0b;">
                <div class="label">💬 Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${email}?subject=Re: ${subject}" class="reply-btn">
                  ✉️ Reply to ${name}
                </a>
              </div>

              <div class="footer">
                <p>This message was sent from your portfolio contact form.</p>
                <p style="margin-top: 4px;">
                  <a href="mailto:${email}">${email}</a>
                </p>
                <p style="margin-top: 8px; font-size: 11px; color: #d1d5db;">
                  ${new Date().toLocaleString('en-US', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                  })}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("❌ Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email: " + error.message },
        { status: 500 }
      )
    }

    console.log("✅ Email sent successfully:", data?.id)
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    )

  } catch (error) {
    console.error("❌ Contact API error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}