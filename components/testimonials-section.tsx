"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Celebratio transformed how we manage our customer relationships. The CRM is intuitive and powerful.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    avatar: "👩‍💼",
  },
  {
    quote:
      "Building our website was incredibly easy. We went from idea to launch in just 2 days!",
    author: "Michael Chen",
    role: "Founder, Design Studio",
    avatar: "👨‍💻",
  },
  {
    quote:
      "The marketplace helped us reach thousands of new customers. Our revenue doubled in 3 months.",
    author: "Emily Rodriguez",
    role: "Owner, Creative Agency",
    avatar: "👩‍🎨",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Loved by
            <br />
            <span className="bg-gradient-to-r from-brand-purple-600 via-brand-pink-600 to-brand-orange-500 bg-clip-text text-transparent">
              Thousands of Businesses
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See what our customers have to say about their experience with
            Celebratio.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple-400 to-brand-pink-400 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
