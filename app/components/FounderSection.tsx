"use client";

import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden" aria-labelledby="founder-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-100 relative">
              {/* Placeholder for David's Photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center" role="img" aria-label="Photo of David, founder and lead technician at MR.Mech">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#34C759]/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#34C759]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1D1D1F]">15+ Years Experience</p>
                  <p className="text-xs text-gray-500">Red Seal Certified</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 id="founder-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">
                Meet David.
              </h2>
              <p className="text-xl text-[#FF9500] font-medium">
                Your Personal Mobile Mechanic
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                "I started MR.Mech because I saw how frustrated people were with traditional repair shops. The long waits, the lack of transparency, and the inconvenience of dropping off your car."
              </p>
              <p>
                "My goal is simple: to provide dealership-quality repairs right in your driveway, with complete honesty and fair pricing. When you book with MR.Mech, you're not talking to a service advisor—you're talking directly to the mechanic working on your car."
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4">
                {/* Signature Placeholder */}
                <div className="font-[Brush_Script_MT,cursive] text-4xl text-[#1D1D1F] opacity-80">
                  David
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <p className="font-bold text-[#1D1D1F]">David</p>
                  <p className="text-sm text-gray-500">Founder & Lead Technician</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
