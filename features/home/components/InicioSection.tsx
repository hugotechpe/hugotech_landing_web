"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function InicioSection() {
  const t = useTranslations("Sections.Inicio");
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
              <p>{t("paragraphs.p1")}</p>
              <p>
                {t.rich("paragraphs.p2", {
                  brand: (chunks) => <strong>{chunks}</strong>,
                  b: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                as={Link}
                href="#mepresento"
                size="lg"
                color="primary"
                variant="solid"
                className="bg-white text-primary hover:bg-[#183F33] hover:text-white"
                onPress={(e) => {

                }}
              >
                {t("ctas.mentoria")}
              </Button>

              <Button
                as={Link}
                href="#empresas"
                size="lg"
                color="primary"
                variant="solid"
                className="bg-[#115C5B] text-white hover:bg-[#183F33]"
                onPress={(e) => {

                }}
              >
                {t("ctas.empresas")}
              </Button>
            </div>
          </div>

          {/* Columna derecha: imágenes */}
          <div className="relative">
            <div className="relative w-full max-w-md md:max-w-lg mx-auto">
              <Image
                src="/images/image1.png"
                alt="Retrato de Hugo Casanova, mentor y coach tech"
                width={538}
                height={660}
                priority
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src="/images/desarrollatutalento.png"
                alt="Liderazgo en tecnología"
                width={368}
                height={170}
                className="hidden sm:block absolute -right-20 bottom-5 md:right-2 md:-bottom-10"
              />
              <Image
                src="/images/lidertech-1.png"
                alt="Desarrolla tu talento"
                width={368}
                height={170}
                className="hidden sm:block absolute -left-20 top-10 md:-left-25 md:top-25"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}