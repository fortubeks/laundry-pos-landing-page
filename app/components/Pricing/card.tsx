import { CheckIcon } from "./icons";
import GlowGradient from "./glow";
import type { TBILLING_PLAN } from "./data";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {
  plan: TBILLING_PLAN;
};

export function PricingCard({ plan }: Props) {
  return (
    <div className="relative">
      <div
        className={`bg-lightblue rounded-[20px] shadow-one h-full ${
          plan.popular ? "relative border-2 border-primary" : ""
        }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
              {plan.name}
            </h2>
            {plan.popular && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-50 text-blue bg-babyblue">
                Popular
              </span>
            )}
          </div>
          <p className="flex items-baseline mt-4">
            <span className="text-4xl font-semibold text-gray-800">
              {plan.pricing["monthly"].formattedPrice}
            </span>

            {!!plan.pricing["monthly"].amount && (
              <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                Per month
              </span>
            )}
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            {plan.description}
          </p>

          {plan.name.includes("Enterprise") ? (
            <ContactSalesLink name={plan.name}>{plan.cta}</ContactSalesLink>
          ) : (
            <a
              href={`https://wa.me/2349165426799?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(
                plan.name
              )}%20plan%20on%20laundryPos.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-8 py-3.5 mt-7 text-sm font-medium text-center rounded-full transition hover:bg-gray-900 bg-secondary text-white cursor-pointer z-10 relative"
            >
              {plan.cta}
            </a>
          )}
        </div>
        <div className="px-8 pb-7">
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <div className="flex-shrink-0 text-gray-500">
                  <CheckIcon />
                </div>

                <p className="ml-2 text-sm text-gray-800">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {plan.popular && (
        <GlowGradient className="absolute z-[1] -left-full -translate-x-20 top-0 max-lg:hidden" />
      )}
    </div>
  );
}

function ContactSalesLink({
  children,
  name,
}: PropsWithChildren<{ name: string }>) {
  return (
    <a
      href={`https://wa.me/2349165426799?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(
        name
      )}%20plan%20on%20laundryPos.`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full px-8 py-3.5 mt-7 text-sm font-medium text-center rounded-full transition hover:bg-gray-900 text-white bg-primary cursor-pointer"
    >
      {children}
    </a>
  );
}
