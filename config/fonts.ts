import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Playfair_Display as FontHeading,
  Crimson_Text as FontQuote,
} from "next/font/google";

// Inter como fuente principal (más cálida y legible que DM Sans)
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Playfair Display para títulos (serif elegante - experiencia y credibilidad)
export const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Crimson Text para quotes y acentos (serif cálida)
export const fontQuote = FontQuote({
  subsets: ["latin"],
  variable: "--font-quote",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
  display: "swap",
});
