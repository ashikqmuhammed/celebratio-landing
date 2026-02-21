"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ecosystemBlocks = [
  {
    title: "CRM",
    text: "Capture and manage leads, bookings, and client relationships",
    icon: "📊",
    gradient: "from-brand-purple-500 to-brand-purple-700",
    bgGradient: "from-brand-purple-50 to-brand-purple-100",
    darkBgGradient: "from-brand-purple-950/50 to-brand-purple-900/50",
  },
  {
    title: "Website Builder",
    text: "Create your branded vendor page with services and booking",
    icon: "🎨",
    gradient: "from-brand-pink-500 to-brand-pink-700",
    bgGradient: "from-brand-pink-50 to-brand-pink-100",
    darkBgGradient: "from-brand-pink-950/50 to-brand-pink-900/50",
  },
  {
    title: "Marketplace",
    text: "Get discovered by clients searching for event services",
    icon: "🛍️",
    gradient: "from-brand-orange-500 to-brand-orange-700",
    bgGradient: "from-brand-orange-50 to-brand-orange-100",
    darkBgGradient: "from-brand-orange-950/50 to-brand-orange-900/50",
  },
];

const FlowConnector = ({ className }: { className?: string }) => (
  <svg
    className={cn("w-full h-8 md:h-12", className)}
    viewBox="0 0 100 40"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M 50 0 L 50 40"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      className="text-gray-300 dark:text-gray-700"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </svg>
);

const HorizontalConnector = ({ className }: { className?: string }) => (
  <svg
    className={cn("w-full h-full", className)}
    viewBox="0 0 100 40"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M 0 20 L 100 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      className="text-gray-300 dark:text-gray-700"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </svg>
);

export function EcosystemSection() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white">
            Everything Your Event Business Needs — Connected
          </h2>
        </motion.div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden flex flex-col items-center">
          {ecosystemBlocks.map((block, index) => (
            <div key={block.title} className="w-full max-w-sm">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={cn(
                  "p-6 rounded-2xl",
                  "bg-gradient-to-br",
                  block.bgGradient,
                  "dark:bg-gradient-to-br",
                  block.darkBgGradient,
                  "border border-gray-200/50 dark:border-gray-800/50",
                  "shadow-md",
                )}
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4",
                    "bg-gradient-to-br",
                    block.gradient,
                    "text-2xl shadow-lg",
                  )}
                >
                  {block.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {block.title}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {block.text}
                </p>
              </motion.div>
              {index < ecosystemBlocks.length - 1 && (
                <div className="flex justify-center">
                  <FlowConnector />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal Row */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-0 md:items-center">
          {ecosystemBlocks.map((block, index) => (
            <>
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={cn(
                  "p-8 rounded-3xl",
                  "bg-gradient-to-br",
                  block.bgGradient,
                  "dark:bg-gradient-to-br",
                  block.darkBgGradient,
                  "border border-gray-200/50 dark:border-gray-800/50",
                  "shadow-md",
                  "h-full",
                )}
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6",
                    "bg-gradient-to-br",
                    block.gradient,
                    "text-4xl shadow-lg",
                  )}
                >
                  {block.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  {block.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {block.text}
                </p>
              </motion.div>
              {index < ecosystemBlocks.length - 1 && (
                <div className="w-16 h-12 flex items-center justify-center">
                  <HorizontalConnector />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
