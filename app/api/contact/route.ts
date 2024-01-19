import ContactFormEmail from '@/email/contact-form-email';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { email, name, message } = await req.json();

  if (!email || !name || !message) {
    return NextResponse.json({ message: 'Missing Fields' }, { status: 400 })
  }

  try {
    const {error, data} = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "muhamadzulfiqor77@gmail.com",
        subject: `Message from contact - Portfolio Website - From ${name}`,
        reply_to: email,
        react: React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: email,
          name: name
        }),
      });
    
      

    if (error?.name == 'invalid_api_Key' || error?.name == 'invalid_access' || error?.name == 'validation_error') {
        return NextResponse.json({ message: error.message }, { status: 400 })
    } else {
       if (error) {
        return NextResponse.json({ message: error.message}, { status: 400 })
       } else {
        return NextResponse.json({ message: 'Your message successfully send' }, { status: 200 })
       }
    }
  } catch (error: unknown) {
    return NextResponse.json({ message: 'Oops something when wrong!', error: error }, { status: 400 })
  }
}