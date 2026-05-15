import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F1",
          100: "#F5EFE0",
          200: "#EBE2CD",
          300: "#D9CBA8",
        },
        clay: {
          400: "#B8946A",
          500: "#8B6F47",
          600: "#6B5435",
          700: "#4A3A24",
        },
        ink: {
          900: "#1C1814",
          700: "#3D362C",
          500: "#6B6157",
        },
        bone: "#FFFEFB",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      maxWidth: {
        content: "1400px",
      },
      transitionTimingFunction: {
        expensive: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
