"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const repairs = [
  {
    title: "Brake Pad Replacement",
    vehicle: "Personal Sedan",
    location: "NW Calgary",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    before: "Squeaking brakes",
    after: "Smooth, silent stopping",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hands working on car brake disc and caliper during repair"
  },
  {
    title: "Alternator Swap",
    vehicle: "Dually Work Van",
    location: "Downtown Office Parkade",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Van wouldn't start",
    after: "Running perfectly in 2 hrs",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mechanic hands working on engine alternator and belt components"
  },
  {
    title: "Pre-Purchase Inspection",
    vehicle: "Heavy Duty Ford F-350",
    location: "SE Calgary",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    before: "Uncertain buyer",
    after: "Full 150-point report provided",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "OBD diagnostic scanner plugged into a vehicle for inspection"
  },
  {
    title: "Starter Motor Repair",
    vehicle: "Family SUV",
    location: "SW Calgary",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    before: "Clicking sound, no crank",
    after: "Reliable starts every time",
    image: "https://images.unsplash.com/photo-1566206085505-2e0904c3e547?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Close-up of car engine internals and starter motor during repair"
  },
  {
    title: "Suspension Overhaul",
    vehicle: "Commercial Fleet Truck",
    location: "NE Calgary",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    before: "Rough ride, uneven wear",
    after: "Smooth handling restored",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Vehicle suspension system with shock absorber and spring assembly"
  },
  {
    title: "Battery Replacement",
    vehicle: "Compact Car",
    location: "Airdrie",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Dead battery in winter",
    after: "Instant start, tested charging",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Car engine bay with battery and wiring during replacement service"
  },
];

export default function RecentRepairs() {
  const [showAll, setShowAll] = useState(false);

  const displayedRepairs = showAll ? repairs : repairs.slice(0, 3);

  return (
    <section className="w-full bg-white py-10 sm:py-16 lg:py-20 border-b border-gray-100 overflow-hidden" aria-labelledby="repairs-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-6">
          <div className="space-y-4">
            <h2 id="repairs-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Recent Mobile Repairs
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              From personal cars to heavy-duty trucks. Real jobs done right in Calgary.
            </p>
          </div>
          <a
            href="#callback-form"
            className="text-[#FF9500] font-semibold hover:underline flex items-center gap-1 text-lg group"
          >
            Book Your Repair
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayedRepairs.map((job) => (
              <motion.div
                key={job.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="group flex flex-col sm:flex-row xl:flex-col bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 overflow-hidden"
              >
                {/* Image Section (Left Half on Desktop) */}
                <div className="relative w-full sm:w-2/5 xl:w-full aspect-[16/9] sm:aspect-auto xl:aspect-[16/9] bg-gray-100 overflow-hidden flex-shrink-0">
                  {/* Repair Photo */}
                  <img
                    src={job.image}
                    alt={job.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Vehicle Type Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-[#1D1D1F] shadow-sm border border-white/20">
                    {job.vehicle}
                  </div>
                </div>

                {/* Info Section (Right Half on Desktop) */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-center">
                  <div className="flex items-center gap-2 text-[#FF9500] mb-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={job.icon}
                      />
                    </svg>
                    <span className="text-xs font-bold tracking-wide uppercase">
                      {job.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] mb-4">
                    {job.title}
                  </h3>

                  {/* Before/After Micro-Case Study */}
                  <div className="flex flex-col gap-2.5 text-sm mt-auto">
                    <div className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-gray-900">Issue:</span> {job.before}
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] mt-1.5 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-gray-900">Result:</span> {job.after}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div layout className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-label={showAll ? "Show fewer repair cases" : "View more repair cases"}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-[#1D1D1F] bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">
              {showAll ? "Show Less" : "View More Cases"}
            </span>
            <svg
              className={`w-4 h-4 relative z-10 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
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
      </div>
    </section>
  );
}
