import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Playfair_Display as FontHeading,
} from "next/font/google";

// Inter como fuente principal (más cálida y legible que DM Sans)
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Playfair Display para títulos Y quotes (serif elegante con italic para citas)
export const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

// Alias para mantener compatibilidad - quotes usan Playfair italic
export const fontQuote = fontHeading;

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
  display: "swap",
});
