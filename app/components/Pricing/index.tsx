import { BILLING_PLANS } from "./data";
import { PricingCard } from "./card";

export default function PricingSection() {
  return (
    <section className="px-5 py-14 md:py-30" id="pricing">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-5 leading-normal font-bold text-center text-gray-800 text-3xl md:text-6xl">
            Simple pricing for your business
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-gray-500">
            We are passionate about helping laundry businesses in Nigeria
            succeed with technology.
          </p>
        </div>

        <div>
          <div className="mt-12 relative space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-6xl lg:mx-auto lg:grid-cols-3 xl:grid-cols-3">
            {BILLING_PLANS.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
