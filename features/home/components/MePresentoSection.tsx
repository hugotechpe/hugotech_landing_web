"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import IconBoxCard from "@/components/cards/IconBoxCard";
import MentoringCoachingIcon from "@/common/icons/custom/MentoringCoachingIcon";
import EquiposAltoRendimientoIcon from "@/common/icons/custom/EquiposAltoRendimientoIcon";
import LiderazgoAgilTransformaIcon from "@/common/icons/custom/LiderazgoAgilTransformaIcon";



export function MePresentoSection() {
  const highlights = [
    {
      title: "Mentoring & Coaching Tech",
      description:
        "He guiado a 200+ talentos (backend, frontend, fullstack, midstack, DB, QA, mobile, UX/UI, PO, SM, líderes tech) a fortalecer su mentalidad, ganar dirección y mostrar su valor con seguridad.",
      Icon: MentoringCoachingIcon,
    },
    {
      title: "Equipos de Alto Rendimiento",
      description:
        "Trabajo con equipos para construir confianza, comunicación y feedback; aplico Management 3.0, Agile Team Facilitation, Scrum/Kanban, Lean y Agile HR para que el alto desempeño sea sostenible y humano.",
      Icon: EquiposAltoRendimientoIcon, // puedes cambiar a otro icono cuando lo tengas
    },
    {
      title: "Liderazgo Ágil que Transforma",
      description:
        "Acompaño a líderes y organizaciones en transformación digital y cultural, uniendo visión estratégica, datos y cultura para decidir mejor y ejecutar con foco.",
      Icon: LiderazgoAgilTransformaIcon,
    },
  ];
  return (
    <section
      id="mepresento"
      aria-label="Me Presento"
      itemScope
      itemType="https://schema.org/Person"
      className="scroll-mt-0 bg-primary"
    >
      <div className="bg-white rounded-t-[60px]">
        <div className="container mx-auto max-w-screen-2xl px-6 py-10 md:py-20">
          {/* Encabezado y presentación */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-customgray">
                Me Presento
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                <Chip color="primary" variant="flat" className="bg-primary/90 text-white font-semibold">
                  18+ años de experiencia
                </Chip>
                <Chip color="primary" variant="flat" className="bg-gray-200 text-customgray font-semibold">Mentoring • Coaching • Agilidad</Chip>
              </div>

              <div className="mt-6 space-y-4 text-black leading-relaxed text-sm" itemProp="description">
                <p>
                  Soy <strong itemProp="name">Hugo Casanova</strong>, peruano e <strong itemProp="jobTitle">ingeniero de sistemas</strong>.
                  Desde hace <strong>18+ años</strong> acompaño a talentos y equipos tech en LATAM y EE. UU. a crecer con
                  <strong> claridad, confianza y propósito</strong>.
                </p>
                <p>
                  Descubrí que lo que transforma no es solo el código, sino <strong>las personas que lo crean</strong>.
                  Por eso integro <strong>mentoring, coaching y agilidad</strong> para convertir habilidades humanas en resultados técnicos reales.
                </p>
              </div>
              <div className="mt-6 space-y-6" role="list">
                {highlights.map((item) => (
                  <IconBoxCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    headingAs="h3"
                  />
                ))}
              </div>
            </div>

            {/* Imagen de perfil */}
            <div className="relative">
              <div className="relative w-full max-w-md md:max-w-lg mx-auto">
                <Image
                  src="/images/image2.png"
                  alt="Foto de Hugo Casanova, mentor y coach en tecnología"
                  width={623}
                  height={563}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}