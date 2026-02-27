"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceContentGridProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function ServiceContentGrid({ title, subtitle, items }: ServiceContentGridProps) {
  return (
    <section className="py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50/50 to-orange-50/50 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>

      <div className="text-center mb-16 sm:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1D1F] mb-6 tracking-tight"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl sm:text-2xl text-gray-500 max-w-3xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {items.map((item, index) => (
          <motion.article 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white/60 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-blue-50/0 group-hover:from-orange-50/50 group-hover:to-blue-50/50 transition-colors duration-500 -z-10"></div>
            
            <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 text-[#1D1D1F] rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-200/50 group-hover:scale-110 group-hover:text-[#FF9500] transition-all duration-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4 tracking-tight group-hover:text-[#FF9500] transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              {item.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
