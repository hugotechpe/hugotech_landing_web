"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import IconBoxCard from "@/components/cards/IconBoxCard";
import MentoringCoachingIcon from "@/common/icons/custom/MentoringCoachingIcon";
import EquiposAltoRendimientoIcon from "@/common/icons/custom/EquiposAltoRendimientoIcon";
import LiderazgoAgilTransformaIcon from "@/common/icons/custom/LiderazgoAgilTransformaIcon";
import { useMessages } from "next-intl";
import { IconComponentMap, IconKey } from "@/features/home/enums/icons";



export function PilaresSection() {
  const messages = useMessages() as any;

  // Eliminado iconMap local, usamos el enum y mapa compartido
  const sectionTitle = messages?.Sections?.Pilares?.title ?? "Los 6 pilares de la experiencia HugoTech";
  const items = (messages?.Sections?.Pilares?.items ?? []) as Array<{ title: string; description: string; iconKey?: string }>;

  return (
    <section
      id="pilares"
      aria-label={sectionTitle}
      itemScope
      itemType="https://schema.org/Person"
      className="scroll-mt-0 bg-white"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        {/* Encabezado y presentación */}
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-start gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-customgray">
              {sectionTitle}
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {items.map((item) => (
                <div key={item.title} role="listitem">
                  <IconBoxCard
                    title={item.title}
                    description={item.description}
                    Icon={item.iconKey ? IconComponentMap[item.iconKey as IconKey] : undefined}
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