import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MrMech Mobile Mechanic Calgary',
  description: 'Terms and Conditions for MrMech Mobile Mechanic services in Calgary, Alberta. Read our service agreement, liability policies, and warranty terms.',
  alternates: {
    canonical: 'https://mrmech.ca/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-blue max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-CA')}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              These Terms and Conditions ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you," "Customer"), and MR.MECH Inc. ("we," "us," or "our"), a corporation registered in Alberta, concerning your access to and use of the mrmech.ca website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"), and the mobile mechanic services provided by us (the "Services").
            </p>
            <p className="text-gray-700 mb-4">
              By accessing the Site or booking our Services, you agree that you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using the Site and Services and you must discontinue use immediately.
            </p>
            <p className="text-gray-700 mb-4">
              These Terms are governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Provision and Scope</h2>
            <p className="text-gray-700 mb-4">
              MR.MECH Inc. provides mobile automotive repair and maintenance services at locations specified by the Customer within our service area (Calgary, Alberta, and surrounding areas up to a 30km radius).
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Safe Working Environment:</strong> The Customer must provide a safe, legal, and accessible location for the mechanic to perform the Services. This includes a flat, level surface (not a public street where prohibited by bylaws) with adequate clearance around the vehicle. We reserve the right to refuse service if the location is deemed unsafe, illegal, or unsuitable by our mechanic.</li>
              <li><strong>Vehicle Access:</strong> The Customer must ensure the vehicle is accessible and provide the keys to the mechanic upon arrival.</li>
              <li><strong>Scope of Work:</strong> The Services performed will be limited to those agreed upon in the estimate or work order. Any additional work required will be discussed with the Customer and requires approval before proceeding.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Estimates, Pricing, and Payment</h2>
            <p className="text-gray-700 mb-4">
              All prices are in Canadian Dollars (CAD) and are subject to applicable taxes (GST).
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Estimates:</strong> We provide estimates based on the information provided by the Customer and standard industry labor times. Estimates are not guaranteed final prices. Actual costs may vary if unforeseen issues are discovered during the repair process. We will notify you of any significant changes to the estimate before proceeding.</li>
              <li><strong>Diagnostic Fees:</strong> A diagnostic fee applies when a mechanic is dispatched to diagnose a problem. This fee covers the mechanic's time and travel. If you proceed with the recommended repair, a portion of the diagnostic fee may be applied toward the repair cost, at our discretion.</li>
              <li><strong>Payment Terms:</strong> Payment is due in full immediately upon completion of the Services, unless otherwise agreed in writing. We accept major credit cards, debit cards, and e-transfers. We do not accept personal cheques.</li>
              <li><strong>Lien Rights:</strong> Under the Possessory Liens Act of Alberta, we reserve the right to retain possession of the vehicle or place a lien on the vehicle until all outstanding invoices are paid in full.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Parts and Materials</h2>
            <p className="text-gray-700 mb-4">
              We supply high-quality OEM (Original Equipment Manufacturer) or equivalent aftermarket parts for all repairs.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Customer-Supplied Parts:</strong> We generally do not install parts supplied by the Customer due to warranty and liability concerns. If we agree to install Customer-supplied parts, we provide NO WARRANTY on the parts or the labor associated with installing them. The Customer assumes all risk for the failure of such parts.</li>
              <li><strong>Core Charges:</strong> Some parts (e.g., batteries, alternators) have a "core charge" applied by the manufacturer. This charge is refunded when the old part is returned to us.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Warranty Policy</h2>
            <p className="text-gray-700 mb-4">
              We stand behind our work and offer a limited warranty on parts and labor provided by MR.MECH Inc.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Coverage:</strong> We warrant that the Services performed will be free from defects in workmanship, and the parts supplied by us will be free from defects in materials, for a period of 12 months or 20,000 kilometers, whichever comes first, from the date of service.</li>
              <li><strong>Exclusions:</strong> This warranty does not cover:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Normal wear and tear (e.g., brake pads, wiper blades, filters).</li>
                  <li>Damage caused by misuse, abuse, neglect, accidents, or improper maintenance by the Customer.</li>
                  <li>Damage caused by pre-existing conditions or unrelated component failures.</li>
                  <li>Customer-supplied parts and the labor to install them.</li>
                  <li>Repairs performed by third parties after our service.</li>
                </ul>
              </li>
              <li><strong>Claims:</strong> To make a warranty claim, you must contact us immediately upon discovering the defect. We reserve the right to inspect the vehicle to verify the claim. If the defect is covered, we will repair or replace the defective part or correct the workmanship at no charge.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by applicable law in Alberta and Canada, MR.MECH Inc., its directors, officers, shareholders, employees, contractors, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of use, loss of data, or business interruption, arising out of or in connection with the Services, the Site, or these Terms, whether based on warranty, contract, tort (including negligence), or any other legal theory.
            </p>
            <p className="text-gray-700 mb-4">
              Our total liability to you for any claim arising out of or relating to the Services or these Terms shall not exceed the total amount paid by you to us for the specific Services giving rise to the claim.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Pre-existing Damage:</strong> We are not responsible for any pre-existing damage to the vehicle, including but not limited to scratches, dents, rust, or mechanical issues not related to the Services performed.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Property Damage:</strong> While we take precautions, we are not liable for minor, unavoidable damage to the service location (e.g., small fluid drips on a driveway), provided we have acted with reasonable care. The Customer is responsible for protecting their property.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify, defend, and hold harmless MR.MECH Inc., its officers, directors, shareholders, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from or relating to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Your use of the Site or Services.</li>
              <li>Your violation of these Terms.</li>
              <li>Your violation of any rights of a third party.</li>
              <li>Any damage or injury caused by your vehicle or your actions at the service location.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cancellations and Rescheduling</h2>
            <p className="text-gray-700 mb-4">
              We understand that plans change. If you need to cancel or reschedule an appointment, please provide at least 24 hours' notice.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Late Cancellations/No-Shows:</strong> Cancellations made with less than 24 hours' notice, or if the mechanic arrives and the vehicle is unavailable or the location is unsuitable, may be subject to a cancellation fee equivalent to our standard diagnostic fee.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Force Majeure</h2>
            <p className="text-gray-700 mb-4">
              We shall not be liable for any delay or failure to perform our obligations under these Terms if such delay or failure is caused by events beyond our reasonable control, including but not limited to acts of God, severe weather conditions, natural disasters, strikes, lockouts, supply chain disruptions, or government actions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-medium">MR.MECH Inc.</p>
              <p className="text-gray-700">Calgary, Alberta, Canada</p>
              <p className="text-gray-700">Email: legal@mrmech.ca</p>
              <p className="text-gray-700">Phone: (403) 555-0123</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
