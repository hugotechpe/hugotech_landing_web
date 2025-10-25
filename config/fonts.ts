import { Fira_Code as FontMono, DM_Sans as FontSans, Rubik as FontRubik } from "next/font/google";

// DM Sans como fuente principal (sans)
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

// Rubik para títulos puntuales
export const fontRubik = FontRubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
  display: "swap",
});
