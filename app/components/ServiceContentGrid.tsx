"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface ContentItem {
  title: string;
  /** Short teaser shown under the title */
  description: string;
  /** Optional rich body rendered below description (paragraphs, inline icons, lists) */
  body?: ReactNode;
  /** Optional bullet points shown as a styled list */
  bullets?: string[];
  icon: ReactNode;
  /** When true, card spans full width (use for featured items) */
  featured?: boolean;
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
            whileHover={{ y: -8 }}
            className={`group relative bg-white/70 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 hover:shadow-[0_24px_50px_rgb(0,0,0,0.09)] transition-all duration-500 overflow-hidden flex flex-col h-full${
              item.featured ? ' md:col-span-2 lg:col-span-3' : ''
            }`}
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-transparent to-blue-50/0 group-hover:from-orange-50/60 group-hover:to-blue-50/40 transition-colors duration-500 -z-10 rounded-[2rem]"></div>
            
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 text-[#FF9500] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-orange-100"
            >
              {item.icon}
            </motion.div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-3 tracking-tight group-hover:text-[#FF9500] transition-colors duration-300 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[1.05rem] mb-4">
              {item.description}
            </p>

            {/* Optional rich body */}
            {item.body && (
              <div className="text-gray-600 leading-relaxed text-[1.05rem] space-y-3 mb-4">
                {item.body}
              </div>
            )}

            {/* Optional bullet list */}
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-2 space-y-2 flex-grow">
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-gray-600 text-sm sm:text-[0.97rem]">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#FF9500]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* Decorative bottom accent line */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#FF9500] to-[#FF5E3A] group-hover:w-full transition-all duration-700 ease-out rounded-full"></div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
