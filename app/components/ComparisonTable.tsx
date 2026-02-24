"use client";

import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Wait Time",
    dealership: "Days or Weeks",
    mrmech: "Same or Next Day",
  },
  {
    feature: "Convenience",
    dealership: "Drop off & find a ride",
    mrmech: "We come to your home/office",
  },
  {
    feature: "Pricing",
    dealership: "High overhead markups",
    mrmech: "Fair, transparent pricing",
  },
  {
    feature: "Transparency",
    dealership: "Talk to a service advisor",
    mrmech: "Talk directly to the mechanic",
  },
  {
    feature: "Quality",
    dealership: "Factory trained",
    mrmech: "Red Seal Certified",
  },
];

export default function ComparisonTable() {
  return (
    <section className="w-full py-8 sm:py-10 lg:py-14 bg-[#F5F5F7]" aria-labelledby="comparison-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="comparison-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4">
            Why Choose MR.Mech?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Skip the dealership hassle. Get premium service right in your driveway.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden" role="table" aria-label="Dealership vs MR.Mech comparison">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50/50 border-b border-gray-100 p-4 sm:p-6" role="row">
            <div className="font-semibold text-gray-500 text-sm sm:text-base" role="columnheader">Feature</div>
            <div className="font-semibold text-gray-500 text-sm sm:text-base text-center" role="columnheader">Dealership</div>
            <div className="font-bold text-[#1D1D1F] text-sm sm:text-base text-center flex items-center justify-center gap-2" role="columnheader">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34C759] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34C759]"></span>
              </span>
              MR.Mech
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-3 p-4 sm:p-6 items-center hover:bg-gray-50/50 transition-colors"
                role="row"
              >
                <div className="font-medium text-[#1D1D1F] text-sm sm:text-base" role="cell">{row.feature}</div>
                <div className="text-gray-500 text-sm sm:text-base text-center" role="cell">{row.dealership}</div>
                <div className="text-[#34C759] font-semibold text-sm sm:text-base text-center flex items-center justify-center gap-1.5" role="cell">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{row.mrmech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
