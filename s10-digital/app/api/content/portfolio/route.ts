import { NextResponse } from 'next/server';
import { readContent, updatePortfolio, PortfolioItem } from '@/lib/db';

export async function GET() {
  try {
    const content = readContent();
    return NextResponse.json(content.portfolio);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read portfolio' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const portfolio: PortfolioItem[] = await request.json();
    updatePortfolio(portfolio);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update portfolio' }, { status: 500 });
  }
}
