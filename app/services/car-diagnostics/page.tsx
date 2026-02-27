import { Metadata } from "next";
import ServiceContentGrid, { ContentItem } from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Car Diagnostics Calgary | Check Engine Light | MR.Mech",
  description: "Check engine light on? Car won't start? Our mobile mechanics use advanced diagnostic tools to find the problem right in your driveway. Serving Calgary.",
};

const BoltIcon = () => <svg className="w-5 h-5 inline-block text-[#FF9500] mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const AlertIcon = () => <svg className="w-5 h-5 inline-block text-red-500 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const CheckIcon = () => <svg className="w-4 h-4 inline-block text-[#34C759] mx-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;

const diagnosticsContent: ContentItem[] = [
  {
    title: "Is it safe to drive with the Check Engine Light on?",
    description: "It depends on one key thing: is the light solid, or flashing?",
    body: (
      <>
        <p><span className="font-semibold text-[#1D1D1F]">Solid light <CheckIcon /></span> — You can typically drive short distances, but you should get it scanned within a day or two to prevent a small issue becoming an expensive repair.</p>
        <p className="mt-3"><span className="font-semibold text-red-600">Flashing light <AlertIcon /></span> — Pull over safely as soon as possible. A flashing CEL means an active engine misfire. Hot unburned fuel is entering your catalytic converter and can destroy it within minutes — turning a $200 fix into a $1,500–$2,500 repair.</p>
        <p className="mt-3">Don't risk a breakdown on Stoney Trail or Deerfoot <BoltIcon /> — call us and we'll come to you.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "What happens during a mobile diagnostic scan?",
    description: "It's much more than plugging in a code reader — here's the full process:",
    bullets: [
      "We connect a professional-grade OBD2 scanner (not a $20 auto parts store tool)",
      "Read all stored fault codes plus live sensor data simultaneously",
      "Physically inspect the engine bay for obvious leaks, damage, or disconnected hoses",
      "Perform component-specific tests based on what the data shows",
      "Give you a plain-English explanation and an upfront quote — no surprises",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  },
  {
    title: "That clicking noise when you turn the key — what is it?",
    description: "One of the most common winter calls we get in Calgary. Here's the likely cause:",
    body: (
      <>
        <p>A rapid <span className="font-semibold text-[#1D1D1F]">click-click-click</span> with no engine start is almost always a dead battery or a failing starter solenoid. In -25°C Alberta mornings, a battery that was "fine" in the fall can suddenly drop below the threshold needed to spin the engine over.</p>
        <p className="mt-3">Instead of paying $150+ for a tow truck <BoltIcon />, our mobile service diagnoses the fault at your door and can replace the battery or starter on the spot.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Code reader vs. real diagnostics — why it matters",
    description: "A $20 code reader gives you a code. A professional diagnostic tells you what's broken.",
    body: (
      <p>Consider code <span className="font-mono font-bold text-[#1D1D1F]">P0171</span> (System Too Lean, Bank 1). A generic scanner just shows you that. Our professional equipment reads live fuel trims, O2 sensor voltages, MAF sensor output, and fuel pressure simultaneously to tell you <span className="font-semibold text-[#1D1D1F]">exactly</span> whether the cause is a vacuum leak, a dirty MAF sensor, a weak fuel pump, or a failing O2 sensor. That precision avoids the "parts cannon" approach that wastes hundreds of dollars on guesswork.</p>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  },
  {
    title: "ABS and Traction Control lights in a Calgary winter",
    description: "These lights mean your car's safety systems are offline — dangerous in Alberta snow.",
    bullets: [
      "ABS and Traction Control systems use wheel-speed sensors that fail due to road grime and moisture",
      "Most ABS faults are a $80–$150 sensor replacement — not a full module replacement",
      "We test each sensor individually at your location for an accurate diagnosis",
      "Getting this fixed before a snowfall could literally save your life",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  },
  {
    title: "Rough idle and stalling — what's really going on?",
    description: "Your engine is telling you something. These are the most common reasons:",
    bullets: [
      "Vacuum leak: a loose hose or cracked intake manifold gasket letting in unmetered air",
      "Dirty or failing mass airflow (MAF) sensor causing incorrect fuel mixture",
      "Clogged fuel injector leaving one cylinder starving for fuel",
      "Misfiring spark plug or ignition coil causing uneven combustion",
      "We perform on-site fuel pressure tests and smoke tests to find the exact cause",
    ],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
];

export default function DiagnosticsPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Mobile Car Diagnostics in Calgary</h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Check engine light on? Car won't start? Skip the tow truck. We bring dealership-level diagnostic scanners directly to you anywhere in Calgary and surrounding areas to pinpoint the exact issue.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#E58600] transition-all shadow-md hover:shadow-lg active:scale-95">
              Book a Diagnostic Scan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <ServiceContentGrid 
        title="Understanding Your Car's Warning Signs"
        subtitle="Expert diagnostic answers to every question Calgary drivers are asking."
        items={diagnosticsContent}
      />
    </main>
  );
}
