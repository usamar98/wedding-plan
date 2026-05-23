import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "oklch(0.145 0.012 52)",
        espresso: "oklch(0.21 0.025 47)",
        ink: "oklch(0.25 0.018 55)",
        pearl: "oklch(0.96 0.01 78)",
        sand: "oklch(0.82 0.04 76)",
        mutedGold: "oklch(0.72 0.09 82)",
        smoke: "oklch(0.72 0.014 70)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 30px 90px -45px rgba(20, 12, 6, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
