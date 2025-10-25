import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import TestimonioCard from "@/components/cards/TestimonioCard";

export function TestimoniosSection() {
  return (
    <section
      id="testimonios"
      aria-label="Testimonios"
      className="scroll-mt-0 bg-secondary"
    >
      <div className="container mx-auto max-w-screen-2xl px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-customgray">Historias que Inspiran y Transforman 🌱✨</h2>
            <div className="mt-4 text-customgray text-base">
              <p>
                Cada historia es una prueba de que el talento florece cuando se combina con propósito, guía y mentalidad de crecimiento.
              </p>
              <p>
                Conoce cómo he acompañado a jóvenes profesionales, líderes y equipos tech a descubrir su potencial, fortalecer su liderazgo y generar impacto real en sus proyectos y carreras.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Métricas de impacto">
              <article className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-customgray">4,9/5</h3>
                <p className="mt-2 text-default-700 text-sm">
                  Experiencia valorada por su cercanía, claridad y resultados reales.
                  Cada sesión deja aprendizajes aplicables y un cambio visible en la forma de pensar y actuar.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-customgray">90 % de satisfacción</h3>
                <p className="mt-2 text-default-700 text-sm">
                  El 90 % de quienes han trabajado conmigo sienten una evolución tangible
                  en su mentalidad y desempeño profesional.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-customgray">+200 talentos guiados</h3>
                <p className="mt-2 text-default-700 text-sm">
                  Jóvenes tech, profesionales en transición y líderes de equipos que hoy trabajan
                  con más propósito, enfoque y confianza.
                </p>
              </article>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <Button as={Link} href="/es/testimonios" color="primary" variant="solid" className="mt-2">
                  Ver más testimonios
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