import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export const dynamic = 'force-dynamic';

const COOKIE       = 'mech_admin_sess';
const SECRET       = process.env.ADMIN_SECRET || 'mrmech-fallback-secret-change-me';
const VALID_USER   = process.env.ADMIN_USERNAME || 'mechuser8dash';
const VALID_PASS   = process.env.ADMIN_PASSWORD || 'WW22$$ppWW';

// ── In-memory brute-force guard ───────────────────────────────
// Key: IP address. Value: { count, firstSeen }
// Vercel may spin up new instances — this provides per-instance protection.
// For cross-instance protection Vercel's built-in WAF / DDoS shield handles the rest.
const ATTEMPTS = new Map<string, { count: number; until: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS    = 10 * 60 * 1000; // 10 minutes

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const entry = ATTEMPTS.get(ip);
  if (!entry) return false;
  if (Date.now() > entry.until) { ATTEMPTS.delete(ip); return false; }
  return entry.count >= MAX_ATTEMPTS;
}

function recordFailure(ip: string) {
  const entry = ATTEMPTS.get(ip);
  if (!entry || Date.now() > entry.until) {
    ATTEMPTS.set(ip, { count: 1, until: Date.now() + WINDOW_MS });
  } else {
    entry.count++;
  }
}

function clearAttempts(ip: string) {
  ATTEMPTS.delete(ip);
}

function sign(username: string): string {
  const expiry = (Date.now() + 24 * 60 * 60 * 1000).toString();
  const raw    = createHmac('sha256', SECRET).update(`${username}|${expiry}`).digest();
  const hmac   = Buffer.from(raw).toString('base64');
  return `${username}|${expiry}|${hmac}`;
}

// POST /api/admin-auth — login
export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many attempts. Please try again in 10 minutes.' },
      { status: 429, headers: { 'Retry-After': '600' } }
    );
  }

  let username = '', password = '';
  try {
    const body = await req.json();
    username = body.username ?? '';
    password = body.password ?? '';
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  // Constant-time penalty + compare
  await new Promise(r => setTimeout(r, 400));

  if (username !== VALID_USER || password !== VALID_PASS) {
    recordFailure(ip);
    const remaining = MAX_ATTEMPTS - (ATTEMPTS.get(ip)?.count ?? 0);
    return NextResponse.json(
      { error: 'Invalid credentials', attemptsRemaining: Math.max(0, remaining) },
      { status: 401 }
    );
  }

  clearAttempts(ip);
  const sessionValue = sign(username);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, sessionValue, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge:   60 * 60 * 24,
    path:     '/',
  });
  return res;
}

// DELETE /api/admin-auth — logout
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(COOKIE);
  return res;
}
