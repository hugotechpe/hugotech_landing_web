"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Tabs, Tab } from "@heroui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";

import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function AboutPage() {
  const t = useTranslations("Sections.About");
  const messages = useMessages() as any;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
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

  // Get timeline data from translations
  const timelineDataFromTranslations =
    messages.Sections?.About?.journey?.phases || [];
  const timelineData = timelineDataFromTranslations.map(
    (phase: any, index: number) => {
      const colors = [
        "from-green-400 to-green-600",
        "from-yellow-400 to-orange-500",
        "from-gray-400 to-slate-600",
        "from-blue-400 to-indigo-600",
        "from-primary to-[#0d4746]",
      ];

      return {
        ...phase,
        color: colors[index] || "from-primary to-brand",
      };
    },
  );

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section con Parallax */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635]"
          style={{ y }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </div>
        </motion.div>

        <motion.div
          className="container mx-auto max-w-1400 px-6 relative z-10"
          style={{ opacity }}
        >
          <div className="max-w-5xl mx-auto text-center text-white">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            >
              <Chip
                className="mb-8 text-base md:text-lg px-6 py-2"
                color="warning"
                size="lg"
                variant="shadow"
              >
                {t("hero.chip")}
              </Chip>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight">
                <span
                  dangerouslySetInnerHTML={{
                    __html: t
                      .raw("hero.title")
                      .replace("<highlight>", '<span class="text-brand">')
                      .replace("</highlight>", "</span>"),
                  }}
                />
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 leading-[1.8] tracking-wide max-w-4xl mx-auto">
                {t("hero.subtitle")}
              </p>
              <Button
                as={Link}
                className="bg-brand text-white font-bold text-lg px-10 py-7 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                href="#journey"
                size="lg"
              >
                {t("hero.cta")}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="text-white/60 text-sm">{t("hero.scrollText")}</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full mt-2 mx-auto flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              className="w-1.5 h-2.5 bg-white/60 rounded-full"
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Propósito Destacado */}
      <section className="py-16 md:py-24 bg-white relative" id="journey">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-customgray mb-8 leading-tight">
                {t("purpose.title")}
              </h2>
              <div className="relative inline-block mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand blur-3xl opacity-20" />
                <p className="relative text-xl md:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#0d4746] to-brand leading-tight px-4">
                  {t("purpose.quote")}
                </p>
              </div>
              <div className="max-w-4xl mx-auto mt-8">
                <p
                  dangerouslySetInnerHTML={{ __html: t.raw("purpose.intro") }}
                  className="text-base md:text-lg text-gray-600 leading-[2] tracking-wide"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.raw("purpose.conclusion"),
                  }}
                  className="text-base md:text-lg text-gray-600 leading-[2] tracking-wide mt-6"
                />
              </div>
            </div>{" "}
            <Card
              className="bg-gradient-to-br from-primary/10 via-white to-brand/10 border-2 border-primary/20"
              shadow="lg"
            >
              <CardBody className="p-10 md:p-16">
                <p
                  dangerouslySetInnerHTML={{ __html: t.raw("purpose.mission") }}
                  className="text-lg md:text-xl text-gray-700 leading-[2] tracking-wide text-center"
                />
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline Interactivo */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-16 text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {t("journeySection.title")}
          </motion.h2>

          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-brand to-primary transform md:-translate-x-1/2" />

            {timelineData.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="relative mb-16 md:mb-24"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div
                  className={`md:flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className="md:w-5/12 ml-20 md:ml-0">
                    <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardBody className="p-8">
                        <Chip className="mb-4" color="primary" variant="flat">
                          {item.phase}
                        </Chip>
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-4 leading-tight">
                          {item.title}
                        </h3>
                        <div className="space-y-3">
                          {item.content.map((text: string, i: number) => (
                            <p
                              dangerouslySetInnerHTML={{ __html: text }}
                              key={i}
                              className="text-gray-700 leading-[1.9] tracking-wide text-[15px] md:text-base"
                            />
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-8 top-8 md:static md:w-2/12 flex justify-center transform -translate-x-1/2 md:translate-x-0">
                    <motion.div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl md:text-4xl shadow-2xl`}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section con AnimatedCounter */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-1400 px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
              {t("stats.title")}
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-[1.8] tracking-wide">
              {t("stats.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {(messages.Sections?.About?.stats?.items || []).map((stat: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <CardBody className="p-8 text-center">
                    <div className="text-5xl mb-4">{stat.icon}</div>
                    <div className="text-5xl md:text-6xl font-bold text-brand mb-2">
                      {stat.suffix === "∞" ? (
                        <span>∞</span>
                      ) : (
                        <AnimatedCounter
                          end={stat.end}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      )}
                    </div>
                    <p className="text-white/90 font-semibold text-lg mb-2">
                      {stat.label}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofía con Glassmorphism */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-customgray mb-12 text-center leading-tight">
              {t("philosophy.title")}
            </h2>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-brand/20 to-primary/20 blur-3xl" />
              <Card className="relative bg-white/40 backdrop-blur-xl border-2 border-white/60 shadow-2xl">
                <CardBody className="p-10 md:p-16">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🌟</div>
                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold font-quote text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand mb-8 italic leading-tight">
                      &ldquo;{t("philosophy.quote")}&rdquo;
                    </blockquote>
                    <p
                      dangerouslySetInnerHTML={{ __html: t.raw("philosophy.description") }}
                      className="text-lg md:text-xl text-gray-700 leading-[2] tracking-wide"
                    />
                    <p className="text-base md:text-lg text-gray-600 leading-[1.9] tracking-wide mt-6 italic">
                      {t("philosophy.footer")}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificaciones con Tabs Interactivos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-12 text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {t("certifications_section.title")}
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            <Tabs
              aria-label="Formación"
              classNames={{
                tabList:
                  "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-6 h-12",
                tabContent: "group-data-[selected=true]:text-primary font-bold",
              }}
              color="primary"
              size="lg"
              variant="underlined"
            >
              <Tab
                key="coaching"
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎓</span>
                    <span>{t("certifications.tabs.coaching")}</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {(messages.Sections?.About?.certifications?.coaching_items || []).map((cert: any, index: number) => {
                        const colors: Record<string, string> = {
                          orange: "from-orange-500 to-orange-600 text-orange-600",
                          blue: "from-blue-600 to-blue-700 text-blue-600",
                          red: "from-red-600 to-red-700 text-red-600",
                          "blue-dark": "from-blue-800 to-blue-900 text-blue-800"
                        };
                        const colorClass = colors[cert.color] || "from-primary to-brand text-primary";
                        const isLast = index === (messages.Sections?.About?.certifications?.coaching_items?.length || 0) - 1;

                        return (
                          <div key={index} className={`flex items-start gap-4 ${!isLast ? "pb-6 border-b" : ""} ${index === 0 ? "border-b-2 border-brand/30" : "border-gray-200"}`}>
                            <div className={`w-20 h-20 bg-gradient-to-br ${colorClass.split(" ")[0]} ${colorClass.split(" ")[1]} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                              <span className="text-white font-bold text-sm text-center leading-tight">
                                {cert.organization.includes("Newfield") ? "NEWFIELD\nNETWORK" :
                                 cert.organization.includes("Ruwalab") ? "RUWALAB\nICF" :
                                 cert.organization.includes("UPC") || cert.organization.includes("Ciencias Aplicadas") ? "UPC" :
                                 "ISIL"}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <h3 className="text-lg md:text-xl font-bold font-heading text-customgray">
                                  {cert.title}
                                </h3>
                                {cert.status && (
                                  <Chip
                                    className="font-semibold"
                                    color={cert.status === "Activo" || cert.status === "Active" ? "success" : "warning"}
                                    size="sm"
                                    variant="flat"
                                  >
                                    {cert.status}
                                  </Chip>
                                )}
                              </div>
                              <p className={`text-base font-semibold mb-2 ${colorClass.split(" ")[2]}`}>
                                {cert.organization}
                              </p>
                              <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                                {cert.description}
                              </p>
                              <p className="text-xs text-gray-500">{cert.period}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              <Tab
                key="agilidad"
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⚡</span>
                    <span>Agilidad & Frameworks</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {/* ICAgile ACC */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm text-center leading-tight">
                            IC
                            <br />
                            AGILE
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            ICAgile Certified Professional - Agile Coaching (ICP
                            ACC)
                          </h3>
                          <p className="text-base font-semibold text-blue-600 mb-2">
                            ICAgile
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Agile methodologies, liderazgo de equipos, product
                            owner, agile coach
                          </p>
                          <p className="text-xs text-gray-500">
                            jun. 2024 | ID:
                            346-44232-c7a7699f-6c03-4440-8152-5def04f215fd
                          </p>
                        </div>
                      </div>

                      {/* ICAgile HR */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm text-center leading-tight">
                            IC
                            <br />
                            AGILE
                            <br />
                            <span className="text-xs">HR</span>
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            ICAgile Certified Professional - Agility in HR
                          </h3>
                          <p className="text-base font-semibold text-green-600 mb-2">
                            ICAgile
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Agilidad aplicada a recursos humanos y gestión de
                            personas
                          </p>
                          <p className="text-xs text-gray-500">
                            sept. 2025 | ID:
                            316-53764-c7a7699f-6c03-4440-8152-5def04f215fd
                          </p>
                        </div>
                      </div>

                      {/* Management 3.0 */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm text-center leading-tight">
                            MGMT
                            <br />
                            3.0
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Management 3.0 - Energizing People Plus &
                            Fundamentals
                          </h3>
                          <p className="text-base font-semibold text-purple-600 mb-2">
                            Management 3.0
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Gestión de personas, entrenamiento personal,
                            estrategia empresarial, liderazgo moderno
                          </p>
                          <p className="text-xs text-gray-500">ago. 2022</p>
                        </div>
                      </div>

                      {/* SCRUMstudy SAMC */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm text-center leading-tight">
                            SCRUM
                            <br />
                            STUDY
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            SCRUMstudy Agile Master Certified (SAMC)
                          </h3>
                          <p className="text-base font-semibold text-orange-600 mb-2">
                            Vabro.ai and VMEdu.com
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Agile methodologies, Waterfall, Lean software
                            development, Agile leadership, Entorno Agile
                          </p>
                          <p className="text-xs text-gray-500">
                            jun. 2024 | ID: 775162
                          </p>
                        </div>
                      </div>

                      {/* PMI-ACP */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-2xl">
                            PMI
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            PMI Agile Certified Practitioner (PMI-ACP)
                          </h3>
                          <p className="text-base font-semibold text-yellow-700 mb-2">
                            Project Management Institute
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Certificación en metodologías ágiles y gestión de
                            proyectos
                          </p>
                          <p className="text-xs text-gray-500">
                            oct. 2024 | ID: 3956641
                          </p>
                        </div>
                      </div>

                      {/* Scrum Master/Product Owner/Developer */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm text-center leading-tight">
                            SCRUM
                            <br />
                            TRIPLE
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Scrum Master, Product Owner & Developer Certified
                          </h3>
                          <p className="text-base font-semibold text-teal-600 mb-2">
                            SCRUMstudy
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Scrum Master, Product Owner, Developer - Framework
                            completo Scrum
                          </p>
                          <p className="text-xs text-gray-500">2021-2024</p>
                        </div>
                      </div>

                      {/* Kanban */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm text-center leading-tight">
                            KANBAN
                            <br />
                            <span className="text-xs">KMP</span>
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Kanban Management Professional (KMP)
                          </h3>
                          <p className="text-base font-semibold text-indigo-600 mb-2">
                            Kanban University
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Gestión de programas, operaciones lean,
                            transformación lean, transformación digital, Kanban
                          </p>
                          <p className="text-xs text-gray-500">oct. 2021</p>
                        </div>
                      </div>

                      {/* Lean Startup */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm text-center leading-tight">
                            LEAN
                            <br />
                            STARTUP
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Lean StartUp Certified Associate
                          </h3>
                          <p className="text-base font-semibold text-amber-600 mb-2">
                            CertJoin
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Lean Startup, operaciones lean,
                            modelo-vista-presentador (MVP)
                          </p>
                          <p className="text-xs text-gray-500">
                            ago. 2021 | ID: 6dBxDaN1C1
                          </p>
                        </div>
                      </div>

                      {/* Lean UX */}
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-white font-bold text-sm text-center leading-tight">
                            LEAN
                            <br />
                            UX
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Lean UX
                          </h3>
                          <p className="text-base font-semibold text-pink-600 mb-2">
                            UTEC Posgrado
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Liderazgo de equipos de desarrollo, Lean Startup,
                            herramientas Lean, desarrollo de software lean, Lean
                            UX, transformación lean
                          </p>
                          <p className="text-xs text-gray-500">dic. 2022</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              <Tab
                key="tech"
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💻</span>
                    <span>Tecnología & Cloud</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {/* MIT */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-red-700">
                            MIT
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Transformación Digital: Tecnologías y Aplicaciones
                            Prácticas
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            MIT Professional Education
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Programa ejecutivo del MIT: IA, Big Data, Machine
                            Learning, IoT, Blockchain. Transformación
                            organizacional y análisis de casos prácticos.
                          </p>
                          <p className="text-xs text-gray-500">
                            jun. 2025 - nov. 2025 | ID: 161063771
                          </p>
                        </div>
                      </div>

                      {/* Google Cloud */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">☁️</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Google Cloud Certified - Cloud Digital Leader
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            Google
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Google Cloud Platform - Liderazgo digital en la nube
                          </p>
                          <p className="text-xs text-gray-500">
                            sept. 2024 - sept. 2027
                          </p>
                        </div>
                      </div>

                      {/* AWS */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🟠</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            AWS Certified Cloud Practitioner
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            Amazon Web Services (AWS)
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Seguridad de Cloud, Amazon Web Services (AWS),
                            Computación en la nube
                          </p>
                          <p className="text-xs text-gray-500">
                            ago. 2024 - ago. 2027
                          </p>
                        </div>
                      </div>

                      {/* Microsoft Azure */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🔷</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Microsoft Certified: Azure Fundamentals
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            Microsoft
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Fundamentos de Microsoft Azure Cloud
                          </p>
                          <p className="text-xs text-gray-500">
                            jul. 2024 | ID: DA756991C65912ABE
                          </p>
                        </div>
                      </div>

                      {/* DevOps */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">⚙️</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            DevOps Foundation Professional Certification (DFPC)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            CertiProf
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            DevOps, Microsoft Azure, DevSecOps
                          </p>
                          <p className="text-xs text-gray-500">
                            jul. 2024 - jul. 2027
                          </p>
                        </div>
                      </div>

                      {/* Cybersecurity */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🔐</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Lead CyberSecurity Professional Certification
                            (LCSPC™)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            CertiProf
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Liderazgo en ciberseguridad profesional
                          </p>
                          <p className="text-xs text-gray-500">
                            abr. 2025 - abr. 2027
                          </p>
                        </div>
                      </div>

                      {/* Scrum for Ops */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🔄</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Scrum for Ops and DevOps Fundamentals Certified
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            SCRUMstudy
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Scrum/Kanban/AI/Business Analysis/OKRs/Six Sigma -
                            Integración continua
                          </p>
                          <p className="text-xs text-gray-500">2024</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              <Tab
                key="education"
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎓</span>
                    <span>Educación</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {/* ESAN */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-red-700">
                            E
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            PADE Internacional en Transformación Digital
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            ESAN Graduate School of Business
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Tecnología en la gestión empresarial / Procesamiento
                            de datos
                          </p>
                          <p className="text-xs text-gray-500">
                            jun. 2024 - jun. 2025
                          </p>
                        </div>
                      </div>

                      {/* UPC CTO */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎯</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Programa Alta Dirección CTO - Excelencia en Gestión
                            Estratégica de la Tecnología
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            Universidad del Pacífico (PE)
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Informática, comunicaciones y servicios de
                            asistencia. Emplear nuevas tecnologías de manera
                            estratégica, desarrollar capacidad de liderazgo e
                            influencia personal para liderar la transformación a
                            través de Tecnología, Innovación y Transformación
                            Digital. IA, Big Data, ML, Robotics, Blockchain,
                            Biotechnology.
                          </p>
                          <p className="text-xs text-gray-500">
                            ene. 2023 - sept. 2024
                          </p>
                        </div>
                      </div>

                      {/* UPN Maestría */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎓</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Maestría en Tecnologías de la Información (TI)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            Universidad Privada del Norte
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Ingeniería de sistemas
                          </p>
                          <p className="text-xs text-gray-500">
                            feb. 2018 - abr. 2020
                          </p>
                        </div>
                      </div>

                      {/* MBA */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">📊</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Master of Business Administration (MBA)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            Universidad Nacional de Trujillo
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Ciencias Económicas
                          </p>
                          <p className="text-xs text-gray-500">
                            feb. 2009 - jul. 2011
                          </p>
                        </div>
                      </div>

                      {/* Design Thinking & OKR */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎨</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Design Thinking Professional & OKR Certified
                            Professional
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">
                            CertiProf
                          </p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Gestión de productos, planificación de proyectos,
                            planificación estratégica, indicadores clave de
                            desempeño, planificación de negocios, planificación
                            de procesos, objetivos y resultados clave (OKR)
                          </p>
                          <p className="text-xs text-gray-500">2021-2023</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Mi Evolución Profesional */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 text-center leading-tight"
              variants={fadeIn}
            >
              18+ años transformándome (y transformando)
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              De escribir mi primera línea de código a liderar transformaciones
              culturales en equipos de alto rendimiento
            </motion.p>

            <div className="space-y-8">
              {/* Backend Developer */}
              <motion.div variants={fadeIn}>
                <Card
                  className="border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
                  shadow="md"
                >
                  <CardBody className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl">💻</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-3">
                          Backend Developer → El amor por la arquitectura
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-[1.9] mb-4">
                          Empecé con{" "}
                          <strong className="text-blue-600">
                            PHP, MySQL, arquitecturas MVC
                          </strong>
                          . Construía sistemas desde cero: plataformas de
                          e-commerce, ERPs, sistemas de pasajes para transporte.{" "}
                          <strong className="text-customgray">
                            Aprendí que el código limpio no es solo sintaxis, es
                            empatía con quien viene después
                          </strong>
                          .
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Chip
                            className="bg-blue-100 text-blue-700"
                            size="sm"
                            variant="flat"
                          >
                            PHP
                          </Chip>
                          <Chip
                            className="bg-blue-100 text-blue-700"
                            size="sm"
                            variant="flat"
                          >
                            MySQL
                          </Chip>
                          <Chip
                            className="bg-blue-100 text-blue-700"
                            size="sm"
                            variant="flat"
                          >
                            APIs REST
                          </Chip>
                          <Chip
                            className="bg-blue-100 text-blue-700"
                            size="sm"
                            variant="flat"
                          >
                            Arquitectura de Software
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Frontend Developer */}
              <motion.div variants={fadeIn}>
                <Card
                  className="border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300"
                  shadow="md"
                >
                  <CardBody className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl">🎨</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-3">
                          Frontend Developer → La experiencia importa (y me
                          apasiona)
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-[1.9] mb-4">
                          Descubrí que{" "}
                          <strong className="text-purple-600">
                            la interfaz es donde el usuario siente el producto
                          </strong>
                          . JavaScript, React, animaciones, performance,
                          accesibilidad.{" "}
                          <strong className="text-customgray">
                            No bastaba con que funcionara, tenía que sentirse
                            bien, fluir, emocionar
                          </strong>
                          . El UX se volvió mi obsesión: entender cada clic,
                          cada microinteracción, cada segundo de carga.{" "}
                          <strong className="text-purple-600">
                            Me enamoré de crear experiencias que la gente ama
                            usar
                          </strong>
                          .
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Chip
                            className="bg-purple-100 text-purple-700"
                            size="sm"
                            variant="flat"
                          >
                            JavaScript
                          </Chip>
                          <Chip
                            className="bg-purple-100 text-purple-700"
                            size="sm"
                            variant="flat"
                          >
                            React
                          </Chip>
                          <Chip
                            className="bg-purple-100 text-purple-700"
                            size="sm"
                            variant="flat"
                          >
                            UX/UI Design
                          </Chip>
                          <Chip
                            className="bg-purple-100 text-purple-700"
                            size="sm"
                            variant="flat"
                          >
                            Performance
                          </Chip>
                          <Chip
                            className="bg-purple-100 text-purple-700"
                            size="sm"
                            variant="flat"
                          >
                            User Experience
                          </Chip>
                          <Chip
                            className="bg-purple-100 text-purple-700"
                            size="sm"
                            variant="flat"
                          >
                            Design Thinking
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Full Stack Developer */}
              <motion.div variants={fadeIn}>
                <Card
                  className="border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300"
                  shadow="md"
                >
                  <CardBody className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl">🔧</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-3">
                          Full Stack Developer → Ver el panorama completo +
                          Growth
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-[1.9] mb-4">
                          Junté ambos mundos:{" "}
                          <strong className="text-orange-600">
                            arquitectura backend + experiencia frontend
                          </strong>
                          . Ahora podía ver el producto completo, entender
                          trade-offs, tomar decisiones técnicas pensando en el
                          negocio. Pero no bastaba con construir bien:{" "}
                          <strong className="text-customgray">
                            descubrí mi pasión por el marketing digital y growth
                          </strong>
                          . Analytics, conversión, funnels, A/B testing.{" "}
                          <strong className="text-orange-600">
                            Cada línea de código era una oportunidad para crecer
                            el negocio
                          </strong>
                          .
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Chip
                            className="bg-orange-100 text-orange-700"
                            size="sm"
                            variant="flat"
                          >
                            Full Stack
                          </Chip>
                          <Chip
                            className="bg-orange-100 text-orange-700"
                            size="sm"
                            variant="flat"
                          >
                            Cloud (AWS, Azure)
                          </Chip>
                          <Chip
                            className="bg-orange-100 text-orange-700"
                            size="sm"
                            variant="flat"
                          >
                            DevOps
                          </Chip>
                          <Chip
                            className="bg-orange-100 text-orange-700"
                            size="sm"
                            variant="flat"
                          >
                            Marketing Digital
                          </Chip>
                          <Chip
                            className="bg-orange-100 text-orange-700"
                            size="sm"
                            variant="flat"
                          >
                            Growth Hacking
                          </Chip>
                          <Chip
                            className="bg-orange-100 text-orange-700"
                            size="sm"
                            variant="flat"
                          >
                            Analytics
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Tech Lead / Product Owner */}
              <motion.div variants={fadeIn}>
                <Card
                  className="border-l-4 border-green-500 hover:shadow-xl transition-all duration-300"
                  shadow="md"
                >
                  <CardBody className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl">🚀</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-3">
                          Tech Lead & Product Owner → El código no es suficiente
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-[1.9] mb-4">
                          Lideré equipos, definí roadmaps, negocié con
                          stakeholders. Pero aquí descubrí la verdad:
                          <strong className="text-green-600">
                            los mejores productos nacen de equipos alineados y
                            motivados
                          </strong>
                          . No bastaba el código perfecto si{" "}
                          <strong className="text-customgray">
                            las personas no tenían claridad, propósito o
                            espacios para crecer
                          </strong>
                          .
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Chip
                            className="bg-green-100 text-green-700"
                            size="sm"
                            variant="flat"
                          >
                            Product Management
                          </Chip>
                          <Chip
                            className="bg-green-100 text-green-700"
                            size="sm"
                            variant="flat"
                          >
                            Scrum
                          </Chip>
                          <Chip
                            className="bg-green-100 text-green-700"
                            size="sm"
                            variant="flat"
                          >
                            Liderazgo Técnico
                          </Chip>
                          <Chip
                            className="bg-green-100 text-green-700"
                            size="sm"
                            variant="flat"
                          >
                            Agile
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Country Manager */}
              <motion.div variants={fadeIn}>
                <Card
                  className="border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
                  shadow="md"
                >
                  <CardBody className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl">📊</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-3">
                          Country Manager → Cultura Data-Driven y visión
                          estratégica
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-[1.9] mb-4">
                          Gestioné operaciones en Perú coordinando{" "}
                          <strong className="text-indigo-600">
                            equipos de desarrollo, marketing, call center,
                            ventas y gestión de talento
                          </strong>
                          . Aprendí que el éxito no está solo en el producto,
                          sino en{" "}
                          <strong className="text-customgray">
                            alinear múltiples áreas hacia un objetivo común,
                            midiendo impacto con KPIs y OKRs
                          </strong>
                          . Me obsesioné con{" "}
                          <strong className="text-indigo-600">
                            construir una cultura data-driven: cada decisión
                            respaldada por datos, cada estrategia validada con
                            métricas
                          </strong>
                          . Entendí que las personas son la estrategia más
                          poderosa, y los datos son su mejor aliado.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Chip
                            className="bg-indigo-100 text-indigo-700"
                            size="sm"
                            variant="flat"
                          >
                            Gestión Comercial
                          </Chip>
                          <Chip
                            className="bg-indigo-100 text-indigo-700"
                            size="sm"
                            variant="flat"
                          >
                            KPIs & OKRs
                          </Chip>
                          <Chip
                            className="bg-indigo-100 text-indigo-700"
                            size="sm"
                            variant="flat"
                          >
                            Data-Driven Culture
                          </Chip>
                          <Chip
                            className="bg-indigo-100 text-indigo-700"
                            size="sm"
                            variant="flat"
                          >
                            Gestión de Talento
                          </Chip>
                          <Chip
                            className="bg-indigo-100 text-indigo-700"
                            size="sm"
                            variant="flat"
                          >
                            Estrategia de Negocio
                          </Chip>
                          <Chip
                            className="bg-indigo-100 text-indigo-700"
                            size="sm"
                            variant="flat"
                          >
                            ROI & Analytics
                          </Chip>
                          <Chip
                            className="bg-indigo-100 text-indigo-700"
                            size="sm"
                            variant="flat"
                          >
                            Liderazgo Multifuncional
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Estratega & Coach */}
              <motion.div variants={fadeIn}>
                <Card
                  className="border-l-4 border-primary hover:shadow-2xl transition-all duration-300"
                  shadow="lg"
                >
                  <CardBody className="p-8 bg-gradient-to-br from-primary/5 to-brand/5">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand rounded-2xl flex items-center justify-center shadow-xl">
                          <span className="text-3xl">✨</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-3">
                          Estratega Digital & Agile Coach → Transformar personas
                          y culturas
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 leading-[1.9] mb-4">
                          Hoy mi código son{" "}
                          <strong className="text-primary">
                            conversaciones que transforman equipos
                          </strong>
                          . Mi deployment es{" "}
                          <strong className="text-brand">
                            ayudar a líderes a encontrar su voz
                          </strong>
                          . Mi mejor arquitectura es{" "}
                          <strong className="text-customgray">
                            construir culturas donde las personas florecen y el
                            talento se convierte en impacto real
                          </strong>
                          . Ya no programo en JavaScript, pero sigo innovando:
                          ahora en el desarrollo humano.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Chip
                            className="bg-primary/20 text-primary"
                            size="sm"
                            variant="flat"
                          >
                            Coaching Profesional
                          </Chip>
                          <Chip
                            className="bg-primary/20 text-primary"
                            size="sm"
                            variant="flat"
                          >
                            Transformación Digital
                          </Chip>
                          <Chip
                            className="bg-primary/20 text-primary"
                            size="sm"
                            variant="flat"
                          >
                            Cultura Organizacional
                          </Chip>
                          <Chip
                            className="bg-primary/20 text-primary"
                            size="sm"
                            variant="flat"
                          >
                            Liderazgo Consciente
                          </Chip>
                          <Chip
                            className="bg-primary/20 text-primary"
                            size="sm"
                            variant="flat"
                          >
                            Innovación
                          </Chip>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>

            {/* Quote de cierre */}
            <motion.div className="mt-16 text-center" variants={fadeIn}>
              <Card
                className="bg-gradient-to-br from-gray-900 to-customgray border-2 border-primary/30"
                shadow="lg"
              >
                <CardBody className="p-12">
                  <p className="text-xl md:text-2xl lg:text-3xl font-heading text-white/95 leading-[1.7] italic">
                    &ldquo;Del código backend a liderar países. De gestionar KPIs a
                    transformar culturas.
                    <strong className="text-primary font-sans not-italic">
                      {" "}
                      Sigo siendo innovador, solo que ahora mi lenguaje son las
                      personas
                    </strong>
                    .&rdquo;
                  </p>
                  <p className="text-base md:text-lg text-white/70 mt-6 font-body">
                    — Hugo Casanova, 18+ años de evolución continua
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión con 3D Hover */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-16 text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {t("mission.title")} (y por qué)
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary hover:shadow-2xl transition-all duration-300">
                <CardBody className="p-10">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-6">
                    {t("mission.title")}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: t.raw("mission.content") }}
                    className="text-[15px] md:text-base text-gray-700 leading-[1.9] tracking-wide"
                  />
                </CardBody>
              </Card>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="h-full bg-gradient-to-br from-brand/10 to-brand/5 border-2 border-brand hover:shadow-2xl transition-all duration-300">
                <CardBody className="p-10">
                  <div className="text-6xl mb-6">🌟</div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-6">
                    {t("vision.title")}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: t.raw("vision.content") }}
                    className="text-[15px] md:text-base text-gray-700 leading-[1.9] tracking-wide"
                  />
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Valores */}
          <motion.div
            className="mt-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-gradient-to-r from-primary/5 via-white to-brand/5 border-2 border-primary/20">
              <CardBody className="p-10">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-8 text-center flex items-center justify-center">
                  <span className="text-5xl mr-4">💎</span>
                  {t("values.title")}
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {(messages.Sections?.About?.values?.items || []).map((value: any, index: number) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      transition={{ duration: 0.2 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <div className="text-5xl mb-3">{["🤝", "✨", "🌱", "💪"][index]}</div>
                      <h4 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm md:text-[15px] text-gray-600">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Impactante */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-1400 px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="text-6xl mb-8">🚀</div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              {t("cta.title")}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto leading-[2] tracking-wide">
              {t("cta.subtitle")}
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: t.raw("cta.description") }}
              className="text-base md:text-lg lg:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-[1.9]"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                className="bg-brand text-white font-bold text-lg px-10 py-7 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                href="/#cita"
                size="lg"
              >
                {t("cta.buttons.session")}
              </Button>
              <Button
                as={Link}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold transition-all duration-300"
                href="/empresas"
                size="lg"
                variant="bordered"
              >
                {t("cta.buttons.companies")}
              </Button>
            </div>
            <p className="mt-10 text-white/70 font-quote italic text-base md:text-lg max-w-2xl mx-auto leading-[1.9]">
              &ldquo;{t("cta.quote")}&rdquo;
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
