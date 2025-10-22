import { NextResponse } from 'next/server';
import { readContent, updateServices, Service } from '@/lib/db';

export async function GET() {
  try {
    const content = readContent();
    return NextResponse.json(content.services);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read services' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const services: Service[] = await request.json();
    updateServices(services);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update services' }, { status: 500 });
  }
}
