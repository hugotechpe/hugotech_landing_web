"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useTranslations, useMessages } from "next-intl";

export function PorQueGratuitoSection() {
  const t = useTranslations("Sections.PorQueGratuito");
  const messages = useMessages() as any;
  const pgr = messages?.Sections?.PorQueGratuito ?? {};

  return (
    <section
      id="porquegratuito"
      aria-label={t("title")}
      className="scroll-mt-0 bg-gradient-to-b from-white to-[#F0FAF9]"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        {/* Encabezado principal de la sección */}
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-customgray">
            {t("title")}
          </h2>
          <p className="mt-4 text-black">
            {t.rich("intro", {
              b: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </header>

        {/* Contenedor de dos columnas: Mentoría 1 a 1 y Filosofía */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna izquierda: Mentoría 1 a 1 */}
            <Card
              as="article"
              shadow="none"
              className="bg-[#FFE8DB] p-4 sm:p-5 pb-6"
            >
              <CardBody className="flex flex-col gap-3 text-customgray">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {t("mentoriaCard.title")}
                </h3>
                <p className="text-base md:text-xl font-semibold my-4 sm:my-8">
                  {t("mentoriaCard.subtitle")}
                </p>
                <p className="text-sm sm:text-base">
                  {t.rich("mentoriaCard.p1", {
                    b: (chunks) => <span className="font-bold">{chunks}</span>,
                  })}
                </p>
                <p className="text-sm sm:text-base">
                  {t.rich("mentoriaCard.p2", {
                    b: (chunks) => <span className="font-bold">{chunks}</span>,
                  })}
                </p>
                <h4 className="mt-2 text-sm sm:text-base font-semibold">
                  {t("mentoriaCard.resultsTitle")}
                </h4>
                <ul className="list-disc pl-6 sm:pl-10 space-y-2 text-customgray text-sm sm:text-base">
                  {(pgr?.mentoriaCard?.resultsItems ?? []).map(
                    (item: string, idx: number) => (
                      <li key={`res-${idx}`}>{item}</li>
                    ),
                  )}
                </ul>
                <div className="mt-4 sm:mt-6">
                  <Button
                    as={Link}
                    href="#cita"
                    size="md"
                    color="primary"
                    variant="solid"
                    className="bg-customgray w-full sm:w-fit"
                  >
                    {t("mentoriaCard.ctaLabel")}
                  </Button>
                  <p className="mt-4 text-xs sm:text-sm text-customgray">
                    {t("mentoriaCard.note")}
                  </p>
                </div>
              </CardBody>
            </Card>

            {/* Columna derecha: Filosofía */}
            <Card
              as="article"
              shadow="none"
              className="bg-[#E0F6F5] p-4 sm:p-5 pb-6"
            >
              <CardBody className="flex flex-col gap-3 text-customgray">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {t("filosofiaCard.title")}
                </h3>
                <p className="text-base md:text-xl font-semibold my-4 sm:my-8">
                  {t("filosofiaCard.subtitle")}
                </p>
                <p className="text-sm sm:text-base">
                  {t.rich("filosofiaCard.p1", {
                    b: (chunks) => <span className="font-bold">{chunks}</span>,
                  })}
                </p>
                <p className="text-sm sm:text-base">
                  {t.rich("filosofiaCard.p2", {
                    b: (chunks) => <span className="font-bold">{chunks}</span>,
                  })}
                </p>
                <h4 className="mt-2 text-sm sm:text-base font-semibold">
                  {t("filosofiaCard.resultsTitle")}
                </h4>
                <ul className="list-disc pl-6 sm:pl-10 space-y-2 text-customgray text-sm sm:text-base">
                  {(pgr?.filosofiaCard?.resultsItems ?? []).map(
                    (item: string, idx: number) => (
                      <li key={`filo-${idx}`}>{item}</li>
                    ),
                  )}
                </ul>
                <div className="mt-4 sm:mt-6">
                  <p className="mt-4 text-customgray italic text-xs sm:text-sm">
                    {t("filosofiaCard.note")}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
