import { InicioSection } from "@/features/home/components/InicioSection";
import { MePresentoSection } from "@/features/home/components/MePresentoSection";
import { PorQueGratuitoSection } from "@/features/home/components/PorQueGratuitoSection";
import { EmpresasSection } from "@/features/home/components/EmpresasSection";
import { CoachingSection } from "@/features/home/components/CoachingSection";
import { TestimoniosSection } from "@/features/home/components/TestimoniosSection";
import { PilaresSection } from "@/features/home/components/PilaresSection";
import { AgendaSection } from "@/features/home/components/AgendaSection";
import HomeLayout from "./homeLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio - Mentoring Tech con Propósito en la Era de la IA",
  description: "Acompaño a jóvenes talentos tech a encontrar su propósito profesional. Sesiones 1 a 1 gratuitas de coaching y mentoring tecnológico. Evita el burnout, construye una carrera sostenible.",
  alternates: {
    canonical: "https://hugotech.pe",
    languages: {
      'es': 'https://hugotech.pe/es',
      'en': 'https://hugotech.pe/en',
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
