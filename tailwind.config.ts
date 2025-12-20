import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#f5f7fb",
          100: "#e6ebf4",
          200: "#cbd5e7",
          300: "#a6b4d4",
          400: "#7a90b8",
          500: "#4f6596",
          600: "#3c4d76",
          700: "#2a3657",
          800: "#1c233b",
          900: "#11162a",
        },
        moss: {
          50: "#f2f7f2",
          100: "#deebde",
          200: "#bfd7c2",
          300: "#97bfa0",
          400: "#6a9c79",
          500: "#4c7f5e",
          600: "#3c6449",
          700: "#2f4b37",
          800: "#223428",
          900: "#161f1a",
        },
        accent: {
          500: "#f97316",
          600: "#ea580c",
        },
      },
      boxShadow: {
        soft: "0 12px 40px -24px rgba(17, 22, 42, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
