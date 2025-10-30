import { InicioSection } from "@/features/home/components/InicioSection";
import { MePresentoSection } from "@/features/home/components/MePresentoSection";
import { PorQueGratuitoSection } from "@/features/home/components/PorQueGratuitoSection";
import { EmpresasSection } from "@/features/home/components/EmpresasSection";
import { CoachingSection } from "@/features/home/components/CoachingSection";
import { TestimoniosSection } from "@/features/home/components/TestimoniosSection";
import { PilaresSection } from "@/features/home/components/PilaresSection";
import dynamic from "next/dynamic";
import HomeLayout from "./homeLayout";
import { Metadata } from "next";
import {
  JsonLd,
  personSchema,
  organizationSchema,
  serviceSchema,
  aggregateRatingSchema,
} from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata, pageMetadata } from "@/lib/metadata";
import { setRequestLocale } from "next-intl/server";

// Lazy load AgendaSection (contiene Calendly que es pesado)
const AgendaSection = dynamic(
  () =>
    import("@/features/home/components/AgendaSection").then((mod) => ({
      default: mod.AgendaSection,
    })),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        Cargando...
      </div>
    ),
    ssr: true, // Keep SSR for SEO
  },
);

// Metadata dinámica basada en locale
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const metaData = isSpanish ? pageMetadata.home.es : pageMetadata.home.en;
  
  return genMetadata({
    ...metaData,
    locale,
    path: "",
  });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // Set locale para next-intl
  setRequestLocale(locale);
  return (
    <>
      {/* Schemas JSON-LD para SEO */}
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={aggregateRatingSchema} />

      <HomeLayout>
        <InicioSection />
        <MePresentoSection />
        <PorQueGratuitoSection />
        <PilaresSection />
        <EmpresasSection />
        <TestimoniosSection />
        <AgendaSection />
        <CoachingSection />
      </HomeLayout>
    </>
  );
}
