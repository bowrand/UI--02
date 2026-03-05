"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername]     = useState("");
  const [password, setPassword]     = useState("");
  const [showPass, setShowPass]     = useState(false);
  const [keepSigned, setKeepSigned] = useState(false);
  const [loading, setLoading]       = useState(false);
  const [locked, setLocked]         = useState(false);
  const [error, setError]           = useState("");
  const passRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || locked) return;
    setLoading(true);
    setError("");

    let navigating = false;
    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, keepSignedIn: keepSigned }),
      });

      if (res.ok) {
        navigating = true;
        router.push("/Mechadmin88dash/dashboard");
        router.refresh();
        return;
      }

      const json = await res.json().catch(() => ({}));

      if (res.status === 429) {
        setLocked(true);
        setError("Too many failed attempts. Please wait 10 minutes before trying again.");
        return;
      }

      const rem = json.attemptsRemaining;
      const remText =
        typeof rem === "number" && rem > 0
          ? ` — ${rem} attempt${rem !== 1 ? "s" : ""} remaining`
          : "";
      setError(`Incorrect username or password.${remText}`);
      setPassword("");
      passRef.current?.focus();
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      if (!navigating) setLoading(false);
    }
  };

  return (
    <>
      {/* ── Keyframe animations ─────────────────────────────── */}
      <style>{`
        @keyframes orb1 {
          0%   { transform: translate(0px,   0px)   scale(1);   }
          33%  { transform: translate(60px,  -80px) scale(1.15); }
          66%  { transform: translate(-40px,  50px) scale(0.92); }
          100% { transform: translate(0px,   0px)   scale(1);   }
        }
        @keyframes orb2 {
          0%   { transform: translate(0px,   0px)   scale(1);   }
          33%  { transform: translate(-70px,  60px) scale(1.1);  }
          66%  { transform: translate(50px,  -40px) scale(0.95); }
          100% { transform: translate(0px,   0px)   scale(1);   }
        }
        @keyframes orb3 {
          0%   { transform: translate(0px,   0px)   scale(1);   }
          50%  { transform: translate(30px,   80px) scale(1.12); }
          100% { transform: translate(0px,   0px)   scale(1);   }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>

    <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #08080f 0%, #0d0d1a 50%, #080810 100%)" }}
    >
      {/* Orb 1 — warm amber/orange */}
      <div style={{
        position: "absolute", width: 520, height: 520, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,149,0,0.22) 0%, rgba(255,80,0,0.08) 55%, transparent 75%)",
        top: "5%", left: "5%", filter: "blur(48px)",
        animation: "orb1 28s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      {/* Orb 2 — electric blue */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(10,132,255,0.18) 0%, rgba(0,80,200,0.07) 55%, transparent 75%)",
        bottom: "0%", right: "0%", filter: "blur(56px)",
        animation: "orb2 34s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      {/* Orb 3 — violet accent */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(120,65,220,0.14) 0%, rgba(80,40,180,0.05) 55%, transparent 75%)",
        top: "40%", left: "55%", filter: "blur(40px)",
        animation: "orb3 22s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      {/* Subtle noise texture overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        pointerEvents: "none",
      }} />

      <div className="w-full max-w-[420px] relative z-10"
        style={{ animation: "fadeUp 0.5s ease both" }}
      >

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/MR.MECH-Logo-Orange-Blue.svg"
            alt="MrMech"
            width={160}
            height={44}
            className="h-10 w-auto"
            priority
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Card */}
        <div className="rounded-3xl px-8 pt-9 pb-8"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        >

          <h1 className="text-[22px] font-semibold tracking-tight text-white text-center mb-1">
            Welcome back
          </h1>
          <p className="text-[13px] text-white/50 text-center mb-8">
            Sign in to your admin panel
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">

            {/* Username */}
            <div>
              <label className="block text-[11px] font-semibold text-white/45 mb-1.5 tracking-[0.08em] uppercase">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
                spellCheck={false}
                disabled={loading || locked}
                className="w-full h-12 px-4 bg-white/10 border border-white/10 rounded-xl text-[15px] text-white outline-none focus:border-white/25 focus:bg-white/15 transition-all disabled:opacity-50 placeholder:text-white/25"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-semibold text-white/45 mb-1.5 tracking-[0.08em] uppercase">
                Password
              </label>
              <div className="relative">
                <input
                  ref={passRef}
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  disabled={loading || locked}
                  className="w-full h-12 px-4 pr-12 bg-white/10 border border-white/10 rounded-xl text-[15px] text-white outline-none focus:border-white/25 focus:bg-white/15 transition-all disabled:opacity-50 placeholder:text-white/25"
                  placeholder="••••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  tabIndex={-1}
                  disabled={loading || locked}
                  aria-label={showPass ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors p-1 rounded-md disabled:opacity-40"
                >
                  {showPass ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Keep signed in */}
            <label className="flex items-center gap-3 cursor-pointer group select-none pt-1">
              <div className="relative w-5 h-5 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={keepSigned}
                  onChange={e => setKeepSigned(e.target.checked)}
                  disabled={loading || locked}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-[5px] border-2 flex items-center justify-center transition-all ${keepSigned ? "bg-[#FF9500] border-[#FF9500]" : "bg-transparent border-white/30 group-hover:border-white/50"}`}>
                  {keepSigned && (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.75 8.25 2 5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-[13px] text-white/60">Keep me signed in for 30 days</span>
            </label>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p className="text-[12px] text-red-600 leading-relaxed">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || locked || !username || !password}
              className="w-full h-12 mt-1 bg-[#FF9500] hover:bg-[#e08300] text-white text-[15px] font-semibold rounded-xl active:scale-[0.99] transition-all disabled:opacity-40 flex items-center justify-center gap-2 shadow-[0_4px_24px_rgba(255,149,0,0.35)]"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : locked ? (
                "Access locked — try again in 10 min"
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Policy agreement */}
          <p className="text-[11.5px] text-white/35 text-center mt-6 leading-relaxed">
            By signing in you agree to Bowrand&apos;s{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-white/55 underline underline-offset-2 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms-and-conditions"
              target="_blank"
              className="text-white/55 underline underline-offset-2 hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </p>
        </div>

        {/* Security badge */}
        <p className="text-center text-[11px] text-white/30 mt-5 flex items-center justify-center gap-1.5">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          Secured with 256-bit encryption
        </p>

      </div>
    </div>
    </>
  );
}
