"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function AgendaSection() {
  const t = useTranslations("Sections.Agenda");

  return (
    <section
      id="cita"
      aria-label={t("title")}
      itemScope
      itemType="https://schema.org/Person"
      className="scroll-mt-0 bg-white"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-customgray">
            {t("title")}
          </h2>
          <p className="mt-4">{t("paragraphs.p1")}</p>
          <p className="mt-4">
            {t.rich("paragraphs.p2", { b: (chunks) => <strong>{chunks}</strong> })}
          </p>
        </div>
        {/* Encabezado y presentación */}
        <div className="grid grid-cols-1 md:grid-cols-[4fr_3fr] items-start gap-10">
          <div>
            <p className="bg-primary text-white font-bold px-4 py-2 rounded-full w-fit m-10">{t("ctaLabel")}</p>
          </div>

          {/* Imagen de perfil */}
          <div className="h-full flex items-end justify-end">
            <Image
              src="/images/image9.png"
              alt="Foto de Hugo Casanova, mentor y coach en tecnología"
              width={520}
              height={375}
              className="object-cover w-full h-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}