"use client";

import { useState, useEffect, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function CallbackForm() {
  const [name,   setName]   = useState("");
  const [phone,  setPhone]  = useState("");
  const [issue,  setIssue]  = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");
  const loadedAtRef = useRef<number>(0);

  // Record the time the form became visible — used server-side as time-gate
  useEffect(() => {
    loadedAtRef.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;

    // Client-side time gate (< 2s = likely bot)
    if (Date.now() - loadedAtRef.current < 2000) return;

    setStatus("loading");
    setErrMsg("");

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value ?? "";

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          issue,
          website: honeypot,       // honeypot
          loadedAt: loadedAtRef.current, // time gate
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok && res.status !== 200) {
        setErrMsg(json.error || "Something went wrong. Please call us directly.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrMsg("Network error. Please try again or call us directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-4 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 min-h-[280px]">
        <div className="w-14 h-14 rounded-full bg-[#34C759]/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#34C759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1D1D1F]">We got your request!</h3>
        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          David will personally call you back shortly. Average response time is under 15 minutes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100"
      aria-label="Request a callback"
      noValidate
    >
      {/* ── Honeypot field: hidden from humans, bots fill it ── */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, pointerEvents: "none" }}>
        <label htmlFor="website">Leave this blank</label>
        <input
          type="text"
          id="website"
          name="website"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {/* Name */}
      <div className="space-y-1.5">
        <label htmlFor="cb-name" className="block text-sm font-semibold text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          id="cb-name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={status === "loading"}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#FF9500] focus:border-transparent outline-none transition-all text-base disabled:opacity-60"
          placeholder="John Doe"
          required
          minLength={2}
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <label htmlFor="cb-phone" className="block text-sm font-semibold text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="cb-phone"
          name="phone"
          autoComplete="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          disabled={status === "loading"}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#FF9500] focus:border-transparent outline-none transition-all text-base disabled:opacity-60"
          placeholder="(403) 555-0000"
          required
        />
      </div>

      {/* Issue */}
      <div className="space-y-1.5">
        <label htmlFor="cb-issue" className="block text-sm font-semibold text-gray-700">
          What&apos;s going on with your vehicle?
        </label>
        <textarea
          id="cb-issue"
          name="issue"
          rows={5}
          value={issue}
          onChange={e => setIssue(e.target.value)}
          disabled={status === "loading"}
          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#FF9500] focus:border-transparent outline-none transition-all resize-none text-base disabled:opacity-60"
          placeholder="Describe the issue you're experiencing. E.g., Brakes are squeaking, car won't start, check engine light is on, need an oil change..."
          required
          minLength={10}
        />
      </div>

      {/* Error message */}
      {status === "error" && errMsg && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p className="text-[13px] text-red-600">{errMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || !name || !phone || !issue}
        className="w-full py-4 text-base font-bold text-white bg-[#FF9500] rounded-xl hover:bg-[#E58600] transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Request a Callback
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      {/* Trust Signals */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Secure
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <svg className="w-4 h-4 text-[#FF9500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          No obligation
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <svg className="w-4 h-4 text-[#34C759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          100% Privacy
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Avg. response: 15 mins
        </div>
      </div>
    </form>
  );
}
