import React from "react";
import { useMessages } from "next-intl";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import TestimonioCard from "@/components/cards/TestimonioCard";

export function TestimoniosHeaderSection() {
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
      className="scroll-mt-0 bg-[url('/images/imageBg.jpg')] bg-cover bg-center"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-customgray leading-tight">Testimonios</h2>
          <p className="text-base md:text-lg text-customgray mt-4 leading-[1.9] tracking-wide max-w-3xl">Personas a las que hemos tenido la oportunidad de apoyar en su camino hacia el mundo de la tecnología.</p>
      </div>
    </section>
  );
}