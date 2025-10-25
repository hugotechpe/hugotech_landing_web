"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { useTranslations } from "next-intl";
import { CalendlyEmbed } from "@/components/calendly/CalendlyEmbed";
import { CalendlyButton } from "@/components/calendly/CalendlyButton";
import { motion } from "framer-motion";
import { useSectionTracking } from "@/hooks/useGTMTracking";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function AgendaSection() {
  const t = useTranslations("Sections.Agenda");

  // Track when user scrolls to this section
  useSectionTracking({
    sectionId: "cita",
    sectionName: "agenda_section",
    threshold: 0.3,
  });

  return (
    <section
      id="cita"
      aria-label={t("title")}
      itemScope
      itemType="https://schema.org/Person"
      className="scroll-mt-0 bg-gradient-to-b from-white to-primary/5"
    >
      <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-customgray mb-6">
            {t("title")}
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
            <p>{t("paragraphs.p1")}</p>
            <p>
              {t.rich("paragraphs.p2", { b: (chunks) => <strong className="text-primary">{chunks}</strong> })}
            </p>
          </div>

          <Card className="bg-primary/10 border-l-4 border-primary mb-8" shadow="none">
            <CardBody className="p-6">
              <p className="text-base text-gray-700">
                💚 <strong>Recuerda:</strong> Las sesiones 1 a 1 son completamente gratuitas. 
                Este es un espacio sin presiones, sin agenda oculta. Solo tú, tus dudas y 
                un acompañamiento honesto.
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* Calendly Embed Inline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <CalendlyEmbed 
            url="https://calendly.com/hugotech/mentoria1a1"
            height="700px"
            utm={{
              utmSource: "hugotech.pe",
              utmMedium: "website",
              utmCampaign: "homepage_cita_section"
            }}
          />

          {/* Botón alternativo para móviles */}
          <div className="mt-8 text-center md:hidden">
            <CalendlyButton 
              text={t("ctaLabel")}
              variant="solid"
              color="primary"
              size="lg"
              fullWidth
              utm={{
                utmSource: "hugotech.pe",
                utmMedium: "website_mobile",
                utmCampaign: "homepage_cta_mobile"
              }}
            />
            <p className="mt-4 text-sm text-gray-500">
              * {t("note")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}