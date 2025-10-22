import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Here you would typically send an email or save to database
    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, service, message });

    return NextResponse.json({ success: true, message: 'Thank you for contacting us! We will get back to you soon.' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
