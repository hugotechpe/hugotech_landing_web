"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { useTranslations } from "next-intl";

export function AgendaSection() {
  const t = useTranslations("Sections.Agenda");

  return (
    <section
      id="cita"
      aria-label={t("title")}
      itemScope
      itemType="https://schema.org/Person"
      className="scroll-mt-0 bg-gradient-to-b from-white to-primary/5"
    >
      <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24">
        {/* Encabezado y presentación */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
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

            <Button 
              as={Link}
              href="https://calendly.com/hugotechpe"
              target="_blank"
              size="lg"
              className="bg-primary text-white font-bold hover:bg-[#183F33] px-8"
            >
              {t("ctaLabel")}
            </Button>

            <p className="mt-4 text-sm text-gray-500">
              * Usamos Calendly para agendar. Elige el día y hora que mejor te funcione.
            </p>
          </div>

          {/* Imagen de perfil */}
          <div className="relative">
            <Image
              src="/images/image9.png"
              alt="Hugo Casanova listo para acompañarte en tu sesión de coaching"
              width={520}
              height={375}
              className="rounded-2xl shadow-2xl object-cover w-full h-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}