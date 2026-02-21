import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    purple: {
                        50: "#faf5ff",
                        100: "#f3e8ff",
                        200: "#e9d5ff",
                        300: "#d8b4fe",
                        400: "#c084fc",
                        500: "#a855f7",
                        600: "#9333ea",
                        700: "#7e22ce",
                        800: "#6b21a8",
                        900: "#581c87",
                    },
                    pink: {
                        50: "#fdf2f8",
                        100: "#fce7f3",
                        200: "#fbcfe8",
                        300: "#f9a8d4",
                        400: "#f472b6",
                        500: "#ec4899",
                        600: "#db2777",
                        700: "#be185d",
                        800: "#9f1239",
                        900: "#831843",
                    },
                    orange: {
                        50: "#fff7ed",
                        100: "#ffedd5",
                        200: "#fed7aa",
                        300: "#fdba74",
                        400: "#fb923c",
                        500: "#f97316",
                        600: "#ea580c",
                        700: "#c2410c",
                        800: "#9a3412",
                        900: "#7c2d12",
                    },
                    blue: {
                        50: "#eff6ff",
                        100: "#dbeafe",
                        200: "#bfdbfe",
                        300: "#93c5fd",
                        400: "#60a5fa",
                        500: "#3b82f6",
                        600: "#2563eb",
                        700: "#1d4ed8",
                        800: "#1e40af",
                        900: "#1e3a8a",
                    },
                },
            },
            borderRadius: {
                sm: "4px",
                DEFAULT: "8px",
                md: "8px",
                lg: "12px",
                xl: "16px",
                "2xl": "24px",
                "3xl": "32px",
            },
            spacing: {
                xs: "4px",
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "32px",
                "2xl": "48px",
                "3xl": "64px",
            },
            boxShadow: {
                sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                DEFAULT: "0 2px 4px 0 rgb(0 0 0 / 0.1)",
                md: "0 2px 4px 0 rgb(0 0 0 / 0.1)",
                lg: "0 4px 8px 0 rgb(0 0 0 / 0.15)",
                xl: "0 8px 16px 0 rgb(0 0 0 / 0.2)",
                "2xl": "0 12px 24px 0 rgb(0 0 0 / 0.25)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
