import { NextResponse } from 'next/server';
import { readContent, updatePricing, PricingPlan } from '@/lib/db';

export async function GET() {
  try {
    const content = readContent();
    return NextResponse.json(content.pricing);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read pricing' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const pricing: PricingPlan[] = await request.json();
    updatePricing(pricing);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update pricing' }, { status: 500 });
  }
}
