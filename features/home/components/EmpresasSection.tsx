"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { useTranslations, useMessages } from "next-intl";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export function EmpresasSection() {
  const t = useTranslations("Sections.Empresas");
  const messages = useMessages() as any;
  const emp = messages?.Sections?.Empresas ?? {};

  return (
    <section
      id="empresas"
      aria-label={t("header.title")}
      className="scroll-mt-0 bg-[#FBF7EC]"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        {/* Encabezado principal de la sección */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-customgray">
            {t("header.title")}
          </h2>
          <p className="mt-4 text-black">
            {t.rich("header.intro.p1", { 
              b: (chunks) => <strong>{chunks}</strong> 
            })}
          </p>
          <p className="mt-2 text-black">
            {t.rich("header.intro.p2", { sb: (chunks) => <span className="font-semibold">{chunks}</span> })}
          </p>
        </motion.header>

        {/* Contenedor de dos columnas con los servicios: Mentoring 1 a 1 y Servicio Business */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna izquierda: Mentoría 1 a 1 */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card as="article" shadow="none" className="bg-[#FFE8DB] p-4 sm:p-5 pb-4 sm:pb-0 pr-4 sm:pr-0 relative h-full hover:shadow-xl transition-shadow duration-300">
                <CardBody className="flex flex-col gap-3 text-customgray">
                <h3 className="text-2xl sm:text-3xl font-bold">{t("mentoriaCard.title")}</h3>
                <p className="text-base md:text-xl font-semibold my-4 sm:my-8">
                  {t("mentoriaCard.subtitle")}
                </p>
                <p className="mr-0 sm:mr-5">
                  {t.rich("mentoriaCard.p1", { b: (chunks) => <span className="font-bold">{chunks}</span> })}
                </p>
                <p className="mr-0 sm:mr-5">
                  {t.rich("mentoriaCard.p2", { b: (chunks) => <span className="font-bold">{chunks}</span> })}
                </p>
                <h4 className="mt-2 md:text-base font-semibold w-full sm:w-[85%]">{t("mentoriaCard.resultsTitle")}</h4>
                <ul className="list-disc pl-6 sm:pl-10 space-y-2 text-customgray w-full sm:w-[70%]">
                  {(emp?.mentoriaCard?.resultsItems ?? []).map((item: string, idx: number) => (
                    <li key={`res-${idx}`}>{item}</li>
                  ))}
                </ul>
                <div className="h-full flex flex-col justify-between w-full sm:w-[70%] mt-4 sm:mt-6 mb-4 sm:mb-0">
                  <Button as={Link} href="#cita" size="md" color="primary" variant="solid" className="bg-customgray w-full sm:w-fit">
                    {t("mentoriaCard.ctaLabel")}
                  </Button>
                  <p className="mt-4 text-sm sm:text-base text-customgray">
                    {t("mentoriaCard.note")}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/images/image3.png"
                    alt="Mentoría personalizada para potenciar tu mentalidad tech y tu crecimiento"
                    width={220}
                    className="rounded-lg shadow-sm hidden md:block"
                  />
                </div>
              </CardBody>
              </Card>
            </motion.div>

            {/* Columna derecha: Servicio Business */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card as="article" shadow="none" className="bg-[#E0F6F5] p-4 sm:p-5 pb-4 sm:pb-0 pr-4 sm:pr-0 relative h-full hover:shadow-xl transition-shadow duration-300">
                <CardBody className="flex flex-col gap-3 text-customgray">
                <h3 className="text-2xl sm:text-3xl font-bold">{t("empresasCard.title")}</h3>
                <p className="text-base md:text-xl font-semibold my-4 sm:my-8">
                  {t("empresasCard.subtitle")}
                </p>
                <p className="mr-0 sm:mr-5">
                  {t.rich("empresasCard.p1", { b: (chunks) => <span className="font-bold">{chunks}</span> })}
                </p>
                <p className="mr-0 sm:mr-5">
                  {t.rich("empresasCard.p2", { b: (chunks) => <span className="font-bold">{chunks}</span> })}
                </p>
                <h4 className="mt-2 md:text-base font-semibold w-full sm:w-[85%]">{t("empresasCard.resultsTitle")}</h4>
                <ul className="list-disc pl-6 sm:pl-10 space-y-2 text-customgray w-full sm:w-[70%]">
                  {(emp?.empresasCard?.resultsItems ?? []).map((item: string, idx: number) => (
                    <li key={`eres-${idx}`}>{item}</li>
                  ))}
                </ul>
                <div className="h-full flex flex-col justify-between w-full sm:w-[70%] mt-4 sm:mt-6 mb-4 sm:mb-0">
                  <Button 
                    as={Link} 
                    href={emp?.empresasCard?.ctaUrl || "https://calendly.com/hugotech/reunion-exploratoria"}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md" 
                    color="primary" 
                    variant="solid" 
                    className="bg-customgray w-full sm:w-fit"
                  >
                    {t("empresasCard.ctaLabel")}
                  </Button>
                  <p className="mt-4 text-sm sm:text-base text-customgray">
                    {t("empresasCard.note")}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/images/image4.png"
                    alt={t("empresasCard.imageAlt")}
                    width={220}
                    className="rounded-lg shadow-sm hidden md:block"
                  />
                </div>
              </CardBody>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}