import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/features/**/*.{ts,tsx,mdx}",
    "./src/modules/**/*.{ts,tsx,mdx}",
    "./src/mocks/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3A",
          teal: "#0F6F72",
          blue: "#1F6FEB",
          gold: "#C9A227",
          sky: "#39B9CB",
          midnight: "#071427",
          aqua: "#1BB5C9",
          blush: "#F4C066",
        },
        neutral: {
          background: "#F4F7FA",
          surface: "#FFFFFF",
          border: "#E5E7EB",
          muted: "#6B7280",
          soft: "#EEF2F7",
        },
        accent: {
          coral: "#F26B5B",
          emerald: "#1AA37A",
          amber: "#F5A524",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0px 30px 60px -35px rgba(11, 31, 58, 0.35)",
        glow: "0 0 0 2px rgba(31, 111, 235, 0.08)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at top left, rgba(31, 111, 235, 0.22), transparent 55%), radial-gradient(circle at bottom right, rgba(57, 185, 203, 0.18), transparent 50%)",
        "brand-linear": "linear-gradient(120deg, #0B1F3A 0%, #1F6FEB 55%, #39B9CB 100%)",
        "surface-mesh":
          "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(244,247,250,0.9) 60%, rgba(244,247,250,1) 100%)",
        "grid-overlay":
          "linear-gradient(rgba(11, 31, 58, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 31, 58, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
