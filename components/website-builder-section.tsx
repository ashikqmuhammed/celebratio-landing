"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PhoneMockup = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl">
        <div className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden">
          <div className="h-2 bg-gray-900 dark:bg-gray-800" />

          <div className="h-96 overflow-hidden relative">
            <motion.div
              animate={{ y: [0, -200, 0] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="space-y-4 p-4"
            >
              <div className="h-32 bg-gradient-to-r from-brand-purple-500 to-brand-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                Your Brand
              </div>

              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 bg-gray-100 dark:bg-gray-900 rounded-lg" />
                <div className="h-24 bg-gray-100 dark:bg-gray-900 rounded-lg" />
              </div>

              <div className="space-y-2">
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
              </div>

              <div className="h-12 bg-gradient-to-r from-brand-pink-500 to-brand-orange-500 rounded-lg flex items-center justify-center text-white font-semibold">
                Book Now
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-gray-100 dark:bg-gray-900 rounded" />
                <div className="h-16 bg-gray-100 dark:bg-gray-900 rounded" />
                <div className="h-16 bg-gray-100 dark:bg-gray-900 rounded" />
              </div>

              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function WebsiteBuilderSection() {
  const bullets = [
    "Templates ready",
    "Custom domain",
    "SEO optimized",
    "Booking enabled",
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <PhoneMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Your Own Event Website —{" "}
              <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
                Instantly
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Create a professional vendor page with services, branding,
              and booking
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-brand-purple-500 to-brand-pink-600 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
