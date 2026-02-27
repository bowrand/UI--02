import { Metadata } from "next";
import ServiceContentGrid from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Alternator & Starter Repair Calgary | MR.Mech",
  description: "Car won't start or dying while driving? Get expert mobile alternator and starter replacement at your location in Calgary. Red Seal certified mechanics.",
};

const alternatorContent = [
  {
    title: "Battery or Alternator: How to tell what's broken",
    description: "It's the classic confusion. If your car won't start but the radio and lights work fine, it's likely the starter. If you jump-start the car and it immediately dies when you remove the cables, your alternator is dead. The alternator's job is to keep the car running and recharge the battery while driving around Calgary.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
  },
  {
    title: "Why your car clicks but won't start in the morning",
    description: "You turn the key to head to work, and all you hear is a rapid 'click-click-click.' This means power is reaching the starter motor, but there isn't enough amperage to turn the engine over, or the starter solenoid is jammed. Our mobile mechanics can test the electrical draw right in your driveway to give you an exact answer.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "The hidden costs of towing a dead car in Calgary",
    description: "If your alternator dies, your car is immobilized. Calling a tow truck in Calgary can easily cost $150-$200, plus you lose your vehicle for days at a traditional shop. By calling MR.Mech, we bring the replacement alternator or starter to you—whether you're stuck at home, at the office, or within a 30km radius of the city.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  },
  {
    title: "Whining Noises and Burning Smells",
    description: "A failing alternator often gives warning signs before it completely dies. If you hear a high-pitched whining noise that gets louder as you accelerate, or smell burning rubber (from the serpentine belt slipping on a seized alternator pulley), pull over safely and call us. Driving further will leave you stranded.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
  },
  {
    title: "The 'Battery Light' is Actually the Alternator Light",
    description: "When the red battery icon illuminates on your dashboard while driving, it doesn't mean your battery is bad—it means your alternator has stopped charging the battery. You only have the reserve power left in the battery (usually 20-30 minutes) before the engine shuts off completely. Turn off your radio and heater, and get to a safe spot.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  },
  {
    title: "Starter Motor Heat Soak",
    description: "Does your car start perfectly fine in the morning, but refuses to start after you've been driving for a while and parked at the grocery store? This is called 'heat soak.' The starter motor is failing internally and expanding when hot, causing it to jam. We can replace it on-site with a premium OEM-equivalent unit.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

export default function AlternatorPage() {
  return (
    <main className="w-full bg-[#F5F5F7] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Mobile Alternator & Starter Repair</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Car won't start or dying while driving? Get expert mobile alternator and starter replacement at your location in Calgary and surrounding areas. Red Seal certified mechanics.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-8 py-4 rounded-full font-bold hover:bg-[#E58600] transition-all shadow-lg hover:shadow-xl active:scale-95">
              Get a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <ServiceContentGrid 
        title="Starting & Charging System Insights"
        subtitle="Learn how to identify the real issue before paying for a tow."
        items={alternatorContent}
      />
    </main>
  );
}
