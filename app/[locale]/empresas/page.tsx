"use client";
import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function EmpresasPage() {
  const t = useTranslations("Sections.Companies");
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-1400 px-6 relative z-10">
          <motion.div
            animate="visible"
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight"
              variants={fadeIn}
            >
              <span dangerouslySetInnerHTML={{ 
                __html: t.raw("hero.title").replace(
                  /<highlight>(.*?)<\/highlight>/g, 
                  '<span class="text-brand">$1</span>'
                )
              }} />
            </motion.h1>
            <motion.p
              dangerouslySetInnerHTML={{ __html: t.raw("hero.subtitle") }}
              className="text-lg md:text-xl mb-6 text-white/90 leading-[1.9] tracking-wide"
              variants={fadeIn}
            />
            <motion.p
              className="text-base md:text-lg mb-10 text-white/80 leading-[1.8] tracking-wide"
              variants={fadeIn}
            >
              {t("hero.description")}
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                as={Link}
                className="bg-brand text-white font-bold text-lg px-8 py-6 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                href="#contacto-empresas"
                size="lg"
              >
                {t("hero.cta")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nuestra Propuesta - 3 Dimensiones */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
              {t("proposal.title")}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: t.raw("proposal.description") }}
              className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-[1.9] tracking-wide"
            />
          </motion.div>

          <motion.p className="text-center text-lg md:text-xl font-semibold font-heading text-customgray mb-12 leading-relaxed">
            {t("proposal.subtitle")}
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {t.raw("proposal.dimensions").map((dimension: any, index: number) => {
              const borderColors = ["border-primary", "border-brand", "border-primary"];
              const bulletColors = ["text-primary", "text-brand", "text-primary"];
              
              return (
                <motion.div key={index} variants={fadeIn}>
                  <Card
                    className={`h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 ${borderColors[index]}`}
                    shadow="lg"
                  >
                    <CardBody className="p-8">
                      <div className="text-5xl mb-4">{dimension.icon}</div>
                      <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-4">
                        {dimension.number}. {dimension.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-[1.9] tracking-wide text-[15px] md:text-base">
                        {dimension.description}
                      </p>
                      <ul className="space-y-3 text-gray-700 text-[14px] md:text-[15px]">
                        {dimension.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className={`${bulletColors[index]} mr-2 font-bold`}>•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Caso de Transformación */}
      <section className="py-16 md:py-24 bg-[#FBF7EC]">
        <div className="container mx-auto max-w-1400 px-6">
          {/* Nueva sección: Lo Aprendí en Carne Propia */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card
              className="bg-gradient-to-br from-primary/5 to-brand/5 border-2 border-primary/20"
              shadow="lg"
            >
              <CardBody className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold mb-6 uppercase tracking-wider">
                    {t("transformation.personal_learning.badge")}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-customgray mb-6 leading-tight">
                    {t("transformation.personal_learning.title")}
                  </h3>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p
                    dangerouslySetInnerHTML={{ __html: t.raw("transformation.personal_learning.paragraph1") }}
                    className="text-base md:text-lg text-gray-700 leading-[2] tracking-wide"
                  />
                  <p
                    dangerouslySetInnerHTML={{ __html: t.raw("transformation.personal_learning.paragraph2") }}
                    className="text-base md:text-lg text-gray-700 leading-[2] tracking-wide"
                  />
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
              {t("transformation.cases.title")}
            </h2>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <Card className="mb-8" shadow="lg">
              <CardBody className="p-8">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-6 leading-tight">
                  {t("transformation.cases.challenges.title")}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700 text-[15px] md:text-base">
                    {t.raw("transformation.cases.challenges.list").slice(0, 3).map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-3 text-xl flex-shrink-0">
                          ❌
                        </span>
                        <span className="leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3 text-gray-700 text-[15px] md:text-base">
                    {t.raw("transformation.cases.challenges.list").slice(3).map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-3 text-xl flex-shrink-0">
                          ❌
                        </span>
                        <span className="leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-l-4 border-primary" shadow="lg">
                <CardBody className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-6 flex items-center leading-tight">
                    <span className="mr-3">🔧</span>
                    {t("transformation.cases.intervention.title")}
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-[15px] md:text-base">
                    {t.raw("transformation.cases.intervention.items").map((item: any, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 text-lg flex-shrink-0">
                          ✓
                        </span>
                        <span className="leading-relaxed">
                          <strong>{item.title}</strong> {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              <Card
                className="border-l-4 border-brand bg-gradient-to-br from-white to-brand/5"
                shadow="lg"
              >
                <CardBody className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-6 flex items-center leading-tight">
                    <span className="mr-3">✨</span>
                    {t("transformation.cases.results.title")}
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-[15px] md:text-base">
                    {t.raw("transformation.cases.results.items").map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand mr-3 text-xl flex-shrink-0">
                          →
                        </span>
                        <span className="font-semibold leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-[#0d4746] text-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-8 leading-tight">
              {t("philosophy.title")}
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-white/20 mb-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold font-quote italic text-brand mb-6 leading-[1.8]">
                {t("philosophy.quote")}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: t.raw("philosophy.description") }}
                className="text-base md:text-lg text-white/90 leading-[2] tracking-wide"
              />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: t.raw("philosophy.belief") }}
              className="text-lg md:text-xl leading-[2] tracking-wide mb-8"
            />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-brand">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold font-quote text-brand leading-[1.9] italic">
                {t("philosophy.quote2")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
              {t("how_we_work.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.raw("how_we_work.steps").map((step: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card
                  className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  shadow="lg"
                >
                  <CardBody className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold font-heading mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-[14px] md:text-[15px] leading-[1.8] tracking-wide">
                      {step.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué nos hace diferentes */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0FAF9] to-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
              {t("differentiators.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.raw("differentiators.items").map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Card
                  className="h-full border-t-4 border-brand hover:shadow-xl transition-all"
                  shadow="md"
                >
                  <CardBody className="p-6 text-center">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <p className="text-gray-700 font-semibold leading-relaxed">
                      {item.text}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios para Empresas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-customgray mb-6">
              {t("services.title")}
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left text-lg font-bold">{t("services.table.headers.category")}</th>
                  <th className="p-4 text-left text-lg font-bold">
                    {t("services.table.headers.description")}
                  </th>
                  <th className="p-4 text-left text-lg font-bold">{t("services.table.headers.modality")}</th>
                </tr>
              </thead>
              <tbody>
                {t.raw("services.table.items").map((service: any, idx: number) => (
                  <motion.tr
                    key={idx}
                    className={`border-b ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-brand/5 transition-colors`}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <td className="p-4 font-bold text-customgray">
                      {service.category}
                    </td>
                    <td className="p-4 text-gray-700">{service.description}</td>
                    <td className="p-4 text-gray-700 font-semibold">
                      {service.modality}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Versión Mobile de la Tabla */}
          <div className="md:hidden space-y-4 mt-8">
            {t.raw("services.table.items").map((service: any, idx: number) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-shadow"
                shadow="md"
              >
                <CardBody className="p-6">
                  <h3 className="font-bold text-base md:text-lg font-heading text-primary mb-2 leading-tight">
                    {service.category}
                  </h3>
                  <p className="text-gray-700 mb-3 text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t("services.table.headers.modality")}:</strong> {service.modality}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white relative overflow-hidden"
        id="contacto-empresas"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-1400 px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-8 leading-tight">
              {t("cta.title")}
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-[2] tracking-wide">
              <span dangerouslySetInnerHTML={{ __html: t.raw("cta.subtitle") }} />
            </p>
            <p className="text-base md:text-lg mb-10 text-white/90 max-w-2xl mx-auto leading-[1.9] tracking-wide">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                isExternal
                as={Link}
                className="bg-brand text-white font-bold text-base md:text-lg px-8 py-6 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                href="https://calendly.com/hugotech/reunion-exploratoria"
                size="lg"
              >
                {t("cta.button_primary")}
              </Button>
              <Button
                as={Link}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-base md:text-lg transition-all duration-300"
                href="mailto:hola@hugotech.pe"
                size="lg"
                variant="bordered"
              >
                {t("cta.button_secondary")}
              </Button>
            </div>
            <p className="mt-8 text-white/80 italic font-quote text-lg md:text-xl lg:text-2xl leading-[1.9]">
              {t("cta.quote")}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
