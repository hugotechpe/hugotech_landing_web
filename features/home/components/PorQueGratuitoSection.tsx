"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { useTranslations } from "next-intl";

export function PorQueGratuitoSection() {
  const t = useTranslations("Sections.PorQueGratuito");

  return (
    <section
      id="porquegratuito"
      aria-label={t("title")}
      className="scroll-mt-0 bg-gradient-to-b from-white to-[#F0FAF9]"
    >
      <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-customgray mb-8">
            {t("title")}
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              {t.rich("paragraphs.p1", {
                b: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
            <p>{t("paragraphs.p2")}</p>
            <p>
              {t.rich("paragraphs.p3", {
                b: (chunks) => <strong className="text-primary">{chunks}</strong>,
              })}
            </p>
          </div>

          {/* Card destacada con filosofía */}
          <Card 
            className="mt-12 bg-primary/5 border-2 border-primary/20" 
            shadow="none"
          >
            <CardBody className="p-8 md:p-12">
              <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                {t("highlight.title")}
              </p>
              <blockquote className="text-2xl md:text-3xl font-bold text-customgray italic mb-6">
                "{t("highlight.quote")}"
              </blockquote>
              <p className="text-base md:text-lg text-gray-600">
                {t("highlight.description")}
              </p>
            </CardBody>
          </Card>

          {/* Nota sobre servicios B2B */}
          <p className="mt-8 text-base text-gray-600 italic">
            {t("paragraphs.p4")}
          </p>
        </div>
      </div>
    </section>
  );
}
