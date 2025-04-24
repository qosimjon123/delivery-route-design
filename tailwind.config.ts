
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import animatePlugin from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(220, 13%, 91%)",
        input: "hsl(216, 12%, 84%)",
        ring: "hsl(213, 94%, 68%)",
        background: "hsl(210, 20%, 98%)",
        foreground: "hsl(216, 15%, 15%)",
        primary: {
          DEFAULT: "hsl(213, 94%, 50%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(210, 40%, 96%)",
          foreground: "hsl(216, 15%, 35%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(210, 20%, 96%)",
          foreground: "hsl(216, 10%, 45%)",
        },
        accent: {
          DEFAULT: "hsl(210, 30%, 95%)",
          foreground: "hsl(216, 15%, 35%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(216, 15%, 15%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(216, 15%, 15%)",
        },
        success: {
          DEFAULT: "hsl(145, 80%, 42%)",
          foreground: "hsl(210, 40%, 98%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" }, 
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": { 
          "0%": { opacity: "1", transform: "translateY(0)" }, 
          "100%": { opacity: "0", transform: "translateY(10px)" }
        },
        "ping": {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "ping": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config
