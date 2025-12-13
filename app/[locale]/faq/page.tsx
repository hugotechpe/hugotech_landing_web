"use client";

import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";

import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function FAQPage() {
  const t = useTranslations("FAQ");

  // Preguntas frecuentes para JSON-LD
  const faqItems = [
    "por-que-senior-necesita-mentor",
    "como-ayuda-mentor-burnout",
    "diferencia-mentor-coach-tech",
    "habilidades-ia-no-reemplaza",
    "sintomas-estancamiento-senior",
    "cuando-buscar-mentor-tech",
    "que-esperar-primera-sesion-mentor",
    "como-prepararse-para-tech-lead",
    "mentor-para-primer-empleo-tech",
    "mentor-remoto-vs-presencial",
    "mentoring-gratis",
    "coaching-con-causa",
    "diferencia-coaching-mentoring",
    "primera-sesion",
    "sesiones-empresas",
    "modalidad",
    "duracion-sesion",
    "temas-trabajamos",
    "quien-puede-solicitar",
    "como-agendar",
  ].map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <>
      {/* JSON-LD para FAQPage */}
      <JsonLd data={faqSchema(faqItems)} />
      <Breadcrumb />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-success/5 to-white dark:from-primary-900/10 dark:via-success-900/10 dark:to-gray-900">
          <motion.div
            animate="visible"
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            variants={fadeIn}
          >
            <Chip className="mb-6" color="success" size="lg" variant="flat">
              {t("hero.chip")}
            </Chip>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 italic">
              — Hugo Casanova, Mentor Tech & Coach
            </p>
          </motion.div>
        </section>

        {/* CTA Section - Inicio */}
        <section className="py-12 px-4 bg-white dark:bg-gray-900 border-b-2 border-success-100">
          <motion.div
            animate="visible"
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-success-500 hover:bg-success-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                href="https://calendly.com/hugotech/mentor-coaching-1-a-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("cta.buttonPrimary")}
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white hover:bg-gray-50 text-success-600 border-2 border-success-500 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                href="https://wa.me/51946483010?text=Hola%20Hugo%2C%20tengo%20una%20pregunta"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("cta.buttonSecondary")}
              </a>
            </div>
          </motion.div>
        </section>

        {/* FAQ Items */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <motion.div
            animate="visible"
            className="max-w-4xl mx-auto"
            initial="hidden"
            variants={stagger}
          >
            <div className="space-y-6">
              {[
                "por-que-senior-necesita-mentor",
                "como-ayuda-mentor-burnout",
                "diferencia-mentor-coach-tech",
                "habilidades-ia-no-reemplaza",
                "sintomas-estancamiento-senior",
                "cuando-buscar-mentor-tech",
                "que-esperar-primera-sesion-mentor",
                "como-prepararse-para-tech-lead",
                "mentor-para-primer-empleo-tech",
                "mentor-remoto-vs-presencial",
                "mentoring-gratis",
                "coaching-con-causa",
                "diferencia-coaching-mentoring",
                "primera-sesion",
                "sesiones-empresas",
                "modalidad",
                "duracion-sesion",
                "temas-trabajamos",
                "quien-puede-solicitar",
                "como-agendar",
              ].map((key) => (
                <motion.div key={key} variants={fadeIn}>
                  <Card className="border-l-4 border-success-500 hover:shadow-xl transition-shadow">
                    <CardBody className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-start gap-3">
                        <span className="text-success-500 text-2xl flex-shrink-0">
                          ❓
                        </span>
                        {t(`items.${key}.question`)}
                      </h3>
                      <div className="pl-10 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {t(`items.${key}.answer`)}
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-success-50 to-primary-50 dark:from-success-900/20 dark:to-primary-900/20">
          <motion.div
            animate="visible"
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-success-500 hover:bg-success-600 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                href="https://calendly.com/hugotech/mentor-coaching-1-a-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("cta.buttonPrimary")}
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-success-500 dark:hover:border-success-500 transition-all hover:scale-105"
                href="https://wa.me/51946483010?text=Hola%20Hugo,%20tengo%20preguntas%20sobre%20el%20mentoring"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("cta.buttonSecondary")}
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
