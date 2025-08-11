'use server';

import nodemailer from 'nodemailer';
import { TFormSchema } from '@/lib/form-schema';
import { siteConfig } from '@/lib/site-config';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  secure: process.env.NEXT_PUBLIC_SMTP_SECURE === 'true',
  port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
    pass: process.env.NEXT_PUBLIC_SMTP_PASS,
  },
});

// 🎨 Updated User Email Template
const userEmailTemplate = (email: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Thank You</title>
</head>
<body style="background-color: #ffffff; font-family: Arial, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; min-height: 90vh; margin: auto; padding: 30px; text-align: center; border: 1px solid #eee; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    
    <h1 style="color: #007BFF;">Thank You for Reaching Out!</h1>
    <p style="color: #555; font-size: 18px;">We’ve received your message and will get back to you shortly.</p>
    
    <div style="margin: 25px 0; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
      <p><strong>Your Email:</strong> ${email}</p>
      <p><strong>Your Message:</strong></p>
      <p style="color: #333; font-style: italic;">"${message}"</p>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <h2 style="color: #333;">About Me</h2>
    <p style="color: #555; font-size: 16px; line-height: 1.6;">
      ${siteConfig.description}
    </p>

    <a href=${siteConfig.url} target="_blank" 
       style="display: inline-block; margin-top: 15px; background-color: #007BFF; color: white; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-size: 16px;">
      🌐 Visit My Portfolio
    </a>

    <div style="margin-top: 50px; color: #777; font-size: 14px;">
      If you don’t see my reply soon, check your spam or archive folder.
    </div>
  </div>
</body>
</html>
`;

// 🎨 Updated Owner Email Template
const ownerEmailTemplate = (email: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Portfolio Inquiry</title>
</head>
<body style="background-color: #ffffff; font-family: Arial, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; min-height: 90vh; margin: auto; padding: 30px; text-align: center; border: 1px solid #eee; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
    
    <h1 style="color: #007BFF;">📬 New Connection Request</h1>
    <p style="color: #555; font-size: 18px;">A new visitor from your portfolio has submitted their details.</p>
    
    <div style="margin: 25px 0; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="color: #333; font-style: italic;">"${message}"</p>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <h2 style="color: #333;">Reminder</h2>
    <p style="color: #555; font-size: 16px; line-height: 1.6;">
      Respond quickly to make a great first impression.  
      You can showcase your skills, past projects, and offer your services professionally.
    </p>

    <a href=${siteConfig.url} target="_blank" 
       style="display: inline-block; margin-top: 15px; background-color: #28A745; color: white; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-size: 16px;">
      🚀 Open Portfolio
    </a>

    <div style="margin-top: 50px; color: #777; font-size: 14px;">
      Tip: Maintain a polite, clear, and enthusiastic tone when replying.
    </div>
  </div>
</body>
</html>
`;

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    // Email to the user
    await transporter.sendMail({
      from: `"Message bot"<${process.env.NEXT_PUBLIC_SMTP_EMAIL}>`,
      to: email,
      subject: 'Thank You for Reaching Out!',
      html: userEmailTemplate(email, message),
    });

    // Email to you (site owner)
    await transporter.sendMail({
      from: `"Message bot"<${process.env.NEXT_PUBLIC_SMTP_EMAIL}>`,
      to: siteConfig.email,
      subject: 'New Message from Portfolio',
      html: ownerEmailTemplate(email, message),
    });

    return {
      status: 200,
      success: true,
      data: 'Email sent successfully. Check spam/archives if not visible.',
    };
  } catch (err) {
    console.error(err);
    return { status: 500, success: false, error: 'Failed to send email' };
  }
};
