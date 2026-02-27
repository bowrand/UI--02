import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MrMech Mobile Mechanic Calgary',
  description: 'Privacy Policy for MrMech Mobile Mechanic. Learn how we collect, use, and protect your personal information in accordance with Alberta and Canadian privacy laws.',
  alternates: {
    canonical: 'https://mrmech.ca/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-blue max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-CA')}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              MR.MECH Inc. ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (mrmech.ca) or use our mobile mechanic services in Calgary, Alberta, and the surrounding areas.
            </p>
            <p className="text-gray-700 mb-4">
              This policy complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada and the Personal Information Protection Act (PIPA) of Alberta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and service address.</li>
              <li><strong>Vehicle Information:</strong> Make, model, year, VIN, license plate number, and service history.</li>
              <li><strong>Payment Information:</strong> Credit card details or other payment information (processed securely through our third-party payment processors).</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>To provide, schedule, and manage our mobile mechanic services.</li>
              <li>To communicate with you regarding appointments, estimates, invoices, and service updates.</li>
              <li>To process payments for services rendered.</li>
              <li>To improve our website, services, and customer experience.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
            <p className="text-gray-700 mb-4">We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., payment processors, scheduling software), subject to strict confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation, or to protect our rights, property, or safety, or that of our customers or others.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law (e.g., for tax or accounting purposes).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">Under PIPEDA and PIPA, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Withdraw your consent to our collection, use, or disclosure of your information (subject to legal or contractual restrictions).</li>
            </ul>
            <p className="text-gray-700 mb-4">To exercise these rights, please contact us using the information provided below.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on our website and indicate the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-medium">MR.MECH Inc.</p>
              <p className="text-gray-700">Calgary, Alberta, Canada</p>
              <p className="text-gray-700">Email: privacy@mrmech.ca</p>
              <p className="text-gray-700">Phone: (403) 555-0123</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
