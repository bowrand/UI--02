"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json());

function RepairCard({ job }: { job: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!job.images || job.images.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % job.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!job.images || job.images.length === 0) return;
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
      {/* Image Section */}
      <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
        {job.images && job.images[currentImageIndex] ? (
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
                {/* Dots indicator */}
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
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
            <span className="text-xs font-medium text-gray-500">No Image Available</span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-[#FF9500] mb-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={job.icon || "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"} />
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
            <span className="font-semibold text-gray-900">Issue:</span> {job.before}
          </div>
          <div className="flex items-start gap-2 text-gray-600 bg-green-50/50 p-2 rounded-lg border border-green-100/50">
            <span className="font-semibold text-gray-900">Result:</span> {job.after}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RecentRepairs() {
  const [visibleCount, setVisibleCount] = useState(3);
  const { data, error } = useSWR("/api/content", fetcher);

  if (error || !data) {
    return (
      <section className="w-full py-16 bg-white flex justify-center">
        <div className="animate-pulse text-gray-400">Loading recent repairs...</div>
      </section>
    );
  }

  const repairs = data.repairs || [];
  const displayedRepairs = repairs.slice(0, visibleCount);

  return (
    <section id="recent-repairs" className="w-full py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Recent <span className="text-[#FF9500]">Mobile Repairs</span>
            </h2>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence>
            {displayedRepairs.map((job: any) => (
              <RepairCard key={job.id} job={job} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < repairs.length && (
          <motion.div layout className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#1D1D1F] bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Show More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}