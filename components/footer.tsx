"use client";

import { cn } from "@/lib/utils";

const footerLinks = {
  Product: [
    "Features",
    "CRM",
    "Website Builder",
    "Marketplace",
    "Pricing",
    "Integrations",
  ],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "Templates",
    "API",
  ],
  Legal: ["Privacy", "Terms", "Security", "Compliance"],
};

const socialLinks = [
  { name: "Twitter", icon: "𝕏" },
  { name: "LinkedIn", icon: "in" },
  { name: "Facebook", icon: "f" },
  { name: "Instagram", icon: "📷" },
];

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-brand-purple-400 to-brand-pink-400 bg-clip-text text-transparent">
                Celebratio
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              All-in-one platform for managing, marketing, and monetizing
              your business.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={cn(
                    "w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700",
                    "flex items-center justify-center",
                    "transition-all duration-300",
                    "hover:scale-110",
                  )}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Celebratio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
