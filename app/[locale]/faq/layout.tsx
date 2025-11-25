import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { generateMetadata as genMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === "es";

  const metaData = isSpanish
    ? {
        title: "Preguntas Frecuentes | HugoTech - Mentoring Tech con Propósito",
        description:
          "Resuelve todas tus dudas sobre las sesiones de mentoring gratuitas, coaching con causa, programas empresariales y cómo comenzar tu transformación tech.",
        keywords: [
          "FAQ mentoring tech",
          "preguntas frecuentes coaching",
          "sesiones gratuitas",
          "coaching con causa",
          "mentoring empresas",
        ],
      }
    : {
        title:
          "Frequently Asked Questions | HugoTech - Tech Mentoring with Purpose",
        description:
          "Find answers to all your questions about free mentoring sessions, coaching with purpose, corporate programs, and how to start your tech transformation.",
        keywords: [
          "FAQ tech mentoring",
          "coaching questions",
          "free sessions",
          "purpose coaching",
          "corporate mentoring",
        ],
      };

  return genMetadata({
    ...metaData,
    locale,
    path: "/faq",
  });
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <HeroNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        <WhatsAppButton
          phoneNumber="51946483010"
          message="Hola Hugo, tengo algunas preguntas sobre el mentoring"
        />
      </div>
    </>
  );
}
