import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";

import HomeLayout from "./HomeLayout";

import { InicioSection } from "@/features/home/components/InicioSection";
import { MePresentoSection } from "@/features/home/components/MePresentoSection";
import { FAQSection } from "@/features/home/components/FAQSection";
import { PorQueGratuitoSection } from "@/features/home/components/PorQueGratuitoSection";
import { CoachingTechFAQSection } from "@/features/home/components/CoachingTechFAQSection";
import { EmpresasSection } from "@/features/home/components/EmpresasSection";
import { CoachingSection } from "@/features/home/components/CoachingSection";
import { TestimoniosSection } from "@/features/home/components/TestimoniosSection";
import { PilaresSection } from "@/features/home/components/PilaresSection";
import {
  JsonLd,
  personSchema,
  organizationSchema,
  serviceSchema,
  aggregateRatingSchema,
  faqSchema,
} from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata, pageMetadata } from "@/lib/metadata";

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

// Lazy load ImpactSection (contador de impacto en tiempo real)
const ImpactSection = dynamic(
  () => import("@/features/home/components/ImpactSection"),
  {
    loading: () => (
      <div className="py-20 flex items-center justify-center">
        <p className="text-gray-400">Cargando impacto...</p>
      </div>
    ),
  },
);

// Metadata dinámica basada en locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const metaData = isSpanish ? pageMetadata.home.es : pageMetadata.home.en;

  return genMetadata({
    ...metaData,
    locale,
    path: "",
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Set locale para next-intl
  setRequestLocale(locale);

  // FAQ data para Schema.org (general)
  const faqData = [
    {
      question: "¿Qué hace un mentor de carrera tech?",
      answer:
        "Un mentor de carrera tech te acompaña a diseñar tu plan de carrera en tecnología, potenciar tus habilidades técnicas y de liderazgo, y navegar desafíos como la ansiedad por IA, burnout o síndrome del impostor. En HugoTech trabajamos 1-a-1 con desarrolladores, tech leads y managers para que crezcan sin sacrificar su salud mental. No es coaching genérico: es mentoría especializada para quienes lideran equipos o aspiran a hacerlo.",
    },
    {
      question: "¿Cómo ayuda HugoTech a evitar el burnout en tech?",
      answer:
        "El burnout tech no se resuelve con un fin de semana libre. Te ayudo a identificar las 7 señales tempranas (agotamiento crónico, cinismo, baja productividad), construir un plan anti-burnout de 30 días con límites digitales reales, y rediseñar tu semana laboral para rendir sin sacrificar tu bienestar. Si ya estás quemado, trabajamos juntos para recuperarte sin renunciar a tu carrera.",
    },
    {
      question: "¿Cuánto cuesta una sesión de coaching tech en Perú?",
      answer:
        "La primera sesión es 100% gratuita para que evalúes si mi método te sirve. Si decides continuar, cada sesión es S/35 soles (o USD $9) como donación voluntaria – 100% va a causas sociales (educación tech para comunidades vulnerables). No es caridad: es un modelo sostenible donde tú decides cuánto vale tu crecimiento. Si no puedes pagar, igual podemos conversar opciones.",
    },
    {
      question:
        "¿El mentoring tech es solo para juniors o también para seniors?",
      answer:
        "Trabajo con todo el espectro: desde developers junior buscando su primer trabajo remoto, hasta tech leads y engineering managers que necesitan escalar equipos sin morir en el intento. También acompaño a seniors estancados que quieren un career reset, y a introvertidos tech que lideran desde su estilo sin forzar extroversión. Si trabajas en tech y quieres crecer, este espacio es para ti.",
    },
    {
      question: "¿Las sesiones de mentoring son online o presenciales en Perú?",
      answer:
        "100% online por Zoom o Google Meet, para que puedas conectar desde cualquier lugar de América Latina (o el mundo). Trabajo con clientes en Perú, México, Colombia, Argentina, y también en español desde Estados Unidos. Las sesiones duran 60 minutos y puedes agendar en horarios flexibles según tu zona horaria.",
    },
  ];

  // FAQ data específico para Coaching Tech (SEO Featured Snippet)
  const coachingTechFAQData = [
    {
      question: "¿Qué es un Technical Coach?",
      answer:
        "Un Technical Coach es un profesional que ayuda a desarrolladores y líderes técnicos a crecer más allá de sus habilidades de programación. Se enfoca en desarrollar liderazgo, comunicación, gestión de carrera y bienestar mental en el contexto tech. A diferencia de un mentor técnico que te enseña código, un coach tech te ayuda a navegar decisiones de carrera, superar el síndrome del impostor y liderar equipos efectivamente.",
    },
    {
      question: "¿Cómo funciona el coaching para programadores?",
      answer:
        "El coaching para programadores consiste en sesiones 1-a-1 (generalmente 60-90 minutos) donde trabajas con un coach especializado en la industria tech. A través de preguntas poderosas y herramientas específicas, identificas tus objetivos profesionales, superas bloqueos mentales y diseñas un plan de acción concreto. No es teoría: cada sesión termina con tareas prácticas que aplicas inmediatamente en tu trabajo.",
    },
    {
      question: "¿Cuál es la diferencia entre mentoría y coaching tech?",
      answer:
        "La mentoría técnica se enfoca en enseñar habilidades específicas (frameworks, arquitectura, code reviews), mientras que el coaching tech trabaja en tu desarrollo como profesional integral: liderazgo, toma de decisiones, gestión de carrera y bienestar. Un mentor te dice 'cómo' hacer las cosas desde su experiencia; un coach te ayuda a descubrir 'tu propio cómo' que funcione para ti. Idealmente, los mejores programas combinan ambos enfoques.",
    },
    {
      question: "¿El coaching tech es para mí si soy senior?",
      answer:
        "¡Absolutamente! Los seniors son quienes más se benefician del coaching tech. Si eres senior o tech lead, probablemente ya dominas lo técnico, pero enfrentas desafíos nuevos: liderar sin autoridad formal, gestionar equipos distribuidos, comunicarte con stakeholders, decidir entre management o IC, o simplemente evitar el burnout mientras escalas. El coaching tech está diseñado precisamente para estas transiciones que las skills técnicas no resuelven.",
    },
  ];

  return (
    <>
      {/* Schemas JSON-LD para SEO */}
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={faqSchema(faqData)} />
      {/* Schema específico para Coaching Tech (Featured Snippet) */}
      <JsonLd data={faqSchema(coachingTechFAQData)} />

      <HomeLayout>
        <InicioSection />
        <MePresentoSection />
        <FAQSection />
        <PorQueGratuitoSection />
        <CoachingTechFAQSection />
        <PilaresSection />
        <EmpresasSection />
        <TestimoniosSection />
        <AgendaSection />
        <CoachingSection />
        <ImpactSection />
      </HomeLayout>
    </>
  );
}
