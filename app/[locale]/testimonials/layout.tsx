import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios Reales: Historias de Transformación Tech | Hugo Casanova",
  description:
    "Lee historias reales de profesionales tech que crecieron con coaching y mentoring. Transformaciones auténticas de personas que se atrevieron a mirarse dentro para crecer afuera.",
  keywords: [
    "testimonios coaching tech",
    "historias transformación",
    "casos de éxito mentoring",
    "desarrollo profesional tech",
    "crecimiento personal tecnología",
    "coaching profesional Perú",
    "liderazgo consciente tech",
    "testimonios reales",
    "experiencias coaching",
    "resultados mentoring tech",
  ],
  openGraph: {
    title:
      "Testimonios Reales: Historias de Transformación Tech | Hugo Casanova",
    description:
      "200+ personas que confiaron, crecieron y se transformaron. Historias reales de profesionales tech que encontraron claridad y propósito.",
    type: "website",
  },
};

export default function TestimonialsLayout({
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
          message="Hola Hugo, me inspiraron los testimonios. Quiero agendar mi sesión gratuita"
        />
      </div>
    </>
  );
}
