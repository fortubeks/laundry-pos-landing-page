const AMOUNTS = {
  starter: {
    monthly: 3500,
    yearly: 0,
  },
  growth: {
    monthly: 14500,
    yearly: 144,
  },
  enterprise: {
    monthly: null,
    yearly: null,
  },
};

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];
export const BILLING_PLANS = [
  {
    name: "Starter",
    description:
      "Perfect for individuals laundry businesses starting out and needing essential features.",
    pricing: {
      monthly: {
        amount: AMOUNTS["starter"]["monthly"],
        formattedPrice: "₦" + AMOUNTS["starter"]["monthly"],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS["starter"]["yearly"],
        formattedPrice: "₦" + AMOUNTS["starter"]["yearly"],
        stripeId: null,
      },
    },
    features: [
      "Single Branch",
      "Unlimited Orders",
      "Basic Reports & Analytics",
      "Customer Management",
      "Email Support",
    ],
    cta: "Try Starter",
    popular: false,
  },
  {
    name: "Growth",
    description:
      "Ideal for growing laundry businesses that need more capacity and advanced features.",
    pricing: {
      monthly: {
        amount: AMOUNTS["growth"]["monthly"],
        formattedPrice: "₦" + AMOUNTS["growth"]["monthly"],
        stripeId: process.env.NEXT_PUBLIC_GROWTH_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS["growth"]["yearly"],
        formattedPrice: "₦" + AMOUNTS["growth"]["yearly"],
        stripeId: process.env.NEXT_PUBLIC_GROWTH_YEARLY_PRICE_ID!,
      },
    },
    features: [
      "Everything in Starter",
      "Multi-Branch Support",
      "Staff & Role Management",
      "Inventory Tracking",
      "Automated SMS/WhatsApp Alerts",
      "Priority Support",
    ],
    cta: "Get Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    description:
      "Tailored solutions for large laundry businesses with custom needs and dedicated support.",
    pricing: {
      monthly: {
        amount: AMOUNTS["enterprise"]["monthly"],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS["enterprise"]["yearly"],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      "Everything in Growth",
      "Advanced Custom Features",
      "API Integrations",
      "Dedicated Account Manager",
      "Custom Analytics Dashboards",
      "24/7 Dedicated Support",
    ],
    cta: "Contact sales",
    popular: false,
  },
];
