import { InicioSection } from "@/features/home/components/InicioSection";
import { MePresentoSection } from "@/features/home/components/MePresentoSection";
import { EmpresasSection } from "@/features/home/components/EmpresasSection";
import { CoachingSection } from "@/features/home/components/CoachingSection";
import { TestimoniosSection } from "@/features/home/components/TestimoniosSection";
import { PilaresSection } from "@/features/home/components/PilaresSection";
import { AgendaSection } from "@/features/home/components/AgendaSection";


export default function Home() {
  return (
    <>
      <InicioSection />
      <MePresentoSection />
      <EmpresasSection />
      <PilaresSection />
      <CoachingSection />
      <TestimoniosSection />
      <AgendaSection />
    </>
  );
}
