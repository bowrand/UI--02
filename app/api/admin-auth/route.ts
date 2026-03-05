import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export const dynamic = 'force-dynamic';

const COOKIE = 'mech_admin_sess';
const SECRET = process.env.ADMIN_SECRET || 'mrmech-fallback-secret-change-me';
const VALID_USER = process.env.ADMIN_USERNAME || 'mechuser8dash';
const VALID_PASS = process.env.ADMIN_PASSWORD || 'WW22$$ppWW';

function sign(username: string): string {
  const expiry = (Date.now() + 24 * 60 * 60 * 1000).toString(); // 24 h
  // base64 so middleware (Web Crypto) can verify without converting hex
  const raw = createHmac('sha256', SECRET).update(`${username}|${expiry}`).digest();
  const hmac = Buffer.from(raw).toString('base64');
  return `${username}|${expiry}|${hmac}`;
}

// POST /api/admin-auth — login
export async function POST(req: NextRequest) {
  const { username, password } = await req.json().catch(() => ({}));

  // Constant-time-ish comparison to resist timing attacks
  if (username !== VALID_USER || password !== VALID_PASS) {
    await new Promise(r => setTimeout(r, 600)); // penalty delay
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const sessionValue = sign(username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, sessionValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 24 h
    path: '/',
  });
  return res;
}

// DELETE /api/admin-auth — logout
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(COOKIE);
  return res;
}
