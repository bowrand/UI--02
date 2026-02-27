import { Metadata } from "next";
import ServiceContentGrid, { ContentItem } from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Alternator & Starter Repair Calgary | MR.Mech",
  description: "Car won't start or dying while driving? Get expert mobile alternator and starter replacement at your location in Calgary. Red Seal certified mechanics.",
};

const BoltIcon = () => <svg className="w-5 h-5 inline-block text-[#FF9500] mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const AlertIcon = () => <svg className="w-5 h-5 inline-block text-red-500 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const CheckIcon = () => <svg className="w-4 h-4 inline-block text-[#34C759] mx-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;

const alternatorContent: ContentItem[] = [
  {
    title: "Battery or Alternator? Here's how to tell in 60 seconds",
    description: "This is the most common question we hear — and the answer is simpler than you think.",
    body: (
      <>
        <p><span className="font-semibold text-[#1D1D1F]">Jump-start the car <BoltIcon /></span> and immediately disconnect the jumper cables:</p>
        <ul className="mt-2 ml-4 space-y-1 list-disc text-gray-600">
          <li>Car keeps running → battery was the problem (dead cell or discharged)</li>
          <li>Car immediately dies → alternator is not charging, battery is toast</li>
          <li>Car runs but stalls 10–20 minutes later → alternator is partially failing</li>
        </ul>
        <p className="mt-3">Our mobile diagnostic tools can measure your alternator's output voltage live to give you a definitive answer — no guessing.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
  },
  {
    title: "Click-click-click in the morning — what's happening inside your starter",
    description: "That rapid clicking sound on a cold Calgary morning is a very specific electrical signal.",
    body: (
      <>
        <p>A rapid <span className="font-semibold text-[#1D1D1F]">click-click-click</span> means power is reaching the starter solenoid, but there's not enough amperage to turn the engine over. The solenoid is clicking on and off as the voltage drops under load.</p>
        <p className="mt-3">This is almost always <span className="font-semibold text-[#1D1D1F]">a battery problem</span> in winter, but it can also be corroded battery cables or a failing starter. We test each component individually at your door — <CheckIcon /> no guesswork, no unnecessary parts.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Why a mobile repair saves you from a $200+ tow bill",
    description: "When your alternator or starter dies, the car is immobilized. Here's why that gets expensive fast.",
    bullets: [
      "Calgary tow trucks cost $150–$250+ depending on distance",
      "Traditional shops add diagnose fees on top of the tow",
      "You lose your car for 1–3 days waiting for a shop slot",
      "MR.Mech brings the part and does the repair at your location",
      "Same-day service available across Calgary and 30km radius",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  },
  {
    title: "Whining noise + burning smell = your alternator is failing now",
    description: "These two warning signs together almost always point to the same culprit.",
    body: (
      <>
        <p>A worn alternator bearing creates a high-pitched <span className="font-semibold text-[#1D1D1F]">whine</span> that gets louder as engine RPM rises. A seized alternator pulley causes the serpentine belt to slip and burn — producing that distinctive <AlertIcon /> <span className="font-semibold text-red-600">burning rubber smell</span>.</p>
        <p className="mt-3">If you notice both simultaneously, pull over safely and turn off non-essential electrics (heat, radio). You have limited reserve battery time before the engine stalls. Call us and we'll come to your location.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>,
  },
  {
    title: "The battery light is actually the alternator warning",
    description: "Most drivers don't know this — and it could leave them stranded.",
    body: (
      <>
        <p>The red battery icon that lights up on your dashboard while <span className="font-semibold text-[#1D1D1F]">driving</span> does not mean the battery is bad — it means <span className="font-semibold text-[#1D1D1F]">the alternator has stopped charging it</span>. You're now running on battery reserve only.</p>
        <p className="mt-3">A fully charged battery gives you roughly <span className="font-semibold text-[#1D1D1F]">20–40 minutes</span> of driving time. Immediately:</p>
        <ul className="mt-2 ml-4 space-y-1 list-disc text-gray-600">
          <li>Turn off your heater, radio, and rear defroster</li>
          <li>Drive directly to a safe, accessible location</li>
          <li>Call MR.Mech — we'll come to you</li>
        </ul>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  },
  {
    title: "Heat soak starter failure — starts cold, dies when warm",
    description: "One of the most misdiagnosed issues we see. The symptom is very specific:",
    body: (
      <p>Your car starts perfectly fine every morning. But after a 20-minute drive and a 10-minute grocery store run, it won't start. Walk back 30 minutes later and it fires right up. This is called <span className="font-semibold text-[#1D1D1F]">"heat soak"</span> — the starter motor's internal copper windings expand when hot and make internal contact. When it cools, it contracts and works again. It will fail completely soon. We stock high-quality OEM-equivalent starter motors for same-day replacement.</p>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
];


export default function AlternatorPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Mobile Alternator & Starter Repair</h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Car won't start or dying while driving? Get expert mobile alternator and starter replacement at your location in Calgary and surrounding areas. Red Seal certified mechanics.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#E58600] transition-all shadow-md hover:shadow-lg active:scale-95">
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
