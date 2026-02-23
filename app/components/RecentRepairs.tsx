"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const repairs = [
  { 
    title: "Brake Pad Replacement", 
    location: "NW Calgary", 
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", 
    before: "Squeaking brakes", 
    after: "Smooth, silent stopping", 
    color: "from-blue-500/30 to-purple-500/30" 
  },
  { 
    title: "Alternator Swap", 
    location: "Downtown Office", 
    icon: "M13 10V3L4 14h7v7l9-11h-7z", 
    before: "Car wouldn't start", 
    after: "Running perfectly in 2 hrs", 
    color: "from-orange-500/30 to-red-500/30" 
  },
  { 
    title: "Pre-Purchase Inspection", 
    location: "SE Calgary", 
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", 
    before: "Uncertain buyer", 
    after: "Full 150-point report", 
    color: "from-green-500/30 to-emerald-500/30" 
  },
  { 
    title: "Battery Replacement", 
    location: "SW Calgary", 
    icon: "M13 10V3L4 14h7v7l9-11h-7z", 
    before: "Dead in driveway", 
    after: "Instant start, tested system", 
    color: "from-yellow-500/30 to-orange-500/30" 
  },
  { 
    title: "Check Engine Light", 
    location: "Airdrie", 
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", 
    before: "Misfire codes", 
    after: "New spark plugs & coils", 
    color: "from-pink-500/30 to-rose-500/30" 
  },
  { 
    title: "Starter Motor", 
    location: "Chestermere", 
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", 
    before: "Clicking noise", 
    after: "Fired up immediately", 
    color: "from-cyan-500/30 to-blue-500/30" 
  }
];

export default function RecentRepairs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-[#0A0A0A] py-20 sm:py-32 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9500] to-[#FF5E3A] blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-20 gap-6"
        >
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Recent Mobile Repairs.
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-medium">
              Real jobs done right in Calgary driveways. Swipe to see the difference.
            </p>
          </div>
          <a href="#callback-form" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 group">
            Book Your Repair
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
        
      {/* Horizontal Scroll Carousel */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 max-w-[100vw]"
      >
        {/* Spacer for initial alignment on large screens */}
        <div className="hidden lg:block min-w-[calc((100vw-80rem)/2)] shrink-0"></div>
        
        {repairs.map((job, i) => (
          <div key={i} className="snap-center shrink-0 w-[85vw] sm:w-[400px] h-[480px] rounded-[2.5rem] bg-[#151515] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors duration-500 flex flex-col">
            {/* Glowing Orb Background */}
            <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${job.color} blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 ease-out opacity-50`}></div>
            
            <div className="p-8 flex flex-col h-full relative z-10">
              {/* Top Badge */}
              <div className="flex justify-between items-start mb-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <svg className="w-4 h-4 text-[#FF9500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs font-bold tracking-wide text-white/80 uppercase">{job.location}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-colors">
                  <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={job.icon} />
                  </svg>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  {job.title}
                </h3>
                
                {/* Before/After Bento Box */}
                <div className="grid grid-rows-2 gap-2">
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-white/5 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-0.5">Issue</p>
                      <p className="text-sm font-medium text-white/90">{job.before}</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-white/5 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#34C759]/20 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#34C759]"></div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-0.5">Result</p>
                      <p className="text-sm font-medium text-white/90">{job.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Spacer for end alignment */}
        <div className="hidden lg:block min-w-[calc((100vw-80rem)/2)] shrink-0"></div>
      </motion.div>
    </section>
  );
}
