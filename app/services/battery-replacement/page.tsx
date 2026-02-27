import { Metadata } from "next";
import ServiceContentGrid from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Battery Replacement Calgary | MR.Mech",
  description: "Dead battery? We deliver and install premium car batteries at your home, office, or roadside in Calgary. Fast, reliable mobile battery replacement.",
};

const batteryContent = [
  {
    title: "How Calgary's extreme cold kills your car battery",
    description: "When the temperature drops below -20°C in Alberta, your car battery loses about 50% of its cranking power. At the same time, your engine oil thickens, requiring twice as much power to start the car. If your battery is older than 3-4 years, a sudden Calgary deep freeze is usually the final nail in the coffin.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
  },
  {
    title: "Signs your battery is dying before it leaves you stranded",
    description: "Batteries rarely die without warning. Look out for headlights that dim when you turn on the heater, power windows rolling up slower than usual, or a sluggish, heavy 'crank' sound when you start the engine. If you notice these signs, call us for a mobile battery test at your home or downtown office before you get stuck.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  },
  {
    title: "Can I just jump-start my car and keep driving?",
    description: "A jump-start is a temporary fix. If the battery has a dead cell, your alternator will have to work overtime to keep the car running. This extreme strain can actually burn out your alternator, turning a $200 battery problem into an $800 repair. It's much safer and cheaper to have a mobile mechanic replace the bad battery properly.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "AGM vs. Standard Lead-Acid Batteries",
    description: "Modern vehicles with start-stop technology and heavy electronics require AGM (Absorbent Glass Mat) batteries. Putting a standard lead-acid battery in an AGM-equipped car will cause premature failure and electrical gremlins. We always check your OEM specs and install the exact battery chemistry your vehicle was designed for.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
  },
  {
    title: "Battery Registration and Coding",
    description: "Did you know that many modern cars (like BMW, Audi, and newer Fords) require the new battery to be 'registered' to the car's computer? If you skip this step, the alternator will overcharge and destroy the new battery in months. Our mobile diagnostic tools allow us to properly code your new battery on-site.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  },
  {
    title: "Corrosion and Terminal Cleaning",
    description: "That white, crusty powder on your battery terminals is acidic corrosion. It acts as an insulator, preventing power from flowing to your starter. Every mobile battery replacement we perform includes a thorough cleaning of your battery cables and application of anti-corrosion spray to ensure a perfect connection.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  }
];

export default function BatteryPage() {
  return (
    <main className="w-full bg-[#F5F5F7] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Mobile Car Battery Replacement</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Stranded with a dead battery? We deliver and install premium car batteries at your home, office, or roadside anywhere in Calgary and up to 30km away. Fast, reliable, and hassle-free.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-8 py-4 rounded-full font-bold hover:bg-[#E58600] transition-all shadow-lg hover:shadow-xl active:scale-95">
              Request Battery Service
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <ServiceContentGrid 
        title="Surviving Calgary Winters: Battery Guide"
        subtitle="Don't get left out in the cold. Here is what you need to know."
        items={batteryContent}
      />
    </main>
  );
}
