import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import {
  JsonLd,
  personSchema,
  getBreadcrumbSchema,
} from "@/components/seo/JsonLd";

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
  alternates: {
    canonical: "https://hugotech.pe/about",
    languages: {
      es: "https://hugotech.pe/es/about",
      en: "https://hugotech.pe/en/about",
    },
  },
  openGraph: {
    title: "Mi Historia: De Ingeniero a Guía de Transformación | Hugo Casanova",
    description:
      "18+ años transformando equipos tech con humanidad, propósito y excelencia. Conoce mi viaje desde el código hasta las personas.",
    type: "profile",
    url: "https://hugotech.pe/about",
    images: [
      {
        url: "https://hugotech.pe/images/hugo-casanova.jpg",
        width: 1200,
        height: 630,
        alt: "Hugo Casanova - Coach y Mentor Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Historia | Hugo Casanova",
    description:
      "18+ años transformando equipos tech con humanidad y propósito",
    images: ["https://hugotech.pe/images/hugo-casanova.jpg"],
  },
};

const breadcrumbData = [
  { name: "Inicio", url: "https://hugotech.pe" },
  { name: "Acerca de", url: "https://hugotech.pe/about" },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schemas JSON-LD específicos para About */}
      <JsonLd data={personSchema} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbData)} />

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
