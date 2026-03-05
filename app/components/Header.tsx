"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-sm" role="banner">
      {/* Top Announcement Bar (Urgency/Scarcity) */}
      <div className="w-full bg-[#1D1D1F] text-white text-xs sm:text-sm py-1.5 px-4 text-center font-medium tracking-wide" role="status" aria-live="polite">
        <span className="inline-flex items-center justify-center gap-2 w-full">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34C759] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34C759]"></span>
          </span>
          <span className="truncate">Accepting new clients in Calgary. <span className="hidden sm:inline">Limited same-day slots available.</span></span>
        </span>
      </div>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between" aria-label="Main navigation">
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            onClick={(e) => {
              if (typeof window !== 'undefined' && window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Clear any hash fragment from URL (e.g. /#callback-form)
                if (window.location.hash) {
                  history.pushState('', document.title, window.location.pathname);
                }
              }
            }}
            aria-label="MR.Mech — Home" 
            className="active:scale-95 transition-transform"
          >
            <img src="/MR.MECH-Logo-Orange-Blue.svg" alt="MR.Mech" className="h-7 sm:h-9 w-auto" />
          </Link>
        </div>
        
        {/* Desktop Navigation (SEO Internal Links) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/#how-it-works-heading" className="hover:text-[#FF9500] transition-colors">How It Works</Link>
          <Link href="/#guarantees-heading" className="hover:text-[#FF9500] transition-colors">Guarantee</Link>
          <Link href="/#our-work" className="hover:text-[#FF9500] transition-colors">Our Work</Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+14035550199"
            className="inline-flex items-center gap-2 bg-[#FF9500] hover:bg-[#E08300] text-white px-4 sm:px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md active:scale-95"
            aria-label="Call MR.MECH"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span className="hidden sm:inline">Call MR.MECH</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="/#callback-form"
            className="hidden sm:inline-flex items-center gap-2 bg-[#1D1D1F] hover:bg-[#2d2d2f] text-white px-4 sm:px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm hover:shadow-md active:scale-95"
            aria-label="Request a callback"
          >
            Request a Callback
          </a>
        </div>
      </nav>
    </header>
  );
}
