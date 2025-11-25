"use client";

import React from "react";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import TestimonioCard from "@/components/cards/TestimonioCard";
import { motion } from "framer-motion";
import { useSectionTracking } from "@/hooks/useGTMTracking";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export function TestimoniosSection() {
  const messages = useMessages() as any;
  const tMiguel = useTranslations("Sections.TestimoniosLanding.miguel");

  // Track when user scrolls to testimonials section
  useSectionTracking({
    sectionId: "testimonios",
    sectionName: "testimonials_section",
    threshold: 0.4,
  });
  const section = messages?.Sections?.Testimonios ?? {};
  const metrics = section?.metrics ?? [];
  const title = section?.title ?? "Historias que Inspiran y Transforman 🌱✨";
  const intro = section?.intro ?? [];
  const cta = section?.cta ?? "Ver más testimonios";

  // Extract numeric values from metrics for animation
  const getMetricValue = (value: string) => {
    const match = value.match(/[\d,]+/);
    if (!match) return { number: 0, prefix: "", suffix: value };

    const numStr = match[0].replace(",", ".");
    const number = parseFloat(numStr);
    const parts = value.split(match[0]);

    return {
      number,
      prefix: parts[0] || "",
      suffix: parts[1] || "",
    };
  };

  return (
    <section
      id="testimonios"
      aria-label="Testimonios"
      className="scroll-mt-0 bg-secondary"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] items-center gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-customgray leading-tight">
              {title}
            </h2>
            <div className="mt-6 text-customgray text-base sm:text-lg leading-relaxed space-y-3">
              {Array.isArray(intro) &&
                intro.map((paragraph: string, idx: number) => (
                  <p key={idx} className="font-body">
                    {paragraph}
                  </p>
                ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-20"
              aria-label="Métricas de impacto"
            >
              {Array.isArray(metrics) &&
                metrics.map(
                  (m: { id: string; value: string; text: string }) => {
                    const { number, prefix, suffix } = getMetricValue(m.value);
                    const decimals = m.id === "rating" ? 1 : 0;

                    return (
                      <motion.article
                        key={m.id}
                        variants={fadeInUp}
                        className="text-center sm:text-left"
                      >
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-customgray">
                          <AnimatedCounter
                            end={number}
                            duration={2.5}
                            decimals={decimals}
                            prefix={prefix}
                            suffix={suffix}
                          />
                        </h3>
                        <p className="mt-3 text-customgray/80 text-sm sm:text-base leading-relaxed font-body">
                          {m.text}
                        </p>
                      </motion.article>
                    );
                  },
                )}
            </motion.div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <Button
                  as={Link}
                  href="/testimonios"
                  size="lg"
                  color="primary"
                  variant="solid"
                  className="mt-2 text-white bg-customgray w-full sm:w-auto font-body"
                >
                  {cta}
                </Button>
              </div>
              <div></div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <TestimonioCard
              quote={tMiguel("quote")}
              authorName="Miguel Bustillos"
              authorAge={24}
              role="Software Engineer"
              linkedInUrl="https://www.linkedin.com/in/miguel-angel-bustillos-alayo/"
              avatarSrc="/images/testimonials/miguel-bustillos.jpg"
              avatarAlt="Foto de perfil de Miguel Bustillos"
              tags={["Familia", "Confianza", "Crecimiento"]}
              highlight={tMiguel("highlight")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
