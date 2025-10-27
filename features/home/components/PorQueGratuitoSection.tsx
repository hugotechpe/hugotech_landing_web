"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useTranslations, useMessages } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export function PorQueGratuitoSection() {
  const t = useTranslations("Sections.PorQueGratuito");
  const messages = useMessages() as any;
  const pgr = messages?.Sections?.PorQueGratuito ?? {};

  return (
    <section
      id="porquegratuito"
      aria-label={t("title")}
      className="scroll-mt-0 bg-gradient-to-b from-white via-[#F0FAF9] to-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24 relative z-10">
        {/* Encabezado principal de la sección */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-customgray mb-6">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {t.rich("intro", {
              b: (chunks) => <strong className="text-primary">{chunks}</strong>,
            })}
          </p>
        </motion.header>

        {/* Stats Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={scaleIn} whileHover={{ y: -5 }}>
              <Card className="bg-gradient-to-br from-primary to-[#0d4746] text-white" shadow="lg">
                <CardBody className="text-center p-8">
                  <div className="text-5xl mb-3">💚</div>
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter end={200} prefix="+" />
                  </div>
                  <p className="text-white/90 font-medium">{t("stats.mentored")}</p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -5 }}>
              <Card className="bg-gradient-to-br from-brand to-yellow-400" shadow="lg">
                <CardBody className="text-center p-8">
                  <div className="text-5xl mb-3">🎯</div>
                  <div className="text-4xl font-bold text-customgray mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-customgray/90 font-medium">{t("stats.freeSessions")}</p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -5 }}>
              <Card className="bg-gradient-to-br from-green-400 to-primary/80 text-white" shadow="lg">
                <CardBody className="text-center p-8">
                  <div className="text-5xl mb-3">🌱</div>
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter end={18} suffix="+" />
                  </div>
                  <p className="text-white/90 font-medium">{t("stats.experience")}</p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Contenedor de dos columnas: Mentoría 1 a 1 y Filosofía */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna izquierda: Mentoría 1 a 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div whileHover={{ scale: 1.02, rotateY: 2 }} transition={{ duration: 0.3 }}>
                <Card
                  as="article"
                  shadow="lg"
                  className="bg-gradient-to-br from-[#FFE8DB] to-[#FFD4B8] border-2 border-orange-200 h-full"
                >
                  <CardBody className="flex flex-col gap-4 text-customgray p-6 md:p-8">
                    {/* Icon badge */}
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-2">
                      <span className="text-4xl">🎓</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold font-heading">
                      {t("mentoriaCard.title")}
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-primary">
                      {t("mentoriaCard.subtitle")}
                    </p>
                    
                    <div className="space-y-4">
                      <p className="text-[15px] md:text-base leading-[1.9] tracking-wide">
                        {t.rich("mentoriaCard.p1", {
                          b: (chunks) => <span className="font-bold">{chunks}</span>,
                        })}
                      </p>
                      <p className="text-[15px] md:text-base leading-[1.9] tracking-wide">
                        {t.rich("mentoriaCard.p2", {
                          b: (chunks) => <span className="font-bold">{chunks}</span>,
                        })}
                      </p>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm md:text-base font-bold mb-3 text-primary uppercase tracking-wide">
                        {t("mentoriaCard.resultsTitle")}
                      </h4>
                      <ul className="space-y-3 text-customgray text-[14px] md:text-[15px]">
                        {(pgr?.mentoriaCard?.resultsItems ?? []).map(
                          (item: string, idx: number) => (
                            <li key={`res-${idx}`} className="flex items-start gap-3">
                              <span className="text-primary text-xl flex-shrink-0">✓</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6">
                      <Button
                        as={Link}
                        href="#cita"
                        size="lg"
                        className="bg-customgray text-white hover:bg-primary w-full font-semibold"
                      >
                        {t("mentoriaCard.ctaLabel")}
                      </Button>
                      <p className="mt-3 text-xs text-customgray/70 text-center">
                        {t("mentoriaCard.note")}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>

            {/* Columna derecha: Filosofía */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.02, rotateY: -2 }} transition={{ duration: 0.3 }}>
                <Card
                  as="article"
                  shadow="lg"
                  className="bg-gradient-to-br from-[#E0F6F5] to-[#C4F1EF] border-2 border-primary/30 h-full"
                >
                  <CardBody className="flex flex-col gap-4 text-customgray p-6 md:p-8">
                    {/* Icon badge */}
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-2">
                      <span className="text-4xl">💡</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold">
                      {t("filosofiaCard.title")}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      {t("filosofiaCard.subtitle")}
                    </p>
                    
                    <div className="space-y-3">
                      <p className="text-base">
                        {t.rich("filosofiaCard.p1", {
                          b: (chunks) => <span className="font-bold">{chunks}</span>,
                        })}
                      </p>
                      <p className="text-base">
                        {t.rich("filosofiaCard.p2", {
                          b: (chunks) => <span className="font-bold">{chunks}</span>,
                        })}
                      </p>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-base font-bold mb-3 text-primary">
                        {t("filosofiaCard.resultsTitle")}
                      </h4>
                      <ul className="space-y-3 text-customgray text-sm md:text-base">
                        {(pgr?.filosofiaCard?.resultsItems ?? []).map(
                          (item: string, idx: number) => (
                            <li key={`filo-${idx}`} className="flex items-start gap-3">
                              <span className="text-primary text-xl flex-shrink-0">✓</span>
                              <span>{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6">
                      {/* Glassmorphism quote */}
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-primary/20">
                        <p className="text-customgray italic text-sm text-center">
                          {t("filosofiaCard.note")}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Testimonial Quote con diseño mejorado - Efecto WOW */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gradient-to-br from-white via-primary/5 to-brand/10 border-2 border-primary/20 overflow-hidden relative" shadow="lg">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/20 to-transparent rounded-bl-[100px]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-[80px]" />
              
              <CardBody className="p-8 md:p-16 text-center relative z-10">
                {/* Quote icon con animación */}
                <motion.div 
                  className="text-6xl md:text-7xl mb-8"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  💬
                </motion.div>
                
                {/* Quote text con mejor tipografía */}
                <blockquote className="relative">
                  {/* Comillas decorativas */}
                  <span className="absolute -top-8 -left-4 md:-left-8 text-8xl text-primary/10 font-serif leading-none">"</span>
                  
                  <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-gray-800 mb-10 leading-[1.8] tracking-wide max-w-5xl mx-auto relative">
                    {t.rich("quote.text", {
                      highlight1: (chunks) => (
                        <motion.span 
                          className="text-primary not-italic font-semibold relative inline-block"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="relative z-10">{chunks}</span>
                          <span className="absolute inset-0 bg-primary/10 rounded -z-10 blur-sm" />
                        </motion.span>
                      ),
                      highlight2: (chunks) => (
                        <motion.span 
                          className="text-primary not-italic font-semibold relative inline-block"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="relative z-10">{chunks}</span>
                          <span className="absolute inset-0 bg-primary/10 rounded -z-10 blur-sm" />
                        </motion.span>
                      ),
                      highlight3: (chunks) => (
                        <motion.span 
                          className="text-brand not-italic font-bold relative inline-block"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="relative z-10">{chunks}</span>
                          <span className="absolute inset-0 bg-brand/20 rounded -z-10 blur-sm" />
                        </motion.span>
                      ),
                    })}
                  </p>
                  
                  <span className="absolute -bottom-8 -right-4 md:-right-8 text-8xl text-brand/10 font-serif leading-none">"</span>
                </blockquote>
                
                {/* Author con diseño elegante */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
                  <p className="text-lg md:text-xl text-customgray font-semibold tracking-wide">
                    {t("quote.author")}
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
