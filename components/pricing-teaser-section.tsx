"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    description: "Basic public page",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Customizable page + templates",
    highlighted: true,
  },
  {
    name: "Elite",
    description: "Premium branding + domain",
    highlighted: false,
  },
];

export function PricingTeaserSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white">
            Plans for Every{" "}
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              Vendor Stage
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div
                className={cn(
                  "relative p-8 rounded-2xl h-full",
                  "bg-gray-50 dark:bg-gray-900",
                  "border-2",
                  tier.highlighted
                    ? "border-transparent bg-gradient-to-br from-brand-purple-500/10 via-brand-pink-500/10 to-brand-orange-500/10"
                    : "border-gray-200 dark:border-gray-800",
                  "shadow-md",
                  tier.highlighted && "md:scale-105",
                )}
              >
                {tier.highlighted && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-purple-500 via-brand-pink-500 to-brand-orange-500 p-0.5">
                    <div className="w-full h-full rounded-2xl bg-gray-50 dark:bg-gray-900" />
                  </div>
                )}
                <div className="relative z-10">
                  {tier.highlighted && (
                    <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 text-white text-sm font-semibold mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                    {tier.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button
            className={cn(
              "px-8 py-4 rounded-xl font-semibold text-base md:text-lg",
              "bg-gray-900 dark:bg-white",
              "text-white dark:text-gray-900",
              "hover:bg-gray-800 dark:hover:bg-gray-100",
              "transition-all duration-300",
              "hover:scale-105 active:scale-95",
              "shadow-lg hover:shadow-xl",
            )}
          >
            View Pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
