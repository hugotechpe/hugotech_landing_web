"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { CalendlyButton } from "@/components/calendly/CalendlyButton";

export default function EmpresasNewPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollToCasos = () => {
    const element = document.getElementById("casos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-white">
      {/* Schema.org JSON-LD para B2B */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Corporate Training & Tech Consulting",
            provider: {
              "@type": "Organization",
              name: "HugoTech Empresas",
            },
            areaServed: "Latin America",
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Tech Startups, Enterprise Engineering Teams",
            },
            offers: [
              {
                "@type": "Offer",
                name: "Tech Lead Accelerator Program",
                description:
                  "Programa de formación de liderazgo para ingenieros de software senior.",
              },
              {
                "@type": "Offer",
                name: "Team Burnout Diagnosis",
                description:
                  "Evaluación de salud mental y rendimiento en equipos de desarrollo.",
              },
              {
                "@type": "Offer",
                name: "Code & Culture Intervention",
                description:
                  "Intervención directa en equipos tech para mejorar comunicación y delivery.",
              },
            ],
          }),
        }}
        type="application/ld+json"
      />

      {/* HERO SECTION - El Punch Line */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3938] via-primary to-[#115C5B]">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.div variants={fadeIn}>
              <Chip
                className="mb-8 text-base md:text-lg px-6 py-2"
                color="warning"
                size="lg"
                variant="shadow"
              >
                🚀 Programas B2B para Equipos Tech
              </Chip>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight"
              variants={fadeIn}
            >
              Tu deuda técnica más cara{" "}
              <span className="text-brand">no está en el código.</span>
              <br />
              Está en el{" "}
              <span className="text-brand underline decoration-wavy decoration-brand/60">
                liderazgo.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto"
              variants={fadeIn}
            >
              Ayudo a CTOs y VPs de Ingeniería a{" "}
              <span className="font-bold text-brand">
                detener la rotación de talento
              </span>{" "}
              y formar Tech Leads que saben gestionar personas, no solo tickets.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeIn}
            >
              <CalendlyButton
                className="bg-brand hover:bg-brand/90 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-brand/50 hover:scale-105 transition-all duration-300 border-2 border-brand/20"
                size="lg"
                text="📊 Solicitar Diagnóstico de Equipo"
              />
              <button
                className="group inline-flex items-center gap-2 text-white font-semibold text-base hover:text-brand transition-all duration-300"
                onClick={scrollToCasos}
              >
                <span className="border-b-2 border-white/40 group-hover:border-brand pb-1 transition-all">
                  Ver Casos de Éxito
                </span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION - El Costo Oculto */}
      <section className="py-20 md:py-28 bg-default-50">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6"
              variants={fadeIn}
            >
              El Costo Oculto del{" "}
              <span className="text-primary">Equipo Tech</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-default-600 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Estos son los 3 puntos ciegos que están drenando tu presupuesto y
              tu talento
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <Card className="h-full border-2 border-danger/20 hover:border-danger hover:shadow-xl transition-all duration-300">
                <CardBody className="p-8">
                  <div className="text-6xl mb-6">🤐</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    El Tech Lead Silencioso
                  </h3>
                  <p className="text-default-600 text-lg leading-relaxed mb-4">
                    Sabe mucho, pero no comunica. El equipo sufre. Los juniors
                    están bloqueados. Las reuniones son incómodas.
                  </p>
                  <div className="bg-danger/10 rounded-lg p-4 border-l-4 border-danger">
                    <p className="text-danger font-semibold text-sm">
                      💸 Costo: $15K-30K USD por mes en velocidad perdida
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <Card className="h-full border-2 border-warning/20 hover:border-warning hover:shadow-xl transition-all duration-300">
                <CardBody className="p-8">
                  <div className="text-6xl mb-6">⚡</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    El Burnout del Sprint 40
                  </h3>
                  <p className="text-default-600 text-lg leading-relaxed mb-4">
                    Tu mejor senior está a punto de renunciar. Lo ves
                    desconectado. Ya entrevistó en otro lado.
                  </p>
                  <div className="bg-warning/10 rounded-lg p-4 border-l-4 border-warning">
                    <p className="text-warning-600 font-semibold text-sm">
                      💸 Costo de reemplazo: $50K-120K USD + 6 meses de
                      onboarding
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
            >
              <Card className="h-full border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300">
                <CardBody className="p-8">
                  <div className="text-6xl mb-6">⚔️</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Guerra Civil: Producto vs. Ingeniería
                  </h3>
                  <p className="text-default-600 text-lg leading-relaxed mb-4">
                    Nadie se entiende. PM frustra a devs. Devs ignoran a PM.
                    Releases se retrasan. Todos culpan a todos.
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-primary font-semibold text-sm">
                      💸 Costo: 30-40% de retraso en roadmap = millones en
                      oportunidad perdida
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Estadística de impacto */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-danger/10 via-warning/10 to-primary/10 rounded-2xl p-8 md:p-12 border-2 border-default-200"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-danger mb-2">
                  40%
                </div>
                <p className="text-default-600 font-semibold">
                  De los Tech Leads nunca recibieron entrenamiento en gestión
                  de personas
                </p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-warning-600 mb-2">
                  67%
                </div>
                <p className="text-default-600 font-semibold">
                  De los devs renuncian por mala cultura, no por salario bajo
                </p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  $120K
                </div>
                <p className="text-default-600 font-semibold">
                  Costo promedio de reemplazar un Senior Developer en LATAM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION SECTION - Los Productos (HugoTech System) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.div className="mb-6" variants={fadeIn}>
              <Chip
                className="text-base px-6 py-2"
                color="success"
                size="lg"
                variant="flat"
              >
                ✅ El HugoTech System
              </Chip>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6"
              variants={fadeIn}
            >
              Intervención Híbrida:{" "}
              <span className="text-primary">Tech + Humanidad</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-default-600 max-w-4xl mx-auto"
              variants={fadeIn}
            >
              No te vendo cursos grabados. Te vendo resultados medibles. Estas
              son las 3 formas en que trabajo con equipos tech.
            </motion.p>
          </motion.div>

          {/* Producto 1: Tech Lead Accelerator */}
          <motion.div
            className="mb-16"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Card className="overflow-hidden border-2 border-primary/30 hover:border-primary hover:shadow-2xl transition-all duration-300">
              <CardBody className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 bg-primary/5">
                    <Chip
                      className="mb-4"
                      color="primary"
                      size="sm"
                      variant="flat"
                    >
                      Programa Intensivo
                    </Chip>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Tech Lead Accelerator
                    </h3>
                    <p className="text-xl text-default-600 mb-6">
                      De escribir código a gestionar personas en 8 semanas. Sin
                      teoría aburrida.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">✅</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Para quién:
                          </p>
                          <p className="text-default-600">
                            Seniors técnicos recién promovidos a Tech Lead,
                            Engineering Manager o Squad Leader
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Qué resolvemos:
                          </p>
                          <p className="text-default-600">
                            Dar feedback sin generar conflicto. Delegar sin
                            micromanagement. Gestionar prioridades sin quemarse.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📊</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Resultados medibles:
                          </p>
                          <p className="text-default-600">
                            +30% en velocidad de equipo. -40% en fricción
                            interna. 100% de retención en primeros 6 meses.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-primary/20">
                      <p className="text-sm font-semibold text-default-600 mb-2">
                        Duración:
                      </p>
                      <p className="text-2xl font-bold text-primary mb-4">
                        8 semanas • 16 sesiones • Seguimiento 3 meses
                      </p>
                      <CalendlyButton
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-lg"
                        size="lg"
                        text="Solicitar Propuesta Personalizada"
                      />
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      fill
                      alt="Hugo Casanova facilitando sesión de Tech Lead Accelerator con equipo de desarrollo"
                      className="object-cover"
                      src="/images/placeholder-tech-lead.jpg"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Producto 2: Code & Culture Intervention */}
          <motion.div
            className="mb-16"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Card className="overflow-hidden border-2 border-warning/30 hover:border-warning hover:shadow-2xl transition-all duration-300">
              <CardBody className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto order-2 md:order-1">
                    <Image
                      fill
                      alt="Hugo Casanova en daily standup y retrospectiva con equipo tech bloqueado"
                      className="object-cover"
                      src="/images/placeholder-intervention.jpg"
                    />
                  </div>
                  <div className="p-8 md:p-12 bg-warning/5 order-1 md:order-2">
                    <Chip
                      className="mb-4"
                      color="warning"
                      size="sm"
                      variant="flat"
                    >
                      Intervención Directa
                    </Chip>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Code & Culture Intervention
                    </h3>
                    <p className="text-xl text-default-600 mb-6">
                      Me meto en tu Jira y en tu Slack. Arreglo el flujo
                      técnico y desbloqueo la comunicación humana.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🚨</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Para quién:
                          </p>
                          <p className="text-default-600">
                            Equipos bloqueados, con retrasos crónicos o
                            conflictos internos que afectan el delivery
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔧</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Qué hago:
                          </p>
                          <p className="text-default-600">
                            Audito dailies, retros, PRs. Identifico cuellos de
                            botella técnicos Y humanos. Implemento cambios en
                            vivo.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚡</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Resultados:
                          </p>
                          <p className="text-default-600">
                            Desbloqueo en 2-4 semanas. Mejora del 50% en cycle
                            time. Equipo vuelve a hablar entre sí.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-warning/20">
                      <p className="text-sm font-semibold text-default-600 mb-2">
                        Formato:
                      </p>
                      <p className="text-2xl font-bold text-warning-600 mb-4">
                        Sprint 0 + 4 semanas embebido • Informe ejecutivo
                      </p>
                      <CalendlyButton
                        className="w-full bg-warning-600 hover:bg-warning-700 text-white font-bold rounded-lg"
                        size="lg"
                        text="Agendar Diagnóstico Inicial"
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Producto 3: Executive Coaching for CTOs */}
          <motion.div
            className="mb-16"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Card className="overflow-hidden border-2 border-success/30 hover:border-success hover:shadow-2xl transition-all duration-300">
              <CardBody className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 bg-success/5">
                    <Chip
                      className="mb-4"
                      color="success"
                      size="sm"
                      variant="flat"
                    >
                      1-on-1 Estratégico
                    </Chip>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Executive Coaching for CTOs
                    </h3>
                    <p className="text-xl text-default-600 mb-6">
                      Tu socio estratégico. Para CTOs, VPs y Heads que quieren
                      crecer sin quebrarse.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Para quién:
                          </p>
                          <p className="text-default-600">
                            CTOs que gestionan 20-100+ personas. Sienten
                            soledad en las decisiones. Quieren escalar sin
                            perder humanidad.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🧠</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Qué trabajamos:
                          </p>
                          <p className="text-default-600">
                            Liderazgo estratégico. Gestión de burnout ejecutivo.
                            Comunicación con Board. Construir cultura
                            anti-frágil.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔒</span>
                        <div>
                          <p className="font-semibold text-foreground">
                            Confidencialidad:
                          </p>
                          <p className="text-default-600">
                            100% privado. NDA firmado. Tus desafíos quedan entre
                            nosotros.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-success/20">
                      <p className="text-sm font-semibold text-default-600 mb-2">
                        Compromiso:
                      </p>
                      <p className="text-2xl font-bold text-success mb-4">
                        6 meses • 2 sesiones/mes • Acceso directo vía Slack
                      </p>
                      <CalendlyButton
                        className="w-full bg-success hover:bg-success/90 text-white font-bold rounded-lg"
                        size="lg"
                        text="Conversar (Confidencial)"
                      />
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      fill
                      alt="Hugo Casanova en sesión de executive coaching con CTO sobre estrategia de liderazgo tech"
                      className="object-cover"
                      src="/images/placeholder-executive.jpg"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CASOS DE ÉXITO (Social Proof) */}
      <section className="py-20 md:py-28 bg-default-50" id="casos">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6"
              variants={fadeIn}
            >
              Casos Reales. <span className="text-primary">Resultados Reales.</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-default-600 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Empresas tech en LATAM que ya implementaron el HugoTech System
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Caso 1: Fintech */}
            <Card className="border-2 border-default-200 hover:border-primary hover:shadow-xl transition-all">
              <CardBody className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-3xl">
                    💳
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-default-500">
                      Fintech • Serie A
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      60 personas • Perú
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  "Redujimos la rotación del 40% al 8% en 6 meses"
                </h3>
                <p className="text-default-600 mb-6 leading-relaxed">
                  Problema: Tech Leads promovidos sin preparación. Burnout
                  generalizado. 5 renuncias en 3 meses.
                  <br />
                  <br />
                  Solución: Tech Lead Accelerator + Code & Culture Intervention
                  en 2 squads críticos.
                </p>
                <div className="grid grid-cols-3 gap-4 p-6 bg-success/5 rounded-xl border border-success/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">-32%</div>
                    <p className="text-sm text-default-600">Rotación</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">+45%</div>
                    <p className="text-sm text-default-600">Velocity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">9.2/10</div>
                    <p className="text-sm text-default-600">eNPS</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Caso 2: SaaS */}
            <Card className="border-2 border-default-200 hover:border-primary hover:shadow-xl transition-all">
              <CardBody className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-warning/10 rounded-lg flex items-center justify-center text-3xl">
                    ☁️
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-default-500">
                      SaaS B2B • Bootstrapped
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      30 personas • Colombia
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  "Desbloqueamos el roadmap en 3 semanas"
                </h3>
                <p className="text-default-600 mb-6 leading-relaxed">
                  Problema: Guerra interna entre Producto e Ingeniería. 4 meses
                  de retrasos. Founders al borde del colapso.
                  <br />
                  <br />
                  Solución: Code & Culture Intervention + Facilitación de retros
                  críticas.
                </p>
                <div className="grid grid-cols-3 gap-4 p-6 bg-warning/5 rounded-xl border border-warning/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warning-600">
                      -60%
                    </div>
                    <p className="text-sm text-default-600">Cycle Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warning-600">
                      100%
                    </div>
                    <p className="text-sm text-default-600">On-time Delivery</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warning-600">
                      3 sem
                    </div>
                    <p className="text-sm text-default-600">Desbloqueo</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Logos de empresas (placeholder) */}
          <motion.div
            className="text-center"
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <p className="text-default-500 font-semibold mb-8">
              Empresas de tecnología en Perú y Latam que confían en HugoTech
              para su transformación cultural:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
              {/* Aquí irían los logos reales */}
              <div className="w-32 h-16 bg-default-200 rounded-lg" />
              <div className="w-32 h-16 bg-default-200 rounded-lg" />
              <div className="w-32 h-16 bg-default-200 rounded-lg" />
              <div className="w-32 h-16 bg-default-200 rounded-lg" />
              <div className="w-32 h-16 bg-default-200 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL - Potente */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6"
              variants={fadeIn}
            >
              ¿Listo para dejar de{" "}
              <span className="text-brand">perder talento</span>?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              Agenda una sesión de diagnóstico (sin costo, sin compromiso). Te
              muestro exactamente dónde está la fuga en tu equipo tech.
            </motion.p>
            <motion.div variants={fadeIn}>
              <CalendlyButton
                className="bg-brand hover:bg-brand/90 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-brand/50 hover:scale-105 transition-all duration-300 border-2 border-brand/20"
                size="lg"
                text="📊 Agendar Diagnóstico Gratuito"
              />
              <p className="text-white/70 mt-6 text-sm">
                ✅ 45 minutos • ✅ Sin costo • ✅ 100% Confidencial • ✅ NDA si
                lo requieres
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
