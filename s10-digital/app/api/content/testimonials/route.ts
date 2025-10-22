import { NextResponse } from 'next/server';
import { readContent, updateTestimonials, Testimonial } from '@/lib/db';

export async function GET() {
  try {
    const content = readContent();
    return NextResponse.json(content.testimonials);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read testimonials' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const testimonials: Testimonial[] = await request.json();
    updateTestimonials(testimonials);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update testimonials' }, { status: 500 });
  }
}
