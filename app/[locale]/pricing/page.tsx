"use client";

import { useTranslations } from "next-intl";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { CalendlyButton } from "@/components/calendly/CalendlyButton";
import { motion } from "framer-motion";
import { TestimonioCard } from "@/components/cards/TestimonioCard";
import { getTestimoniosList } from "@/features/testimonials/enums";
import { useParams } from "next/navigation";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PricingPage() {
  const t = useTranslations("Sections.Pricing");
  const params = useParams();
  const locale = (params?.locale as string) || "es";

  // Seleccionar testimonios específicos
  const allTestimonios = getTestimoniosList(locale);
  const selectedTestimonios = allTestimonios.filter((test) =>
    [
      "Andrews Postillos",
      "Estefani Ayquipa",
      "Dan Rodriguez",
      "Miguel Bustillos",
    ].includes(test.authorName)
  );

  // Schema.org Service + Offer
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("hero.title"),
    provider: {
      "@type": "Person",
      name: "Hugo Casanova",
      url: "https://hugotech.pe",
    },
    offers: {
      "@type": "Offer",
      price: "35",
      priceCurrency: "PEN",
      description: t("b2c.pricing.description"),
    },
    areaServed: "PE",
    availableLanguage: ["es", "en"],
  };

  return (
    <>
      <Breadcrumb />
      <JsonLd data={serviceSchema} />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-50 to-success-50 dark:from-primary-900/20 dark:to-success-900/20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div variants={fadeIn}>
            <Chip
              color="success"
              variant="flat"
              size="lg"
              className="mb-6 font-semibold"
            >
              {t("hero.badge")}
            </Chip>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-customgray dark:text-white mb-6"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t("hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Cards B2C y B2B */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Card B2C - Mentoría 1 a 1 */}
          <motion.div variants={fadeIn}>
            <Card className="h-full border-4 border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
              <CardHeader className="flex flex-col items-start gap-3 pb-6">
                <h2 className="text-3xl font-bold text-customgray dark:text-white">
                  {t("b2c.title")} 💚
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base">
                  {t("b2c.subtitle")}
                </p>
              </CardHeader>

              <CardBody className="space-y-6">
                {/* Primera sesión gratis */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Chip color="success" variant="solid" size="lg">
                      {t("b2c.free.badge")}
                    </Chip>
                    <span className="text-lg font-semibold text-customgray dark:text-white">
                      {t("b2c.free.title")}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t("b2c.free.description")}
                  </p>
                </div>

                {/* Sesiones de seguimiento */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl font-bold text-success-600 dark:text-success-400">
                      S/35
                    </span>
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      {t("b2c.pricing.perSession")}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-success-600 dark:text-success-400 mb-3">
                    {t("b2c.pricing.charity")}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t("b2c.pricing.description")}
                  </p>
                </div>

                {/* Lo que incluye */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-customgray dark:text-white">
                    {t("b2c.includes.title")}
                  </h3>
                  <ul className="space-y-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                      >
                        <span className="text-success-500 text-lg flex-shrink-0">
                          ✓
                        </span>
                        <span>{t(`b2c.includes.item${i + 1}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <CalendlyButton
                  url="https://calendly.com/hugotech/mentoria1a1"
                  text={t("b2c.cta")}
                  color="success"
                  size="lg"
                  className="w-full font-semibold"
                />
              </CardBody>
            </Card>
          </motion.div>

          {/* Card B2B - Empresas */}
          <motion.div variants={fadeIn}>
            <Card className="h-full border-4 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20">
              <CardHeader className="flex flex-col items-start gap-3 pb-6">
                <h2 className="text-3xl font-bold text-customgray dark:text-white">
                  {t("b2b.title")} 🏢
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-base">
                  {t("b2b.subtitle")}
                </p>
              </CardHeader>

              <CardBody className="space-y-6">
                {/* Sesión exploratoria gratis */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Chip color="primary" variant="solid" size="lg">
                      {t("b2b.free.badge")}
                    </Chip>
                    <span className="text-lg font-semibold text-customgray dark:text-white">
                      {t("b2b.free.title")}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t("b2b.free.description")}
                  </p>
                </div>

                {/* Inversión personalizada */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3">
                    {t("b2b.pricing.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {t("b2b.pricing.description")}
                  </p>
                  <p className="text-xs italic text-gray-500 dark:text-gray-400 bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg">
                    {t("b2b.pricing.note")}
                  </p>
                </div>

                {/* Beneficios */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-customgray dark:text-white">
                    {t("b2b.benefits.title")}
                  </h3>
                  <ul className="space-y-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                      >
                        <span className="text-primary-500 text-lg flex-shrink-0">
                          ✓
                        </span>
                        <span>{t(`b2b.benefits.item${i + 1}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <CalendlyButton
                  url="https://calendly.com/hugotech/reunion-exploratoria"
                  text={t("b2b.cta")}
                  color="primary"
                  size="lg"
                  className="w-full font-semibold"
                />
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Círculo Virtuoso */}
      <section className="py-16 px-4 bg-gradient-to-br from-success-50 to-primary-50 dark:from-success-900/20 dark:to-primary-900/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-customgray dark:text-white mb-6"
          >
            {t("impact.title")} 🌱
          </motion.h2>

        <motion.p
          variants={fadeIn}
          className="text-xl italic text-gray-700 dark:text-gray-300 mb-8"
        >
          &ldquo;{t("impact.quote")}&rdquo;
        </motion.p>          <motion.div
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">
                  {i === 0 ? "💡" : i === 1 ? "🤝" : "🚀"}
                </div>
                <h3 className="font-bold text-customgray dark:text-white mb-2">
                  {t(`impact.circle${i + 1}.title`)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t(`impact.circle${i + 1}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center text-customgray dark:text-white mb-4"
          >
            {t("testimonials.title")} 💬
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            {t("testimonials.subtitle")}
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {selectedTestimonios.map((testimonio, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <TestimonioCard {...testimonio} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center text-customgray dark:text-white mb-4"
          >
            {t("faq.title")} ❓
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-center text-gray-600 dark:text-gray-300 mb-12"
          >
            {t("faq.subtitle")}
          </motion.p>

          <motion.div variants={fadeIn}>
            <Accordion variant="splitted">
              {Array.from({ length: 8 }).map((_, i) => (
                <AccordionItem
                  key={i}
                  title={t(`faq.items.q${i + 1}.question`)}
                  className="bg-white dark:bg-gray-800"
                >
                  <p className="text-gray-600 dark:text-gray-300 pb-4">
                    {t(`faq.items.q${i + 1}.answer`)}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-success-600 dark:from-primary-800 dark:to-success-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t("cta.title")} 🎯
          </motion.h2>

          <motion.p variants={fadeIn} className="text-xl mb-8">
            {t("cta.subtitle")}
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CalendlyButton
              url="https://calendly.com/hugotech/mentoria1a1"
              text={t("cta.buttonB2C")}
              color="default"
              variant="solid"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold"
            />
            <CalendlyButton
              url="https://calendly.com/hugotech/reunion-exploratoria"
              text={t("cta.buttonB2B")}
              color="default"
              variant="bordered"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
