import { Metadata } from "next";
import ServiceContentGrid, { ContentItem } from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Battery Replacement Calgary | MR.Mech",
  description: "Dead battery? We deliver and install premium car batteries at your home, office, or roadside in Calgary. Fast, reliable mobile battery replacement.",
};

const SnowIcon = () => <svg className="w-5 h-5 inline-block text-blue-400 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" /></svg>;
const BoltIcon = () => <svg className="w-5 h-5 inline-block text-[#FF9500] mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

const batteryContent: ContentItem[] = [
  {
    title: "How Calgary's extreme cold kills your car battery",
    description: "Temperature and batteries have a nasty relationship — here's the physics:",
    body: (
      <>
        <p>When temperature drops below -20°C <SnowIcon />, a standard car battery loses roughly <span className="font-semibold text-[#1D1D1F]">50% of its cranking amps</span>. Simultaneously, your engine's cold, thick oil requires up to twice the electrical power to turn over the starter motor. This double demand is exactly why Alberta winters kill aging batteries.</p>
        <p className="mt-3">A battery that tested "okay" at an auto parts store in September often can't survive the first hard freeze of November. Rule of thumb: <span className="font-semibold text-[#1D1D1F]">replace any battery over 3 years old before winter hits.</span></p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>,
  },
  {
    title: "Warning signs your battery is dying — before you're stranded",
    description: "Batteries almost always give you hints. Here's what to watch for:",
    bullets: [
      "Headlights dim noticeably when you turn on the heat or AC",
      "Power windows roll up/down more slowly than usual",
      "Engine cranks slowly or sounds 'heavy' on startup",
      "Check engine or battery warning light appears on the dash",
      "Electronics reset (radio presets, clock) after starting the car",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
  {
    title: "Can I just jump-start and keep driving?",
    description: "A jump-start gets you moving, but it's not a fix — and here's why that matters.",
    body: (
      <>
        <p>A dead or shorted battery cell puts enormous strain on your <span className="font-semibold text-[#1D1D1F]">alternator</span>, forcing it to run at maximum output continuously to compensate. This can overheat and destroy your alternator in a single trip, turning a <BoltIcon /> <strong>$200 battery problem</strong> into an <strong>$800–$1,200 alternator replacement</strong>.</p>
        <p className="mt-3">Call us instead — we come to you, test the battery properly, and replace it the right way on your first call.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "AGM vs. Standard battery — why the wrong type can destroy your car",
    description: "Modern cars have very specific battery requirements. This is not optional.",
    body: (
      <p>Vehicles with start-stop technology (engine shuts off at red lights), heavy infotainment systems, or built-in charging algorithms require an <span className="font-semibold text-[#1D1D1F]">AGM (Absorbent Glass Mat)</span> battery. Installing a cheap conventional lead-acid battery in an AGM-designed car will cause it to fail within 6–12 months and can trigger constant fault codes. We always check your VIN and OEM spec before ordering your battery.</p>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  },
  {
    title: "Battery coding — the step most shops skip",
    description: "BMW, Audi, Mercedes, and many newer vehicles require battery 'registration'.",
    body: (
      <p>When you replace the battery in these vehicles, the car's ECU must be told the new battery's capacity and chemistry — otherwise it will charge using the old profile, <span className="font-semibold text-[#1D1D1F]">overcharging and destroying your brand-new battery</span> within months. This step requires a professional scan tool. Our mobile diagnostic equipment handles this registration on-site before we leave your driveway.</p>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    title: "Terminal corrosion — the silent power killer",
    description: "That white fuzzy powder on your terminals is actively stealing your battery's power.",
    bullets: [
      "Battery acid vapour oxidizes the lead terminals, forming lead sulphate crystals",
      "Even a thin layer acts as an insulator, preventing full current flow to the starter",
      "Can cause slow cranks, stalls, and phantom electrical faults",
      "Every installation includes terminal cleaning + anti-corrosion spray at no extra charge",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  },
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
