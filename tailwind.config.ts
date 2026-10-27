import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: {
          50: "#ffffff",
          100: "#f9fafb",
          200: "#f3f4f6",
          300: "#e5e7eb",
        },
        border: {
          subtle: "#e5e7eb",
          hover: "#d1d5db",
          active: "#dc2626",
        },
        primary: {
          DEFAULT: "#dc2626",
          light: "#ef4444",
          dark: "#b91c1c",
          glow: "rgba(220, 38, 38, 0.15)",
        },
        engineering: {
          red: "#dc2626",
          darkRed: "#991b1b",
          gray: "#4b5563",
          steel: "#6b7280",
          cad: "#b91c1c",
        },
        text: {
          primary: "#111827",
          secondary: "#4b5563",
          muted: "#6b7280",
          red: "#dc2626",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "'Cascadia Code'", "Consolas", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
        "blueprint-glow": "radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.07) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
