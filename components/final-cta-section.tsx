"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FinalCTASection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-500/10 via-brand-pink-500/10 to-brand-orange-500/10" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8 md:mb-12">
            Start Growing Your{" "}
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              Event Business Today
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.whatsapp.com/LyD4IUi9SM7AvKdNWx17Bz"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-8 py-4 rounded-xl font-semibold text-base md:text-lg",
                "bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500",
                "text-white",
                "hover:shadow-xl transition-all duration-300",
                "hover:scale-105 active:scale-95",
                "shadow-lg",
                "inline-block text-center",
              )}
            >
              Join Waitlist
            </a>

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
              Book Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
