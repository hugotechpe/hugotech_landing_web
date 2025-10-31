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
import { Breadcrumb } from "@/components/seo/Breadcrumb";

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

  return (
    <main className="bg-white overflow-hidden">
      {/* Breadcrumb Schema para SEO */}
      <Breadcrumb />
      
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
                    <span>{t("certifications.tabs.agility")}</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {(messages.Sections?.About?.certifications?.agility_items || []).map((cert: any, index: number) => {
                        const colors: Record<string, string> = {
                          blue: "from-blue-500 to-blue-600 text-blue-600",
                          green: "from-green-500 to-green-600 text-green-600",
                          purple: "from-purple-600 to-purple-700 text-purple-600",
                          orange: "from-orange-500 to-orange-600 text-orange-600",
                          yellow: "from-yellow-600 to-yellow-700 text-yellow-700",
                          teal: "from-teal-500 to-teal-600 text-teal-600",
                          indigo: "from-indigo-600 to-indigo-700 text-indigo-600",
                          amber: "from-yellow-500 to-amber-600 text-amber-600",
                          pink: "from-pink-500 to-pink-600 text-pink-600"
                        };
                        const colorClass = colors[cert.color] || "from-primary to-brand text-primary";
                        const isLast = index === (messages.Sections?.About?.certifications?.agility_items?.length || 0) - 1;
                        
                        const getOrgLabel = () => {
                          if (cert.organization.includes("ICAgile")) return cert.title.includes("HR") ? "IC\nAGILE\nHR" : "IC\nAGILE";
                          if (cert.organization.includes("Management 3.0")) return "MGMT\n3.0";
                          if (cert.organization.includes("Vabro") || cert.title.includes("SAMC")) return "SCRUM\nSTUDY";
                          if (cert.organization.includes("PMI") || cert.organization.includes("Project Management")) return "PMI";
                          if (cert.title.includes("Scrum Master")) return "SCRUM\nTRIPLE";
                          if (cert.organization.includes("Kanban")) return "KANBAN\nKMP";
                          if (cert.organization.includes("CertJoin")) return "LEAN\nSTARTUP";
                          return "LEAN\nUX";
                        };

                        return (
                          <div key={index} className={`flex items-start gap-4 ${!isLast ? "pb-6 border-b border-gray-200" : ""}`}>
                            <div className={`w-20 h-20 bg-gradient-to-br ${colorClass.split(" ")[0]} ${colorClass.split(" ")[1]} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                              <span className="text-white font-bold text-sm text-center leading-tight whitespace-pre-line">
                                {getOrgLabel()}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                                {cert.title}
                              </h3>
                              <p className={`text-base font-semibold mb-2 ${colorClass.split(" ")[2]}`}>
                                {cert.organization}
                              </p>
                              <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                                {cert.description}
                              </p>
                              <p className="text-xs text-gray-500">
                                {cert.period}{cert.credential ? ` | ${cert.credential}` : ""}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              <Tab
                key="tech"
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💻</span>
                    <span>{t("certifications.tabs.technology")}</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {(messages.Sections?.About?.certifications?.technology_items || []).map((cert: any, index: number) => {
                        const isLast = index === (messages.Sections?.About?.certifications?.technology_items?.length || 0) - 1;

                        return (
                          <div key={index} className={`flex items-start gap-4 ${!isLast ? "pb-6 border-b border-gray-200" : ""}`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-3xl">
                                {cert.icon}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                                {cert.title}
                              </h3>
                              <p className="text-base font-semibold text-primary mb-2">
                                {cert.organization}
                              </p>
                              <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                                {cert.description}
                              </p>
                              <p className="text-xs text-gray-500">
                                {cert.period}{cert.credential ? ` | ${cert.credential}` : ""}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              <Tab
                key="education"
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎓</span>
                    <span>{t("certifications.tabs.education")}</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {(messages.Sections?.About?.certifications?.education_items || []).map((cert: any, index: number) => {
                        const isLast = index === (messages.Sections?.About?.certifications?.education_items?.length || 0) - 1;

                        return (
                          <div key={index} className={`flex items-start gap-4 ${!isLast ? "pb-6 border-b border-gray-200" : ""}`}>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-3xl">
                                {cert.icon}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                                {cert.title}
                              </h3>
                              <p className="text-base font-semibold text-primary mb-2">
                                {cert.organization}
                              </p>
                              <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                                {cert.description}
                              </p>
                              <p className="text-xs text-gray-500">
                                {cert.period}{cert.credential ? ` | ${cert.credential}` : ""}
                              </p>
                            </div>
                          </div>
                        );
                      })}
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
              {t("evolution.title")}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              {t("evolution.subtitle")}
            </motion.p>

            <div className="space-y-8">
              {(messages.Sections?.About?.evolution?.phases || []).map((phase: any, index: number) => {
                const colors = [
                  { border: "border-blue-500", gradient: "from-blue-500 to-blue-600", bg: "bg-blue-100", text: "text-blue-700 text-blue-600" },
                  { border: "border-purple-500", gradient: "from-purple-500 to-purple-600", bg: "bg-purple-100", text: "text-purple-700 text-purple-600" },
                  { border: "border-orange-500", gradient: "from-orange-500 to-orange-600", bg: "bg-orange-100", text: "text-orange-700 text-orange-600" },
                  { border: "border-green-500", gradient: "from-green-500 to-green-600", bg: "bg-green-100", text: "text-green-700 text-green-600" },
                  { border: "border-indigo-500", gradient: "from-indigo-500 to-indigo-600", bg: "bg-indigo-100", text: "text-indigo-700 text-indigo-600" },
                  { border: "border-primary", gradient: "from-primary to-brand", bg: "bg-primary/20", text: "text-primary" }
                ];
                const color = colors[index] || colors[0];
                const icons = ["💻", "🎨", "🔧", "🚀", "📊", "✨"];
                const isLast = index === 5; // Último elemento (Estratega & Coach)

                return (
                  <motion.div key={index} variants={fadeIn}>
                    <Card
                      className={`border-l-4 ${color.border} hover:shadow-xl transition-all duration-300 ${isLast ? "bg-gradient-to-br from-primary/5 to-brand/5" : ""}`}
                      shadow={isLast ? "lg" : "md"}
                    >
                      <CardBody className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className={`w-16 h-16 bg-gradient-to-br ${color.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <span className="text-3xl">{icons[index]}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-3">
                              {phase.title}
                            </h3>
                            <p
                              dangerouslySetInnerHTML={{ __html: phase.description }}
                              className="text-base md:text-lg text-gray-700 leading-[1.9] mb-4"
                            />
                            <div className="flex flex-wrap gap-2">
                              {phase.chips.map((chip: string, chipIndex: number) => (
                                <Chip
                                  key={chipIndex}
                                  className={`${color.bg} ${color.text.split(" ")[0]}`}
                                  size="sm"
                                  variant="flat"
                                >
                                  {chip}
                                </Chip>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Quote de cierre */}
            <motion.div className="mt-16 text-center" variants={fadeIn}>
              <Card
                className="bg-gradient-to-br from-gray-900 to-customgray border-2 border-primary/30"
                shadow="lg"
              >
                <CardBody className="p-12">
                  <p
                    dangerouslySetInnerHTML={{ __html: t.raw("evolution.quote") }}
                    className="text-xl md:text-2xl lg:text-3xl font-heading text-white/95 leading-[1.7] italic"
                  />
                  <p className="text-base md:text-lg text-white/70 mt-6 font-body">
                    — {t("evolution.author")}
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

      {/* Mi Manifiesto */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-4">
              {t("manifiesto.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t("manifiesto.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {(messages.Sections?.About?.manifiesto?.items || []).map((item: any, index: number) => (
              <motion.div key={index} variants={fadeIn}>
                <Card
                  className="h-full hover:shadow-2xl transition-all duration-300 border-t-4 border-primary"
                  shadow="lg"
                >
                  <CardBody className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <blockquote className="text-xl md:text-2xl font-quote italic text-gray-700 max-w-4xl mx-auto">
              &ldquo;{t("manifiesto.quote")}&rdquo;
            </blockquote>
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
