"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiToyota,
  SiHonda,
  SiFord,
  SiChevrolet,
  SiBmw,
  SiAudi,
  SiMercedes,
  SiVolkswagen,
  SiHyundai,
  SiNissan,
  SiJeep,
  SiSubaru,
  SiKia,
  SiMazda,
} from "react-icons/si";

const brands = [
  { name: "Toyota", icon: SiToyota, color: "#EB0A1E" },
  { name: "Honda", icon: SiHonda, color: "#E40521" },
  { name: "Ford", icon: SiFord, color: "#003478" },
  { name: "Chevrolet", icon: SiChevrolet, color: "#CD9834" },
  { name: "BMW", icon: SiBmw, color: "#0066B1" },
  { name: "Audi", icon: SiAudi, color: "#000000" },
  { name: "Mercedes", icon: SiMercedes, color: "#000000" },
  { name: "Volkswagen", icon: SiVolkswagen, color: "#001E50" },
  { name: "Hyundai", icon: SiHyundai, color: "#002C5F" },
  { name: "Nissan", icon: SiNissan, color: "#C3002F" },
  { name: "Jeep", icon: SiJeep, color: "#FFBA00" },
  { name: "Subaru", icon: SiSubaru, color: "#013C74" },
  { name: "Kia", icon: SiKia, color: "#05141F" },
  { name: "Mazda", icon: SiMazda, color: "#101010" },
];

const row1 = brands.slice(0, 7);
const row2 = brands.slice(7, 14);

export default function BrandsMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      aria-labelledby="brands-heading"
      className="w-full bg-[#F5F5F7] py-16 sm:py-24 overflow-hidden relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <h2 id="brands-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
            Premium service for every make and model.
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-medium tracking-wide">
            Equipped with dealer-level diagnostic tools for all major brands.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-6 sm:gap-8 overflow-hidden group py-4" aria-hidden="true">
        {/* Gradient Masks for smooth fade in/out at edges */}
        <div className="absolute top-0 left-0 w-24 sm:w-40 h-full bg-gradient-to-r from-[#F5F5F7] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 sm:w-40 h-full bg-gradient-to-l from-[#F5F5F7] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 (Right to Left) */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* Duplicate the list 4 times to ensure seamless looping on ultra-wide screens */}
          {[...row1, ...row1, ...row1, ...row1].map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 mx-3 sm:mx-4 bg-white/40 backdrop-blur-xl rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white/60 group/brand cursor-pointer hover:bg-white/80 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <brand.icon 
                className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/brand:scale-110" 
                style={{ color: brand.color }} 
              />
              <span className="text-sm sm:text-base font-semibold tracking-tight text-gray-700 group-hover/brand:text-gray-900 transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 (Left to Right) */}
        <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2, ...row2].map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 mx-3 sm:mx-4 bg-white/40 backdrop-blur-xl rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white/60 group/brand cursor-pointer hover:bg-white/80 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <brand.icon 
                className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/brand:scale-110" 
                style={{ color: brand.color }} 
              />
              <span className="text-sm sm:text-base font-semibold tracking-tight text-gray-700 group-hover/brand:text-gray-900 transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
