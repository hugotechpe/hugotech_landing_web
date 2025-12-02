"use client";

import React from "react";
import Image from "next/image";
import { useMessages } from "next-intl";
import { motion } from "framer-motion";

import IconBoxCard from "@/components/cards/IconBoxCard";
import { IconComponentMap, IconKey } from "@/features/home/enums/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export function PilaresSection() {
  const messages = useMessages() as any;

  // Eliminado iconMap local, usamos el enum y mapa compartido
  const sectionTitle =
    messages?.Sections?.Pilares?.title ??
    "Los 6 pilares de la experiencia HugoTech";
  const items = (messages?.Sections?.Pilares?.items ?? []) as Array<{
    title: string;
    description: string;
    iconKey?: string;
  }>;

  return (
    <section
      itemScope
      aria-label={sectionTitle}
      className="scroll-mt-0 bg-white"
      id="pilares"
      itemType="https://schema.org/Person"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        {/* Encabezado y presentación */}
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-start gap-10">
          <motion.div
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-customgray">
              {sectionTitle}
            </h2>

            <motion.div
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              role="list"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              whileInView="visible"
            >
              {items.map((item) => (
                <motion.div
                  key={item.title}
                  role="listitem"
                  variants={fadeInUp}
                >
                  <IconBoxCard
                    Icon={
                      item.iconKey
                        ? IconComponentMap[item.iconKey as IconKey]
                        : undefined
                    }
                    classNameCardBody="flex-col"
                    description={item.description}
                    headingAs="h3"
                    title={item.title}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Imagen de perfil */}
          <motion.div
            className="relative h-full flex items-end justify-end"
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            <div className="relative w-full max-w-sm md:max-w-md mx-auto">
              <Image
                alt="Foto de Hugo Casanova, mentor y coach en tecnología"
                className="object-cover w-full h-auto"
                height={375}
                src="/images/image5.png"
                width={520}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
