import { InicioSection } from "@/features/home/components/InicioSection";
import { MePresentoSection } from "@/features/home/components/MePresentoSection";
import { PorQueGratuitoSection } from "@/features/home/components/PorQueGratuitoSection";
import { EmpresasSection } from "@/features/home/components/EmpresasSection";
import { CoachingSection } from "@/features/home/components/CoachingSection";
import { TestimoniosSection } from "@/features/home/components/TestimoniosSection";
import { PilaresSection } from "@/features/home/components/PilaresSection";
import { AgendaSection } from "@/features/home/components/AgendaSection";
import HomeLayout from "./homeLayout";


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
