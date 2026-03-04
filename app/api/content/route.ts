import { NextResponse } from 'next/server';
import { getContent, saveContent, WebContent } from '@/lib/contentStore';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const content = await getContent();
    return NextResponse.json(content, {
      headers: { 'Cache-Control': 's-maxage=30, stale-while-revalidate=60' },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body: WebContent = await req.json();
    await saveContent(body);
    return NextResponse.json({ success: true, message: "Content updated successfully" });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
