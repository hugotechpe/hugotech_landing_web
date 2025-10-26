"use client";

import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";
import IconBoxCard from "@/components/cards/IconBoxCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useMessages, useTranslations } from "next-intl";
import { IconComponentMap, IconKey } from "@/features/home/enums/icons";

// Variantes de animación para scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function MePresentoSection() {
  const messages = useMessages() as any;
  const t = useTranslations("Sections.MePresento");
  const section = messages?.Sections?.MePresento ?? {};

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
      className="scroll-mt-0 bg-gradient-to-b from-primary via-primary to-white relative overflow-hidden"
    >
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-t-[60px] relative z-10">
        <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24">
          {/* Stats Bar Premium con AnimatedCounter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 md:mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <Card className="bg-gradient-to-br from-primary/10 to-brand/10 border-2 border-primary/20 hover:border-primary/40 transition-all" shadow="lg">
                  <CardBody className="text-center p-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <AnimatedCounter end={18} suffix="+" />
                    </div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">{t("stats.experience")}</p>
                  </CardBody>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <Card className="bg-gradient-to-br from-brand/10 to-yellow-100 border-2 border-brand/20 hover:border-brand/40 transition-all" shadow="lg">
                  <CardBody className="text-center p-6">
                    <div className="text-4xl md:text-5xl font-bold text-customgray mb-2">
                      <AnimatedCounter end={200} prefix="+" />
                    </div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">{t("stats.empowered")}</p>
                  </CardBody>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 hover:border-orange-300 transition-all" shadow="lg">
                  <CardBody className="text-center p-6">
                    <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                      <AnimatedCounter end={40} />
                    </div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">{t("stats.learning")}</p>
                  </CardBody>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-300 transition-all" shadow="lg">
                  <CardBody className="text-center p-6">
                    <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                      <AnimatedCounter end={1} />
                    </div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">{t("stats.community")}</p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Encabezado y presentación */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 lg:gap-16">
            {/* Columna izquierda con animación */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray leading-tight">
                {title}
              </h2>
              
              {subtitle && (
                <p className="mt-4 text-lg md:text-xl text-gray-600 italic font-light font-quote leading-relaxed">
                  {subtitle}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {chips.map((chip, idx) => (
                  <motion.div
                    key={chip}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Chip 
                      color="primary" 
                      variant="flat" 
                      className="bg-gradient-to-r from-primary to-[#0d4746] text-white font-semibold px-4 py-5 text-base"
                      size="lg"
                    >
                      {chip}
                    </Chip>
                  </motion.div>
                ))}
              </div>

              {/* Glassmorphism Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Card className="bg-white/60 backdrop-blur-xl border-2 border-primary/20 shadow-2xl" shadow="lg">
                  <CardBody className="p-6 md:p-8">
                    <div className="space-y-6 text-gray-700 text-base md:text-lg" itemProp="description">
                      {paragraphNodes.map((node, idx) => (
                        <p key={`p-${idx}`} className="text-[15px] md:text-[17px] leading-[2] tracking-wide">{node}</p>
                      ))}
                      
                      {/* Párrafo de vulnerabilidad agregado */}
                      <div className="mt-8 pt-8 border-t-2 border-primary/10">
                        <p className="text-gray-600 italic font-quote text-lg md:text-xl lg:text-2xl leading-[2] tracking-wide">
                          {t.rich("vulnerability.text", {
                            highlight1: (chunks) => <strong className="text-primary not-italic font-sans font-semibold">{chunks}</strong>,
                            highlight2: (chunks) => <strong className="text-primary not-italic font-sans font-semibold">{chunks}</strong>,
                          })}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Items con hover mejorado */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mt-8 space-y-4"
                role="list"
              >
                {items.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconBoxCard
                      title={item.title}
                      description={item.description}
                      Icon={item.iconKey ? IconComponentMap[item.iconKey as IconKey] : undefined}
                      headingAs="h3"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Imagen de perfil con efecto parallax sutil */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-md md:max-w-lg mx-auto"
              >
                {/* Efecto glow detrás de la imagen */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-brand/20 blur-3xl rounded-full transform scale-90" />
                
                <div className="relative">
                  <Image
                    src="/images/image2.png"
                    alt="Foto de Hugo Casanova, mentor y coach en tecnología"
                    width={623}
                    height={563}
                    className="object-cover w-full h-auto rounded-2xl shadow-2xl relative z-10"
                  />
                  
                  {/* Badge flotante */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-6 -right-6 z-20"
                  >
                    <Card className="bg-gradient-to-br from-brand to-yellow-400 shadow-2xl" shadow="lg">
                      <CardBody className="p-4 text-center">
                        <p className="text-3xl font-bold text-customgray">🎯</p>
                        <p className="text-sm font-bold text-customgray mt-1">Coach ICF</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
