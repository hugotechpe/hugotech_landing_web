import { InicioSection } from "@/features/home/components/InicioSection";
import { MePresentoSection } from "@/features/home/components/MePresentoSection";
import { PorQueGratuitoSection } from "@/features/home/components/PorQueGratuitoSection";
import { EmpresasSection } from "@/features/home/components/EmpresasSection";
import { CoachingSection } from "@/features/home/components/CoachingSection";
import { TestimoniosSection } from "@/features/home/components/TestimoniosSection";
import { PilaresSection } from "@/features/home/components/PilaresSection";
import dynamic from 'next/dynamic';
import HomeLayout from "./homeLayout";
import { Metadata } from "next";

// Lazy load AgendaSection (contiene Calendly que es pesado)
const AgendaSection = dynamic(
  () => import("@/features/home/components/AgendaSection").then(mod => ({ default: mod.AgendaSection })),
  { 
    loading: () => <div className="h-screen flex items-center justify-center">Cargando...</div>,
    ssr: true // Keep SSR for SEO
  }
);

export const metadata: Metadata = {
  title: "HugoTech - Mentoring Tech con Propósito en la Era de la IA",
  description: "Acompaño a jóvenes talentos tech a encontrar su propósito profesional. Sesiones 1 a 1 gratuitas de coaching y mentoring tecnológico. Evita el burnout, construye una carrera sostenible.",
  keywords: ["mentoring tech", "coaching tecnológico", "desarrollo profesional", "mentalidad tech", "burnout tech", "carrera sostenible", "liderazgo ágil", "transformación digital"],
  authors: [{ name: "Hugo Casanova", url: "https://hugotech.pe" }],
  creator: "Hugo Casanova",
  publisher: "HugoTech",
  alternates: {
    canonical: "https://hugotech.pe",
    languages: {
      'es': 'https://hugotech.pe/es',
      'en': 'https://hugotech.pe/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    alternateLocale: ['en_US'],
    url: 'https://hugotech.pe',
    siteName: 'HugoTech',
    title: 'HugoTech - Mentoring Tech con Propósito',
    description: 'Acompaño a jóvenes talentos tech a encontrar su propósito profesional. Sesiones 1 a 1 gratuitas.',
    images: [
      {
        url: 'https://hugotech.pe/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HugoTech - Mentoring y Coaching Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HugoTech - Mentoring Tech con Propósito',
    description: 'Sesiones 1 a 1 gratuitas de coaching y mentoring tecnológico',
    images: ['https://hugotech.pe/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <HomeLayout>
        <InicioSection />
        <MePresentoSection />
        <PorQueGratuitoSection />
        <PilaresSection />
        <EmpresasSection />
        <CoachingSection />
        <TestimoniosSection />
        <AgendaSection />
      </HomeLayout>
    </>
  );
}
