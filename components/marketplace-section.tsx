"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const vendors = [
  {
    name: "Elegant Events Co",
    category: "Wedding Planner",
    rating: "4.9",
    gradient: "from-brand-purple-500 to-brand-purple-700",
  },
  {
    name: "Bloom Florals",
    category: "Florist",
    rating: "5.0",
    gradient: "from-brand-pink-500 to-brand-pink-700",
  },
  {
    name: "Capture Moments",
    category: "Photography",
    rating: "4.8",
    gradient: "from-brand-orange-500 to-brand-orange-700",
  },
  {
    name: "Sweet Celebrations",
    category: "Catering",
    rating: "4.9",
    gradient: "from-brand-blue-500 to-brand-blue-700",
  },
  {
    name: "Sound & Light Pro",
    category: "AV Services",
    rating: "5.0",
    gradient: "from-brand-purple-500 to-brand-pink-600",
  },
  {
    name: "Dream Venues",
    category: "Venue",
    rating: "4.7",
    gradient: "from-brand-pink-500 to-brand-orange-600",
  },
];

export function MarketplaceSection() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Get Discovered by{" "}
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Appear in searches when clients look for event services
          </p>
        </motion.div>

        <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4">
          <div className="flex gap-4 min-w-max">
            {vendors.map((vendor, index) => (
              <motion.div
                key={vendor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-64"
              >
                <div
                  className={cn(
                    "p-6 rounded-2xl",
                    "bg-gray-50 dark:bg-gray-900",
                    "border border-gray-200 dark:border-gray-800",
                    "shadow-md",
                    "h-full",
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl mb-4",
                      "bg-gradient-to-br",
                      vendor.gradient,
                    )}
                  />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {vendor.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {vendor.category}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {vendor.rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className={cn(
                  "p-6 md:p-8 rounded-2xl",
                  "bg-gray-50 dark:bg-gray-900",
                  "border border-gray-200 dark:border-gray-800",
                  "shadow-md",
                  "h-full",
                )}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl mb-6",
                    "bg-gradient-to-br",
                    vendor.gradient,
                  )}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {vendor.name}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  {vendor.category}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {vendor.rating}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <button
            className={cn(
              "px-8 py-4 rounded-xl font-semibold text-base md:text-lg",
              "bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500",
              "text-white",
              "hover:shadow-xl transition-all duration-300",
              "hover:scale-105 active:scale-95",
              "shadow-lg",
            )}
          >
            Explore Marketplace
          </button>
        </motion.div>
      </div>
    </section>
  );
}
