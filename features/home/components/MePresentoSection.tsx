"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import IconBoxCard from "@/components/cards/IconBoxCard";
import MentoringCoachingIcon from "@/common/icons/custom/MentoringCoachingIcon";
import EquiposAltoRendimientoIcon from "@/common/icons/custom/EquiposAltoRendimientoIcon";
import LiderazgoAgilTransformaIcon from "@/common/icons/custom/LiderazgoAgilTransformaIcon";
import { useMessages, useTranslations } from "next-intl";
import { IconComponentMap, IconKey } from "@/features/home/enums/icons";



export function MePresentoSection() {
  const messages = useMessages() as any;
  const t = useTranslations("Sections.MePresento");
  const section = messages?.Sections?.MePresento ?? {};

  // Eliminado iconMap local, usamos el enum y mapa compartido

  const title = section.title ?? "Me Presento";
  const subtitle = section.subtitle ?? "";
  const chips = (section.chips ?? ["18+ años de experiencia", "Mentoring • Coaching • Agilidad"]) as string[];
  const items = (section.items ?? []) as Array<{ title: string; description: string; iconKey?: string }>;

  const paragraphNodes = [
    t.rich("paragraphs.p1", {
      b: (chunks) => <strong>{chunks}</strong>,
      name: (chunks) => <strong itemProp="name">{chunks}</strong>,
      job: (chunks) => <strong itemProp="jobTitle">{chunks}</strong>,
    }),
    t.rich("paragraphs.p2", {
      b: (chunks) => <strong>{chunks}</strong>,
    }),
  ];

  return (
    <section
      id="mepresento"
      aria-label={title}
      itemScope
      itemType="https://schema.org/Person"
      className="scroll-mt-0 bg-primary"
    >
      <div className="bg-white rounded-t-[60px]">
        <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
          {/* Encabezado y presentación */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-customgray">
                {title}
              </h2>
              
              {subtitle && (
                <p className="mt-3 text-xl text-gray-600 italic">
                  {subtitle}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-3">
                {chips.map((chip) => (
                  <Chip key={chip} color="primary" variant="flat" className="bg-primary/90 text-white font-semibold">
                    {chip}
                  </Chip>
                ))}
              </div>

              <div className="mt-6 space-y-4 text-black leading-relaxed text-base" itemProp="description">
                {paragraphNodes.map((node, idx) => (
                  <p key={`p-${idx}`}>{node}</p>
                ))}
              </div>
              <div className="mt-6 space-y-6" role="list">
                {items.map((item) => (
                  <IconBoxCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    Icon={item.iconKey ? IconComponentMap[item.iconKey as IconKey] : undefined}
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