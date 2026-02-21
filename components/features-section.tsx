"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: "📋",
    title: "Lead Management",
    text: "Track inquiries and convert them into bookings",
    gradient: "from-brand-purple-500 to-brand-purple-700",
  },
  {
    icon: "📅",
    title: "Event Tracking",
    text: "Manage event details, status, and timelines",
    gradient: "from-brand-pink-500 to-brand-pink-700",
  },
  {
    icon: "🎯",
    title: "Vendor Public Page",
    text: "Showcase services with your branded profile",
    gradient: "from-brand-orange-500 to-brand-orange-700",
  },
  {
    icon: "📬",
    title: "Booking Requests",
    text: "Receive and manage client booking inquiries",
    gradient: "from-brand-blue-500 to-brand-blue-700",
  },
  {
    icon: "💳",
    title: "Payments Tracking",
    text: "Monitor payments and outstanding balances",
    gradient: "from-brand-purple-500 to-brand-pink-600",
  },
  {
    icon: "📢",
    title: "Promotions",
    text: "Boost visibility with sponsored placement",
    gradient: "from-brand-pink-500 to-brand-orange-600",
  },
];

export function FeaturesSection() {
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
            Powerful Tools for Event Vendors
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "p-6 md:p-8 rounded-2xl",
                "bg-gray-50 dark:bg-gray-900",
                "border border-gray-200 dark:border-gray-800",
                "shadow-md",
                "md:hover:shadow-xl md:hover:-translate-y-1",
                "transition-all duration-300",
                "h-full",
              )}
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6",
                  "bg-gradient-to-br",
                  feature.gradient,
                  "text-2xl md:text-3xl",
                  "shadow-lg",
                )}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
