"use client";

import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@heroui/chip";
import { useLocale } from "next-intl";

import TestimonioCard from "@/components/cards/TestimonioCard";
import { getTestimoniosOdiseo } from "@/features/testimonials/enums/testimonios-odiseo";
import { getTestimoniosOdiseoEn } from "@/features/testimonials/enums/testimonios-odiseo-en";

/**
 * Sección de testimonios del programa Odiseo (Vonex)
 * Muestra testimonios reales de participantes del programa de Agile Coaching
 *
 * Características:
 * - Grid responsivo de testimonios
 * - Soporte para testimonios anónimos
 * - Tags de impacto
 * - Animaciones sutiles
 * - Soporte multiidioma (ES/EN)
 */

export function TestimoniosOdiseoSection() {
  const locale = useLocale();
  const testimonios = locale === "en" ? getTestimoniosOdiseoEn() : getTestimoniosOdiseo();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-default-50 via-white to-primary-50/20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          viewport={{ once: true, margin: "-100px" }}
          whileInView="visible"
        >
          <motion.div variants={fadeInUp}>
            <Chip
              className="mb-6 text-base px-6 py-2"
              color="primary"
              size="lg"
              variant="flat"
            >
              ⭐ Testimonios Reales
            </Chip>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold font-heading text-customgray mb-6"
            variants={fadeInUp}
          >
            Lo que dicen quienes{" "}
            <span className="text-primary">pasaron por Odiseo</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-default-700 leading-relaxed"
            variants={fadeInUp}
          >
            <strong className="text-primary">
              {testimonios.length} profesionales
            </strong>{" "}
            transformados a través del programa de{" "}
            <strong className="text-foreground">Agile Coaching</strong> en{" "}
            <strong className="text-success">Vonex Perú</strong>
          </motion.p>
        </motion.div>

        {/* Grid de Testimonios */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-50px" }}
          whileInView="visible"
        >
          {testimonios.map((testimonio, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <TestimonioCard
                authorAge={testimonio.esAnonimo ? "🔒 Anónimo" : undefined}
                authorName={testimonio.authorName}
                avatarAlt={
                  testimonio.esAnonimo
                    ? "Participante anónimo del programa Odiseo"
                    : testimonio.authorName
                }
                avatarSrc="/images/avatar-silueta.svg"
                highlight={testimonio.highlight}
                jobTitle={testimonio.jobTitle}
                linkedInUrl={testimonio.linkedInUrl}
                quote={testimonio.quote}
                tags={testimonio.tags}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-sm text-default-500 italic">
            💼 Testimonios reales del programa de{" "}
            <span className="font-semibold text-primary">
              Agile Coaching & Soft Skills
            </span>{" "}
            en Vonex / Odiseo
          </p>
          <p className="text-xs text-default-400 mt-2">
            Algunos participantes eligieron mantener su anonimato
          </p>
        </motion.div>
      </div>
    </section>
  );
}
