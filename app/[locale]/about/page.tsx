"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CalendlyButton } from "@/components/calendly/CalendlyButton";

export default function AboutNewPage() {
  const t = useTranslations("About");
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollToImpacto = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("impacto");

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-white overflow-hidden">
      {/* HERO SECTION - Mejorado con esencia del sitio */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#0d4746] to-[#083635]">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-1400 px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Chip
                className="mb-6 text-base md:text-lg px-6 py-2"
                color="warning"
                size="lg"
                variant="shadow"
              >
                {t("hero.badge")}
              </Chip>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                {t("hero.title.line1")}{" "}
                <span className="text-brand">{t("hero.title.servers")}</span>
                <br />
                {t("hero.title.line2")}{" "}
                <span className="text-brand">{t("hero.title.people")}</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-body">
                {t("hero.subtitle.line1")}
                <br />
                <span className="font-semibold">
                  {t("hero.subtitle.line2")}
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-brand text-white font-bold text-lg hover:scale-105 transition-transform"
                  size="lg"
                  onClick={scrollToImpacto}
                >
                  {t("hero.cta")}
                </Button>
              </div>
            </motion.div>

            {/* Imagen */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-brand/30 blur-3xl rounded-full" />
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    alt="Hugo Casanova - Tech Leader & Coach"
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    src="/images/about-hugocasanova.jpg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="text-white/60 text-sm mb-2">{t("hero.scrollText")}</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              className="w-1.5 h-2.5 bg-white/60 rounded-full"
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* EL QUIEBRE */}
      <section className="py-12 sm:py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="text-6xl mb-8">💔</div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("breaking.title")}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t("breaking.subtitle")}
              <br />
              <span className="font-bold text-primary">
                {t("breaking.description")}
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "❤️",
                title: t("breaking.pillars.humanity.title"),
                desc: t("breaking.pillars.humanity.description"),
                color: "bg-red-500",
              },
              {
                icon: "🎯",
                title: t("breaking.pillars.purpose.title"),
                desc: t("breaking.pillars.purpose.description"),
                color: "bg-blue-500",
              },
              {
                icon: "🌱",
                title: t("breaking.pillars.growth.title"),
                desc: t("breaking.pillars.growth.description"),
                color: "bg-green-500",
              },
              {
                icon: "⚡",
                title: t("breaking.pillars.excellence.title"),
                desc: t("breaking.pillars.excellence.description"),
                color: "bg-amber-500",
              },
            ].map((pilar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardBody className="p-8 text-center">
                    <div
                      className={`w-20 h-20 ${pilar.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg`}
                    >
                      {pilar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {pilar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pilar.desc}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MI EVOLUCIÓN */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("evolution.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("evolution.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              {
                roleKey: "backend",
                icon: "🔧",
                tech: ["PHP", "MySQL", "Laravel", "APIs"],
                color: "border-blue-500",
              },
              {
                roleKey: "frontend",
                icon: "🎨",
                tech: ["React", "Vue", "TypeScript", "Tailwind"],
                color: "border-purple-500",
              },
              {
                roleKey: "fullstack",
                icon: "⚙️",
                tech: ["Node.js", "Next.js", "MongoDB", "Docker"],
                color: "border-green-500",
              },
              {
                roleKey: "techlead",
                icon: "👥",
                tech: ["Scrum", "Kanban", "Git", "CI/CD"],
                color: "border-orange-500",
              },
              {
                roleKey: "pm",
                icon: "📋",
                tech: ["PMI", "Gantt", "Risk Management", "Stakeholders"],
                color: "border-teal-500",
              },
              {
                roleKey: "headproduct",
                icon: "🎯",
                tech: ["Roadmap", "OKRs", "A/B Testing", "Product Market Fit"],
                color: "border-pink-500",
              },
              {
                roleKey: "po",
                icon: "📊",
                tech: ["Jira", "Miro", "Analytics", "Product Strategy"],
                color: "border-indigo-500",
              },
              {
                roleKey: "country",
                icon: "🚀",
                tech: ["P&L", "OKRs", "Hiring", "Culture"],
                color: "border-red-500",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Card className={`h-full border-l-4 ${step.color} hover:shadow-2xl transition-all duration-300`}>
                  <CardBody className="p-6">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {t(`evolution.roles.${step.roleKey}.role`)}
                    </h3>
                    <p className="text-sm text-gray-700 italic mb-3 leading-relaxed">
                      &ldquo;{t(`evolution.roles.${step.roleKey}.lesson`)}&rdquo;
                    </p>
                    <p className="text-xs font-semibold text-primary mb-3">
                      {t(`evolution.roles.${step.roleKey}.learning`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tech.map((tech, i) => (
                        <Chip key={i} className="text-xs" size="sm" variant="flat">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO REAL */}
      <section
        className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white"
        id="impacto"
      >
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("impact.title.line1")}
              <br />
              <span className="text-brand">{t("impact.title.line2")}</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t("impact.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: "👥",
                statKey: "leaders",
                end: 200,
                suffix: "+",
              },
              {
                icon: "⭐",
                statKey: "rating",
                end: 4.9,
                suffix: "/5",
              },
              {
                icon: "🎯",
                statKey: "retention",
                end: 90,
                suffix: "%",
              },
              {
                icon: "💰",
                statKey: "transformations",
                end: 100,
                suffix: "%",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardBody className="p-8 text-center">
                    <div className="text-5xl mb-4">{stat.icon}</div>
                    <div className="text-5xl md:text-6xl font-bold text-brand mb-2">
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/90 font-semibold text-lg mb-2">
                      {t(`impact.stats.${stat.statKey}.label`)}
                    </p>
                    <p className="text-white/70 text-sm">{t(`impact.stats.${stat.statKey}.description`)}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border border-white/30">
              <CardBody className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {t("impact.social.title")}
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      {t("impact.social.description")}
                    </p>
                    <p className="text-brand font-semibold">
                      {t("impact.social.cta")}
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-brand/30 to-primary/30 rounded-xl flex items-center justify-center">
                      <span className="text-8xl">🐕❤️</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* MI TOOLKIT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("toolkit.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("toolkit.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { name: "ICF Coach", logo: "/images/certifications/icf-coach.svg", color: "bg-blue-50" },
              { name: "Scrum Master", logo: "/images/certifications/scrum-master.svg", color: "bg-orange-50" },
              { name: "AWS Cloud", logo: "/images/certifications/aws-cloud.svg", color: "bg-yellow-50" },
              { name: "Management 3.0", logo: "/images/certifications/management30.svg", color: "bg-purple-50" },
              { name: "Product Owner", logo: "/images/certifications/product-owner.svg", color: "bg-green-50" },
              { name: "Kanban KMP", logo: "/images/certifications/kanban-kmp.svg", color: "bg-indigo-50" },
              { name: "Lean Startup", logo: "/images/certifications/lean-startup.svg", color: "bg-pink-50" },
              { name: "Agile Coach", logo: "/images/certifications/agile-coach.svg", color: "bg-teal-50" },
              { name: "PMI-ACP", logo: "/images/certifications/pmi-acp.svg", color: "bg-red-50" },
              { name: "Google Cloud", logo: "/images/certifications/google-cloud.svg", color: "bg-blue-50" },
              { name: "Newfield Coach", logo: "/images/certifications/newfield-coach.svg", color: "bg-amber-50" },
              { name: "MIT Digital", logo: "/images/certifications/mit-digital.svg", color: "bg-gray-50" },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Card className="border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300">
                  <CardBody className="p-4 text-center">
                    <div
                      className={`relative w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-xl transition-all overflow-hidden`}
                    >
                      <Image
                        alt={`${cert.name} certification logo`}
                        className="object-contain p-1"
                        fill
                        sizes="64px"
                        src={cert.logo}
                      />
                    </div>
                    <p className="text-xs font-semibold text-gray-700 leading-tight">
                      {cert.name}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-500 mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <span className="text-sm">
              Y muchas más certificaciones en Coaching, Agilidad, Tecnología y
              Educación.
            </span>
          </motion.p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {t("cta.title")}
              <br />
              <span className="text-brand">{t("cta.titleHighlight")}</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <CalendlyButton
                className="px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-brand/50 transition-all duration-300"
                size="lg"
                text={t("cta.calendar")}
              />
              <motion.a
                className="px-10 py-5 text-lg font-bold border-2 border-white/30 hover:bg-white/10 rounded-full transition-all duration-300 inline-flex items-center gap-2"
                href="https://www.linkedin.com/in/hcasanovam/"
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💼</span> {t("cta.linkedin")}
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 max-w-3xl mx-auto">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                {t("cta.values.value1")}
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                {t("cta.values.value2")}
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                {t("cta.values.value3")}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
