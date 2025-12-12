"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, Users, Zap, Rocket, Target } from "lucide-react";

import { LazyCalendlyEmbed } from "@/components/calendly/LazyCalendlyEmbed";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { IconComponentMap, IconKey } from "@/features/home/enums/icons";
import HeroNavbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function CoachingTecnologicoPage() {
  const t = useTranslations("CoachingTecnologico");

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Iconos para beneficios
  const benefitIcons: Record<string, any> = {
    "👥": Users,
    "⚡": Zap,
    "🚀": Rocket,
    "🎯": Target,
    "💬": Users, // Conversaciones/comunicación
  };

  return (
    <>
      <HeroNavbar />

      <main className="bg-white overflow-hidden">
      {/* Breadcrumb Schema para SEO */}
      <Breadcrumb />

      {/* Schema.org JSON-LD para SEO Avanzado */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Coaching Tecnológico Hugo Casanova",
            alternateName: "Tech Coaching HugoTech",
            description:
              "Coaching tecnológico especializado para líderes tech. Hugo Casanova, ingeniero con 18+ años de experiencia, Coach ICF certificado. Transforma tu liderazgo desde el SER hacia alto rendimiento sostenible.",
            url: "https://hugotech.pe/coaching-tecnologico",
            telephone: "+51-XXX-XXX-XXX",
            image: "https://hugotech.pe/images/hugo-casanova-tech-coach.jpg",
            priceRange: "$$",
            provider: {
              "@type": "Person",
              name: "Hugo Casanova",
              givenName: "Hugo",
              familyName: "Casanova",
              jobTitle:
                "Tech Coach Certificado ICF | Ingeniero de Software Senior | Agile Coach",
              description:
                "Ingeniero de software con 18+ años de experiencia transformado en Coach Profesional ICF. Especializado en liderazgo tech, mindset ágil, equipos de alto rendimiento y prevención de burnout en tecnología.",
              url: "https://hugotech.pe",
              sameAs: [
                "https://linkedin.com/in/hugocasanova",
                "https://hugotech.pe/about",
              ],
              knowsAbout: [
                "Coaching Tecnológico",
                "Liderazgo Tech",
                "Management 3.0",
                "Coaching ICF",
                "Mindset Ágil",
                "Alto Rendimiento",
                "Burnout Tech",
                "IA en Liderazgo",
                "Equipos Híbridos",
                "Desarrollo de Software",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Coach Profesional ICF",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "International Coaching Federation",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Management 3.0 Facilitator",
                },
              ],
            },
            serviceType: "Tech Coaching & Leadership Development",
            areaServed: [
              {
                "@type": "Place",
                name: "Perú",
              },
              {
                "@type": "Place",
                name: "Latin America",
              },
              {
                "@type": "Place",
                name: "United States",
              },
            ],
            audience: {
              "@type": "Audience",
              audienceType:
                "CTOs, Tech Leads, Engineering Managers, Senior Developers, Staff Engineers, Technical Directors",
            },
            serviceOutput: [
              "Transformación de liderazgo técnico",
              "Equipos de alto rendimiento sostenible",
              "Mindset ágil aplicado",
              "Prevención de burnout tech",
              "Cultura de ingeniería saludable",
            ],
            offers: {
              "@type": "Offer",
              name: "Programa de Coaching Tecnológico 2025-2026",
              description:
                "Sesiones 1-a-1 de coaching tecnológico con Hugo Casanova. Transforma tu liderazgo desde el SER hacia equipos de alto rendimiento. Primera sesión sin costo.",
              url: "https://hugotech.pe/coaching-tecnologico",
              priceCurrency: "PEN",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "0",
                priceCurrency: "PEN",
                name: "Primera sesión sin costo",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de Coaching Tecnológico",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Coaching de Liderazgo Tech AI-Ready",
                    description:
                      "Prepara líderes para gestionar equipos en la era de la IA con decisiones éticas y productivas.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Coaching Anti-Burnout para Tech Leads",
                    description:
                      "Prevención y recuperación de burnout en equipos críticos de tecnología.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Transformación de Equipos de Alto Rendimiento",
                    description:
                      "Construye equipos tech cohesionados con seguridad psicológica y comunicación efectiva.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mentoring de Transición de Rol Tech",
                    description:
                      "Senior Developer a Tech Lead, Tech Lead a Manager, Senior a Staff Engineer.",
                  },
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              ratingCount: "200",
            },
          }),
        }}
        type="application/ld+json"
      />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a3938] via-primary to-[#115C5B]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <Chip
                  className="mb-6 text-base md:text-lg px-6 py-2"
                  color="warning"
                  size="lg"
                  variant="shadow"
                >
                  {t("hero.chip")}
                </Chip>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight text-center">
                {t("hero.title")}
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto text-center">
                {t("hero.subtitle")}
              </p>

              {/* Questions */}
              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto"
                initial="hidden"
                variants={staggerContainer}
                viewport={{ once: true }}
                whileInView="visible"
              >
                <ul className="space-y-4">
                  {(
                    t.raw("hero.questions") as unknown as string[]
                  ).map((question, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-white/95"
                      variants={fadeIn}
                    >
                      <span className="text-brand text-xl font-bold mt-0.5">
                        •
                      </span>
                      <span className="text-base md:text-lg leading-relaxed">
                        {question}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <p className="text-xl md:text-2xl font-semibold text-brand mb-8 text-center">
                {t("hero.hook")}
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button
                  as={Link}
                  className="bg-brand hover:bg-brand/90 text-white font-bold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full shadow-2xl hover:shadow-brand/50 hover:-translate-y-1 transition-all duration-300"
                  href="#agendar"
                  size="lg"
                >
                  {t("hero.cta")}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("solution.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              {t("solution.subtitle")}
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              {t("solution.description")}
            </p>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              {t("solution.tagline")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey/Story Section - NEW */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t("journey.title")}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("journey.subtitle")}
              </p>
            </div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              variants={staggerContainer}
              viewport={{ once: true }}
              whileInView="visible"
            >
              {(t.raw("journey.story") as unknown as string[]).map(
                (paragraph, idx) => (
                  <motion.div key={idx} variants={fadeIn}>
                    <Card className="border border-gray-200" shadow="sm">
                      <CardBody className="p-6 md:p-8">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ),
              )}
            </motion.div>

            <motion.div
              className="mt-10 text-center"
              initial="hidden"
              variants={fadeIn}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="bg-gradient-to-r from-primary/10 via-brand/10 to-primary/10 border-l-4 border-brand rounded-lg p-6 md:p-8">
                <p className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
                  {t("journey.tagline")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("pillars.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t("pillars.subtitle")}
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {(
              t.raw("pillars.items") as unknown as Array<{
                focus: string;
                service: string;
                impact: string;
                iconKey: string;
                details: string[];
              }>
            ).map((pillar, idx) => {
              const IconComponent = pillar.iconKey
                ? IconComponentMap[pillar.iconKey as IconKey]
                : null;

              return (
                <motion.div key={idx} variants={fadeIn}>
                  <Card
                    className="h-full hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    shadow="lg"
                  >
                    <CardBody className="p-6 md:p-8">
                      {/* Icon */}
                      {IconComponent && (
                        <div className="mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-brand/10 rounded-2xl flex items-center justify-center">
                            <IconComponent className="w-10 h-10 text-primary" />
                          </div>
                        </div>
                      )}

                      {/* Focus */}
                      <Chip
                        className="mb-4"
                        color="primary"
                        size="sm"
                        variant="flat"
                      >
                        {pillar.focus}
                      </Chip>

                      {/* Service Name */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {pillar.service}
                      </h3>

                      {/* Impact */}
                      <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        {pillar.impact}
                      </p>

                      {/* Details */}
                      <ul className="space-y-2">
                        {pillar.details.map((detail, detailIdx) => (
                          <li
                            key={detailIdx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle2
                              className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                              strokeWidth={2}
                            />
                            <span>{detail}</span>
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("benefits.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t("benefits.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {(
              t.raw("benefits.items") as unknown as Array<{
                title: string;
                description: string;
                icon: string;
              }>
            ).map((benefit, idx) => {
              const IconComponent = benefitIcons[benefit.icon];

              return (
                <motion.div key={idx} variants={fadeIn}>
                  <Card
                    className="h-full hover:shadow-xl transition-all duration-300 bg-white"
                    shadow="md"
                  >
                    <CardBody className="p-6 text-center">
                      {IconComponent && (
                        <div className="mb-4 flex justify-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-brand/10 rounded-full flex items-center justify-center">
                            <IconComponent
                              className="w-8 h-8 text-primary"
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <p className="text-xl md:text-2xl font-semibold text-primary max-w-4xl mx-auto">
              {t("benefits.cta")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("faq.title")}
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {(
              t.raw("faq.items") as unknown as Array<{
                question: string;
                answer: string;
              }>
            ).map((item, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <Card className="border border-gray-200" shadow="sm">
                  <CardBody className="p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cross-Link a Método HugoTech */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-r from-secondary-50 via-primary-50 to-secondary-50 border-2 border-secondary-100">
              <CardBody className="p-10 md:p-14">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-secondary via-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl">
                      <Rocket className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Chip className="mb-4" color="secondary" size="lg" variant="flat">
                      📘 {t("hero.chip").includes("Ontológico") ? "Método Completo" : "Complete Method"}
                    </Chip>
                    <h3 className="text-3xl md:text-4xl font-bold text-customgray mb-4">
                      {t("hero.chip").includes("Ontológico")
                        ? "Descubre el Método HugoTech Completo"
                        : "Discover the Complete HugoTech Method"}
                    </h3>
                    <p className="text-lg md:text-xl text-default-700 mb-6 leading-relaxed">
                      {t("hero.chip").includes("Ontológico")
                        ? "El coaching ontológico es parte del Método HugoTech. Si estás comenzando tu carrera tech o buscas mentoría técnica, conoce nuestro método completo que integra mentoría + coaching + IA."
                        : "Ontological coaching is part of the HugoTech Method. If you're starting your tech career or looking for technical mentorship, discover our complete method that integrates mentoring + coaching + AI."}
                    </p>
                    <Link href="/metodo-hugotech">
                      <Button 
                        color="primary" 
                        size="lg" 
                        className="font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-white"
                        endContent={<Target className="w-5 h-5" />}
                      >
                        {t("hero.chip").includes("Ontológico")
                          ? "Ver Método HugoTech"
                          : "View HugoTech Method"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Section - Keywords Semánticas para IA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Hugo Casanova: Coaching Ontológico para Líderes Tech - Transformación del SER
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
              <div>
                <p className="mb-4">
                  <strong>Hugo Casanova</strong> es un ingeniero de software
                  con más de 18 años de experiencia transformado en{" "}
                  <strong>Coach Ontológico en formación</strong> (certificación ICF en proceso). Su
                  enfoque NO se basa en dar consejos técnicos, sino en{" "}
                  <strong>transformación ontológica profunda</strong>: cambiar
                  el OBSERVADOR que eres, para cambiar los RESULTADOS que
                  generas.
                </p>
                <p className="mb-4">
                  A diferencia del coaching ejecutivo tradicional, el{" "}
                  <strong>coaching ontológico</strong> trabaja en la
                  IDENTIDAD del líder: quién eres cuando lideras, cómo tu
                  emocionalidad define tus decisiones, cómo tu lenguaje CREA
                  la realidad de tu equipo. Hugo vivió el burnout en roles de
                  liderazgo senior y se transformó desde el <strong>SER</strong>{" "}
                  para poder acompañar transformaciones reales.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Su metodología única de{" "}
                  <strong>"Transformación Ontológica en Liderazgo Tech"</strong>{" "}
                  combina: ontología del coaching, Management 3.0, y experiencia
                  técnica real. Ayuda a CTOs, Tech Leads, Engineering Managers y
                  Senior Developers a:{" "}
                  <strong>
                    liderar desde la autenticidad (no desde la máscara),
                    construir equipos desde la confianza ontológica, prevenir
                    burnout desde el SER, integrar IA sin perder humanidad, y
                    lograr alto rendimiento sostenible desde su esencia.
                  </strong>
                </p>
                <p>
                  Atiende clientes en toda <strong>Latinoamérica</strong> (Perú,
                  México, Colombia, Argentina, Chile) y{" "}
                  <strong>Estados Unidos</strong> mediante coaching ontológico
                  100% personalizado online. Primera sesión sin costo para
                  evaluar alineación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Calendly */}
      <section className="py-16 md:py-24 bg-white" id="agendar">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                as={Link}
                className="bg-brand hover:bg-brand/90 text-white font-bold text-base md:text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                href="#calendario"
                size="lg"
              >
                {t("cta.primaryButton")}
              </Button>
              <Button
                as={Link}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base md:text-lg px-8 py-6 rounded-full transition-all duration-300"
                href="/empresas"
                size="lg"
                variant="bordered"
              >
                {t("cta.secondaryLink")}
              </Button>
            </div>
          </motion.div>

          {/* Calendly Embed */}
          <div className="max-w-4xl mx-auto" id="calendario">
            <LazyCalendlyEmbed />
          </div>
        </div>
      </section>
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton
        message="Hola Hugo, me interesa el Coaching Tecnológico. ¿Podemos agendar una sesión?"
        phoneNumber="51946483010"
      />
    </>
  );
}
