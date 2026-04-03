import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | My Laundry Point of Sale",
  description:
    "Review the terms and conditions governing the use of My Laundry POS software and services.",
  alternates: {
    canonical: "/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | My Laundry Point of Sale",
    description:
      "Review the terms and conditions governing the use of My Laundry POS software and services.",
    url: "https://mylaundrypos.com/terms-of-use",
    siteName: "My Laundry Point of Sale",
    type: "website",
  },
};

export default function TermsOfUsePage() {
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
            Terms of Use
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
                Important Notice
              </p>
              <p className="text-bluegray">
                These Terms of Use constitute a binding legal agreement between
                you and My Laundry POS {`("Company")`}. By accessing, browsing,
                or using our platform, website, or services, you accept and
                agree to be bound by these terms. If you do not agree to these
                terms, please do not use our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              1. Service Overview
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              My Laundry POS is a cloud-based point-of-sale and business
              management platform specifically designed for laundry and
              dry-cleaning businesses. Our platform provides order management,
              customer management, payment processing, inventory tracking,
              reporting, and multi-branch support features.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              The service is provided on an {`"as-is"`} basis and is intended
              for use by authorized business owners and their employees in
              managing laundry, dry-cleaning, and related services.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              2. Eligibility and Account Registration
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              To use My Laundry POS, you must:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>
                Be at least 18 years of age or the legal age in your
                jurisdiction
              </li>
              <li>
                Be a representative, owner, or authorized employee of a laundry
                or dry-cleaning business
              </li>
              <li>
                Provide accurate, current, and complete information during
                registration
              </li>
              <li>Maintain the confidentiality of your login credentials</li>
              <li>
                Be legally able to enter into binding contracts in your
                jurisdiction
              </li>
            </ul>
            <p className="text-bluegray mb-6 leading-8">
              You are responsible for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized
              use of your account. We are not liable for any loss or damage
              arising from unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              3. License Grant and Restrictions
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              We grant you a limited, non-exclusive, non-transferable license to
              access and use My Laundry POS in accordance with these Terms. You
              may not:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>
                Reproduce, duplicate, copy, or resell the service or any content
              </li>
              <li>
                Reverse engineer, decompile, or attempt to derive source code
              </li>
              <li>Modify, translate, or create derivative works</li>
              <li>Rent, lease, lend, or otherwise transfer the service</li>
              <li>Remove or alter any proprietary notices or labels</li>
              <li>
                Use the service for any unlawful purpose or in violation of
                applicable laws
              </li>
              <li>
                Access or use the service to develop competing products or
                services
              </li>
              <li>
                Use automated tools or scripts to scrape or collect data without
                authorization
              </li>
              <li>
                Attempt to interfere with, disrupt, or impair the {`service's`}{" "}
                functionality
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              4. User Responsibilities and Content
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              You are responsible for all information, data, and content you
              upload, store, or transmit through My Laundry POS, including
              customer data, order records, payments, and business information.
            </p>
            <p className="text-bluegray mb-4 leading-8">You agree that you:</p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>Will provide accurate and lawful customer information</li>
              <li>
                Have obtained all necessary consents for storing customer data
              </li>
              <li>
                Will comply with all data protection and privacy laws in your
                jurisdiction
              </li>
              <li>
                Will not use the platform for fraudulent, deceptive, or illegal
                activities
              </li>
              <li>Will not transmit malware, viruses, or harmful code</li>
              <li>
                Are responsible for maintaining accurate financial records
              </li>
              <li>
                Will not share login credentials or allow unauthorized access
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              5. Payment Terms and Billing
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              My Laundry POS operates on a subscription-based model. By
              selecting a plan, you authorize us to charge your payment method
              on a recurring basis according to the selected plan.
            </p>
            <p className="text-bluegray mb-4 leading-8">
              <strong className="text-navyblue">Billing Cycle:</strong> Your
              subscription will renew automatically on your billing date. You
              are responsible for ensuring your payment method is current and
              valid.
            </p>
            <p className="text-bluegray mb-4 leading-8">
              <strong className="text-navyblue">Payment Methods:</strong> We
              accept various payment methods as displayed on our platform. All
              payments are processed securely and in compliance with Payment
              Card Industry (PCI) standards.
            </p>
            <p className="text-bluegray mb-4 leading-8">
              <strong className="text-navyblue">Refunds:</strong> Refund
              policies are detailed in your plan description. Generally, we do
              not offer refunds for partial months unless otherwise specified.
              To request a refund, contact our support team within 7 days of the
              charge.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              <strong className="text-navyblue">Cancellation:</strong> You may
              cancel your subscription at any time through your account
              settings. Cancellation takes effect at the end of your current
              billing cycle. You will lose access to paid features upon
              cancellation.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              6. Intellectual Property Rights
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              My Laundry POS, including all software, features, functionality,
              designs, graphics, text, and content, is owned by My Laundry POS
              or its licensors and is protected by international intellectual
              property laws.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              You do not acquire any ownership rights to the platform or any
              content. Your license is limited to the rights expressly granted
              in these Terms. All rights not expressly granted are reserved.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              7. Data and Security
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              We implement security measures to protect your data, including
              encryption, secure servers, and access controls. However, no
              system is completely secure, and we cannot guarantee 100%
              protection against unauthorized access.
            </p>
            <p className="text-bluegray mb-4 leading-8">
              <strong className="text-navyblue">Data Backup:</strong> While we
              maintain regular backups, you are responsible for maintaining your
              own backups of critical business data. We recommend exporting your
              data regularly.
            </p>
            <p className="text-bluegray mb-4 leading-8">
              <strong className="text-navyblue">Data Retention:</strong> Upon
              account termination, we will retain your data for a period of 30
              days before permanent deletion, unless required by law to retain
              longer. You are responsible for exporting data before termination.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              <strong className="text-navyblue">GDPR Compliance:</strong> If you
              process data of EU residents, you agree to comply with GDPR
              requirements and our Data Processing Agreement.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              8. Third-Party Integrations
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              My Laundry POS may integrate with third-party services (payment
              processors, SMS providers, etc.). Your use of these services is
              subject to their terms and privacy policies. We are not
              responsible for third-party services, their availability, or data
              practices.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              We do not warrant that third-party integrations will always be
              available or error-free. Service disruptions from third parties
              are beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              9. Service Availability and Support
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              We strive to maintain 99% uptime but do not guarantee
              uninterrupted service. We may perform maintenance, updates, or
              upgrades with notice when possible, which may temporarily affect
              service availability.
            </p>
            <p className="text-bluegray mb-4 leading-8">
              <strong className="text-navyblue">Support:</strong> Customer
              support is available 24/7 via email and WhatsApp. Response times
              may vary depending on the complexity of your issue and support
              plan.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              We reserve the right to suspend service without notice if your
              account is used in violation of these Terms or for illegal
              purposes.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              To the maximum extent permitted by law, My Laundry POS and its
              officers, directors, employees, and agents are not liable for:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Service interruptions or data loss</li>
              <li>Unauthorized access or third-party interference</li>
              <li>
                Any damages arising from your use or misuse of the service
              </li>
            </ul>
            <p className="text-bluegray mb-6 leading-8">
              Except as required by law, our total liability shall not exceed
              the amount you paid for the service in the 12 months preceding the
              claim.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              11. Disclaimers
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              <strong className="text-navyblue">AS-IS BASIS:</strong> My Laundry
              POS is provided {`"as-is"`} without warranties of any kind,
              express or implied, including merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              <strong className="text-navyblue">NO WARRANTY:</strong> We do not
              warrant that the service will meet all your requirements, be error
              or virus-free, secure, or uninterrupted. You use the service at
              your own risk.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              <strong className="text-navyblue">BUSINESS DECISIONS:</strong> You
              are solely responsible for business decisions made using My
              Laundry POS. We provide the platform but do not assume liability
              for your business outcomes or financial results.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              12. Indemnification
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              You agree to indemnify and hold harmless My Laundry POS and its
              officers, directors, employees, and agents from any claims,
              damages, losses, or expenses (including legal fees) arising from:
              your use of the service, violation of these Terms, violation of
              applicable laws, infringement of third-party rights, or disputes
              over customer data.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              13. Prohibited Activities
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              You agree not to use My Laundry POS for:
            </p>
            <ul className="list-disc pl-6 text-bluegray space-y-2 mb-6">
              <li>Fraudulent, deceptive, or illegal transactions</li>
              <li>Money laundering or financing prohibited activities</li>
              <li>Collecting or processing payment with intent to defraud</li>
              <li>
                Violating laws related to consumer protection or sales tax
              </li>
              <li>Transmitting malware, viruses, or harmful code</li>
              <li>Harassing, threatening, or abusing staff or other users</li>
              <li>
                Any activity violating local, national, or international laws
              </li>
            </ul>
            <p className="text-bluegray mb-6 leading-8">
              Violation of this section may result in immediate suspension or
              termination of your account and potential legal action.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              14. Modifications to Service and Terms
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              My Laundry POS reserves the right to modify, suspend, or
              discontinue any part of the service with 30 days notice. Critical
              security updates may be deployed immediately.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              We may update these Terms at any time. Continued use of the
              service after updates constitutes acceptance of the new Terms. We
              will notify you of material changes via email or platform notice.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              15. Termination
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              <strong className="text-navyblue">By You:</strong> You may
              terminate your account at any time through your account settings.
              Termination takes effect at the end of your billing cycle.
            </p>
            <p className="text-bluegray mb-4 leading-8">
              <strong className="text-navyblue">By Us:</strong> We may
              immediately terminate or suspend your account if you violate these
              Terms, engage in illegal activity, or breach your payment
              obligations.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              Upon termination, your access to the service and your data ends.
              You have 30 days to export your data before permanent deletion.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              16. Jurisdiction and Dispute Resolution
            </h2>
            <p className="text-bluegray mb-4 leading-8">
              These Terms are governed by the laws of Nigeria, without regard to
              conflict of law principles. Any disputes arising from these Terms
              or your use of My Laundry POS shall be subject to the exclusive
              jurisdiction of the courts in Nigeria.
            </p>
            <p className="text-bluegray mb-6 leading-8">
              Before initiating legal proceedings, we encourage you to contact
              our support team to resolve disputes through negotiation.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              17. Entire Agreement
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              These Terms, along with our Privacy Policy and any additional
              agreements you have entered into, constitute the entire agreement
              between you and My Laundry POS regarding your use of the service.
              Any prior agreements, negotiations, or understandings are
              superseded by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              18. Severability
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall remain in full force
              and effect. We will replace the invalid provision with a valid
              provision that achieves the intended effect.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              19. Waiver
            </h2>
            <p className="text-bluegray mb-6 leading-8">
              Failure to enforce any provision of these Terms does not
              constitute a waiver of that provision or any other provision. Our
              rights under these Terms are cumulative and not exclusive.
            </p>

            <h2 className="text-2xl font-bold text-navyblue mt-10 mb-4">
              20. Contact Information
            </h2>
            <p className="text-bluegray mb-2 leading-8">
              For questions about these Terms or to report violations, please
              contact us:
            </p>
            <ul className="list-none text-bluegray space-y-2 mb-8">
              <li>
                <strong className="text-navyblue">Email:</strong>{" "}
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
            </ul>

            <div className="mt-12 pt-8 border-t border-lightblue">
              <p className="text-bluegray mb-4 leading-8">
                By using My Laundry POS, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Use. If you
                do not agree, please do not use the service.
              </p>
              <Link
                href="/privacy-policy"
                className="text-blue font-semibold hover:underline"
              >
                View our Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
