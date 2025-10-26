import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Historia: De Ingeniero a Guía de Transformación | Hugo Casanova",
  description:
    "Conoce la historia de Hugo Casanova, ingeniero peruano con 18+ años transformando equipos tech. De construir código a construir personas con propósito, liderazgo consciente y alma.",
  keywords: [
    "Hugo Casanova",
    "coach profesional ICF",
    "liderazgo tech Perú",
    "transformación digital",
    "mentoring tecnológico",
    "historia personal",
    "propósito profesional",
    "ingeniero peruano",
    "cultura ágil",
    "desarrollo de líderes",
  ],
  openGraph: {
    title: "Mi Historia: De Ingeniero a Guía de Transformación | Hugo Casanova",
    description:
      "18+ años transformando equipos tech con humanidad, propósito y excelencia. Conoce mi viaje desde el código hasta las personas.",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <HeroNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton
          phoneNumber="51946483010"
          message="Hola Hugo, me gustaría conocer más sobre tu historia y propósito"
        />
      </div>
    </>
  );
}
