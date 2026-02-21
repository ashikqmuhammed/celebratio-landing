"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-brand-purple-50/30 to-brand-pink-50/30 dark:from-gray-950 dark:via-brand-purple-950/20 dark:to-brand-pink-950/20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-brand-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-brand-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-brand-purple-200 dark:border-brand-purple-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                All-in-One Business Platform
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-balance"
          >
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              Grow Your Business
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              With Celebratio
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance"
          >
            Complete CRM, powerful website builder, and thriving
            marketplace—all in one platform. Everything you need to manage,
            market, and monetize your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="https://chat.whatsapp.com/LyD4IUi9SM7AvKdNWx17Bz"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative px-8 py-4 rounded-xl font-semibold text-base sm:text-lg",
                "bg-gradient-to-r from-brand-purple-600 to-brand-pink-600",
                "text-white shadow-lg shadow-brand-purple-500/25",
                "hover:shadow-xl hover:shadow-brand-purple-500/40",
                "transition-all duration-300",
                "hover:scale-105 active:scale-95",
                "w-full sm:w-auto",
                "inline-block text-center",
              )}
            >
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-purple-700 to-brand-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <button
              className={cn(
                "px-8 py-4 rounded-xl font-semibold text-base sm:text-lg",
                "bg-white dark:bg-gray-900",
                "text-gray-900 dark:text-white",
                "border-2 border-gray-200 dark:border-gray-800",
                "hover:border-brand-purple-300 dark:hover:border-brand-purple-700",
                "hover:bg-gray-50 dark:hover:bg-gray-800",
                "transition-all duration-300",
                "hover:scale-105 active:scale-95",
                "w-full sm:w-auto",
              )}
            >
              Watch Demo
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 md:pt-12"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
              Trusted by 50+ businesses in India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                WedMeGood
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                WeddingBazaar
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                ShaadiDukaan
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                EventFAQs
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-brand-purple-500 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
