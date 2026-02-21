"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: "📊",
    title: "Powerful CRM",
    description:
      "Manage customers, track leads, and close deals faster with our intuitive customer relationship management system.",
    gradient: "from-brand-purple-500 to-brand-purple-700",
    bgGradient: "from-brand-purple-50 to-brand-purple-100",
    darkBgGradient: "from-brand-purple-950/50 to-brand-purple-900/50",
  },
  {
    icon: "🎨",
    title: "Website Builder",
    description:
      "Create stunning, professional websites in minutes with our drag-and-drop builder. No coding required.",
    gradient: "from-brand-pink-500 to-brand-pink-700",
    bgGradient: "from-brand-pink-50 to-brand-pink-100",
    darkBgGradient: "from-brand-pink-950/50 to-brand-pink-900/50",
  },
  {
    icon: "🛍️",
    title: "Marketplace",
    description:
      "Connect with customers and grow your revenue through our thriving business marketplace ecosystem.",
    gradient: "from-brand-orange-500 to-brand-orange-700",
    bgGradient: "from-brand-orange-50 to-brand-orange-100",
    darkBgGradient: "from-brand-orange-950/50 to-brand-orange-900/50",
  },
];

export function Features() {
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
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              In One Platform
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stop juggling multiple tools. Celebratio brings together CRM,
            website building, and marketplace in one seamless experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  "group relative h-full p-6 md:p-8 rounded-2xl md:rounded-3xl",
                  "bg-gradient-to-br",
                  feature.bgGradient,
                  "dark:bg-gradient-to-br",
                  feature.darkBgGradient,
                  "border border-gray-200/50 dark:border-gray-800/50",
                  "hover:shadow-xl transition-all duration-300",
                  "hover:scale-[1.02] active:scale-[0.98]",
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl mb-4 md:mb-6",
                    "bg-gradient-to-br",
                    feature.gradient,
                    "text-3xl md:text-4xl",
                    "shadow-lg",
                    "group-hover:scale-110 transition-transform duration-300",
                  )}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 md:mt-6 flex items-center text-sm md:text-base font-semibold">
                  <span
                    className={cn(
                      "bg-gradient-to-r bg-clip-text text-transparent",
                      feature.gradient,
                    )}
                  >
                    Learn more
                  </span>
                  <motion.span
                    className={cn(
                      "ml-2 bg-gradient-to-r bg-clip-text text-transparent",
                      feature.gradient,
                    )}
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6">
            Join thousands of businesses already growing with Celebratio
          </p>
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
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}
