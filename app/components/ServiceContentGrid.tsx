"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface ContentItem {
  title: string;
  /** Short teaser shown under the title */
  description: string;
  /** Optional rich body rendered below description */
  body?: ReactNode;
  /** Optional bullet points shown as a styled checklist */
  bullets?: string[];
  icon: ReactNode;
  /** Kept for backwards compatibility — no longer changes layout */
  featured?: boolean;
}

interface ServiceContentGridProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
}

export default function ServiceContentGrid({ title, subtitle, items }: ServiceContentGridProps) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 sm:mb-14"
        >
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#FF9500] mb-3">Service Guide</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight mb-3 leading-snug">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal max-w-xl">
            {subtitle}
          </p>
        </motion.div>

        {/* Article list */}
        <div className="divide-y divide-gray-100">
          {items.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="py-8 sm:py-10 flex flex-col sm:flex-row gap-5 sm:gap-8"
            >
              {/* Icon column */}
              <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-50 to-orange-100 text-[#FF9500] rounded-2xl flex items-center justify-center shadow-sm border border-orange-100 shrink-0">
                  <div className="scale-[1.35] transform-gpu">{item.icon}</div>
                </div>
                <span className="text-[11px] font-bold text-gray-300 tracking-widest sm:mt-1 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content column */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] leading-snug mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] sm:text-base text-gray-500 leading-relaxed mb-3">
                  {item.description}
                </p>

                {item.body && (
                  <div className="text-[0.95rem] sm:text-base text-gray-600 leading-relaxed space-y-2 mb-3">
                    {item.body}
                  </div>
                )}

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="space-y-2 mt-3">
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-[0.9rem] sm:text-[0.95rem] text-gray-600">
                        <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-[#FF9500]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4"
        >
          <p className="text-sm text-gray-500 text-center sm:text-left">
            Have a question? Our Red Seal mechanic is one call away.
          </p>
          <a
            href="tel:+14035550199"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF9500] text-white text-sm font-bold rounded-full hover:bg-[#E58600] active:scale-95 transition-all shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call MR.MECH
          </a>
        </motion.div>

      </div>
    </section>
  );
}
