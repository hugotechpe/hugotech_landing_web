"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { LazyCalendlyEmbed } from "@/components/calendly/LazyCalendlyEmbed";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export default function CoachingPage() {
  const t = useTranslations("Sections.Coaching");

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-white overflow-hidden">
      {/* Breadcrumb Schema para SEO */}
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-orange-600 to-orange-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </div>
        </div>

        <div className="container mx-auto max-w-1400 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 leading-[1.8] tracking-wide max-w-3xl mx-auto">
                {t("hero.subtitle")}
              </p>
              <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
                <span className="text-2xl">⏱️</span>
                <span className="text-lg font-semibold">
                  {t("hero.duration")}
                </span>
              </div>

              {/* CTA Button */}
              <Button
                as={Link}
                href="#agendar"
                size="lg"
                className="bg-white text-brand font-bold text-lg px-10 py-7 hover:scale-110 hover:shadow-2xl transition-all duration-300"
              >
                Agenda tu sesión ahora
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qué es el Coaching */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-customgray mb-6">
                {t("whatIs.title")}
              </h2>
              <div className="text-6xl mb-6">🌱</div>
            </div>
            <Card className="bg-gradient-to-br from-brand/5 to-orange-100/30 border-2 border-brand/20">
              <CardBody className="p-10">
                <p className="text-lg md:text-xl text-gray-700 leading-[2] tracking-wide text-center mb-6">
                  {t("whatIs.description")}
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl mb-3">
                        {t(`whatIs.principles.${index}.icon`)}
                      </div>
                      <h3 className="text-lg font-bold text-customgray mb-2">
                        {t(`whatIs.principles.${index}.title`)}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t(`whatIs.principles.${index}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Beneficios del Coaching */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-customgray mb-4">
              {t("benefits.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("benefits.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-brand">
                  <CardBody className="p-6">
                    <div className="text-4xl mb-4">
                      {t(`benefits.items.${index}.icon`)}
                    </div>
                    <h3 className="text-xl font-bold font-heading text-customgray mb-3">
                      {t(`benefits.items.${index}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`benefits.items.${index}.description`)}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-customgray mb-8 text-center">
              {t("forWhom.title")}
            </h2>
            <Card className="bg-gradient-to-br from-brand/5 to-orange-100/30 border-2 border-brand/20">
              <CardBody className="p-8">
                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">✓</span>
                      <span className="text-lg text-gray-700">
                        {t(`forWhom.items.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Diferencia entre Coaching y Mentor Coaching */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-customgray mb-12 text-center">
              {t("difference.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-brand/10 to-orange-100/40 border-2 border-brand hover:shadow-xl transition-all">
                <CardBody className="p-8">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold font-heading text-customgray mb-4">
                    {t("difference.coaching.title")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t("difference.coaching.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-brand">
                      {t("difference.coaching.focus")}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 pl-4">
                      {[1, 2, 3].map((index) => (
                        <li key={index}>
                          • {t(`difference.coaching.topics.${index}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary hover:shadow-xl transition-all">
                <CardBody className="p-8">
                  <div className="text-5xl mb-4">🧭</div>
                  <h3 className="text-2xl font-bold font-heading text-customgray mb-4">
                    {t("difference.mentoring.title")}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t("difference.mentoring.description")}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">
                      {t("difference.mentoring.focus")}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 pl-4">
                      {[1, 2, 3].map((index) => (
                        <li key={index}>
                          • {t(`difference.mentoring.topics.${index}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-customgray mb-12 text-center">
              {t("howItWorks.title")}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                    <CardBody className="p-6">
                      <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {index}
                      </div>
                      <h3 className="text-lg font-bold font-heading text-customgray mb-3">
                        {t(`howItWorks.steps.${index}.title`)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t(`howItWorks.steps.${index}.description`)}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="py-16 md:py-20 bg-white" id="agendar">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-customgray mb-4">
                {t("schedule.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("schedule.subtitle")}
              </p>
            </div>

            <LazyCalendlyEmbed
              url="https://calendly.com/hugotech/coaching-1-a-1"
              height="800px"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand via-orange-600 to-orange-700 text-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="text-6xl mb-6">💫</div>
            <blockquote className="text-2xl md:text-3xl font-heading italic mb-6 leading-tight">
              &ldquo;{t("quote.text")}&rdquo;
            </blockquote>
            <p className="text-lg text-white/80">— {t("quote.author")}</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
