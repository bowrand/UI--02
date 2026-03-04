"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function RecentWorkMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const { data, error } = useSWR("/api/content", fetcher);

  if (error || !data) {
    return (
      <section className="w-full py-12 sm:py-16 bg-[#F5F5F7] flex justify-center">
        <div className="animate-pulse text-gray-400">Loading recent work...</div>
      </section>
    );
  }

  const recentWorks = data.recentWorks || [];
  if (recentWorks.length === 0) return null;

  // Duplicate the array to create a seamless loop
  const marqueeItems = [...recentWorks, ...recentWorks, ...recentWorks];

  return (
    <section id="recent-work" className="w-full py-12 sm:py-16 overflow-hidden bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
          Recent Work in Action
        </h3>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Real repairs, real customers. Tap or hover to see details.
        </p>
      </div>

      <div 
        className="relative w-full flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left/Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
        >
          {marqueeItems.map((work, index) => (
            <div
              key={`${work.id}-${index}`}
              className="relative group shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-white"
              style={{
                width: Math.max(250, (work.width || 400) * 0.8),
                height: Math.max(200, (work.height || 300) * 0.8),
              }}
            >
              <Image
                src={work.src}
                alt={work.alt || "Recent Job Image"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 250px, 400px"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 group-active:bg-black/50 transition-colors duration-300 flex items-end p-4 sm:p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 transition-all duration-300 w-full">
                  <div className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg">
                    <p className="text-sm sm:text-base font-semibold text-[#1D1D1F] leading-tight">
                      {work.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}