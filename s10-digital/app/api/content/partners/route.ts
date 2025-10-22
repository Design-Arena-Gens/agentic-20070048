import { NextResponse } from 'next/server';
import { readContent, updatePartners, Partner } from '@/lib/db';

export async function GET() {
  try {
    const content = readContent();
    return NextResponse.json(content.partners);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read partners' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const partners: Partner[] = await request.json();
    updatePartners(partners);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update partners' }, { status: 500 });
  }
}
