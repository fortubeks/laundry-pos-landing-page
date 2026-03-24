import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "My Laundry POS, the leading laundry software and laundry management software that helps businesses streamline operations and grow revenue. Get started today.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us",
    description:
      "My Laundry POS, the leading laundry software and laundry management software that helps businesses streamline operations and grow revenue. Get started today.",
    url: "https://mylaundrypos.com/about-us",
    siteName: "My Laundry Point of Sale",
    type: "website",
  },
};

const industryChallenges = [
  "Misplaced or mismatched clothes due to manual tracking.",
  "Inconsistent order management and delayed deliveries.",
  "Limited visibility into revenue and staff performance.",
  "Difficulty managing multiple branches from one system.",
];

const corePrinciples = [
  {
    title: "Industry Innovation",
    description:
      "My Laundry POS is not generic software. It is purpose-built for laundry and dry-cleaning businesses, so every feature supports real operational workflows.",
  },
  {
    title: "Operational Simplicity Through Automation",
    description:
      "The platform simplifies complex daily activities by automating order tracking, billing, and activity management, replacing manual processes with efficient digital workflows.",
  },
  {
    title: "Growth Driven Technology",
    description:
      "My Laundry POS positions laundry software as a growth engine that helps owners improve turnaround time, enhance customer service, and maximize revenue opportunities.",
  },
  {
    title: "Scalability For Every Business Size",
    description:
      "From premium single-location cleaners to multi-branch enterprises, this laundry management software scales seamlessly as operations expand.",
  },
  {
    title: "Reliability And Business Control",
    description:
      "As dependable commercial laundry software, My Laundry POS delivers visibility, accountability, and data-driven decision making for long-term success.",
  },
];

const problemsSolved = [
  {
    title: "Disorganized Orders",
    description:
      "Manual records and disconnected tools often lead to mismatched clothes, delays, and customer dissatisfaction. My Laundry POS introduces structured digital tracking from intake to delivery.",
  },
  {
    title: "Limited Business Control",
    description:
      "Owners often struggle to monitor staff performance, branch activities, and daily revenue accurately. Our centralized dashboards and reports provide clear oversight for smarter planning.",
  },
  {
    title: "Revenue Leakage",
    description:
      "Manual billing and inconsistent pricing create income loss. My Laundry POS automates billing, payment tracking, and analytics to improve transaction accuracy and profitability.",
  },
];

const uniqueFeatures = [
  "Unlimited Orders",
  "Advanced Custom Reports and Analytics",
  "Multi Branch Support",
  "Staff and Role Management",
  "Inventory Tracking",
  "Automated SMS and WhatsApp Alerts",
  "API Integration",
  "Dedicated Account Manager",
];

const audienceGroups = [
  "Multi-branch laundry and dry-cleaning businesses managing high order volumes.",
  "Large commercial and industrial laundries that require automation and reporting.",
  "Premium single-location dry cleaners focused on modern customer experiences.",
  "Established laundry business owners ready to scale profitably.",
];

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-lightblue/40 via-white to-white" />
        <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-blue/10 blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-babyblue blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue font-semibold tracking-wide uppercase text-sm">
              About My Laundry POS
            </p>
            <h1 className="mt-4 text-4xl sm:text-4xl lg:text-5xl font-bold text-navyblue leading-tight max-w-4xl">
              My Laundry POS - Built To Power Modern Laundry Businesses
            </h1>
            <p className="mt-6 leading-8 text-bluegray max-w-4xl">
              My Laundry POS is a purpose-built laundry POS designed to help
              modern laundry and dry-cleaning businesses manage operations with
              clarity and efficiency. Unlike generic platforms, My Laundry POS
              delivers specialized laundry software created for real laundry
              operations, from order processing to performance tracking.
            </p>
            <p className="mt-4 leading-8 text-bluegray max-w-4xl">
              As advanced laundry management software and commercial laundry
              software, it helps businesses control daily activities, automate
              operations, and improve service delivery from a single platform.
              My Laundry POS empowers owners and managers to streamline
              processes, maintain full operational visibility, and build profit
              across Nigeria and worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="https://app.mylaundrypos.com/register"
                className="bg-blue hover:opacity-90 text-white font-medium py-3 px-6 rounded"
              >
                Get Started
              </Link>
              <Link
                href="/contact-us"
                className="bg-white text-blue border border-lightblue font-medium py-3 px-6 rounded"
              >
                Talk To Our Team
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1608806443077-278eb309dcc1?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern laundry facility with professional equipment"
              width={500}
              height={100}
              className="rounded-2xl shadow-xl object-cover w-full max-h-[700px]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-14">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <Image
              src="https://images.unsplash.com/photo-1632923565835-6582b54f2105?q=80&w=588&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional folding and organizing clean laundry"
              width={220}
              height={100}
              className="rounded-2xl shadow-lg object-cover w-full max-h-[500px]"
            />
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-navyblue">
              Our Story
            </h2>
            <p className="mt-4 text-bluegray leading-7">
              My Laundry POS was created after recognizing the everyday
              operational challenges faced by modern laundry and dry-cleaning
              businesses. Many operators still rely on manual systems or generic
              tools that do not support real laundry workflows.
            </p>
            <p className="mt-4 text-bluegray leading-7">
              To solve this, My Laundry POS was developed as dedicated laundry
              management software and scalable commercial laundry software for
              the industry. The goal is simple: automate operations, improve
              accountability, and support sustainable growth worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-navyblue">
            What My Laundry POS Stands For
          </h2>
          <p className="mt-4 text-bluegray max-w-4xl leading-7">
            My Laundry POS is built on clear principles that help laundry
            businesses operate smarter, grow faster, and maintain full
            operational control.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {corePrinciples.map((principle, index) => (
              <article
                key={principle.title}
                className="bg-white border border-lightblue rounded-xl p-6"
              >
                <p className="text-sm font-semibold text-blue">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-navyblue">
                  {principle.title}
                </h3>
                <p className="mt-3 text-bluegray leading-7">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navyblue">
              The Problem We Solve For Laundry Businesses
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {problemsSolved.map((problem) => (
              <article
                key={problem.title}
                className="rounded-xl border border-lightblue p-6 bg-white"
              >
                <h3 className="text-xl font-semibold text-navyblue">
                  {problem.title}
                </h3>
                <p className="mt-3 text-bluegray leading-7">
                  {problem.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
