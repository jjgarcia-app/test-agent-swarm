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
        // Primitivos
        brand: {
          50:  "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5b9fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        // Semánticos
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        muted:       "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border:      "hsl(var(--border))",
        accent:      "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand":
          "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)",
      },
      animation: {
        "fade-in":    "fadeIn 0.5s ease-out forwards",
        "slide-up":   "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.4)" },
          "50%":       { boxShadow: "0 0 40px rgba(99,102,241,0.8)" },
        },
      },
      boxShadow: {
        glow:       "0 0 20px rgba(99,102,241,0.35)",
        "glow-lg":  "0 0 60px rgba(99,102,241,0.25)",
        "glow-cyan":"0 0 20px rgba(34,211,238,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;