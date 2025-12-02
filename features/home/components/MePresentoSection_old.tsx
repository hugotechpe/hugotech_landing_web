"use client";

import React from "react";
import Image from "next/image";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";

import IconBoxCard from "@/components/cards/IconBoxCard";
import { IconComponentMap, IconKey } from "@/features/home/enums/icons";

// Variantes de animación para scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MePresentoSection() {
  const messages = useMessages() as any;
  const t = useTranslations("Sections.MePresento");
  const section = messages?.Sections?.MePresento ?? {};

  // Eliminado iconMap local, usamos el enum y mapa compartido

  const title = section.title ?? "Me Presento";
  const subtitle = section.subtitle ?? "";
  const chips = (section.chips ?? [
    "18+ años de experiencia",
    "Mentoring • Coaching • Agilidad",
  ]) as string[];
  const items = (section.items ?? []) as Array<{
    title: string;
    description: string;
    iconKey?: string;
  }>;

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
      itemScope
      aria-label={title}
      className="scroll-mt-0 bg-primary"
      id="mepresento"
      itemType="https://schema.org/Person"
    >
      <div className="bg-white rounded-t-[60px]">
        <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
          {/* Encabezado y presentación */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
            {/* Columna izquierda con animación */}
            <motion.div
              initial="hidden"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="visible"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-customgray">
                {title}
              </h2>

              {subtitle && (
                <p className="mt-3 text-xl text-gray-600 italic">{subtitle}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-3">
                {chips.map((chip) => (
                  <Chip
                    key={chip}
                    className="bg-primary/90 text-white font-semibold"
                    color="primary"
                    variant="flat"
                  >
                    {chip}
                  </Chip>
                ))}
              </div>

              <div
                className="mt-6 space-y-4 text-black leading-relaxed text-base"
                itemProp="description"
              >
                {paragraphNodes.map((node, idx) => (
                  <p key={`p-${idx}`}>{node}</p>
                ))}
              </div>
              <div className="mt-6 space-y-6" role="list">
                {items.map((item) => (
                  <IconBoxCard
                    key={item.title}
                    Icon={
                      item.iconKey
                        ? IconComponentMap[item.iconKey as IconKey]
                        : undefined
                    }
                    description={item.description}
                    headingAs="h3"
                    title={item.title}
                  />
                ))}
              </div>
            </motion.div>

            {/* Imagen de perfil */}
            <motion.div
              className="relative"
              initial="hidden"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="visible"
            >
              <div className="relative w-full max-w-md md:max-w-lg mx-auto">
                <Image
                  alt="Foto de Hugo Casanova, mentor y coach en tecnología"
                  className="object-cover w-full h-auto"
                  height={563}
                  src="/images/image2.png"
                  width={623}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
