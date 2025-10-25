import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { useTranslations, useMessages } from "next-intl";

export function CoachingSection() {
  const t = useTranslations("Sections.CCCausa");
  const messages = useMessages() as any;
  const bullets: string[] = messages?.Sections?.CCCausa?.content?.bullets ?? [];

  return (
    <section
      id="cccausa"
      aria-label={t("title")}
      className="scroll-mt-0 bg-primary"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-40">
          {/* Columna izquierda: imagen de referencia */}
            <div className="relative w-full mx-auto">
              <Image
                src="/images/image6.png"
                alt={t("images.mainAlt")}
                width={538}
                height={660}
                priority
                className="block object-cover"
                style={{ width: "100%", height: "auto" }}
              />
              <Image
                src="/images/image8.png"
                alt={t("images.badgeRightAlt")}
                width={300}
                height={171}
                className="hidden sm:block absolute -right-10 lg:-right-30 bottom-5 md:bottom-30"
              />
              <Image
                src="/images/image7.png"
                alt={t("images.badgeLeftAlt")}
                width={300}
                height={171}
                className="hidden sm:block absolute left-0 top-0 md:-left-5 md:-top-0"
              />
            </div>

          {/* Columna derecha: contenido SEO semántico */}
          <div>
            <h2 itemProp="headline" className="text-3xl md:text-4xl font-bold text-white">
              {t("title")}
            </h2>
            <p className="mt-2 text-white/90">
              {t("subtitle")}
            </p>

            <div className="mt-6">
              <p itemProp="description" className="text-white/90">
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
              <p className="text-white/90 mx-8">
                {t("content.p2")}
              </p>
              <div className="mt-6 text-white/90 text-base">
                <p className="font-bold">{t.rich("content.invite.pBold", { b: (chunk) => <span className="font-bold">{chunk}</span> })}</p>
                <p className="mt-1">{t("content.invite.p")}</p>
              </div>

              <form className="mt-6 flex flex-col sm:flex-row gap-20" aria-label={t("form.ariaLabel")}>
                <Input
                  name={t("form.input.name")}
                  aria-label={t("form.input.ariaLabel")}
                  placeholder={t("form.input.placeholder")}
                  type="url"
                  size="lg"
                  variant="flat"
                  className="flex-1"
                />
                <Button type="submit" size="lg" color="primary" variant="solid" className="bg-[#115C5B] text-white hover:bg-[#183F33] w-auto sm:w-[140px]">
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
          </div>
        </div>
      </div>
    </section>
  );
}