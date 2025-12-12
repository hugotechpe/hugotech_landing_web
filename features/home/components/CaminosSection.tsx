"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Brain, Rocket, ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export function CaminosSection() {
  const t = useTranslations("Sections.Caminos");

  return (
    <section
      aria-label={t("title")}
      className="scroll-mt-0 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      id="caminos"
    >
      <div className="container mx-auto max-w-7xl px-6 py-16 md:py-24 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {/* Card 1: Coaching Ontológico */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white border-2 border-primary-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300">
              <CardBody className="p-8 md:p-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {t("coaching.title")}
                  </h3>
                  <p className="text-base text-gray-600 mb-2">
                    {t("coaching.target")}
                  </p>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {t("coaching.description")}
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>{t("coaching.benefit1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>{t("coaching.benefit2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>{t("coaching.benefit3")}</span>
                  </li>
                </ul>

                <Link href="/coaching-tecnologico">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-base py-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    endContent={<ArrowRight className="w-5 h-5" />}
                    size="lg"
                  >
                    {t("coaching.cta")}
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </motion.div>

          {/* Card 2: Método HugoTech */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full bg-white border-2 border-success-200 hover:border-success-400 hover:shadow-2xl transition-all duration-300">
              <CardBody className="p-8 md:p-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-success-600 rounded-2xl flex items-center justify-center mb-4">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {t("metodo.title")}
                  </h3>
                  <p className="text-base text-gray-600 mb-2">
                    {t("metodo.target")}
                  </p>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {t("metodo.description")}
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-success-600 font-bold mt-1">→</span>
                    <span>{t("metodo.benefit1")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-success-600 font-bold mt-1">→</span>
                    <span>{t("metodo.benefit2")}</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-success-600 font-bold mt-1">→</span>
                    <span>{t("metodo.benefit3")}</span>
                  </li>
                </ul>

                <Link href="/metodo-hugotech">
                  <Button
                    className="w-full bg-success-600 hover:bg-success-700 text-white font-bold text-base py-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    endContent={<ArrowRight className="w-5 h-5" />}
                    size="lg"
                  >
                    {t("metodo.cta")}
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          variants={fadeInUp}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <p className="text-lg text-gray-600 italic">
            {t("footer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
