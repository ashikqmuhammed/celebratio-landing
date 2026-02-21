"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

const footerLinks = {
  Product: [
    "CRM",
    "Website Builder",
    "Marketplace",
    "Pricing",
    "Features",
  ],
  Company: ["About", "Careers", "Blog", "Press", "Contact"],
  Resources: [
    "Help Center",
    "Documentation",
    "Guides",
    "API",
    "Community",
  ],
  Legal: ["Privacy", "Terms", "Security", "Cookies", "Compliance"],
};

const MobileColumn = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-gray-900 dark:text-white">
          {title}
        </span>
        <span
          className={cn(
            "text-gray-600 dark:text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className="pb-4 space-y-3">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export function FooterSection() {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="md:hidden">
          {Object.entries(footerLinks).map(([title, links]) => (
            <MobileColumn key={title} title={title} links={links} />
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-4 md:gap-8">
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Celebratio
          </p>
        </div>
      </div>
    </footer>
  );
}
