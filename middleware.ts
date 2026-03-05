import { NextRequest, NextResponse } from 'next/server';

const COOKIE     = 'mech_admin_sess';
const SECRET     = process.env.ADMIN_SECRET || 'mrmech-fallback-secret-change-me';
const LOGIN_PATH = '/Mechadmin88dash/login';
const DASH_PATH  = '/Mechadmin88dash/dashboard';

// ── Web-Crypto HMAC verify (Edge-compatible, no Node crypto) ──
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

// ── Security headers added to every response ─────────────────
function withSecurity(res: NextResponse): NextResponse {
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  res.headers.set('X-XSS-Protection', '1; mode=block');
  res.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );
  return res;
}

// ── Main middleware ───────────────────────────────────────────
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // /admin and any sub-paths → clean 404, no hint that the real admin exists
  if (pathname.startsWith('/admin')) {
    return withSecurity(new NextResponse(null, { status: 404 }));
  }

  // Protect /Mechadmin88dash routes
  if (pathname.startsWith('/Mechadmin88dash')) {
    const sessionCookie = req.cookies.get(COOKIE)?.value ?? '';
    const valid = await verifySession(sessionCookie);

    if (pathname === LOGIN_PATH) {
      if (valid) return withSecurity(NextResponse.redirect(new URL(DASH_PATH, req.url)));
      return withSecurity(NextResponse.next());
    }

    if (pathname === '/Mechadmin88dash') {
      const dest = valid ? DASH_PATH : LOGIN_PATH;
      return withSecurity(NextResponse.redirect(new URL(dest, req.url)));
    }

    if (!valid) return withSecurity(NextResponse.redirect(new URL(LOGIN_PATH, req.url)));
    return withSecurity(NextResponse.next());
  }

  // Apply security headers to all other pages
  return withSecurity(NextResponse.next());
}

export const config = {
  // Run on all routes except Next.js static assets and image optimiser
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|otf|eot)).*)',
  ],
};
