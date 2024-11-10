import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 40px; background-color: #f3f7fa;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #4a90e2; text-align: center; margin-bottom: 20px;">📬 New Message Received</h2>
      
      <p style="font-size: 16px; line-height: 1.5; color: #555;">You have received a new message. Here are the details:</p>
      
      <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fb; border-radius: 8px;">
        <p><strong style="color: #4a90e2;">Name:</strong> ${name}</p>
        <p><strong style="color: #4a90e2;">Email:</strong> <a href="mailto:${email}" style="color: #333; text-decoration: none;">${email}</a></p>
      </div>

      <div style="margin-top: 20px;">
        <p style="font-size: 16px; color: #555;"><strong style="color: #4a90e2;">Message:</strong></p>
        <blockquote style="border-left: 4px solid #4a90e2; padding-left: 15px; margin: 10px 0; color: #333; font-style: italic;">
          ${userMessage}
        </blockquote>
      </div>
      
      <p style="font-size: 12px; color: #888; text-align: center; margin-top: 30px;">Click reply to respond to the sender directly.</p>
    </div>
  </div>
`;
// Helper function to send an email via Nodemailer
async function sendEmail(payload) {
  const { name, email, message: userMessage } = payload;
  
  const mailOptions = {
    from: "Portfolio", 
    to: process.env.EMAIL_ADDRESS, 
    subject: `New Message From ${name}`, 
    text: userMessage, 
    html: generateEmailTemplate(name, email, userMessage), 
    replyTo: email, 
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const emailSuccess = await sendEmail(payload);

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Email sent successfully!',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send email.',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
};
