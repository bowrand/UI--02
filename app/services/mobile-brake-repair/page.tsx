import { Metadata } from "next";
import ServiceContentGrid from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Brake Repair Calgary | MR.Mech",
  description: "Squeaking or grinding brakes? Get professional mobile brake pad and rotor replacement at your home or office in Calgary. Red Seal certified. Book now!",
};

const brakeContent = [
  {
    title: "Why do my brakes squeak in Calgary winters?",
    description: "Alberta winters are brutal on vehicles. The combination of extreme cold, road salt, and melting snow creates surface rust on your brake rotors overnight. While a morning squeak can be normal, a persistent grinding noise means your brake pads are worn down to the metal. Don't wait until you're sliding on Deerfoot Trail to get them checked.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  },
  {
    title: "How long can I drive with grinding brakes?",
    description: "The short answer? Zero kilometers. Grinding means the friction material is completely gone, and metal is gouging into your rotors. Every time you hit the pedal, you're turning a simple $200 pad replacement into a $600+ rotor and caliper repair. Since we are mobile, you don't even have to risk driving to a shop—we come to your driveway.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Mobile vs. Shop Brake Repair: What's the difference?",
    description: "Traditional shops make you drop off your car, arrange a ride, and wait all day. With MR.Mech, we service all of Calgary and up to 30km outside the city (including Airdrie and Okotoks). We bring the parts, lift your car safely in your driveway or office parking lot, and do the exact same Red Seal certified brake job in about an hour.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  {
    title: "The Danger of Spongy Brake Pedals",
    description: "If your brake pedal feels soft or goes all the way to the floor, you likely have air or moisture in your brake lines. In Calgary's fluctuating temperatures, brake fluid absorbs water over time, reducing its boiling point and effectiveness. A mobile brake fluid flush restores that firm, confident pedal feel instantly.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  },
  {
    title: "Ceramic vs. Semi-Metallic Pads",
    description: "We exclusively use premium ceramic or high-grade semi-metallic pads depending on your vehicle's OEM specifications. Ceramic pads offer quieter stops and less brake dust (keeping your rims clean), while semi-metallic pads provide aggressive stopping power for heavier trucks and SUVs navigating the Rockies.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: "Do I always need new rotors?",
    description: "Not always, but often. Modern brake rotors are thinner to save weight and improve fuel economy. By the time your pads wear out, the rotors are usually too thin to be safely machined (turned). We measure every rotor with a micrometer. If it's below the safe discard thickness, we replace it to guarantee a vibration-free stop.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
  }
];

export default function BrakeRepairPage() {
  return (
    <main className="w-full bg-[#F5F5F7] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Mobile Brake Repair in Calgary</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Don't risk driving with bad brakes. We come to your driveway or workplace anywhere in Calgary (and up to 30km around) to replace brake pads, rotors, and calipers. Fast, safe, and backed by our 12-month warranty.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-8 py-4 rounded-full font-bold hover:bg-[#E58600] transition-all shadow-lg hover:shadow-xl active:scale-95">
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
