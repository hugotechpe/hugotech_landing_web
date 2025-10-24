"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import IconBoxCard from "@/components/cards/IconBoxCard";
import MentoringCoachingIcon from "@/common/icons/custom/MentoringCoachingIcon";
import EquiposAltoRendimientoIcon from "@/common/icons/custom/EquiposAltoRendimientoIcon";
import LiderazgoAgilTransformaIcon from "@/common/icons/custom/LiderazgoAgilTransformaIcon";



export function PilaresSection() {
  const highlights = [
    {
      title: "Explora tu propósito y mentalidad tech",
      description:
        "Descubre tu motor interno, redefine tus creencias y conecta con la versión profesional que quieres construir. El cambio empieza dentro: de la claridad personal nace la dirección profesional.",
      Icon: MentoringCoachingIcon,
    },
    {
      title: "Diseña tu mapa de crecimiento",
      description:
        "Creamos juntos una hoja de ruta realista y ambiciosa. Qué aprender, cómo aplicarlo y cómo medir tu evolución sin perder el equilibrio entre propósito y resultados.",
      Icon: EquiposAltoRendimientoIcon, // puedes cambiar a otro icono cuando lo tengas
    },
    {
      title: "Activa tu liderazgo ágil y consciente",
      description:
        "Desarrolla habilidades para influir positivamente, comunicar con claridad y liderar desde la confianza. Integro prácticas de Management 3.0, facilitación ágil y coaching para inspirar sin imponer.",
      Icon: LiderazgoAgilTransformaIcon,
    },
    {
      title: "Fortalece tu cultura personal y colaborativa",
      description:
        "Aprende a construir relaciones de alto valor, donde el feedback, la empatía y la comunicación transparente sean parte del ADN. Equipos fuertes nacen de personas maduras emocional y profesionalmente.",
      Icon: MentoringCoachingIcon,
    },
    {
      title: "Construye una cultura data-driven",
      description:
        "Incorpora la toma de decisiones basada en evidencia y resultados. Analizamos métricas de desempeño, clima, calidad técnica y colaboración para impulsar la mejora continua.",
      Icon: EquiposAltoRendimientoIcon, // puedes cambiar a otro icono cuando lo tengas
    },
    {
      title: "Acelera resultados y rendimiento sostenibles",
      description:
        "Transforma la forma en que tú y tu equipo trabajan: entregas más efectivas, sprints con foco, menos deuda técnica y más innovación. Cuando las personas crecen, los resultados se multiplican.",
      Icon: LiderazgoAgilTransformaIcon,
    },
  ];
  return (
    <section
      id="pilares"
      aria-label="Los 6 pilares de la experiencia HugoTech"
      itemScope
      itemType="https://schema.org/Person"
      className="scroll-mt-0 bg-white"
    >
      <div className="container mx-auto max-w-screen-2xl px-6 py-10 md:py-20">
        {/* Encabezado y presentación */}
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-start gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-customgray">
              Los 6 pilares de la experiencia HugoTech
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {highlights.map((item) => (
                <div key={item.title} role="listitem">
                  <IconBoxCard
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    headingAs="h3"
                    classNameCardBody="flex-col"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Imagen de perfil */}
          <div className="relative h-full flex items-end justify-end">
            <div className="relative w-full max-w-sm md:max-w-md mx-auto">
              <Image
                src="/images/image5.png"
                alt="Foto de Hugo Casanova, mentor y coach en tecnología"
                width={520}
                height={375}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}