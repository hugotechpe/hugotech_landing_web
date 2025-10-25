"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { CalendlyButton } from "@/components/calendly/CalendlyButton";

export function InicioSection() {
  const t = useTranslations("Sections.Inicio");
  const locale = useLocale();
  
  return (
    <section
      id="inicio"
      aria-label={t("title")}
      className="scroll-mt-0 bg-primary"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-40">
          {/* Columna izquierda: contenido y CTA */}
          <div>
            <p className="inline-flex items-center rounded-full bg-brand text-gray-900 px-4 py-2 text-sm">
              {t("chipLabel")}
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
              {t("title")}
            </h2>

            <div className="mt-6 space-y-4 text-white leading-relaxed text-xl">
              <p>
                {t.rich("paragraphs.p1", {
                  b: (chunks) => <strong>{chunks}</strong>,
                  brand: (chunks) => <span className="font-semibold text-brand">{chunks}</span>,
                })}
              </p>
              <p>
                {t.rich("paragraphs.p2", {
                  b: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <CalendlyButton 
                text={t("ctas.mentoria")}
                variant="solid"
                color="default"
                size="lg"
                className="w-full sm:w-auto"
                utm={{
                  utmSource: "hugotech.pe",
                  utmMedium: "website",
                  utmCampaign: "hero_section_cta"
                }}
              />

              <Button
                as={Link}
                href={`/${locale}/about`}
                size="lg"
                color="primary"
                variant="bordered"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
              >
                {t("ctas.historia")}
              </Button>

              <Button
                as={Link}
                href={`/${locale}/empresas`}
                size="lg"
                color="primary"
                variant="solid"
                className="w-full sm:w-auto bg-[#115C5B] text-white hover:bg-[#183F33]"
              >
                {t("ctas.empresas")}
              </Button>
            </div>
          </div>

          {/* Columna derecha: imagen con tags flotantes */}
          <div className="relative">
            <div className="relative w-full max-w-md md:max-w-lg mx-auto">
              {/* Imagen principal */}
              <Image
                src="/images/image1.png"
                alt="Retrato de Hugo Casanova, mentor y coach tech"
                width={538}
                height={660}
                priority
                className="rounded-xl object-cover w-full h-auto"
              />
              
              {/* Tags Flotantes Animados */}
              
              {/* Tag 1: Fortalece tu líder interno - Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="hidden md:block absolute -left-20 top-16 z-10"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white rounded-2xl shadow-xl p-4 max-w-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-brand rounded-full p-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-customgray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-customgray text-sm">Fortalece tu líder interno</h3>
                      <p className="text-xs text-gray-600 mt-1">Guía tu carrera profesional hacia el crecimiento.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Tag 2: Pule/libera tu talento - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden md:block absolute -right-20 bottom-24 z-10"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="bg-white rounded-2xl shadow-xl p-4 max-w-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-customgray text-sm">Pule/libera tu talento</h3>
                      <p className="text-xs text-gray-600 mt-1">Te acompaño a desenvolverte en el mundo tech.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Tag 3: Coaching Anti-Burnout - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="hidden lg:block absolute -right-24 top-5 z-10"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="bg-white rounded-2xl shadow-xl p-4 max-w-[200px]"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-customgray text-sm">Anti-Burnout</h3>
                      <p className="text-xs text-gray-600 mt-1">Carrera sostenible</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}