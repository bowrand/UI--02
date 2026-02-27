"use client";

import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans flex flex-col overflow-hidden">
      {/* Simple Top Header */}
      <header className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 z-50 sticky top-0 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image src="/MR.MECH-Logo-Orange-Blue.svg" alt="Mr. Mech Logo" width={140} height={40} className="h-7 md:h-8 w-auto" />
        </Link>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
          <FiLogOut size={16} />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </header>

      {/* Main Content - full width, responsive */}
      <main className="flex-1 overflow-y-auto p-2 md:p-4 lg:p-6 scroll-smooth w-full">
        <div className="w-full max-w-full mx-auto flex flex-col h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
