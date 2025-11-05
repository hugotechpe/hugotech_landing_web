"use client";

import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";

import ImpactCounter from "@/components/ImpactCounter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function CoachingConCausaPage() {
  const t = useTranslations("Sections.CoachingConCausa");

  const commitmentItems = ["1", "2"];
  const steps = ["1", "2", "3"];
  const dreamItems = ["1", "2", "3", "4", "5"];
  const transparencyItems = ["1", "2", "3", "4"];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Más humano y directo */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-success/5 to-white dark:from-primary-900/10 dark:via-success-900/10 dark:to-gray-900">
        <motion.div
          animate="visible"
          className="max-w-4xl mx-auto"
          initial="hidden"
          variants={fadeIn}
        >
          <div className="text-center mb-8">
            <Chip className="mb-6" color="success" size="lg" variant="flat">
              {t("hero.chip")}
            </Chip>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t("hero.tagline")}
            </p>
          </div>

          {/* CTA Calendly en el hero */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            variants={fadeIn}
          >
            <a
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold bg-success-500 hover:bg-success-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              href="https://calendly.com/hugotech/mentoria1a1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-2xl">🎁</span>
              <span>Agenda tu Primera Sesión Gratis</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Por qué hago esto - Sección emocional */}
      <section className="py-16 px-4 bg-gradient-to-br from-success-50 to-primary-50 dark:from-success-900/20 dark:to-primary-900/20">
        <motion.div
          animate="visible"
          className="max-w-4xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            variants={fadeIn}
          >
            {t("freeCommitment.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {commitmentItems.map((key) => (
              <motion.div key={key} variants={fadeIn}>
                <Card className="h-full border-l-4 border-success-500 shadow-lg">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl flex-shrink-0">
                        {t(`freeCommitment.items.${key}.icon`)}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {t(`freeCommitment.items.${key}.text`)}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-success-200 dark:border-success-700"
            variants={fadeIn}
          >
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {t("freeCommitment.principle")}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cómo funciona - Más simple y claro */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <motion.div
          animate="visible"
          className="max-w-5xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("howItWorks.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t("howItWorks.intro")}
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((key) => (
              <motion.div key={key} variants={fadeIn}>
                <Card className="border-l-4 border-success-500 hover:shadow-xl transition-shadow">
                  <CardBody className="p-8">
                    <div className="flex items-start gap-6">
                      <span className="text-5xl flex-shrink-0">
                        {t(`howItWorks.steps.${key}.emoji`)}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-success-600 dark:text-success-400">
                          {t(`howItWorks.steps.${key}.title`)}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          {t(`howItWorks.steps.${key}.description`)}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Causas - Honesto: prioridad + anhelos */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-success-50 dark:from-gray-800 dark:to-success-900/20">
        <motion.div
          animate="visible"
          className="max-w-6xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("causes.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t("causes.subtitle")}
            </p>
          </motion.div>

          {/* Causa real (prioritaria) */}
          <motion.div className="mb-16" variants={fadeIn}>
            <Card className="border-4 border-success-400 dark:border-success-600 shadow-2xl bg-gradient-to-br from-success-50 to-white dark:from-success-900/20 dark:to-gray-800">
              <CardBody className="p-8 md:p-12">
                <div className="text-center">
                  <span className="text-7xl mb-6 block">🐾</span>
                  <h3 className="text-3xl font-bold mb-4 text-success-700 dark:text-success-300">
                    {t("causes.realCause.title")}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                    {t("causes.realCause.description")}
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-success-100 dark:bg-success-900/30 rounded-xl">
                    <span className="text-lg font-semibold text-success-700 dark:text-success-300">
                      {t("causes.realCause.impact")}
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Anhelos futuros */}
          <motion.div variants={fadeIn}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                {t("causes.dreams.title")}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                {t("causes.dreams.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dreamItems.map((key) => (
                <motion.div key={key} variants={fadeIn}>
                  <Card className="h-full border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-success-400 dark:hover:border-success-600 transition-colors bg-white/50 dark:bg-gray-800/50">
                    <CardBody className="p-6">
                      <span className="text-5xl mb-4 block">
                        {t(`causes.dreams.items.${key}.icon`)}
                      </span>
                      <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                        {t(`causes.dreams.items.${key}.title`)}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {t(`causes.dreams.items.${key}.description`)}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 text-center p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-700"
              variants={fadeIn}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                💭 {t("causes.honestNote")}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Inversión - Simple y directo */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <motion.div
          animate="visible"
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t("investment.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            {t("investment.subtitle")}
          </p>

          <Card className="border-4 border-success-400 dark:border-success-600 shadow-2xl max-w-xl mx-auto">
            <CardBody className="p-10">
              <div className="text-center">
                <p className="text-5xl font-bold text-success-600 dark:text-success-400 mb-2">
                  {t("investment.pricing.amount")}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {t("investment.pricing.perSession")}
                </p>
                <div className="space-y-3 text-left">
                  <p className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-success-500 text-xl">✓</span>
                    <span>{t("investment.pricing.distribution")}</span>
                  </p>
                  <p className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-success-500 text-xl">✓</span>
                    <span>{t("investment.pricing.breakdown")}</span>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <p className="mt-10 text-xl italic text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            &ldquo;{t("investment.quote")}&rdquo;
          </p>
        </motion.div>
      </section>

      {/* Transparencia */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-success-50 dark:from-primary-900/20 dark:to-success-900/20">
        <motion.div
          animate="visible"
          className="max-w-4xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            variants={fadeIn}
          >
            {t("transparency.title")}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10"
            variants={fadeIn}
          >
            {t("transparency.description")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            {transparencyItems.map((key) => (
              <motion.div key={key} variants={fadeIn}>
                <Card className="h-full border-l-4 border-primary-500">
                  <CardBody className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {t(`transparency.items.${key}`)}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 text-center p-6 bg-white dark:bg-gray-800 rounded-xl"
            variants={fadeIn}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("transparency.commitment")}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Sección de Impacto en Tiempo Real */}
      <ImpactCounter
        causesLabel={t("impact.causesLabel")}
        errorText={t("impact.errorText")}
        lastUpdateLabel={t("impact.lastUpdateLabel")}
        loadingText={t("impact.loadingText")}
        sessionsLabel={t("impact.sessionsLabel")}
        subtitle={t("impact.subtitle")}
        title={t("impact.title")}
        totalLabel={t("impact.totalLabel")}
      />

      {/* CTAs finales */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <motion.div
          animate="visible"
          className="max-w-5xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn}>
              <Card className="h-full border-4 border-success-400 dark:border-success-600 hover:shadow-2xl transition-shadow bg-white dark:bg-gray-800">
                <CardBody className="p-8 text-center flex flex-col items-center justify-between">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {t("cta.free.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t("cta.free.subtitle")}
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold bg-success-600 hover:bg-success-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full"
                    href="https://calendly.com/hugotech/mentoria1a1"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-2xl">🎁</span>
                    <span className="text-white">{t("cta.free.button")}</span>
                  </a>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full border-4 border-primary-400 dark:border-primary-600 hover:shadow-2xl transition-shadow bg-white dark:bg-gray-800">
                <CardBody className="p-8 text-center flex flex-col items-center justify-between">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {t("cta.withCause.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t("cta.withCause.subtitle")}
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full"
                    href="https://calendly.com/hugotech/mentor-coaching-1-a-1-con-causa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-2xl">💚</span>
                    <span className="text-white">{t("cta.withCause.button")}</span>
                  </a>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mensaje final - Emocional */}
      <section className="py-16 px-4 bg-gradient-to-br from-success-100 to-primary-100 dark:from-success-900/30 dark:to-primary-900/30">
        <motion.div
          animate="visible"
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          variants={fadeIn}
        >
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 italic">
            &ldquo;{t("finalMessage.text")}&rdquo;
          </blockquote>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {t("finalMessage.author")}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
