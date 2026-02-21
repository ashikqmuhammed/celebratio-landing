"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Vendors Onboarded",
    gradient: "from-brand-purple-600 to-brand-purple-700",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Leads Generated",
    gradient: "from-brand-pink-600 to-brand-pink-700",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Events Managed",
    gradient: "from-brand-orange-600 to-brand-orange-700",
  },
];

const CountUp = ({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};

export function SocialProofSection() {
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
            Trusted by Growing{" "}
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              Event Businesses
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={cn(
                  "text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-3",
                  "bg-gradient-to-r bg-clip-text text-transparent",
                  stat.gradient,
                )}
              >
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
