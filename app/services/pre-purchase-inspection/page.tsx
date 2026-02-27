import { Metadata } from "next";
import ServiceContentGrid from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Pre-Purchase Car Inspection Calgary | MR.Mech",
  description: "Buying a used car? Get a comprehensive 150-point mobile pre-purchase inspection by a Red Seal mechanic in Calgary before you buy. Avoid lemons!",
};

const inspectionContent = [
  {
    title: "The #1 mistake Calgary used car buyers make",
    description: "The biggest mistake is trusting a fresh car wash and a smooth test drive. Many sellers clear the 'Check Engine' light right before you arrive. Without a professional OBD2 scanner and a trained eye looking for hidden rust, oil leaks, or suspension damage caused by Calgary potholes, you could be buying a money pit.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  },
  {
    title: "What does a mobile pre-purchase inspection cover?",
    description: "We meet you at the seller's location (anywhere in Calgary or up to 30km outside the city). We perform a comprehensive 150-point check: testing the battery, alternator, brakes, fluid conditions, belts, hoses, and scanning the computer for hidden codes. We provide you with a detailed, unbiased report on the spot.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "How to negotiate a better price using our report",
    description: "An inspection pays for itself. If we find that the car needs $600 in brake work and a new battery, you can use our official Red Seal mechanic report to negotiate the asking price down. If the seller refuses, you walk away knowing you just saved yourself from a massive headache. It's the smartest investment you can make.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Checking for Hidden Accident Damage",
    description: "Carfax reports are great, but they only show accidents that were officially reported to insurance. Many people fix minor (or major) collisions out-of-pocket to keep their premiums low. We inspect the frame rails, panel gaps, and paint matching to uncover hidden accident history that the seller might not be disclosing.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  },
  {
    title: "The 'Warm Engine' Trick",
    description: "A common trick shady sellers use is warming up the engine before you arrive. A warm engine hides cold-start rattles, timing chain noise, and transmission slipping. We always recommend scheduling the inspection when the car has been sitting overnight so we can evaluate how it performs on a true cold start.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Fluid Analysis: The Blood of the Car",
    description: "We don't just check if the fluids are full; we check their condition. Burnt-smelling transmission fluid, milky engine oil (a sign of a blown head gasket), or dark, sludgy brake fluid tell us exactly how well the previous owner maintained the vehicle. Poor fluid maintenance is a guarantee of future mechanical failure.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  }
];

export default function InspectionPage() {
  return (
    <main className="w-full bg-[#F5F5F7] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Mobile Pre-Purchase Vehicle Inspections</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Don't buy a lemon. Have our Red Seal certified mechanic perform a rigorous 150-point inspection at the seller's location anywhere in Calgary before you hand over your cash.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-8 py-4 rounded-full font-bold hover:bg-[#E58600] transition-all shadow-lg hover:shadow-xl active:scale-95">
              Book an Inspection
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <ServiceContentGrid 
        title="Smart Car Buying in Alberta"
        subtitle="Protect your investment with professional advice."
        items={inspectionContent}
      />
    </main>
  );
}
