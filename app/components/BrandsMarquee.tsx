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

export default function BrandsMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="w-full bg-[#F9FAFB] py-12 sm:py-16 border-b border-gray-100 overflow-hidden relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest"
        >
          Trusted to service all major makes & models
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks for smooth fade in/out at edges */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] py-4">
          {/* Duplicate the list twice to ensure seamless looping */}
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 px-6 py-3 mx-3 sm:mx-4 bg-white rounded-full shadow-sm border border-gray-100 group/brand cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <brand.icon 
                className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover/brand:scale-110" 
                style={{ color: brand.color }} 
              />
              <span className="text-sm sm:text-base font-bold text-gray-700 group-hover/brand:text-gray-900">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
