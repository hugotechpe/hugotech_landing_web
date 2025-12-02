import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Sections.Pricing" });

  const isSpanish = locale === "es";

  return {
    title: isSpanish
      ? "Mentoría Tech 1 a 1 | Primera Sesión Gratis | HugoTech"
      : "Tech Mentoring 1 on 1 | First Free Session | HugoTech",
    description: isSpanish
      ? "Mentoría tech personalizada con propósito. Primera sesión gratis. S/35 por sesión que van 100% a causas benéficas. Programas B2B para empresas tech."
      : "Personalized tech mentoring with purpose. First free session. Programs for individuals and B2B companies. Transform your tech career today.",
    keywords: [
      "mentoría tech perú",
      "coaching tecnológico",
      "mentor programación lima",
      "sesión gratuita mentoría tech",
      "carrera programador perú",
      "desarrollo profesional tech",
      "síndrome del impostor tech",
      "mentoría fullstack",
      "coaching propósito tech",
      "programas b2b empresas tech",
      "retención de talento tech",
      "seguridad psicológica equipos",
      "tech mentoring",
      "career coaching tech",
      "free mentoring session",
    ],
    openGraph: {
      title: isSpanish
        ? "Inversión en tu Crecimiento Tech con Propósito"
        : "Investment in Your Tech Growth with Purpose",
      description: isSpanish
        ? "Mentoría 1 a 1 para jóvenes talentos tech. Primera sesión gratis. Programas B2B para equipos que quieren crecer con alma."
        : "1 on 1 mentoring for tech talents. First free session. B2B programs for teams that want to grow with soul.",
      type: "website",
      locale: isSpanish ? "es_PE" : "en_US",
    },
  };
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroNavbar />
      <main className="relative">
        {children}
        <WhatsAppButton
          message="Hola! Quiero más información sobre la mentoría tech 🚀"
          position="bottom-right"
        />
      </main>
      <Footer />
    </>
  );
}
