"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample data - in a real app, this would come from a CMS or the admin dashboard
const recentWorks = [
  { id: 1, src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop", alt: "Engine Repair", note: "Complete engine diagnostic and repair in NW Calgary.", width: 400, height: 300 },
  { id: 2, src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=600&auto=format&fit=crop", alt: "Brake Replacement", note: "Front and rear brake pad replacement.", width: 300, height: 400 },
  { id: 3, src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop", alt: "Oil Change", note: "Synthetic oil change done in the driveway.", width: 500, height: 300 },
  { id: 4, src: "https://images.unsplash.com/photo-1503376713356-208390a641d4?q=80&w=600&auto=format&fit=crop", alt: "Battery Jump", note: "Emergency battery replacement at a downtown office.", width: 300, height: 300 },
  { id: 5, src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop", alt: "Tire Change", note: "Seasonal tire swap and balancing.", width: 450, height: 350 },
];

// Duplicate the array to create a seamless loop
const marqueeItems = [...recentWorks, ...recentWorks];

export default function RecentWorkMarquee() {
  const [isHovered, setIsHovered] = useState(false);

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
        {/* Left/Right Gradient Fades for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 40, // Adjustable speed
            repeat: Infinity,
          }}
          style={{
            // Pause animation on hover for better UX
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {marqueeItems.map((work, index) => (
            <div
              key={`${work.id}-${index}`}
              className="relative group shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-white"
              style={{
                width: Math.max(250, work.width * 0.8), // Responsive sizing
                height: Math.max(200, work.height * 0.8),
              }}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 250px, 400px"
              />
              
              {/* Hover/Tap Overlay */}
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
