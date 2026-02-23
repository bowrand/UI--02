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
  { name: "Toyota", icon: SiToyota },
  { name: "Honda", icon: SiHonda },
  { name: "Ford", icon: SiFord },
  { name: "Chevrolet", icon: SiChevrolet },
  { name: "BMW", icon: SiBmw },
  { name: "Audi", icon: SiAudi },
  { name: "Mercedes", icon: SiMercedes },
  { name: "Volkswagen", icon: SiVolkswagen },
  { name: "Hyundai", icon: SiHyundai },
  { name: "Nissan", icon: SiNissan },
  { name: "Jeep", icon: SiJeep },
  { name: "Subaru", icon: SiSubaru },
  { name: "Kia", icon: SiKia },
  { name: "Mazda", icon: SiMazda },
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
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* Duplicate the list twice to ensure seamless looping */}
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center mx-6 sm:mx-10 min-w-[80px] sm:min-w-[100px] group/brand cursor-pointer"
            >
              <brand.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 group-hover/brand:text-[#1D1D1F] transition-colors duration-300" />
              <span className="mt-3 text-xs sm:text-sm font-semibold text-gray-400 group-hover/brand:text-[#1D1D1F] opacity-0 group-hover/brand:opacity-100 transition-all duration-300 translate-y-2 group-hover/brand:translate-y-0">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
