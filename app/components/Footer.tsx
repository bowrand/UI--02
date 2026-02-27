import Link from 'next/link';

export default function Footer() {
  return (
    <>
    <footer className="w-full bg-[#1D1D1F] text-white py-12 pb-32 sm:pb-12 border-t border-white/10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src="/MR.MECH-Logo-Orange-Blue.svg" alt="MR.Mech" className="h-10 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Calgary's premier mobile mechanic. We bring the auto repair shop to your driveway. Red Seal Certified, fully insured, and backed by a 12-month warranty.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="tel:+14035550199" className="text-white hover:text-[#FF9500] transition-colors font-semibold">
                (403) 555-0199
              </a>
            </div>
          </div>

          {/* Services Silo */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Service Guides</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services/mobile-brake-repair" className="hover:text-[#FF9500] transition-colors">Mobile Brake Repair</Link></li>
              <li><Link href="/services/car-diagnostics" className="hover:text-[#FF9500] transition-colors">Car Diagnostics</Link></li>
              <li><Link href="/services/battery-replacement" className="hover:text-[#FF9500] transition-colors">Battery Replacement</Link></li>
              <li><Link href="/services/alternator-starter-repair" className="hover:text-[#FF9500] transition-colors">Alternator & Starter</Link></li>
              <li><Link href="/services/pre-purchase-inspection" className="hover:text-[#FF9500] transition-colors">Pre-Purchase Inspections</Link></li>
            </ul>
          </div>

          {/* Locations Silo */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Service Areas</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/#locations" className="hover:text-[#FF9500] transition-colors">NW Calgary</Link></li>
              <li><Link href="/#locations" className="hover:text-[#FF9500] transition-colors">SW Calgary</Link></li>
              <li><Link href="/#locations" className="hover:text-[#FF9500] transition-colors">NE Calgary</Link></li>
              <li><Link href="/#locations" className="hover:text-[#FF9500] transition-colors">SE Calgary</Link></li>
              <li><Link href="/#locations" className="hover:text-[#FF9500] transition-colors">Airdrie</Link></li>
              <li><Link href="/#locations" className="hover:text-[#FF9500] transition-colors">Chestermere</Link></li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/#how-it-works-heading" className="hover:text-[#FF9500] transition-colors">How It Works</Link></li>
              <li><Link href="/#guarantees-heading" className="hover:text-[#FF9500] transition-colors">Our Guarantee</Link></li>
              <li><Link href="/#testimonials-heading" className="hover:text-[#FF9500] transition-colors">Reviews</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#FF9500] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#FF9500] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Designed and Developed by <a href="https://bowrand.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF9500] transition-colors font-semibold underline underline-offset-4">Bowrand</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>

    {/* Uber-Style Mobile Sticky Action Bar */}
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-gray-200/50 sm:hidden z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] pb-safe" aria-label="Quick actions">
      <div className="px-4 py-3 flex items-center gap-3 max-w-md mx-auto">
        <a
          href="tel:+14035550199"
          aria-label="Call MR.Mech at (403) 555-0199"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-[15px] font-bold text-white bg-[#1D1D1F] rounded-2xl shadow-md active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
          <a
            href="/#callback-form"
            aria-label="Request a callback"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-[15px] font-bold text-white bg-[#FF9500] rounded-2xl shadow-md active:scale-95 transition-transform"
          >
            Request a Callback
          </a>
      </div>
    </nav>
    </>
  );
}
