"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = ["TOYOTA", "HONDA", "FORD", "CHEVROLET", "BMW", "AUDI"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      mass: 0.5,
    },
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function BrandsMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="mt-16 sm:mt-24 pt-12 border-t border-gray-200/60 relative z-10"
    >
      <motion.p
        variants={headingVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10"
      >
        Proudly Servicing All Major Brands
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap justify-center items-center gap-8 sm:gap-14"
      >
        {brands.map((brand) => (
          <motion.div
            key={brand}
            variants={item}
            whileHover={{
              scale: 1.12,
              color: "#1D1D1F",
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            className="text-xl sm:text-2xl font-extrabold tracking-tighter text-gray-300 cursor-default select-none"
          >
            {brand}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
