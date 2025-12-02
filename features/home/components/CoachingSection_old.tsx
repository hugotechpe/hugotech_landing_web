"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useTranslations, useMessages } from "next-intl";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function CoachingSection() {
  const t = useTranslations("Sections.CCCausa");
  const messages = useMessages() as any;
  const bullets: string[] = messages?.Sections?.CCCausa?.content?.bullets ?? [];

  return (
    <section
      aria-label={t("title")}
      className="scroll-mt-0 bg-primary"
      id="cccausa"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-40">
          {/* Columna izquierda: imagen de referencia */}
          <motion.div
            className="relative w-full mx-auto"
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            <Image
              priority
              alt={t("images.mainAlt")}
              className="block object-cover"
              height={660}
              src="/images/image6.png"
              style={{ width: "100%", height: "auto" }}
              width={538}
            />
            <Image
              alt={t("images.badgeRightAlt")}
              className="hidden sm:block absolute -right-10 lg:-right-30 bottom-5 md:bottom-30"
              height={171}
              src="/images/image8.png"
              width={300}
            />
            <Image
              alt={t("images.badgeLeftAlt")}
              className="hidden sm:block absolute left-0 top-0 md:-left-5 md:-top-0"
              height={171}
              src="/images/image7.png"
              width={300}
            />
          </motion.div>

          {/* Columna derecha: contenido SEO semántico */}
          <motion.div
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              itemProp="headline"
            >
              {t("title")}
            </h2>
            <p className="mt-2 text-white/90">{t("subtitle")}</p>

            <div className="mt-6">
              <p className="text-white/90" itemProp="description">
                {t("content.p1")}
              </p>

              <p className="mt-4 text-white font-semibold">
                {t.rich("content.pBold1", {
                  b: (chunk) => <span className="font-semibold">{chunk}</span>,
                })}
              </p>

              <ul className="mt-4 space-y-8 list-disc pl-6 text-white/90">
                {bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-white/90 mx-8">{t("content.p2")}</p>
              <div className="mt-6 text-white/90 text-base">
                <p className="font-bold">
                  {t.rich("content.invite.pBold", {
                    b: (chunk) => <span className="font-bold">{chunk}</span>,
                  })}
                </p>
                <p className="mt-1">{t("content.invite.p")}</p>
              </div>

              <form
                aria-label={t("form.ariaLabel")}
                className="mt-6 flex flex-col sm:flex-row gap-20"
              >
                <Input
                  aria-label={t("form.input.ariaLabel")}
                  className="flex-1"
                  name={t("form.input.name")}
                  placeholder={t("form.input.placeholder")}
                  size="lg"
                  type="url"
                  variant="flat"
                />
                <Button
                  className="bg-[#115C5B] text-white hover:bg-[#183F33] w-auto sm:w-[140px]"
                  color="primary"
                  size="lg"
                  type="submit"
                  variant="solid"
                >
                  {t("form.submitLabel")}
                </Button>
              </form>

              {/* <div className="mt-6">
                <Button
                  as={Link}
                  href="#agenda"
                  color="primary"
                  className="w-full sm:w-auto"
                  aria-label="Agenda tu sesión y súmate al impacto"
                >
                  Agendá tu Sesión y Súmate al Impacto
                </Button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
