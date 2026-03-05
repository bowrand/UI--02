"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function AdminDashLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin-auth", { method: "DELETE" });
    router.push("/Mechadmin88dash/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.06] flex items-center justify-between px-4 py-2.5">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <Image src="/MR.MECH-Logo-Orange-Blue.svg" alt="MrMech" width={110} height={32} className="h-6 w-auto" />
        </Link>
        <button
          onClick={logout}
          className="text-[12px] font-medium text-gray-500 hover:text-black transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100"
        >
          Sign out
        </button>
      </header>
      <main className="flex-1 p-3 md:p-5 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
