import Script from "next/script";
import BrandsMarquee from "./components/BrandsMarquee";
import ComparisonTable from "./components/ComparisonTable";
import FAQAccordion from "./components/FAQAccordion";
import FounderSection from "./components/FounderSection";
import RecentRepairs from "./components/RecentRepairs";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "MR.Mech",
    "image": "https://mrmech.ca/logo.png", // Placeholder
    "@id": "https://mrmech.ca",
    "url": "https://mrmech.ca",
    "telephone": "+1-403-555-0199", // Placeholder Calgary number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mobile Service",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "postalCode": "T2P",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.0447,
      "longitude": -114.0719
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-sm" role="banner">
        {/* Top Announcement Bar (Urgency/Scarcity) */}
        <div className="w-full bg-[#1D1D1F] text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium tracking-wide" role="status" aria-live="polite">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34C759] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34C759]"></span>
            </span>
            Currently accepting new clients in Calgary for {new Date().toLocaleString('default', { month: 'long' })}. <span className="hidden sm:inline">Limited same-day slots available.</span>
          </span>
        </div>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">
          <div className="flex items-center gap-2">
            <a href="/" aria-label="MR.Mech — Home">
              <span className="text-2xl font-bold tracking-tight text-[#1D1D1F]">MR.Mech</span>
            </a>
          </div>
          <div className="hidden sm:block">
            <a
              href="tel:+14035550199"
              aria-label="Call MR.Mech at (403) 555-0199"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#FF9500] rounded-full hover:bg-[#E58600] transition-colors shadow-sm"
            >
              Call Now: (403) 555-0199
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content" className="flex flex-col items-center w-full overflow-hidden">
        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 text-center sm:text-left flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
          {/* Subtle Technical Background Pattern */}
          <div className="absolute inset-0 -z-20 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(#1D1D1F 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="flex-1 space-y-6 sm:space-y-8 relative z-10 flex flex-col items-center sm:items-start">
            
            {/* Top Trust Signals (Moved up for immediate mobile impact) */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
              <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white shadow-sm border border-gray-100 overflow-hidden group cursor-default hover:-translate-y-0.5 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-shimmer z-10"></div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#34C759] animate-pulse relative z-20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-bold text-gray-800 relative z-20">Red Seal Certified</span>
              </div>
              
              <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-orange-100 hover:-translate-y-0.5 transition-transform duration-300 cursor-default">
                <div className="flex text-[#FF9500]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-orange-900">50+ 5-Star Reviews</span>
              </div>
            </div>
            
            {/* Live Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34C759]/10 border border-[#34C759]/20 animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34C759] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34C759]"></span>
              </span>
              <span className="text-sm font-semibold text-[#248A3D]">Available Today in Calgary</span>
            </div>

            <h1 id="hero-heading" className="text-[2.75rem] sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-[#1D1D1F] leading-[1.05] sm:leading-[1.05] text-center sm:text-left animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Calgary's Trusted <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#FF9500] to-[#FF5E3A] bg-clip-text text-transparent">Mobile Mechanic.</span>
            </h1>
            
            <p className="text-[1.1rem] sm:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed sm:leading-normal font-medium text-center sm:text-left animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
              We fix your car at your home or workplace. Fully certified, transparent pricing, zero hassle. Let MR.Mech come to you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-6 w-full max-w-md sm:max-w-none mx-auto sm:mx-0 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              <div className="relative w-full sm:w-auto group">
                <div className="absolute inset-0 bg-[#FF9500] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <a
                  href="tel:+14035550199"
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-5 text-lg font-bold text-white bg-[#FF9500] rounded-full hover:bg-[#E58600] active:scale-95 transition-all shadow-[0_8px_30px_rgb(255,149,0,0.25)] hover:shadow-[0_12px_40px_rgb(255,149,0,0.4)] min-h-[56px] sm:min-w-[240px]"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call MR.Mech Now
                </a>
              </div>
              <a
                href="#callback-form"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-5 text-lg font-semibold text-gray-700 bg-gray-100 border border-transparent rounded-full hover:bg-gray-200 active:scale-95 transition-all min-h-[56px] sm:min-w-[240px]"
              >
                Request a Callback
              </a>
            </div>
            
            {/* Social Proof Avatars (Simplified for mobile) */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2 w-full animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/100?img=1" alt="Satisfied customer photo" width="40" height="40" loading="lazy" />
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/100?img=2" alt="Satisfied customer photo" width="40" height="40" loading="lazy" />
                <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 object-cover shadow-sm" src="https://i.pravatar.cc/100?img=3" alt="Satisfied customer photo" width="40" height="40" loading="lazy" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-500">Trusted by 500+ Calgary drivers</span>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md relative z-10 animate-[fadeIn_1.2s_ease-out_0.3s_both]" aria-hidden="true">
            <div className="aspect-[4/3] bg-gradient-to-br from-white to-gray-50 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 relative flex items-center justify-center group">
              {/* Dynamic SVG Illustration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FF9500_0%,transparent_40%)] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background Gear */}
                <svg className="absolute w-64 h-64 text-gray-100 animate-[spin_20s_linear_infinite]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
                
                {/* Floating Car & Wrench */}
                <div className="relative z-10 animate-float flex flex-col items-center">
                  <svg className="w-32 h-32 text-[#1D1D1F] drop-shadow-xl" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <svg className="w-16 h-16 text-[#FF9500] absolute -bottom-4 -right-4 drop-shadow-lg transform rotate-45 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Decorative blur behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF9500]/20 to-[#FF5E3A]/20 blur-3xl -z-10 rounded-full animate-pulse-slow"></div>
          </div>
        </section>

        {/* How It Works Section (Frictionless Process) */}
        <section aria-labelledby="how-it-works-heading" className="w-full bg-[#1D1D1F] py-16 sm:py-24 lg:py-32 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12 sm:mb-20">
              <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">How It Works</h2>
              <p className="text-lg sm:text-xl text-gray-400">Three simple steps to get you back on the road.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 sm:gap-16 relative">
              {/* Connecting Line (Desktop only) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent" aria-hidden="true"></div>
              
              {[
                { step: "01", title: "Request a Quote", desc: "Call or fill out the form. Get a transparent, upfront price with no hidden fees." },
                { step: "02", title: "MR.Mech Arrives", desc: "We come to your home or office in Calgary fully equipped to handle the repair." },
                { step: "03", title: "You Drive", desc: "Pay only when the job is done right. Backed by a 12-month warranty." }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center space-y-5 group">
                  {/* Hover Glow Effect */}
                  <div className="absolute top-0 w-32 h-32 bg-[#FF9500]/0 group-hover:bg-[#FF9500]/20 blur-2xl rounded-full transition-all duration-500 -z-10"></div>
                  
                  <div className="w-24 h-24 rounded-full bg-[#2C2C2E] border-4 border-[#1D1D1F] flex items-center justify-center text-2xl font-bold text-[#FF9500] shadow-xl relative z-10 group-hover:scale-110 group-hover:border-[#FF9500]/30 transition-all duration-500 ease-out">
                    {item.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-[#FF9500] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-xs text-base sm:text-lg group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mid-Page CTA — catches users at peak intent after seeing how easy the process is */}
            <div className="mt-16 sm:mt-20 text-center animate-[fadeInUp_0.8s_ease-out_both]">
              <a
                href="#callback-form"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#FF9500] rounded-full hover:bg-[#E58600] active:scale-95 transition-all shadow-[0_4px_20px_rgb(255,149,0,0.2)] hover:shadow-[0_8px_30px_rgb(255,149,0,0.35)]"
              >
                Get Your Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <p className="mt-4 text-sm text-gray-400">No obligation. Average response under 15 minutes.</p>
            </div>
          </div>
        </section>

        <RecentRepairs />

        <BrandsMarquee />

        <ComparisonTable />

        <FounderSection />

        {/* Guarantees & Certifications (Authority Bias) */}
        <section aria-labelledby="guarantees-heading" className="relative w-full bg-[#F5F5F7] py-16 sm:py-24 lg:py-32 border-b border-gray-200 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center space-y-4 mb-12 sm:mb-20 flex flex-col items-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-[#34C759] font-bold text-sm mb-2 animate-[fadeInUp_0.8s_ease-out_both]">
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                100% Satisfaction Promise
              </div>
              <h2 id="guarantees-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D1D1F] animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
                The MR.Mech Guarantee
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]">Your vehicle is in the hands of a certified professional.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "Red Seal Certified", desc: "Alberta Journeyman certified. The highest standard of automotive repair in Canada.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", delay: "0.3s" },
                { title: "12-Month Warranty", desc: "Every repair is backed by a 12-month or 20,000km warranty on parts and labor.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", delay: "0.4s" },
                { title: "Fully Insured", desc: "Covered by $2M commercial liability insurance. Your property is completely protected.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", delay: "0.5s" }
              ].map((guarantee, i) => (
                <div key={i} className={`group relative bg-white p-8 sm:p-10 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center space-y-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 overflow-hidden animate-[fadeInUp_0.8s_ease-out_both]`} style={{ animationDelay: guarantee.delay }}>
                  
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-50 group-hover:bg-white flex items-center justify-center text-gray-800 group-hover:text-[#34C759] transition-all duration-500 mb-2 group-hover:shadow-sm border border-transparent group-hover:border-gray-100">
                    {/* Rotating dashed ring on hover */}
                    <svg className="absolute inset-0 w-full h-full text-[#34C759] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_10s_linear_infinite] transition-opacity duration-500" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
                    </svg>
                    
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d={guarantee.icon} 
                        pathLength="100"
                        strokeDasharray="100"
                        className="group-hover:animate-draw"
                      />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F] relative z-10 group-hover:text-[#34C759] transition-colors duration-300">{guarantee.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg relative z-10">{guarantee.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-heading" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center space-y-4 mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9500]/10 text-[#FF9500] font-semibold text-sm mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              4.9/5 Average Rating
            </div>
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">Trusted by Calgary Drivers</h2>
            <p className="text-lg sm:text-xl text-gray-600">Don't just take my word for it.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Sarah M.", location: "NW Calgary", text: "David saved me a trip to the shop and fixed my brakes in my driveway while I worked from home. Incredibly professional and honest.", time: "2 weeks ago" },
              { name: "James T.", location: "Downtown Calgary", text: "My car wouldn't start in the office parkade. David arrived within the hour, diagnosed the alternator, and had me running by 5 PM. Lifesaver.", time: "1 month ago" },
              { name: "Elena R.", location: "SE Calgary", text: "Finally, a mechanic who explains things clearly without upselling. The pricing was exactly as quoted. Highly recommend MR.Mech!", time: "3 months ago" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between space-y-8 hover:shadow-xl hover:border-[#FF9500]/30 transition-all duration-500 relative">
                {/* Verified Badge */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-1 text-xs font-bold text-[#34C759] bg-[#34C759]/10 px-3 py-1.5 rounded-lg">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Verified
                </div>
                
                <div className="flex text-[#FF9500]">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed text-base sm:text-lg">
                <q>{review.text}</q>
              </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold tracking-tight text-[#1D1D1F]">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-400">{review.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mid-Page CTA — after testimonials, users are at peak trust */}
          <div className="mt-12 sm:mt-16 text-center">
            <a
              href="#callback-form"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#FF9500] rounded-full hover:bg-[#E58600] active:scale-95 transition-all shadow-[0_4px_20px_rgb(255,149,0,0.2)] hover:shadow-[0_8px_30px_rgb(255,149,0,0.35)]"
            >
              Book Your Repair Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </section>

        <FAQAccordion />

        {/* Final CTA Section (Scarcity & Urgency) */}
        <section aria-labelledby="final-cta-heading" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="bg-[#1C1C1E] border border-white/10 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 lg:p-20 text-center shadow-2xl relative overflow-hidden">
            {/* Sophisticated Apple-style Glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF9500]/15 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 space-y-8 sm:space-y-10">
              <h2 id="final-cta-heading" className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white/90 leading-tight sm:leading-[1.1]">
                Ready to Get Back on the Road?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
                Skip the tow truck and the waiting room. Get a certified mechanic at your door — <span className="text-[#FF9500] font-semibold">same-day appointments available.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6">
                <a href="#callback-form" className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-[#FF9500] text-white rounded-full font-semibold text-lg hover:bg-[#E58600] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 min-h-[56px]">
                  Claim Your Spot Now
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="tel:+14035550199" className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-white/5 hover:bg-white/10 backdrop-blur-2xl text-white/90 rounded-full font-semibold text-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 border border-white/10 min-h-[56px]">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call (403) 555-0199
                </a>
              </div>
              <p className="text-sm sm:text-base text-white/40 mt-4 font-medium">No credit card required to book. Pay only when the job is done.</p>
            </div>
          </div>
        </section>

        {/* Conversion Section (The Form) */}
        <section id="callback-form" aria-labelledby="form-heading" className="relative w-full bg-white py-16 sm:py-24 lg:py-32 border-t border-gray-100 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#FF9500]/5 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-gray-100 to-transparent pointer-events-none"></div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-100 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Form Inner Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF9500]/20 blur-3xl rounded-full pointer-events-none"></div>
              
              {/* Left Side: Trust & Contact Info */}
              <div className="w-full lg:w-5/12 space-y-8 sm:space-y-10 relative z-10">
                <div className="space-y-4 sm:space-y-5">
                  <h2 id="form-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">Let's Get You Back on the Road.</h2>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">Fill out the form, and I'll call you back within 15 minutes to discuss your car's needs.</p>
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF9500]/10 flex items-center justify-center text-[#FF9500] shrink-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-500 font-medium">Direct Line</p>
                      <a href="tel:+14035550199" className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F] hover:text-[#FF9500] transition-colors">(403) 555-0199</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF9500]/10 flex items-center justify-center text-[#FF9500] shrink-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-500 font-medium">Email</p>
                      <a href="mailto:david@mrmech.ca" className="text-lg sm:text-xl font-bold tracking-tight text-[#1D1D1F] hover:text-[#FF9500] transition-colors">david@mrmech.ca</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF9500]/10 flex items-center justify-center text-[#FF9500] shrink-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-500 font-medium">Hours</p>
                      <p className="text-lg sm:text-xl font-bold tracking-tight text-[#1D1D1F]">Mon-Sat: 8am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side: The Form */}
              <div className="w-full lg:w-7/12 relative z-10">
                <form className="space-y-6 sm:space-y-8 bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-gray-100" action="#" aria-label="Request a callback">
                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2 sm:space-y-3">
                      <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        autoComplete="name"
                        className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FF9500] focus:border-transparent outline-none transition-all text-base sm:text-lg min-h-[56px]"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        autoComplete="tel"
                        className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FF9500] focus:border-transparent outline-none transition-all text-base sm:text-lg min-h-[56px]"
                        placeholder="(403) 555-0000"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label htmlFor="issue" className="block text-sm sm:text-base font-medium text-gray-700">What's going on with your car?</label>
                    <textarea 
                      id="issue" 
                      name="issue"
                      rows={4}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FF9500] focus:border-transparent outline-none transition-all resize-none text-base sm:text-lg"
                      placeholder="E.g., Brakes are squeaking, won't start, check engine light is on..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 sm:py-5 text-lg sm:text-xl font-semibold text-white bg-[#FF9500] rounded-2xl hover:bg-[#E58600] transition-colors shadow-md flex items-center justify-center gap-2 min-h-[56px]"
                  >
                    Get My Free Quote Now
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                  
                  {/* Trust Signals Under Form */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      Your information is secure
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#34C759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Average response: under 15 min
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1D1D1F] text-white py-12 pb-32 sm:pb-12" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-tight">MR.Mech</span>
            <p className="text-gray-400 mt-2 text-sm">Calgary's Premier Mobile Auto Repair</p>
          </div>
          
          <div className="text-center md:text-right text-sm text-gray-400 space-y-1">
            <p>Service Area: Calgary, Alberta & Surrounding Areas</p>
            <p className="mt-4">
              <a href="https://www.bowrand.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">&copy; {new Date().getFullYear()} Bowrand. All rights reserved.</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Uber-Style Mobile Sticky Action Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-gray-200/50 sm:hidden z-50 shadow-[0_-20px_40px_rgba(0,0,0,0.08)] pb-safe" aria-label="Quick actions">
        <div className="px-4 py-3 flex items-center gap-3">
          <a
            href="tel:+14035550199"
            aria-label="Call MR.Mech at (403) 555-0199"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-base font-semibold text-white bg-[#1D1D1F] rounded-2xl shadow-md active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call MR.Mech
          </a>
          <a
            href="#callback-form"
            aria-label="Get a free quote"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-base font-semibold text-[#FF9500] bg-[#FF9500]/10 rounded-2xl active:scale-95 transition-transform border border-[#FF9500]/20"
          >
            Get Quote
          </a>
        </div>
      </nav>
    </>
  );
}
