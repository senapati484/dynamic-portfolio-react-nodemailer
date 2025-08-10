'use server';

import nodemailer from 'nodemailer';

import { TFormSchema } from '@/lib/form-schema';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  secure: process.env.NEXT_PUBLIC_SMTP_SECURE === 'true', // ensure it's boolean
  port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
    pass: process.env.NEXT_PUBLIC_SMTP_PASS,
  },
});

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    await transporter.sendMail({
      from: `"Message bot"<${process.env.NEXT_PUBLIC_SMTP_EMAIL}>`,
      to: [email, process.env.NEXT_PUBLIC_SMTP_EMAIL].join(','),
      subject: 'Message from portfolio',
      text: `email: ${email} \nmessage: ${message}`,
    });

    // ✅ Use a plain object to return the response
    return {
      status: 200,
      success: true,
      data: 'Email sent successfully, Can check the spam folder or achives',
    };
  } catch (err) {
    console.error(err);
    return { status: 500, success: false, error: 'Failed to send email' };
  }
};
