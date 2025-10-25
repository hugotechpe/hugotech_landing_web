import React from "react";
import { useMessages } from "next-intl";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import TestimonioCard from "@/components/cards/TestimonioCard";

export function TestimoniosSection() {
  const messages = useMessages() as any;
  const section = messages?.Sections?.Testimonios ?? {};
  const metrics = section?.metrics ?? [];
  const title = section?.title ?? "Historias que Inspiran y Transforman 🌱✨";
  const intro = section?.intro ?? [];
  const cta = section?.cta ?? "Ver más testimonios";
  return (
    <section
      id="testimonios"
      aria-label="Testimonios"
      className="scroll-mt-0 bg-secondary"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-customgray">{title}</h2>
            <div className="mt-4 text-customgray text-base">
              {Array.isArray(intro) && intro.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-20" aria-label="Métricas de impacto">
              {Array.isArray(metrics) && metrics.map((m: {id: string; value: string; text: string}) => (
                <article key={m.id}>
                  <h3 className="text-3xl font-bold text-customgray">{m.value}</h3>
                  <p className="mt-4 text-customgray text-sm">{m.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <Button as={Link} href="/testimonios" size="lg" color="primary" variant="solid" className="mt-2 text-white bg-customgray">
                  {cta}
                </Button>
              </div>
              <div>
              </div>
            </div>     
          </div>
          <div>
            <TestimonioCard
              quote="Me ayudaste en mi carrera profesional, en sentirme como parte de una familia en un equipo de trabajo, a tener más confianza en mis habilidades y a ser cada día mejor a nivel profesional."
              authorName="Miguel Bustillos"
              authorAge={24}
              role="Software Engineer"
              linkedInUrl="https://www.linkedin.com/"
              avatarSrc="/images/image5.png"
              avatarAlt="Foto de perfil de Miguel Bustillos"
            />
          </div>
          </div>
      </div>
    </section>
  );
}