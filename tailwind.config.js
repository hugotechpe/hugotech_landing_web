import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E6B6B", // Verde bosque profundo - sabiduría y experiencia
        },
        secondary: {
          DEFAULT: "#F5F9F7", // Verde menta muy suave - calma y claridad
        },
        brand: {
          DEFAULT: "#C9A167", // Bronce envejecido - madurez y calidez
        },
        accent: {
          DEFAULT: "#7FADA9", // Verde agua sereno - calma y guía
        },
        sage: {
          DEFAULT: "#A8C5B8", // Salvia - quotes y highlights sutiles
        },
        dark: {
          DEFAULT: "#1E1E1E",
        },
        customgray: {
          DEFAULT: "#2B2B2B", // Más profundo sin ser negro - profesionalismo
        },
      },
      maxWidth: {
        '1400': '1400px', // ahora puedes usar max-w-1400
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        heading: ["var(--font-rubik)", "var(--font-sans)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;