import { Metadata } from "next";
import ServiceContentGrid from "../../components/ServiceContentGrid";

export const metadata: Metadata = {
  title: "Mobile Car Diagnostics Calgary | Check Engine Light | MR.Mech",
  description: "Check engine light on? Car won't start? Our mobile mechanics use advanced diagnostic tools to find the problem right in your driveway. Serving Calgary.",
};

const diagnosticsContent = [
  {
    title: "Is it safe to drive with the Check Engine Light on?",
    description: "If the light is solid, you can usually drive home or to work safely, but you should get it scanned ASAP to prevent worse damage. However, if the check engine light is flashing, pull over immediately. A flashing light means your engine is misfiring, which can destroy your catalytic converter in minutes. Don't risk a breakdown on Stoney Trail—let us come to you.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "What happens during a mobile diagnostic scan?",
    description: "When our Red Seal mechanic arrives at your Calgary home or downtown office, we plug a professional-grade OBD2 scanner into your car's computer. We don't just read the code; we test the live data, check the sensors, and physically inspect the engine bay. You get a transparent, plain-English explanation of the problem and an upfront quote to fix it.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  },
  {
    title: "Why is my car making a weird clicking noise?",
    description: "A rapid clicking noise when you turn the key is one of the most common calls we get in Calgary, especially during winter. 90% of the time, this is a dead battery or a failing starter motor. Instead of paying $150+ for a tow truck, our mobile service can diagnose the exact electrical fault in your driveway and replace the battery or starter on the spot.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "The 'Code Reader' vs. Real Diagnostics",
    description: "A $20 code reader from an auto parts store only gives you a generic code (like P0171). It doesn't tell you what part is actually broken. Our dealership-level diagnostic computers allow us to command modules, read live fuel trims, and pinpoint the exact failing component, saving you from wasting money on the 'parts cannon' approach.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
  },
  {
    title: "ABS and Traction Control Lights",
    description: "Driving in Alberta winters without ABS or Traction Control is incredibly dangerous. If these lights illuminate, your vehicle's safety systems are disabled. We can diagnose wheel speed sensors, ABS modules, and wiring faults right in your driveway to get your safety systems back online before the next snowfall.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  },
  {
    title: "Rough Idling and Stalling",
    description: "If your car shakes violently at red lights or stalls unexpectedly, you could have a vacuum leak, a failing mass airflow sensor, or a clogged fuel injector. Our mobile mechanics perform smoke tests and fuel pressure tests on-site to find the root cause of drivability issues without you having to limp the car to a shop.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  }
];

export default function DiagnosticsPage() {
  return (
    <main className="w-full bg-[#F5F5F7] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1D1D1F] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Mobile Car Diagnostics in Calgary</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Check engine light on? Car won't start? Skip the tow truck. We bring dealership-level diagnostic scanners directly to you anywhere in Calgary and surrounding areas to pinpoint the exact issue.
          </p>
          <div className="pt-4">
            <a href="/#callback-form" className="inline-flex items-center gap-2 bg-[#FF9500] text-white px-8 py-4 rounded-full font-bold hover:bg-[#E58600] transition-all shadow-lg hover:shadow-xl active:scale-95">
              Book a Diagnostic Scan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <ServiceContentGrid 
        title="Understanding Your Car's Warning Signs"
        subtitle="Expert diagnostic advice to keep you safe on Alberta roads."
        items={diagnosticsContent}
      />
    </main>
  );
}
