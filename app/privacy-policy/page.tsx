import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | My Laundry Point of Sale",
  description:
    "Learn how My Laundry POS collects, uses, and protects your personal and business data.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | My Laundry Point of Sale",
    description:
      "Learn how My Laundry POS collects, uses, and protects your personal and business data.",
    url: "https://mylaundrypos.com/privacy-policy",
    siteName: "My Laundry Point of Sale",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-lightblue/40 via-white to-white" />
        <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-blue/10 blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-babyblue blur-3xl -z-10" />

        <div className="mx-auto max-w-4xl">
          <p className="text-blue font-semibold tracking-wide uppercase text-sm">
            Legal
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-navyblue leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-bluegray text-lg">
            Last updated: April 3, 2026
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-6 bg-lightblue/10 rounded-xl border border-lightblue">
              <p className="text-navyblue font-semibold mb-2">
                Privacy Commitment
              </p>
              <p className="text-bluegray">
                My Laundry POS is committed to protecting your privacy and
                ensuring transparency about how we collect, use, and safeguard
                your data. This Privacy Policy explains our data practices for
                our platform, website, and services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              1. Data We Collect
            </h2>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              1.1 Account Information
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              When you register for My Laundry POS, we collect:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-4">
              <li>Full name and contact information (email, phone)</li>
              <li>Business name and business address</li>
              <li>Payment information and billing address</li>
              <li>User preferences and language settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              1.2 Business Data
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              You provide business data when using our platform:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-4">
              <li>Order details (services, prices, dates, status)</li>
              <li>
                Customer information (names, phone numbers, addresses, email)
              </li>
              <li>Payment records and financial transactions</li>
              <li>Inventory items and stock quantities</li>
              <li>Staff and employee information</li>
              <li>Business metrics and performance data</li>
            </ul>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              1.3 Technical Data
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              We automatically collect technical information:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-4">
              <li>IP address and device information</li>
              <li>Browser type, operating system, and version</li>
              <li>Pages visited and features used</li>
              <li>Timestamps of actions and login data</li>
              <li>Device identifiers and session identifiers</li>
              <li>Performance metrics and error logs</li>
            </ul>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              1.4 Communication Data
            </h3>
            <p className="text-bluegray mb-6 leading-8">
              We collect data from communications with our support team:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-4">
              <li>Email messages and WhatsApp conversations</li>
              <li>Customer support tickets and issue reports</li>
              <li>Feedback, surveys, and feature requests</li>
              <li>Chat interactions with support agents</li>
            </ul>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              2. How We Use Your Data
            </h2>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              2.1 Service Delivery
            </h3>
            <p className="text-bluegray mb-4 leading-8">We use your data to:</p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>
                Provide, maintain, and improve the My Laundry POS platform
              </li>
              <li>Process transactions and manage your account</li>
              <li>Generate reports, analytics, and performance metrics</li>
              <li>Enable multi-branch management and staff access</li>
              <li>
                Facilitate order management and customer relationship management
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              2.2 Communication
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              We use your contact information to:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>Send service announcements and updates</li>
              <li>Provide customer support and resolve issues</li>
              <li>Send billing and payment notifications</li>
              <li>Respond to inquiries and requests</li>
              <li>Send security alerts and password reset requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              2.3 Marketing and Improvements
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              With your consent, we use your data to:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>Send promotional materials and product updates</li>
              <li>Conduct market research and user surveys</li>
              <li>Improve user experience and platform features</li>
              <li>
                Develop new features and services relevant to your business
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              2.4 Legal and Compliance
            </h3>
            <p className="text-bluegray mb-6 leading-8">We use your data to:</p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>Comply with legal and regulatory obligations</li>
              <li>Prevent fraud, abuse, and illegal activities</li>
              <li>Enforce our Terms of Use and other agreements</li>
              <li>
                Protect the security and rights of My Laundry POS, users, and
                the public
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              3. Data Sharing and Disclosure
            </h2>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              3.1 Third-Party Service Providers
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              We share data with trusted service providers who assist in
              operating our platform:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>Payment processors (for secure payment handling)</li>
              <li>SMS and WhatsApp providers (for automated notifications)</li>
              <li>
                Cloud hosting providers (for data storage and infrastructure)
              </li>
              <li>Email services (for communication)</li>
              <li>Analytics providers (for understanding platform usage)</li>
            </ul>
            <p className="text-bluegray mb-6 leading-8">
              All third-party providers are bound by confidentiality agreements
              and are permitted to use data only for providing their services.
            </p>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              3.2 Your Staff and Authorized Users
            </h3>
            <p className="text-bluegray mb-6 leading-8">
              Data is shared with staff members and other users you authorize to
              access your account. You are responsible for managing user roles
              and access permissions.
            </p>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              3.3 Legal Requirements
            </h3>
            <p className="text-bluegray mb-6 leading-8">
              We may disclose data if required by law, valid legal process,
              court order, or government request. We will notify you of such
              requests unless legally prohibited.
            </p>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              3.4 Business Transfers
            </h3>
            <p className="text-bluegray mb-6 leading-8">
              If My Laundry POS is involved in a merger, acquisition,
              bankruptcy, or asset sale, your data may be transferred as part of
              that transaction. We will notify you of such changes.
            </p>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              3.5 Anonymized Data
            </h3>
            <p className="text-bluegray mb-6 leading-8">
              We may share anonymized, aggregated data (without identifying you)
              for research, analytics, and improving our services. This data
              cannot be used to identify you.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              4. Data Security
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              My Laundry POS implements comprehensive security measures to
              protect your data:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>SSL/TLS encryption for data in transit</li>
              <li>AES-256 encryption for sensitive data at rest</li>
              <li>Role-based access controls and authentication</li>
              <li>Regular security audits and penetration testing</li>
              <li>Secure backup systems with redundancy</li>
              <li>Employee training on data protection and privacy</li>
              <li>Incident response procedures for security breaches</li>
            </ul>
            <p className="text-bluegray mb-6 leading-8">
              While we implement robust security measures, no system is
              completely secure. You are responsible for maintaining the
              confidentiality of your login credentials and notifying us of any
              unauthorized access.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              5. Your Rights and Choices
            </h2>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              5.1 Access and Portability
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              You have the right to access your personal data and request it in
              a portable format. You can download your data through your account
              settings or by contacting our support team.
            </p>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              5.2 Correction and Deletion
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              You may update incorrect information through your account
              settings. You may request deletion of your account and associated
              data, though we may retain data required by law or for business
              purposes.
            </p>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              5.3 Marketing Communications
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              You may opt out of promotional emails by clicking{" "}
              {`"unsubscribe"`} in any message or updating your preferences.
              Transactional messages (account alerts, billing) cannot be opted
              out as they are necessary for service delivery.
            </p>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              5.4 Cookies and Tracking
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              Most browsers allow you to refuse cookies or alert you when they
              are being sent. You may disable cookies through browser settings,
              though this may limit platform functionality.
            </p>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              5.5 Data Retention
            </h3>
            <p className="text-bluegray mb-6 leading-8">
              We retain your data as long as your account is active and for
              periods required by law. Upon account termination, data is deleted
              after 30 days, unless we have a legal obligation to retain it
              longer. You may export your data at any time before deletion.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              6. GDPR Compliance
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              For users and their customers in the EU, My Laundry POS complies
              with the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>
                Legal basis for processing is contractual necessity and
                legitimate interests
              </li>
              <li>
                You may request access, correction, deletion, or portability of
                your data
              </li>
              <li>
                You may withdraw consent for marketing and profiling at any time
              </li>
              <li>
                We have appointed a Data Protection Officer and conduct Data
                Protection Impact Assessments
              </li>
              <li>
                We have executed a Data Processing Agreement with users who are
                data controllers
              </li>
              <li>
                We notify you of data breaches within 72 hours of discovery
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              7. Customer Data Responsibility
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              You are responsible for ensuring you have proper legal basis to
              collect and store customer data in My Laundry POS:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>
                You must obtain customer consent for data collection where
                required
              </li>
              <li>
                You are responsible for providing privacy notices to your
                customers
              </li>
              <li>You must comply with all applicable data protection laws</li>
              <li>
                You are liable for unauthorized or unlawful use of customer data
              </li>
              <li>You must comply with GDPR if your customers are in the EU</li>
            </ul>
            <p className="text-bluegray mb-6 leading-8">
              My Laundry POS acts as a data processor on your behalf. For GDPR
              purposes, you are the data controller, and we are the data
              processor. We will assist you in fulfilling your data subject
              rights requests.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              8. Cookies and Web Tracking
            </h2>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              8.1 Cookies
            </h3>
            <p className="text-bluegray mb-4 leading-8">
              My Laundry POS uses cookies and similar tracking technologies:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-4">
              <li>
                <strong className="text-navyblue">Session cookies:</strong>{" "}
                Maintain your login and preferences during your session
              </li>
              <li>
                <strong className="text-navyblue">Persistent cookies:</strong>{" "}
                Remember your preferences across visits
              </li>
              <li>
                <strong className="text-navyblue">Analytics cookies:</strong>{" "}
                Understand how users interact with our platform
              </li>
              <li>
                <strong className="text-navyblue">Marketing cookies:</strong>{" "}
                Enable targeted advertising (with consent)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-navyblue mt-6 mb-3">
              8.2 Google Analytics
            </h3>
            <p className="text-bluegray mb-6 leading-8">
              We use Google Analytics to understand user behavior. Google
              Analytics uses cookies to collect anonymized usage data. You can
              opt out of Google Analytics by disabling cookies or using{" "}
              {`Google's`}
              opt-out browser extension.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              9. Children and Data Privacy
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              My Laundry POS is not intended for individuals under 18 years of
              age. We do not knowingly collect data from minors. If we learn we
              have collected data from a minor, we will delete it promptly. If
              you believe we have collected data from a minor, contact us
              immediately.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              10. Data Breaches
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              In the event of a data breach affecting your personal information:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>We will investigate the breach and assess the impact</li>
              <li>
                We will notify you promptly (within 72 hours for GDPR users)
              </li>
              <li>
                We will provide guidance on steps to protect your information
              </li>
              <li>We will cooperate with relevant authorities</li>
              <li>We will implement measures to prevent recurrence</li>
            </ul>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              11. International Data Transfer
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              Your data may be transferred to, stored in, and processed in
              countries other than your country of residence, which may have
              different data protection laws. By using My Laundry POS, you
              consent to such transfers. We implement safeguards including
              Standard Contractual Clauses to protect international transfers.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              12. Third-Party Links
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              My Laundry POS may contain links to third-party websites and
              services. We are not responsible for their privacy practices. We
              encourage you to review their privacy policies before providing
              your information.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              13. Changes to This Privacy Policy
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              We may update this Privacy Policy to reflect changes in our
              practices or applicable laws. We will notify you of material
              changes via email or platform notice. Your continued use of My
              Laundry POS after updates constitutes acceptance of the new
              Privacy Policy.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              The {`"Last updated"`} date at the top of this policy indicates
              when it was last revised.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              14. Data Protection Officer
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              My Laundry POS has appointed a Data Protection Officer. For GDPR
              inquiries or to exercise your privacy rights, you may contact our
              Data Protection Officer.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              15. Contact Us
            </h2>
            <p className="text-bluegray mb-2 leading-8">
              For questions about this Privacy Policy or our privacy practices:
            </p>
            <ul className="list-none text-bluegray space-y-2 mb-4">
              <li>
                <strong className="text-navyblue">Email:</strong>{" "}
                privacy@mylaundrypos.com
              </li>
              <li>
                <strong className="text-navyblue">Support Email:</strong>{" "}
                support@mylaundrypos.com
              </li>
              <li>
                <strong className="text-navyblue">WhatsApp:</strong> +234 916
                5426799
              </li>
              <li>
                <strong className="text-navyblue">Website:</strong>{" "}
                mylaundrypos.com
              </li>
              <li>
                <strong className="text-navyblue">Address:</strong> Nigeria
              </li>
            </ul>

            <p className="text-bluegray mb-4 leading-8">
              If you have privacy concerns not resolved by contacting us, you
              may file a complaint with your local data protection authority.
            </p>

            <div className="mt-12 pt-8 border-t border-lightblue">
              <p className="text-bluegray mb-4 leading-8">
                Your privacy is important to us. We are committed to being
                transparent about how we use your data and providing you with
                control over your information.
              </p>
              <Link
                href="/terms-of-use"
                className="text-blue font-semibold hover:underline"
              >
                View our Terms of Use →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
