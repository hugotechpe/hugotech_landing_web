"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CalendlyButton } from "@/components/calendly/CalendlyButton";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function AboutNewPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navbar />
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
                ✨ Mi Historia
              </Chip>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                Dejé de optimizar{" "}
                <span className="text-brand">servidores</span>
                <br />
                para optimizar{" "}
                <span className="text-brand">personas.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-body">
                18 años en tecnología. Del Backend al Boardroom.
                <br />
                <span className="font-semibold">
                  Ahora dedico mi vida a que los líderes tech no se quemen en el
                  camino.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  as={Link}
                  className="bg-brand text-white font-bold text-lg hover:scale-105 transition-transform"
                  href="#impacto"
                  size="lg"
                >
                  Ver mi Impacto 📊
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
                  {/* Placeholder - Reemplaza con tu foto real */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-brand/30 flex items-center justify-center">
                    <span className="text-9xl">👨‍💻</span>
                  </div>
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
          <div className="text-white/60 text-sm mb-2">Descubre mi historia</div>
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
              El Quiebre
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A los 40 años, con el cargo soñado, sentí el vacío.
              <br />
              <span className="font-bold text-primary">
                Mi código compilaba, pero mi vida no.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "❤️",
                title: "Humanidad Primero",
                desc: "Antes del código, está la persona. Siempre.",
                color: "bg-red-500",
              },
              {
                icon: "🎯",
                title: "Propósito como Brújula",
                desc: "El impacto real, no solo el salario o el título.",
                color: "bg-blue-500",
              },
              {
                icon: "🌱",
                title: "Crecimiento Sostenible",
                desc: "No acelero para que llegues rápido. Acelero para que llegues bien.",
                color: "bg-green-500",
              },
              {
                icon: "⚡",
                title: "Excellence sin Burnout",
                desc: "Puedes ser excelente sin sacrificar tu salud mental.",
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
              Mi Evolución
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              18 años de código. 6 roles distintos. Una lección clave en cada
              uno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                role: "Backend Developer",
                icon: "🔧",
                lesson: "La estructura invisible sostiene todo",
                learning: "Arquitectura",
                tech: ["PHP", "MySQL", "Laravel", "APIs"],
                color: "border-blue-500",
              },
              {
                role: "Frontend Developer",
                icon: "🎨",
                lesson: "El usuario solo ve la interfaz. Hazla hablar.",
                learning: "UX/UI que convierte",
                tech: ["React", "Vue", "TypeScript", "Tailwind"],
                color: "border-purple-500",
              },
              {
                role: "Fullstack Developer",
                icon: "⚙️",
                lesson: "Conectar mundos es un arte",
                learning: "Integración completa",
                tech: ["Node.js", "Next.js", "MongoDB", "Docker"],
                color: "border-green-500",
              },
              {
                role: "Tech Lead",
                icon: "👥",
                lesson: "No lideras código. Lideras personas.",
                learning: "Liderazgo técnico",
                tech: ["Scrum", "Kanban", "Git", "CI/CD"],
                color: "border-orange-500",
              },
              {
                role: "Product Owner",
                icon: "📊",
                lesson: "El mejor código no sirve si resuelve el problema equivocado",
                learning: "Visión de producto",
                tech: ["Jira", "Miro", "Analytics", "Product Strategy"],
                color: "border-indigo-500",
              },
              {
                role: "Country Manager",
                icon: "🚀",
                lesson: "Escalar no es crecer. Es multiplicar impacto sin perder esencia.",
                learning: "Gestión estratégica",
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
                      {step.role}
                    </h3>
                    <p className="text-sm text-gray-700 italic mb-3 leading-relaxed">
                      &ldquo;{step.lesson}&rdquo;
                    </p>
                    <p className="text-xs font-semibold text-primary mb-3">
                      {step.learning}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tech.map((t, i) => (
                        <Chip key={i} className="text-xs" size="sm" variant="flat">
                          {t}
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white">
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              No solo palabras.
              <br />
              <span className="text-brand">Impacto medible y humano.</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cada número aquí representa una persona que confió, un camino que
              acompañé, una vida que cambió.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: "👥",
                end: 200,
                suffix: "+",
                label: "Talentos Guiados",
                desc: "Developers, Tech Leads, Managers",
              },
              {
                icon: "⭐",
                end: 4.9,
                suffix: "/5",
                label: "Valoración Promedio",
                desc: "Cercanía, claridad, resultados",
              },
              {
                icon: "🎯",
                end: 90,
                suffix: "%",
                label: "Satisfacción",
                desc: "Evolución tangible reportada",
              },
              {
                icon: "💰",
                end: 100,
                suffix: "%",
                label: "Impacto Social",
                desc: "Donaciones a causas reales",
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
                      {stat.label}
                    </p>
                    <p className="text-white/70 text-sm">{stat.desc}</p>
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
                      El 100% de tus sesiones va a causas sociales
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      No trabajo por dinero. Trabajo por propósito. Cada S/35
                      que inviertes en tu crecimiento va directo a rescatar
                      perritos, apoyar comedores comunitarios y causas que
                      realmente importan.
                    </p>
                    <p className="text-brand font-semibold">
                      Tu transformación transforma el mundo.
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
              Mi Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              31+ certificaciones que no son títulos en la pared. Son
              herramientas que uso cada día para acompañarte.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { name: "ICF Coach", icon: "🎓", color: "bg-blue-500" },
              { name: "Scrum Master", icon: "⚡", color: "bg-orange-500" },
              { name: "AWS Cloud", icon: "☁️", color: "bg-yellow-500" },
              { name: "Management 3.0", icon: "🚀", color: "bg-purple-500" },
              { name: "Product Owner", icon: "📊", color: "bg-green-500" },
              { name: "Kanban KMP", icon: "📋", color: "bg-indigo-500" },
              { name: "Lean Startup", icon: "💡", color: "bg-pink-500" },
              { name: "Agile Coach", icon: "🎯", color: "bg-teal-500" },
              { name: "PMI-ACP", icon: "📈", color: "bg-red-500" },
              { name: "Google Cloud", icon: "🌐", color: "bg-blue-600" },
              { name: "Newfield Coach", icon: "✨", color: "bg-amber-500" },
              { name: "MIT Digital", icon: "🎓", color: "bg-gray-700" },
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
                      className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center text-3xl mx-auto mb-3 shadow-md group-hover:shadow-xl transition-all`}
                    >
                      {cert.icon}
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
              ¿Listo para escribir tu propio
              <br />
              <span className="text-brand">código de vida?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
              No dejaré que tú seas el 201.
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Ya guié a 200 talentos. Si llegaste hasta acá, es porque algo en
              mi historia resonó con la tuya. Hablemos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <CalendlyButton
                className="px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-brand/50 transition-all duration-300"
                size="lg"
                text="📅 Agenda tu Sesión Gratis"
              />
              <motion.a
                className="px-10 py-5 text-lg font-bold border-2 border-white/30 hover:bg-white/10 rounded-full transition-all duration-300 inline-flex items-center gap-2"
                href="https://www.linkedin.com/in/hugotech"
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💼</span> Conéctame en LinkedIn
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 max-w-3xl mx-auto">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                ✅ Primera sesión sin costo
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                ✅ 100% online - Desde donde estés
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                ✅ Flexible - Tú marcas el ritmo
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
