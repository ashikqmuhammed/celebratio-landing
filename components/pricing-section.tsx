"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 1,000 contacts",
      "Basic CRM features",
      "1 website",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "79",
    description: "For growing businesses that need more power",
    features: [
      "Up to 10,000 contacts",
      "Advanced CRM & automation",
      "5 websites",
      "Priority support",
      "Custom domains",
      "Analytics & reports",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large teams with advanced needs",
    features: [
      "Unlimited contacts",
      "Full CRM suite",
      "Unlimited websites",
      "24/7 dedicated support",
      "White-label options",
      "API access",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a
            14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-brand-purple-600 to-brand-pink-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={cn(
                  "relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl",
                  "bg-white dark:bg-gray-900",
                  "border-2",
                  plan.popular
                    ? "border-brand-purple-500 shadow-2xl shadow-brand-purple-500/20"
                    : "border-gray-200 dark:border-gray-800",
                  "hover:shadow-xl transition-all duration-300",
                  plan.popular && "scale-105 md:scale-110",
                )}
              >
                {/* Plan Name */}
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                      ₹{plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={cn(
                    "w-full px-6 py-4 rounded-xl font-semibold text-base md:text-lg mb-8",
                    "transition-all duration-300",
                    "hover:scale-105 active:scale-95",
                    plan.popular
                      ? "bg-gradient-to-r from-brand-purple-600 to-brand-pink-600 text-white shadow-lg shadow-brand-purple-500/25 hover:shadow-xl hover:shadow-brand-purple-500/40"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",
                  )}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-purple-100 dark:bg-brand-purple-900/30 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-brand-purple-600 dark:text-brand-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400">
            All plans include 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
