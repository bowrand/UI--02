"use client";

import { useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you really come to my house?",
    answer: "Yes! We are a fully equipped mobile mechanic service. We come to your home, office, or wherever your car is parked in Calgary and surrounding areas.",
  },
  {
    question: "What kind of repairs can you do mobile?",
    answer: "We handle 85% of all car repairs on-site. This includes brakes, alternators, starters, batteries, diagnostics, suspension work, and regular maintenance. For major engine or transmission rebuilds, we can arrange a shop visit.",
  },
  {
    question: "Are your mechanics certified?",
    answer: "Absolutely. Our lead mechanic, David, is a Red Seal Certified technician with years of dealership and independent shop experience.",
  },
  {
    question: "How do you handle the mess?",
    answer: "We use specialized spill mats and environmentally friendly disposal methods. We guarantee to leave your driveway exactly as clean as we found it.",
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes, we stand behind our work with a 12-month / 20,000 km warranty on parts and labor for your peace of mind.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="w-full py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about our mobile service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-[#1D1D1F] pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="shrink-0 text-[#FF9500]"
                  aria-hidden="true"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
