"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const crmFeatures = [
  {
    title: "Contact Management",
    description: "Centralize all customer data in one place",
  },
  {
    title: "Pipeline Tracking",
    description: "Visualize deals from lead to close",
  },
  {
    title: "Task Automation",
    description: "Automate repetitive workflows",
  },
  {
    title: "Analytics & Reports",
    description: "Data-driven insights at your fingertips",
  },
];

export function CRMSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-brand-purple-50 via-white to-brand-purple-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple-100 dark:bg-brand-purple-900/30 border border-brand-purple-200 dark:border-brand-purple-800 mb-6">
              <span className="text-2xl">📊</span>
              <span className="text-sm font-semibold text-brand-purple-700 dark:text-brand-purple-300">
                CRM Platform
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Manage Relationships
              <br />
              <span className="bg-gradient-to-r from-brand-purple-600 to-brand-purple-800 bg-clip-text text-transparent">
                That Drive Growth
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-10 leading-relaxed">
              Keep track of every customer interaction, automate your sales
              process, and close more deals with our powerful CRM tools.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8 md:mb-10">
              {crmFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple-500 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              className={cn(
                "px-8 py-4 rounded-xl font-semibold text-base md:text-lg",
                "bg-gradient-to-r from-brand-purple-600 to-brand-purple-700",
                "text-white shadow-lg shadow-brand-purple-500/25",
                "hover:shadow-xl hover:shadow-brand-purple-500/40",
                "transition-all duration-300",
                "hover:scale-105 active:scale-95",
              )}
            >
              Explore CRM Features
            </button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  </div>
                  <h3 className="text-white font-semibold text-lg md:text-xl">
                    Sales Pipeline
                  </h3>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 space-y-3">
                  {[
                    {
                      label: "New Leads",
                      value: "24",
                      color: "bg-brand-blue-500",
                    },
                    {
                      label: "Qualified",
                      value: "18",
                      color: "bg-brand-purple-500",
                    },
                    {
                      label: "Proposal",
                      value: "12",
                      color: "bg-brand-pink-500",
                    },
                    {
                      label: "Closed",
                      value: "8",
                      color: "bg-brand-orange-500",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                    >
                      <div
                        className={cn("w-2 h-2 rounded-full", item.color)}
                      ></div>
                      <span className="flex-1 text-sm md:text-base text-gray-700 dark:text-gray-300">
                        {item.label}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-xl md:rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-4 md:p-6"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-purple-600 to-brand-pink-600 bg-clip-text text-transparent mb-1">
                  +127%
                </div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  Conversion Rate
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
