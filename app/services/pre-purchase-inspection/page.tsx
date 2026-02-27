import { Metadata } from "next";
import ServiceContentGrid, { ContentItem } from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Pre-Purchase Car Inspection Calgary | MR.Mech",
  description: "Buying a used car? Get a comprehensive 150-point mobile pre-purchase inspection by a Red Seal mechanic in Calgary before you buy. Avoid lemons!",
};

const AlertIcon = () => <svg className="w-5 h-5 inline-block text-red-500 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const CheckIcon = () => <svg className="w-4 h-4 inline-block text-[#34C759] mx-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;
const DollarIcon = () => <svg className="w-5 h-5 inline-block text-green-600 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const inspectionContent: ContentItem[] = [
  {
    title: "The #1 mistake Calgary used car buyers make",
    description: "It's not skipping the Carfax — it's trusting what you can see.",
    body: (
      <>
        <p>A quick detail job <AlertIcon /> cleans up a car that smells like a flood. A fresh coat of undercoating hides rust. Many sellers use an OBD2 tool to clear the check engine light 20 minutes before you arrive — it comes back on the next day after you've already driven home with it.</p>
        <p className="mt-3">With a professional 150-point inspection, we look past the showroom shine to what's actually happening under the hood, beneath the car, and inside the computer.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  },
  {
    title: "What our 150-point mobile inspection covers",
    description: "We meet you at the seller's location — anywhere in Calgary or 30km out.",
    bullets: [
      "Engine and transmission: fluid condition, leaks, misfires, fault codes",
      "Brakes: pad thickness, rotor condition, brake fluid moisture level",
      "Suspension: ball joints, tie rods, struts, and steering play",
      "Battery and charging system: CCA test and alternator output",
      "Frame, body panel gaps, and paint matching for hidden collision damage",
      "OBD2 full system scan including pending and historical codes",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "How to use our report to negotiate a lower price",
    description: "A good inspection almost always pays for itself — here's exactly how:",
    body: (
      <>
        <p>If our report reveals $800 in needed brake work, a worn-out battery, and leaking valve cover gasket, you now have <span className="font-semibold text-[#1D1D1F]">documented, certified evidence</span> from a Red Seal mechanic to use at the negotiating table.</p>
        <p className="mt-3"><DollarIcon /> Most buyers negotiate $500–$2,000 off the asking price after receiving our report. If the seller refuses to budge or let you do the inspection at all — that itself is a major red flag. Walk away.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "How we find hidden accident damage Carfax misses",
    description: "Many collision repairs are done privately to avoid insurance claims.",
    bullets: [
      "We measure panel gaps — uneven gaps = replaced panels after a collision",
      "We check paint thickness with a paint meter to find repainted areas",
      "We inspect frame rails under the car for straightening marks or welds",
      "We check door and trunk hinges for bending or stress cracks",
      "Carfax only shows reported accidents — private repairs never appear",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  },
  {
    title: "The warm engine trick — and how we counter it",
    description: "Ask sellers to NOT start the car before we arrive. Here's why:",
    body: (
      <>
        <p>A warm engine <AlertIcon /> hides cold-start behaviours that reveal failing components: timing chain rattle that disappears after 2 minutes of running, transmission slipping only when cold, and coolant temp taking too long to rise (a stuck-open thermostat). We always request a cold-start inspection scheduled first thing in the morning for the most accurate picture of the car's true health.</p>
        <p className="mt-3"><CheckIcon /> If the seller refuses a cold-start inspection, ask yourself why.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "Fluid analysis: what the 'blood' of the car reveals",
    description: "We check condition, not just level. The difference can save you thousands.",
    bullets: [
      "Milky, foamy engine oil = head gasket leak, coolant mixing with oil",
      "Dark brown transmission fluid (should be red) = severely neglected or slipping",
      "Black, sludgy brake fluid = moisture-contaminated, brake system at risk",
      "Coolant that smells burnt or has oil floating on top = major internal failure",
      "Power steering fluid condition can indicate rack and pinion wear",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  },
];


export default function InspectionPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Mobile Pre-Purchase Vehicle Inspections</h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Don't buy a lemon. Have our Red Seal certified mechanic perform a rigorous 150-point inspection at the seller's location anywhere in Calgary before you hand over your cash.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#E58600] transition-all shadow-md hover:shadow-lg active:scale-95">
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
