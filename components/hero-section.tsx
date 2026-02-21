"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EcosystemVisual = () => {
  const cards = [
    {
      label: "CRM",
      gradient: "from-brand-purple-500 to-brand-purple-700",
      position: "top-0 left-1/2 -translate-x-1/2",
      delay: 0,
    },
    {
      label: "Website",
      gradient: "from-brand-pink-500 to-brand-pink-700",
      position: "bottom-0 left-0",
      delay: 0.1,
    },
    {
      label: "Marketplace",
      gradient: "from-brand-orange-500 to-brand-orange-700",
      position: "bottom-0 right-0",
      delay: 0.2,
    },
  ];

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 150 80 L 100 220"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="text-gray-300 dark:text-gray-700"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M 150 80 L 200 220"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="text-gray-300 dark:text-gray-700"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </svg>

      {cards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: card.delay }}
          className={cn(
            "absolute",
            index === 0 ? "top-0 left-1/2 -translate-x-1/2" : "",
            index === 1 ? "bottom-0 left-0" : "",
            index === 2 ? "bottom-0 right-0" : "",
          )}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay,
            }}
            className={cn(
              "px-6 py-4 rounded-xl",
              "bg-gradient-to-br",
              card.gradient,
              "shadow-lg",
              "text-white font-semibold text-sm md:text-base",
            )}
          >
            {card.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6"
            >
              Run Your Event Business{" "}
              <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
                in One Ecosystem
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 md:mb-10"
            >
              CRM, Website Builder, and Marketplace — built for modern
              event vendors
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
                Start Free
              </button>

              <button
                className={cn(
                  "px-8 py-4 rounded-xl font-semibold text-base md:text-lg",
                  "bg-white dark:bg-gray-900",
                  "text-gray-900 dark:text-white",
                  "border-2 border-gray-300 dark:border-gray-700",
                  "hover:border-gray-400 dark:hover:border-gray-600",
                  "hover:shadow-lg transition-all duration-300",
                  "hover:scale-105 active:scale-95",
                )}
              >
                See How It Works
              </button>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <EcosystemVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
