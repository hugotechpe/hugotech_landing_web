import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import {
  JsonLd,
  serviceSchema,
  getBreadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Transformación de Equipos Tech desde el SER | HugoTech Empresas",
  description:
    "Acompañamos equipos tecnológicos hacia el alto rendimiento con programas de cultura ágil, coaching ejecutivo y mentoring técnico. Transformamos personas, culturas y equipos tech con propósito.",
  keywords: [
    "transformación equipos tech",
    "cultura ágil empresas",
    "coaching ejecutivo tecnología",
    "mentoring equipos desarrollo",
    "alto rendimiento tech",
    "liderazgo consciente tech",
    "equipos ágiles",
    "cultura organizacional tech",
    "acompañamiento técnico",
    "desarrollo de líderes tech",
  ],
  alternates: {
    canonical: "https://hugotech.pe/empresas",
    languages: {
      es: "https://hugotech.pe/es/empresas",
      en: "https://hugotech.pe/en/empresas",
    },
  },
  openGraph: {
    title: "Transformación de Equipos Tech desde el SER | HugoTech Empresas",
    description:
      "Programas de cultura ágil, coaching y mentoring para equipos tecnológicos. De equipos buenos a equipos extraordinarios.",
    type: "website",
    url: "https://hugotech.pe/empresas",
    images: [
      {
        url: "https://hugotech.pe/images/empresas-og.jpg",
        width: 1200,
        height: 630,
        alt: "Transformación de Equipos Tech - HugoTech Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transformación de Equipos Tech | HugoTech",
    description:
      "Cultura ágil, coaching ejecutivo y mentoring para equipos tech",
    images: ["https://hugotech.pe/images/empresas-og.jpg"],
  },
};

const breadcrumbData = [
  { name: "Inicio", url: "https://hugotech.pe" },
  { name: "Empresas", url: "https://hugotech.pe/empresas" },
];

export default function EmpresasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schemas JSON-LD para Empresas */}
      <JsonLd data={serviceSchema} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbData)} />

      <div className="relative flex flex-col min-h-screen">
        <HeroNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton
          phoneNumber="51946483010"
          message="Hola Hugo, quiero agendar una consultoría empresarial"
        />
      </div>
    </>
  );
}
