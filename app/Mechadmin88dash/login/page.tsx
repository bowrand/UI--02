"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const passRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/Mechadmin88dash/dashboard");
        router.refresh();
      } else {
        const att = attempts + 1;
        setAttempts(att);
        setError("Incorrect username or password.");
        setPassword("");
        passRef.current?.focus();
        if (att >= 3) {
          setError("Too many attempts. Please wait before trying again.");
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setError("Please try again.");
          }, 5000);
        }
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      if (attempts < 3) setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-4">
      <div className="w-full max-w-[340px]">
        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-black/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-6">
          <h1 className="text-[15px] font-semibold text-black text-center mb-0.5">Sign in</h1>
          <p className="text-[12px] text-gray-400 text-center mb-5">Admin access only</p>

          <form onSubmit={handleSubmit} className="space-y-2.5" autoComplete="off">
            <div>
              <label className="block text-[11px] font-medium text-gray-500 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
                spellCheck={false}
                disabled={loading}
                className="w-full h-9 px-3 bg-[#F5F5F7] border border-black/[0.08] rounded-lg text-[13px] text-black outline-none focus:border-black/30 focus:bg-white transition-all disabled:opacity-50"
                placeholder="Username"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 mb-1">Password</label>
              <input
                ref={passRef}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
                className="w-full h-9 px-3 bg-[#F5F5F7] border border-black/[0.08] rounded-lg text-[13px] text-black outline-none focus:border-black/30 focus:bg-white transition-all disabled:opacity-50"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <p className="text-[11px] text-red-500 font-medium pt-0.5">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !username || !password}
              className="w-full h-9 mt-1 bg-black text-white text-[13px] font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-4">
          Secured · Admin access only
        </p>
      </div>
    </div>
  );
}
