import { NextResponse } from 'next/server';
import { readContent } from '@/lib/db';

export async function GET() {
  try {
    const content = readContent();
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}
