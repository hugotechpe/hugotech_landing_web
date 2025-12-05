"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";
import { GraduationCap, Lightbulb } from "lucide-react";

import { AnimatedCounter } from "@/components/AnimatedCounter";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function PorQueGratuitoSection() {
  const t = useTranslations("Sections.PorQueGratuito");
  const messages = useMessages() as any;

  const scrollToAgenda = (e: React.MouseEvent) => {
    e.preventDefault();
    const agendaSection = document.getElementById("cita");
    if (agendaSection) {
      agendaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const pgr = messages?.Sections?.PorQueGratuito ?? {};

  return (
    <section
      aria-label={t("title")}
      className="scroll-mt-0 bg-gradient-to-b from-white via-[#F0FAF9] to-white relative overflow-hidden"
      id="porquegratuito"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24 relative z-10">
        {/* Encabezado principal de la sección */}
        <motion.header
          className="mb-12 text-center"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
          whileInView="visible"
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
          className="mb-12"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={scaleIn} whileHover={{ y: -5 }}>
              <Card
                className="bg-gradient-to-br from-primary to-[#0d4746] text-white"
                shadow="lg"
              >
                <CardBody className="text-center p-8">
                  <div className="text-5xl mb-3">💚</div>
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter end={200} prefix="+" />
                  </div>
                  <p className="text-white/90 font-medium">
                    {t("stats.mentored")}
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -5 }}>
              <Card
                className="bg-gradient-to-br from-brand to-yellow-400"
                shadow="lg"
              >
                <CardBody className="text-center p-8">
                  <div className="text-5xl mb-3">🎯</div>
                  <div className="text-4xl font-bold text-customgray mb-2">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-customgray/90 font-medium">
                    {t("stats.freeSessions")}
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -5 }}>
              <Card
                className="bg-gradient-to-br from-green-400 to-primary/80 text-white"
                shadow="lg"
              >
                <CardBody className="text-center p-8">
                  <div className="text-5xl mb-3">🌱</div>
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter end={18} suffix="+" />
                  </div>
                  <p className="text-white/90 font-medium">
                    {t("stats.experience")}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Contenedor de dos columnas: Mentoría 1 a 1 y Filosofía */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna izquierda: Mentoría 1 a 1 */}
            <motion.div
              initial="hidden"
              variants={fadeInUp}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <motion.div
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
              >
                <Card
                  as="article"
                  className="bg-gradient-to-br from-[#FFE8DB] to-[#FFD4B8] border border-orange-200 h-full"
                  shadow="lg"
                >
                  <CardBody className="flex flex-col gap-3 text-customgray p-4 md:p-6">
                    {/* Icon badge */}
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-2">
                      <GraduationCap className="w-9 h-9 text-gray-800" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold font-heading">
                      {t("mentoriaCard.title")}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-primary">
                      {t("mentoriaCard.subtitle")}
                    </p>

                    <div className="space-y-4">
                      <p className="text-sm md:text-[15px] leading-[1.8] tracking-wide">
                        {t.rich("mentoriaCard.p1", {
                          b: (chunks) => (
                            <span className="font-bold">{chunks}</span>
                          ),
                        })}
                      </p>
                      <p className="text-sm md:text-[15px] leading-[1.8] tracking-wide">
                        {t.rich("mentoriaCard.p2", {
                          b: (chunks) => (
                            <span className="font-bold">{chunks}</span>
                          ),
                        })}
                      </p>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm md:text-sm font-bold mb-2 text-primary uppercase tracking-wide">
                        {t("mentoriaCard.resultsTitle")}
                      </h4>
                      <ul className="space-y-2 text-customgray text-sm md:text-[14px]">
                        {(pgr?.mentoriaCard?.resultsItems ?? []).map(
                          (item: string, idx: number) => (
                            <li
                              key={`res-${idx}`}
                              className="flex items-start gap-3"
                            >
                              <span className="text-primary text-xl flex-shrink-0">
                                ✓
                              </span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4">
                      <Button
                        className="bg-customgray text-white hover:bg-primary w-full font-semibold"
                        size="lg"
                        onClick={scrollToAgenda}
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
              transition={{ delay: 0.2 }}
              variants={fadeInUp}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <motion.div
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02, rotateY: -2 }}
              >
                <Card
                  as="article"
                  className="bg-gradient-to-br from-[#E0F6F5] to-[#C4F1EF] border border-primary/30 h-full"
                  shadow="lg"
                >
                  <CardBody className="flex flex-col gap-3 text-customgray p-4 md:p-6">
                    {/* Icon badge */}
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-2">
                      <Lightbulb className="w-9 h-9 text-gray-800" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold">
                      {t("filosofiaCard.title")}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-primary">
                      {t("filosofiaCard.subtitle")}
                    </p>

                    <div className="space-y-3">
                      <p className="text-base">
                        {t.rich("filosofiaCard.p1", {
                          b: (chunks) => (
                            <span className="font-bold">{chunks}</span>
                          ),
                        })}
                      </p>
                      <p className="text-base">
                        {t.rich("filosofiaCard.p2", {
                          b: (chunks) => (
                            <span className="font-bold">{chunks}</span>
                          ),
                        })}
                      </p>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-bold mb-2 text-primary">
                        {t("filosofiaCard.resultsTitle")}
                      </h4>
                      <ul className="space-y-2 text-customgray text-sm md:text-sm">
                        {(pgr?.filosofiaCard?.resultsItems ?? []).map(
                          (item: string, idx: number) => (
                            <li
                              key={`filo-${idx}`}
                              className="flex items-start gap-3"
                            >
                              <span className="text-primary text-xl flex-shrink-0">
                                ✓
                              </span>
                              <span>{item}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4">
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
      </div>
    </section>
  );
}
