import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D6362",
        },
        secondary: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
        },
        brand: {
          DEFAULT: "#F6CC76",
        },
        dark: {
          DEFAULT: "#1E1E1E",
        },
        customgray: {
          DEFAULT: "#333333",
        },
      },
      maxWidth: {
        '1400': '1400px', // ahora puedes usar max-w-1400
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;