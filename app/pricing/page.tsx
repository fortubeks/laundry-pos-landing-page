import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "../components/Pricing";

export const metadata: Metadata = {
  title: "Pricing | My Laundry Point of Sale",
  description:
    "Simple and transparent Laundry POS pricing for starter, growth, and enterprise laundry businesses.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | My Laundry Point of Sale",
    description:
      "Compare My Laundry POS plans and pick the right package for your laundry business.",
    url: "https://mylaundrypos.com/pricing",
    siteName: "My Laundry Point of Sale",
    type: "website",
  },
};

const highlights = [
  {
    label: "Users",
    value: "100+",
    description: "Switching to our laundry POS software daily.",
  },
  {
    label: "Years of Experience",
    value: "5+",
    description: "In the laundry POS software industry.",
  },
  {
    label: "Support",
    value: "24/7",
    description: "Round-the-clock assistance for your team.",
  },
  {
    label: "Customer Satisfaction",
    value: "100%",
    description: "Our customers are highly satisfied with our service.",
  },
];

const featureSummary = [
  {
    title: "Cloud-Based Access",
    description: "Run your laundry from anywhere.",
  },
  {
    title: "Multi-Device Friendly",
    description: "Works on desktop, tablet, or smartphone.",
  },
  {
    title: "Order Tracking",
    description: "Monitor every order from drop-off to pickup.",
  },
  {
    title: "Reports and Analytics",
    description: "Track daily sales, top services, and balances.",
  },
  {
    title: "Customer Management",
    description: "Store customer profiles and purchase history.",
  },
  {
    title: "Multi-Branch Support",
    description: "Manage multiple outlets from one account.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-6 lg:px-8 pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-lightblue/40 via-white to-white" />
        <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-blue/10 blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-babyblue blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl">
          <p className="text-blue font-semibold tracking-wide uppercase text-sm">
            Pricing Plans
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-navyblue leading-tight max-w-4xl">
            Transparent pricing built for modern laundry businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-bluegray max-w-4xl">
            Choose a plan that matches your current growth stage. From single
            branch operations to multi-branch enterprises, My Laundry POS helps
            you simplify operations and scale with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="https://app.mylaundrypos.com/register"
              className="bg-blue hover:opacity-90 text-white font-medium py-3 px-6 rounded"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact-us"
              className="bg-white text-blue border border-lightblue font-medium py-3 px-6 rounded"
            >
              Talk To Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-lightblue bg-white p-6"
            >
              <p className="text-3xl font-bold text-navyblue">{item.value}</p>
              <h2 className="mt-2 text-lg font-semibold text-navyblue">
                {item.label}
              </h2>
              <p className="mt-2 text-sm text-bluegray">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <PricingSection />

      <section className="px-6 lg:px-8 py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-navyblue">
            Everything you need to run your laundry business
          </h2>
          <p className="mt-4 text-bluegray max-w-4xl leading-7">
            All plans are designed around real-world laundry workflows and the
            same product strengths showcased on our homepage.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureSummary.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-lightblue bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-navyblue">
                  {feature.title}
                </h3>
                <p className="mt-2 text-bluegray leading-7">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
