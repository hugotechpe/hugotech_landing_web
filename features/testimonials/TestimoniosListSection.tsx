"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { useTranslations, useLocale } from "next-intl";

import TestimonioCard from "@/components/cards/TestimonioCard";
import { getTestimoniosList } from "@/features/testimonials/enums";

// Definir qué testimonios serán "destacados" (más grandes)
const FEATURED_INDICES = [0, 6, 13, 20, 27, 35, 42]; // Distribuidos cada 6-7 testimonios
const ITEMS_PER_PAGE = 12; // Mostrar 12 testimonios por carga

export function TestimoniosListSection() {
  const t = useTranslations("Sections.Testimonials.list");
  const locale = useLocale();
  const TESTIMONIOS_LIST = getTestimoniosList(locale);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const hasMore = visibleCount < TESTIMONIOS_LIST.length;
  const visibleTestimonios = TESTIMONIOS_LIST.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, TESTIMONIOS_LIST.length),
    );
  };

  return (
    <section
      aria-label="Testimonios de transformación"
      className="scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-16 md:py-24"
      id="historias"
    >
      <div className="container mx-auto max-w-1400 px-6">
        {/* Header de sección */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
            {t("title")}
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: t.raw("description") }}
            className="text-lg md:text-xl text-gray-600 leading-[1.9] tracking-wide max-w-3xl mx-auto"
          />
        </motion.div>

        {/* Bento Grid: layout asimétrico con cards destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {visibleTestimonios.map((t, idx) => {
            const isFeatured = FEATURED_INDICES.includes(idx);

            // Cards destacadas ocupan más espacio en el grid
            const gridSpan = isFeatured ? "md:col-span-8" : "md:col-span-6";

            return (
              <motion.div
                key={`${t.authorName}-${idx}`}
                animate={{ opacity: 1, y: 0 }}
                className={gridSpan}
                initial={{ opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <TestimonioCard
                  {...t}
                  className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Botón "Cargar más" con animación */}
        {hasMore && (
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Button
              className="font-semibold text-lg px-10 py-7 border hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-500"
              color="primary"
              size="lg"
              variant="bordered"
              onClick={loadMore}
            >
              {t("loadMore", { count: TESTIMONIOS_LIST.length - visibleCount })}
            </Button>
          </motion.div>
        )}

        {/* Mensaje final cuando se muestran todos */}
        {!hasMore && TESTIMONIOS_LIST.length > ITEMS_PER_PAGE && (
          <motion.div
            className="mt-16 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 via-brand/10 to-primary/10 border border-primary/20">
              <CardBody className="p-8 md:p-10 text-center">
                <div className="text-5xl md:text-6xl mb-4">
                  {t("end.emoji")}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-4">
                  {t("end.title")}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                  {t("end.description", { count: TESTIMONIOS_LIST.length })}{" "}
                  <strong className="text-primary block mt-3">
                    {t("end.cta_text")}
                  </strong>
                </p>
                <Button
                  as="a"
                  className="bg-primary text-white font-bold text-base md:text-lg px-8 md:px-10 py-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500"
                  href="/#cita"
                  size="lg"
                >
                  {t("end.button")}
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
