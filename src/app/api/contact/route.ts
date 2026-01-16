import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { emri, mbiemri, biznesi, telefoni, email, mesazhi } = body;

    if (!emri || !mbiemri || !biznesi || !email || !mesazhi) {
      return NextResponse.json(
        { message: 'No form data provided.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_TOKEN,
      },
    });

    const mailOptions = {
      from: `"${emri} ${mbiemri}" <${email}>`,
      to: 'info@pr-solutions.com, info@modus-events.com',
      subject: 'New Contact Form Submission',
      text: `Emri: ${emri}\nMbiemri: ${mbiemri}\nBiznesi: ${biznesi}\nTelefoni: ${telefoni}\nEmail: ${email}\nMesazhi: ${mesazhi}`,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.messageId);

    return NextResponse.json(
      { message: 'Mesazhi u dërgua me sukses.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Dërgimi i mesazhit dështoi. Ju lutem provoni më vonë.' },
      { status: 500 }
    );
  }
}