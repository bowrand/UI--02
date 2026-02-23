"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const repairs = [
  {
    title: "Brake Pad Replacement",
    location: "NW Calgary",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    before: "Squeaking brakes",
    after: "Smooth, silent stopping",
    image: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    title: "Alternator Swap",
    location: "Downtown Office Parkade",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Car wouldn't start",
    after: "Running perfectly in 2 hrs",
    image: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    title: "Pre-Purchase Inspection",
    location: "SE Calgary",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    before: "Uncertain buyer",
    after: "Full 150-point report provided",
    image: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    title: "Battery Replacement",
    location: "SW Calgary",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Dead battery in winter",
    after: "Instant start, tested charging system",
    image: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    title: "Starter Motor Repair",
    location: "NE Calgary",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    before: "Clicking sound, no crank",
    after: "Reliable starts every time",
    image: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    title: "Serpentine Belt",
    location: "Airdrie",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    before: "Loud squealing noise",
    after: "Quiet engine operation",
    image: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
];

export default function RecentRepairs() {
  const [showAll, setShowAll] = useState(false);

  const displayedRepairs = showAll ? repairs : repairs.slice(0, 3);

  return (
    <section className="w-full bg-[#000000] py-20 sm:py-32 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF9500]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF5E3A]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Recent Mobile Repairs
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              Real jobs done right in Calgary driveways. See the difference a professional mobile mechanic makes.
            </p>
          </div>
          <a
            href="#callback-form"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-black bg-white rounded-full hover:bg-gray-200 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Book Your Repair
          </a>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedRepairs.map((job, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={job.title}
                className="group relative rounded-[2rem] overflow-hidden bg-[#1C1C1E] aspect-[4/3] border border-white/10 shadow-2xl flex flex-col cursor-pointer"
              >
                {/* Placeholder Image Background */}
                <div className={`absolute inset-0 ${job.image} flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}>
                  <svg className="w-16 h-16 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                {/* Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full z-10">
                  <div className="flex items-center gap-2 text-[#FF9500] mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={job.icon} />
                    </svg>
                    <span className="text-xs font-bold tracking-widest uppercase">{job.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-4">{job.title}</h3>
                  
                  {/* Before/After Micro-Case Study */}
                  <div className="flex flex-col gap-2.5 text-sm sm:text-base">
                    <div className="flex items-center gap-3 text-gray-300 bg-black/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                      <span className="font-medium text-gray-400">Issue:</span> {job.before}
                    </div>
                    <div className="flex items-center gap-3 text-white bg-black/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5">
                      <span className="w-2 h-2 rounded-full bg-[#34C759] shadow-[0_0_8px_rgba(52,199,89,0.6)]"></span>
                      <span className="font-medium text-gray-300">Result:</span> {job.after}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        <motion.div layout className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-3 bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-white/10 rounded-full text-white font-medium transition-all duration-300"
          >
            {showAll ? "Show Less" : "View More Cases"}
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
