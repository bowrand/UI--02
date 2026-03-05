import { NextRequest, NextResponse } from 'next/server';

const COOKIE = 'mech_admin_sess';
const SECRET = process.env.ADMIN_SECRET || 'mrmech-fallback-secret-change-me';
const LOGIN_PATH = '/Mechadmin88dash/login';
const DASH_PATH = '/Mechadmin88dash/dashboard';

async function verifyHmac(data: string, b64sig: string, secret: string): Promise<boolean> {
  try {
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw', enc.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false, ['verify']
    );
    const bin = atob(b64sig);
    const sig = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) sig[i] = bin.charCodeAt(i);
    return await crypto.subtle.verify('HMAC', key, sig, enc.encode(data));
  } catch { return false; }
}

async function verifySession(cookieValue: string): Promise<boolean> {
  try {
    const parts = cookieValue.split('|');
    if (parts.length !== 3) return false;
    const [username, expiry, hmac] = parts;
    if (Date.now() > parseInt(expiry)) return false;
    return await verifyHmac(`${username}|${expiry}`, hmac, SECRET);
  } catch { return false; }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only guard /Mechadmin88dash routes
  if (!pathname.startsWith('/Mechadmin88dash')) return NextResponse.next();

  const sessionCookie = req.cookies.get(COOKIE)?.value ?? '';
  const valid = await verifySession(sessionCookie);

  // On the login page: redirect to dashboard if already logged in
  if (pathname === LOGIN_PATH) {
    if (valid) return NextResponse.redirect(new URL(DASH_PATH, req.url));
    return NextResponse.next();
  }

  // Root /Mechadmin88dash — redirect appropriately
  if (pathname === '/Mechadmin88dash') {
    if (valid) return NextResponse.redirect(new URL(DASH_PATH, req.url));
    return NextResponse.redirect(new URL(LOGIN_PATH, req.url));
  }

  // All other protected routes
  if (!valid) {
    return NextResponse.redirect(new URL(LOGIN_PATH, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/Mechadmin88dash', '/Mechadmin88dash/:path*'],
};
