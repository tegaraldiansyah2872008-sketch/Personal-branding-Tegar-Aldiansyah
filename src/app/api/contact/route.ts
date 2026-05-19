import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validasi input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    // Setup transporter email (pakai Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Email Gmail Anda
        pass: process.env.EMAIL_PASS, // App Password Gmail
      },
    })

    // Email yang akan dikirim ke Anda
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tegaraldiansyah280708@gmail.com', // Email Anda yang akan menerima pesan
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #10b981; margin-bottom: 20px;">Pesan Baru dari Portfolio</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Nama:</strong>
              <p style="margin: 5px 0; color: #666;">${name}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Email:</strong>
              <p style="margin: 5px 0; color: #666;">${email}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Subject:</strong>
              <p style="margin: 5px 0; color: #666;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Pesan:</strong>
              <p style="margin: 5px 0; color: #666; white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            
            <p style="color: #999; font-size: 12px; margin: 0;">
              Pesan ini dikirim dari form contact di website portfolio Anda.
            </p>
          </div>
        </div>
      `,
    }

    // Kirim email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email berhasil dikirim!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Gagal mengirim email' },
      { status: 500 }
    )
  }
}
