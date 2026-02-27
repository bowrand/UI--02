import { Metadata } from "next";
import ServiceContentGrid, { ContentItem } from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Brake Repair Calgary | MR.Mech",
  description: "Squeaking or grinding brakes? Get professional mobile brake pad and rotor replacement at your home or office in Calgary. Red Seal certified. Book now!",
};

const WrenchIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
const ClockIcon = () => <svg className="w-5 h-5 inline-block text-[#FF9500] mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CheckIcon = () => <svg className="w-4 h-4 inline-block text-[#34C759] mx-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;
const SnowflakeIcon = () => <svg className="w-5 h-5 inline-block text-blue-400 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" /></svg>;

const brakeContent: ContentItem[] = [
  {
    title: "Why do my brakes squeak in Calgary winters?",
    description: "Alberta winters are brutal on brakes. Here's what's actually happening under your wheels:",
    body: (
      <>
        <p>The combination of extreme cold <SnowflakeIcon />, road salt, and overnight freeze-thaw cycles creates a thin layer of surface rust on your rotors every single night. A quick squeak on the first stop of the morning? That's often normal rust burn-off.</p>
        <p className="mt-3 font-semibold text-[#1D1D1F]">However, a continuous grinding or high-pitched squeal means something else entirely.</p>
        <p className="mt-2">Most brake pads have a small metal "wear indicator" built in specifically to squeal loudly <ClockIcon /> when the friction material gets too thin. That sound is an intentional warning — your mechanic's way of telling you to call before it gets worse.</p>
      </>
    ),
    bullets: ["Surface rust squeaks = usually fine, clears after first stop", "Constant squealing = wear indicator triggering", "Metal-on-metal grinding = pads gone, rotors being destroyed"],
    icon: <WrenchIcon />,
    featured: false,
  },
  {
    title: "How long can I safely drive with grinding brakes?",
    description: "The honest answer from a Red Seal mechanic: not another kilometer.",
    body: (
      <>
        <p>Grinding means the friction material is completely gone. Metal is now grinding directly into your iron rotor. Every kilometer is converting a simple <span className="font-semibold text-[#1D1D1F]">$200 pad replacement</span> into a <span className="font-semibold text-red-600">$600–$900 rotor, caliper, and pad repair</span>.</p>
        <p className="mt-3">The good news? <CheckIcon /> Since MR.Mech is fully mobile, you don't have to risk driving anywhere. We come to your home or office in Calgary — park, fix, done.</p>
      </>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Mobile vs. Shop Brake Repair: The real difference",
    description: "Same certified work, zero wasted hours out of your day.",
    bullets: ["No drop-off, no waiting room, no shuttle needed", "We carry parts for all major makes and models", "Service at your home, condo parkade, or office lot", "Same Red Seal certification as any dealership", "Covers all of Calgary + 30km radius (Airdrie, Okotoks)"],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  },
  {
    title: "The spongy pedal problem — what it means",
    description: "A soft, spongy pedal is a warning sign you should never ignore.",
    body: (
      <p>Brake fluid is hygroscopic — it absorbs moisture from the air over time. In Calgary's temperature swings (from -30°C to +25°C), this absorbed water lowers the fluid's boiling point significantly. During hard braking, the fluid can actually vaporize, creating an air pocket in the line. Air compresses; fluid does not. That's why your pedal suddenly feels like it's going to the floor.</p>
    ),
    bullets: ["Flush brake fluid every 2 years or 40,000km", "DOT 4 or DOT 5.1 fluid recommended for Alberta climates", "Service takes under 30 minutes at your location"],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  },
  {
    title: "Ceramic vs. Semi-Metallic pads: which is right for you?",
    description: "Not all brake pads are equal — and the right choice depends on what you drive.",
    bullets: ["Ceramic: quieter, less dust, ideal for sedans & daily commuters", "Semi-metallic: better heat tolerance, best for trucks, SUVs & towing", "We always match or exceed your vehicle's OEM specification", "We never use cheap no-name pads — only premium grade brands"],
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "Do you always need new rotors? (Honest answer)",
    description: "Not necessarily — but here's the truth about modern rotor thickness:",
    body: (
      <p>Modern rotors are thinner than those from 10 years ago (to save weight and improve fuel economy). By the time your pads are fully worn, the rotor surface is usually already close to or below the safe minimum thickness printed on the edge. We measure every rotor with a digital micrometer <span className="font-semibold text-[#1D1D1F]">on the spot</span>. If it passes, we resurface and reuse it. If not, we'll show you the measurement and explain why replacement is the safest option.</p>
    ),
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>,
  },
];

export default function BrakeRepairPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Mobile Brake Repair in Calgary</h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Don't risk driving with bad brakes. We come to your driveway or workplace anywhere in Calgary (and up to 30km around) to replace brake pads, rotors, and calipers. Fast, safe, and backed by our 12-month warranty.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#E58600] transition-all shadow-md hover:shadow-lg active:scale-95">
              Get a Free Brake Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <ServiceContentGrid 
        title="What Calgary Drivers Need to Know About Brakes"
        subtitle="Helpful insights from your local Red Seal certified mobile mechanic."
        items={brakeContent}
      />
    </main>
  );
}
