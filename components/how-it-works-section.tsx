"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1",
    icon: "🚀",
    title: "Join Celebratio",
    gradient: "from-brand-purple-500 to-brand-purple-700",
  },
  {
    number: "2",
    icon: "🎨",
    title: "Create Your Page",
    gradient: "from-brand-pink-500 to-brand-pink-700",
  },
  {
    number: "3",
    icon: "📈",
    title: "Get Leads",
    gradient: "from-brand-orange-500 to-brand-orange-700",
  },
  {
    number: "4",
    icon: "✅",
    title: "Manage Events",
    gradient: "from-brand-blue-500 to-brand-blue-700",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white">
            Start Growing in{" "}
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              4 Steps
            </span>
          </h2>
        </motion.div>

        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br",
                      step.gradient,
                      "text-white font-bold text-lg shadow-lg",
                    )}
                  >
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-6 mt-4 mb-4 h-8 w-0.5 bg-gray-300 dark:bg-gray-700" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4",
                  "bg-gradient-to-br",
                  step.gradient,
                  "text-white font-bold text-2xl shadow-lg",
                )}
              >
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 dark:bg-gray-700" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
