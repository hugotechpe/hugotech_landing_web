"use client";

import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

import { Link } from "@/i18n/navigation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function CoachingConCausaPage() {
  const t = useTranslations("Sections.CoachingConCausa");

  const causes = [
    { key: "1", emoji: "🐾" },
    { key: "2", emoji: "👨‍💻" },
    { key: "3", emoji: "❤️" },
    { key: "4", emoji: "🌿" },
  ];

  const steps = ["1", "2", "3"];
  const transparencyItems = ["1", "2", "3", "4"];
  const commitmentItems = ["1", "2"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-br from-primary-50 via-success-50 to-secondary-50 dark:from-primary-900/20 dark:via-success-900/20 dark:to-secondary-900/20">
        <motion.div
          animate="visible"
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          variants={fadeIn}
        >
          <Chip className="mb-6" color="success" size="lg" variant="flat">
            {t("hero.chip")}
          </Chip>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-success-600 dark:from-primary-400 dark:to-success-400 bg-clip-text text-transparent">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-default-700 dark:text-default-300 mb-4 font-medium">
            {t("hero.subtitle")}
          </p>
          <p className="text-lg text-default-600 dark:text-default-400 max-w-3xl mx-auto">
            {t("hero.tagline")}
          </p>
        </motion.div>
      </section>

      {/* Free Commitment Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-success-100 to-primary-100 dark:from-success-900/30 dark:to-primary-900/30">
        <motion.div
          animate="visible"
          className="max-w-4xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={fadeIn}
          >
            {t("freeCommitment.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {commitmentItems.map((key) => (
              <motion.div key={key} variants={fadeIn}>
                <Card className="h-full border-2 border-success-200 dark:border-success-800">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">
                        {t(`freeCommitment.items.${key}.icon`)}
                      </span>
                      <p className="text-default-700 dark:text-default-300 leading-relaxed">
                        {t(`freeCommitment.items.${key}.text`)}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center italic text-lg text-default-600 dark:text-default-400 font-medium"
            variants={fadeIn}
          >
            {t("freeCommitment.principle")}
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <motion.div
          animate="visible"
          className="max-w-5xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-xl text-default-600 dark:text-default-400">
              {t("howItWorks.intro")}
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((key) => (
              <motion.div key={key} variants={fadeIn}>
                <Card className="border-l-4 border-success-500">
                  <CardBody className="p-8">
                    <div className="flex items-start gap-6">
                      <span className="text-5xl flex-shrink-0">
                        {t(`howItWorks.steps.${key}.emoji`)}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-success-600 dark:text-success-400">
                          {t(`howItWorks.steps.${key}.title`)}
                        </h3>
                        <p className="text-lg text-default-700 dark:text-default-300 leading-relaxed">
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

      {/* Causes Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20">
        <motion.div
          animate="visible"
          className="max-w-6xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("causes.title")}
            </h2>
            <p className="text-xl text-default-600 dark:text-default-400 max-w-3xl mx-auto">
              {t("causes.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {causes.map(({ key, emoji }) => (
              <motion.div key={key} variants={fadeIn}>
                <Card className="h-full hover:shadow-xl transition-shadow border-2 border-default-200 dark:border-default-800">
                  <CardBody className="p-8">
                    <div className="text-6xl mb-4">{emoji}</div>
                    <h3 className="text-2xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                      {t(`causes.items.${key}.title`)}
                    </h3>
                    <p className="text-default-700 dark:text-default-300 mb-4 leading-relaxed">
                      {t(`causes.items.${key}.description`)}
                    </p>
                    <div className="flex items-center gap-2 text-success-600 dark:text-success-400 font-semibold">
                      <span>💚</span>
                      <span>{t(`causes.items.${key}.impact`)}</span>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <motion.div
          animate="visible"
          className="max-w-5xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("investment.title")}
            </h2>
            <p className="text-2xl font-semibold text-success-600 dark:text-success-400 mb-6">
              {t("investment.subtitle")}
            </p>
            <p className="text-xl italic text-primary-600 dark:text-primary-400 max-w-3xl mx-auto">
              &ldquo;{t("investment.quote")}&rdquo;
            </p>
          </motion.div>

          {/* Pricing Card */}
          <motion.div className="mb-12" variants={fadeIn}>
            <Card className="bg-gradient-to-br from-success-50 to-primary-50 dark:from-success-900/20 dark:to-primary-900/20 border-2 border-success-300 dark:border-success-700">
              <CardBody className="p-8 text-center">
                <div className="text-5xl font-bold text-success-600 dark:text-success-400 mb-2">
                  {t("investment.pricing.amount")}
                </div>
                <p className="text-lg text-default-700 dark:text-default-300 mb-4">
                  {t("investment.pricing.perSession")}
                </p>
                <div className="inline-block bg-white dark:bg-gray-800 px-6 py-3 rounded-full mb-4">
                  <p className="font-semibold text-success-700 dark:text-success-300">
                    ✓ {t("investment.pricing.distribution")}
                  </p>
                </div>
                <p className="text-sm text-default-600 dark:text-default-400 italic">
                  {t("investment.pricing.breakdown")}
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn}>
              <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
                <CardBody className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {t("investment.cards.1.title")}
                  </h3>
                  <p className="text-default-600 dark:text-default-400">
                    {t("investment.cards.1.description")}
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800">
                <CardBody className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                    <span className="text-4xl">🌟</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {t("investment.cards.2.title")}
                  </h3>
                  <p className="text-default-600 dark:text-default-400">
                    {t("investment.cards.2.description")}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
        <motion.div
          animate="visible"
          className="max-w-4xl mx-auto"
          initial="hidden"
          variants={stagger}
        >
          <motion.div className="text-center mb-12" variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("transparency.title")}
            </h2>
            <p className="text-xl text-default-600 dark:text-default-400">
              {t("transparency.description")}
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="border-2 border-primary-300 dark:border-primary-700">
              <CardBody className="p-8">
                <ul className="space-y-4">
                  {transparencyItems.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <span className="text-success-500 text-2xl flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-lg text-default-700 dark:text-default-300">
                        {t(`transparency.items.${key}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </motion.div>

          <motion.p
            className="text-center text-lg font-semibold text-primary-600 dark:text-primary-400 mt-8"
            variants={fadeIn}
          >
            {t("transparency.commitment")}
          </motion.p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <motion.div
          animate="visible"
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          variants={stagger}
        >
          <motion.div className="space-y-8" variants={fadeIn}>
            <div>
              <h3 className="text-3xl font-bold mb-4">{t("cta.free.title")}</h3>
              <p className="text-lg text-default-600 dark:text-default-400 mb-6">
                {t("cta.free.subtitle")}
              </p>
              <Button
                as={Link}
                className="font-semibold text-lg px-8 py-6"
                color="success"
                href="/mentor-coaching"
                size="lg"
                variant="shadow"
              >
                {t("cta.free.button")}
              </Button>
            </div>

            <div className="pt-8 border-t-2 border-default-200 dark:border-default-800">
              <h3 className="text-3xl font-bold mb-4">
                {t("cta.withCause.title")}
              </h3>
              <p className="text-lg text-default-600 dark:text-default-400 mb-6">
                {t("cta.withCause.subtitle")}
              </p>
              <Button
                as="a"
                className="font-semibold text-lg px-8 py-6"
                color="primary"
                href="https://calendly.com/hugotech/mentor-coaching-1-a-1-con-causa"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
                variant="shadow"
              >
                {t("cta.withCause.button")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 pt-12 border-t-2 border-default-200 dark:border-default-800"
            variants={fadeIn}
          >
            <p className="text-2xl italic text-default-700 dark:text-default-300 mb-3">
              &ldquo;{t("finalMessage.text")}&rdquo;
            </p>
            <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
              — {t("finalMessage.author")}
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
