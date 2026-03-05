import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// ── Rate limiting: 3 submissions per IP per hour ─────────────
const SUBMISSIONS = new Map<string, { count: number; until: number }>();
const MAX_PER_HOUR = 3;
const WINDOW_MS    = 60 * 60 * 1000;

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const entry = SUBMISSIONS.get(ip);
  if (!entry) return false;
  if (Date.now() > entry.until) { SUBMISSIONS.delete(ip); return false; }
  return entry.count >= MAX_PER_HOUR;
}

function recordSubmission(ip: string) {
  const entry = SUBMISSIONS.get(ip);
  if (!entry || Date.now() > entry.until) {
    SUBMISSIONS.set(ip, { count: 1, until: Date.now() + WINDOW_MS });
  } else {
    entry.count++;
  }
}

// ── Input sanitiser ───────────────────────────────────────────
function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, 2000);
}

// POST /api/callback
export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  // ── Honeypot check: bots fill the hidden "website" field ──
  const honeypot = sanitize(body.website);
  if (honeypot !== '') {
    // Silent success — don't tell bots they were caught
    return NextResponse.json({ ok: true });
  }

  // ── Time-gate: form must have been open ≥ 2.5 s ──────────
  const loadedAt = Number(body.loadedAt ?? 0);
  const elapsed  = Date.now() - loadedAt;
  if (elapsed < 2500 || elapsed > 30 * 60 * 1000) {
    return NextResponse.json({ ok: true }); // silent drop for bots
  }

  // ── Input validation ──────────────────────────────────────
  const name  = sanitize(body.name);
  const phone = sanitize(body.phone);
  const issue = sanitize(body.issue);

  if (!name || name.length < 2) {
    return NextResponse.json({ error: 'Please enter your full name.' }, { status: 422 });
  }

  // Basic North-American phone pattern
  const phoneClean = phone.replace(/\D/g, '');
  if (phoneClean.length < 10 || phoneClean.length > 15) {
    return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 422 });
  }

  if (issue.length < 10) {
    return NextResponse.json({ error: 'Please describe your vehicle issue (at least 10 characters).' }, { status: 422 });
  }

  // ── Record successful submission ──────────────────────────
  recordSubmission(ip);

  // Here you could save to Supabase or send an email notification.
  // For now, log server-side (visible in Vercel Function logs).
  console.log('[callback]', new Date().toISOString(), {
    name, phone: `****${phoneClean.slice(-4)}`, issueLength: issue.length
  });

  return NextResponse.json({ ok: true });
}
