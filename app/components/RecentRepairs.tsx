"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const repairs = [
  {
    title: "Brake Pad Replacement",
    vehicle: "Personal Sedan",
    location: "NW Calgary",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    before: "Squeaking brakes",
    after: "Smooth, silent stopping",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "Alternator Swap",
    vehicle: "Dually Work Van",
    location: "Downtown Office Parkade",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Van wouldn't start",
    after: "Running perfectly in 2 hrs",
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Pre-Purchase Inspection",
    vehicle: "Heavy Duty Ford F-350",
    location: "SE Calgary",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    before: "Uncertain buyer",
    after: "Full 150-point report provided",
    images: [
      "https://images.unsplash.com/photo-1503376713356-208390a641d4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    title: "Starter Motor Repair",
    vehicle: "Family SUV",
    location: "SW Calgary",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    before: "Clicking sound, no crank",
    after: "Reliable starts every time",
    images: [
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "Suspension Overhaul",
    vehicle: "Commercial Fleet Truck",
    location: "NE Calgary",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    before: "Rough ride, uneven wear",
    after: "Smooth handling restored",
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376713356-208390a641d4?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    title: "Battery Replacement",
    vehicle: "Compact Car",
    location: "Airdrie",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Dead battery in winter",
    after: "Instant start, tested charging",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"
    ]
  },
];

function RepairCard({ job }: { job: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % job.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + job.images.length) % job.images.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 overflow-hidden"
    >
      {/* Image Section (Carousel without scrollbars) */}
      <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
        {job.images && job.images.length > 0 ? (
          <>
            <Image
              src={job.images[currentImageIndex]}
              alt={`${job.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Vehicle Type Badge */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1D1D1F] shadow-sm uppercase tracking-wide z-10">
              {job.vehicle}
            </div>

            {/* Navigation Arrows */}
            {job.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-md p-2.5 rounded-full shadow-md text-gray-900 transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-md p-2.5 rounded-full shadow-md text-gray-900 transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/20 backdrop-blur-md px-2.5 py-1.5 rounded-full">
                  {job.images.map((_: any, idx: number) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "bg-white scale-110" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[11px] sm:text-xs font-medium text-gray-500">No Image Available</span>
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1D1D1F] shadow-sm uppercase tracking-wide z-10">
              {job.vehicle}
            </div>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-[#FF9500] mb-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={job.icon} />
          </svg>
          <span className="text-[10px] font-bold tracking-wide uppercase">
            {job.location}
          </span>
        </div>
        
        <h3 className="text-base font-bold tracking-tight text-[#1D1D1F] mb-3">
          {job.title}
        </h3>

        {/* Before/After Micro-Case Study */}
        <div className="flex flex-col gap-1.5 text-xs mt-auto">
          <div className="flex items-start gap-2 text-gray-600 bg-red-50/50 p-2 rounded-lg border border-red-100/50">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
            <div>
              <span className="font-semibold text-gray-900">Issue:</span> {job.before}
            </div>
          </div>
          <div className="flex items-start gap-2 text-gray-600 bg-green-50/50 p-2 rounded-lg border border-green-100/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] mt-1 flex-shrink-0 shadow-[0_0_8px_rgba(52,199,89,0.5)]"></span>
            <div>
              <span className="font-semibold text-gray-900">Result:</span> {job.after}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RecentRepairs() {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    // Set initial count based on screen size (3 for mobile, 5 for desktop)
    setVisibleCount(window.innerWidth < 768 ? 3 : 5);
  }, []);

  const displayedRepairs = repairs.slice(0, visibleCount);

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
              Recent Mobile Repairs
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              From personal cars to heavy-duty trucks. Real jobs done right in Calgary.
            </p>
          </div>
          <a
            href="#callback-form"
            className="text-[#FF9500] font-semibold hover:underline flex items-center gap-1 text-base group"
          >
            Book Your Repair
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {displayedRepairs.map((job) => (
              <RepairCard key={job.title} job={job} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < repairs.length && (
          <motion.div layout className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#1D1D1F] bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">
                Show More
              </span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
