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
  },
  {
    title: "Alternator Swap",
    location: "Downtown Office Parkade",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Car wouldn't start",
    after: "Running perfectly in 2 hrs",
  },
  {
    title: "Pre-Purchase Inspection",
    location: "SE Calgary",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    before: "Uncertain buyer",
    after: "Full 150-point report provided",
  },
  {
    title: "Battery Replacement",
    location: "SW Calgary",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Dead battery in winter",
    after: "Instant start, tested charging system",
  },
  {
    title: "Starter Motor Repair",
    location: "NE Calgary",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    before: "Clicking sound, no crank",
    after: "Reliable starts every time",
  },
  {
    title: "Serpentine Belt",
    location: "Airdrie",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    before: "Loud squealing from engine",
    after: "Quiet operation, restored power steering",
  },
];

export default function RecentRepairs() {
  const [showAll, setShowAll] = useState(false);

  const displayedRepairs = showAll ? repairs : repairs.slice(0, 3);

  return (
    <section className="w-full bg-[#0A0A0A] py-20 sm:py-32 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF9500]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34C759]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Recent Mobile Repairs
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Real jobs done right in Calgary driveways.
            </p>
          </div>
          <a
            href="#callback-form"
            className="text-[#FF9500] font-semibold hover:text-[#E58600] transition-colors flex items-center gap-1 text-lg group"
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayedRepairs.map((job, i) => (
              <motion.div
                key={job.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="group relative rounded-[2rem] overflow-hidden bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl aspect-[4/3] flex flex-col hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500"
              >
                {/* Placeholder Image Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-white/[0.05] flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                  <svg
                    className="w-16 h-16 text-white/10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                  <div className="flex items-center gap-2 text-[#FF9500] mb-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={job.icon}
                      />
                    </svg>
                    <span className="text-xs font-bold tracking-wider uppercase text-[#FF9500]/90">
                      {job.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">
                    {job.title}
                  </h3>

                  {/* Before/After Micro-Case Study */}
                  <div className="flex flex-col gap-2.5 text-sm sm:text-base">
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                      <span className="font-medium text-gray-500">Issue:</span>{" "}
                      {job.before}
                    </div>
                    <div className="flex items-center gap-3 text-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_8px_rgba(52,199,89,0.5)]"></span>
                      <span className="font-medium text-gray-400">Result:</span>{" "}
                      {job.after}
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
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
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
