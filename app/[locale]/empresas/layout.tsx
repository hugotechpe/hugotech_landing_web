import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transformación de Equipos Tech desde el SER | HugoTech Empresas",
  description: "Acompañamos equipos tecnológicos hacia el alto rendimiento con programas de cultura ágil, coaching ejecutivo y mentoring técnico. Transformamos personas, culturas y equipos tech con propósito.",
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
    "desarrollo de líderes tech"
  ],
  openGraph: {
    title: "Transformación de Equipos Tech desde el SER | HugoTech Empresas",
    description: "Programas de cultura ágil, coaching y mentoring para equipos tecnológicos. De equipos buenos a equipos extraordinarios.",
    type: "website",
  },
};

export default function EmpresasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <HeroNavbar />
        <main className="flex-grow">
          {children}
        </main>
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
