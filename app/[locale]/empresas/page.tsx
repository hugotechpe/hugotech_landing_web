"use client";
import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

export default function EmpresasPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-1400 px-6 relative z-10">
          <motion.div
            animate="visible"
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight"
              variants={fadeIn}
            >
              Transformamos equipos tecnológicos{" "}
              <span className="text-brand">desde el SER</span> hacia el alto
              rendimiento
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6 text-white/90 leading-[1.9] tracking-wide"
              variants={fadeIn}
            >
              En Hugotech acompañamos a empresas que buscan{" "}
              <strong>mucho más que mejorar procesos</strong>: buscan
              transformar personas, culturas y equipos.
            </motion.p>
            <motion.p
              className="text-base md:text-lg mb-10 text-white/80 leading-[1.8] tracking-wide"
              variants={fadeIn}
            >
              Porque la verdadera innovación no empieza en la tecnología, sino
              en quienes la crean.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button
                as={Link}
                className="bg-brand text-white font-bold text-lg px-8 py-6 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                href="#contacto-empresas"
                size="lg"
              >
                Agenda una reunión exploratoria
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nuestra Propuesta - 3 Dimensiones */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
              🧭 Nuestra propuesta para empresas
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-[1.9] tracking-wide">
              <strong>Hugotech Empresas</strong> nace para acompañar a
              organizaciones tecnológicas y digitales que desean elevar el nivel
              humano, técnico y cultural de sus equipos. Combinamos{" "}
              <strong>agilidad, coaching, mentoring y pensamiento Lean</strong>{" "}
              para activar el propósito, la colaboración y la excelencia en el
              día a día de trabajo.
            </p>
          </motion.div>

          <motion.p className="text-center text-lg md:text-xl font-semibold font-heading text-customgray mb-12 leading-relaxed">
            Trabajamos desde tres dimensiones complementarias:
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="visible"
          >
            {/* Dimensión 1 */}
            <motion.div variants={fadeIn}>
              <Card
                className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-primary"
                shadow="lg"
              >
                <CardBody className="p-8">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-4">
                    1. Cultura y Mindset
                  </h3>
                  <p className="text-gray-700 mb-6 leading-[1.9] tracking-wide text-[15px] md:text-base">
                    Diseñamos talleres y experiencias inmersivas que despiertan
                    conciencia, alinean valores y conectan a las personas con el
                    propósito de la organización.
                  </p>
                  <ul className="space-y-3 text-gray-700 text-[14px] md:text-[15px]">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="leading-relaxed">
                        Talleres de Cultura Ágil
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="leading-relaxed">
                        Mindset Lean & Pensamiento de Valor
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="leading-relaxed">
                        Liderazgo consciente y colaboración efectiva
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="leading-relaxed">
                        Programas de cultura organizacional y transformación del
                        SER
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>

            {/* Dimensión 2 */}
            <motion.div variants={fadeIn}>
              <Card
                className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-brand"
                shadow="lg"
              >
                <CardBody className="p-8">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-4">
                    2. Equipos de Desarrollo y Agilidad Técnica
                  </h3>
                  <p className="text-gray-700 mb-6 leading-[1.9] tracking-wide text-[15px] md:text-base">
                    Acompañamos equipos técnicos y de producto para que
                    evolucionen hacia equipos de alto rendimiento, fortaleciendo
                    sus prácticas, estructura y sinergia.
                  </p>
                  <ul className="space-y-3 text-gray-700 text-[14px] md:text-[15px]">
                    <li className="flex items-start">
                      <span className="text-brand mr-2 font-bold">•</span>
                      <span>
                        Acompañamiento técnico y cultural (programas de 4 a 6
                        meses)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2 font-bold">•</span>
                      <span>Roadmaps técnicos y organizacionales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2 font-bold">•</span>
                      <span>
                        Sesiones de retrospectiva profunda y liberadora
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2 font-bold">•</span>
                      <span>
                        Estructuras liberadoras, design thinking y aprendizaje
                        continuo
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>

            {/* Dimensión 3 */}
            <motion.div variants={fadeIn}>
              <Card
                className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-primary"
                shadow="lg"
              >
                <CardBody className="p-8">
                  <div className="text-5xl mb-4">💼</div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-4">
                    3. Mentoring y Coaching One-to-One
                  </h3>
                  <p className="text-gray-700 mb-6 leading-[1.9] tracking-wide text-[15px] md:text-base">
                    Procesos individuales diseñados para potenciar el liderazgo,
                    la autogestión y la claridad mental de cada miembro del
                    equipo.
                  </p>
                  <ul className="space-y-3 text-gray-700 text-[14px] md:text-[15px]">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="leading-relaxed">
                        Sesiones de coaching profesional (enfoque ICF)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="leading-relaxed">
                        Mentoring técnico y de liderazgo
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="leading-relaxed">
                        Conversaciones difíciles y feedback consciente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span className="leading-relaxed">
                        Desarrollo personal orientado a resultados
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Caso de Transformación */}
      <section className="py-16 md:py-24 bg-[#FBF7EC]">
        <div className="container mx-auto max-w-1400 px-6">
          {/* Nueva sección: Lo Aprendí en Carne Propia */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card
              className="bg-gradient-to-br from-primary/5 to-brand/5 border-2 border-primary/20"
              shadow="lg"
            >
              <CardBody className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-xs md:text-sm font-bold mb-6 uppercase tracking-wider">
                    💔 Lo Aprendí en Carne Propia
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-customgray mb-6 leading-tight">
                    No te vendo teoría. Te comparto cicatrices.
                  </h3>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-base md:text-lg text-gray-700 leading-[2] tracking-wide">
                    Lideré equipos brillantes que{" "}
                    <strong className="text-primary">
                      colapsaron por falta de claridad
                    </strong>
                    . Vi desarrolladores senior renunciar no por salario, sino
                    por{" "}
                    <strong className="text-primary">falta de propósito</strong>
                    .{" "}
                    <strong className="text-customgray">
                      Fui ese líder que priorizaba el sprint por encima de las
                      personas
                    </strong>
                    ... hasta que el equipo se desmoronó.
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-[2] tracking-wide">
                    Esa experiencia me{" "}
                    <strong className="text-brand">transformó</strong>. Ahora
                    ayudo a otros líderes a{" "}
                    <strong className="text-customgray">
                      no cometer los mismos errores que yo
                    </strong>
                    . Porque sé lo que duele ver un equipo romperse. Y sé lo que
                    se siente cuando lo reconstruyes desde el alma.
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
              🚀 Casos de transformación: de equipos buenos a equipos
              extraordinarios
            </h2>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <Card className="mb-8" shadow="lg">
              <CardBody className="p-8">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-6 leading-tight">
                  Hemos acompañado a equipos tecnológicos que atravesaban
                  desafíos comunes:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700 text-[15px] md:text-base">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl flex-shrink-0">
                        ❌
                      </span>
                      <span className="leading-relaxed">
                        Comunicación fragmentada entre roles técnicos y de
                        negocio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl flex-shrink-0">
                        ❌
                      </span>
                      <span className="leading-relaxed">
                        Falta de enfoque y priorización
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl flex-shrink-0">
                        ❌
                      </span>
                      <span className="leading-relaxed">
                        Sobrecarga emocional y resistencia al cambio
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-700 text-[15px] md:text-base">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl flex-shrink-0">
                        ❌
                      </span>
                      <span className="leading-relaxed">
                        Cultura reactiva más que proactiva
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl flex-shrink-0">
                        ❌
                      </span>
                      <span className="leading-relaxed">
                        Desconexión entre propósito, tarea y resultado
                      </span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-l-4 border-primary" shadow="lg">
                <CardBody className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-6 flex items-center leading-tight">
                    <span className="mr-3">🔧</span>
                    Nuestro modelo de intervención
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-[15px] md:text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        <strong>
                          Acompañamiento semanal técnico y cultural:
                        </strong>{" "}
                        revisión de código, arquitectura, base de datos,
                        prácticas ágiles y sincronía de equipo.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        <strong>Talleres de Cultura y Agilidad:</strong>{" "}
                        sesiones colectivas para despertar conciencia,
                        vulnerabilidad y propósito compartido.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        <strong>Modelo Tuckman aplicado</strong>{" "}
                        (Forming–Storming–Norming–Performing): medición real de
                        evolución grupal.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        <strong>Transformación del SER:</strong> cada integrante
                        redescubre quién es, qué lo motiva y cómo puede aportar
                        valor desde su autenticidad.
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              <Card
                className="border-l-4 border-brand bg-gradient-to-br from-white to-brand/5"
                shadow="lg"
              >
                <CardBody className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-6 flex items-center leading-tight">
                    <span className="mr-3">✨</span>
                    Resultados visibles
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-[15px] md:text-base">
                    <li className="flex items-start">
                      <span className="text-brand mr-3 text-xl flex-shrink-0">
                        →
                      </span>
                      <span className="font-semibold leading-relaxed">
                        Equipos más alineados, conscientes y colaborativos.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-3 text-xl flex-shrink-0">
                        →
                      </span>
                      <span className="font-semibold leading-relaxed">
                        Líderes técnicos que se comunican desde la empatía y la
                        claridad.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-3 text-xl flex-shrink-0">
                        →
                      </span>
                      <span className="font-semibold leading-relaxed">
                        Mayor fluidez en la toma de decisiones y en la ejecución
                        técnica.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-3 text-xl flex-shrink-0">
                        →
                      </span>
                      <span className="font-semibold leading-relaxed">
                        Cultura de mejora continua: del &ldquo;hacer por cumplir&rdquo; al
                        &ldquo;hacer con propósito&rdquo;.
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-[#0d4746] text-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-8 leading-tight">
              🧠 Nuestra filosofía
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-white/20 mb-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold font-quote italic text-brand mb-6 leading-[1.8]">
                &ldquo;No vendo fórmulas mágicas. Vendo 18 años de caídas, levantadas
                y aprendizajes dolorosos.&rdquo;
              </p>
              <p className="text-base md:text-lg text-white/90 leading-[2] tracking-wide">
                La transformación real{" "}
                <strong>duele, incomoda, cuestiona</strong>. Pero es la única
                que dura.
              </p>
            </div>
            <p className="text-lg md:text-xl leading-[2] tracking-wide mb-8">
              Creemos que el alto rendimiento no se impone, se despierta.
              <br />
              Cada empresa tiene su propio ritmo, energía y esencia.
              <br />
              Nosotros solo acompañamos el proceso: desafiamos, guiamos y
              sostenemos el cambio desde la empatía y la experiencia.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-brand">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold font-quote text-brand leading-[1.9] italic">
                &ldquo;El verdadero cambio ocurre cuando las personas dejan de
                trabajar solo por metas y comienzan a trabajar desde propósito.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
              💬 Cómo trabajamos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "1",
                title: "Diagnóstico inicial",
                desc: "Exploramos la cultura actual, los retos técnicos y las tensiones invisibles que frenan el crecimiento.",
                icon: "🔍",
              },
              {
                number: "2",
                title: "Diseño del proceso",
                desc: "Co-creamos un plan integral con talleres, sesiones 1:1, acompañamiento técnico o cultural, según las necesidades del equipo.",
                icon: "📋",
              },
              {
                number: "3",
                title: "Activación",
                desc: "Ejecutamos sesiones, dinámicas y acompañamientos con foco en transformación real, no teórica.",
                icon: "🚀",
              },
              {
                number: "4",
                title: "Medición y evolución",
                desc: "Evaluamos la madurez técnica y cultural del equipo con herramientas visuales y feedbacks periódicos.",
                icon: "📊",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Card
                  className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  shadow="lg"
                >
                  <CardBody className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold font-heading mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-[14px] md:text-[15px] leading-[1.8] tracking-wide">
                      {step.desc}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué nos hace diferentes */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0FAF9] to-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
              ✨ Qué hace diferente a Hugotech
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                text: "Combinamos tecnología y humanidad en cada intervención.",
                icon: "🤝",
              },
              {
                text: "Unimos agilidad, coaching y mentoring en un solo lenguaje.",
                icon: "🔄",
              },
              {
                text: "Acompañamos con presencia real, no solo consultoría.",
                icon: "👥",
              },
              {
                text: "Convertimos procesos en aprendizajes y personas en líderes.",
                icon: "🌟",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Card
                  className="h-full border-t-4 border-brand hover:shadow-xl transition-all"
                  shadow="md"
                >
                  <CardBody className="p-6 text-center">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <p className="text-gray-700 font-semibold leading-relaxed">
                      {item.text}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios para Empresas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-customgray mb-6">
              💼 Servicios para empresas
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left text-lg font-bold">Categoría</th>
                  <th className="p-4 text-left text-lg font-bold">
                    Descripción
                  </th>
                  <th className="p-4 text-left text-lg font-bold">Modalidad</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    cat: "Talleres de Cultura y Agilidad",
                    desc: "Experiencias grupales para transformar el mindset del equipo.",
                    mod: "Presencial / Virtual",
                  },
                  {
                    cat: "Acompañamiento Técnico-Cultural (Squads)",
                    desc: "Programas de 4–6 meses que combinan agilidad, mentoring y coaching.",
                    mod: "Híbrido",
                  },
                  {
                    cat: "Mentoring Ejecutivo / Coaching 1:1",
                    desc: "Sesiones personalizadas para líderes técnicos o estratégicos.",
                    mod: "Online",
                  },
                  {
                    cat: "Transformación del SER en Equipos",
                    desc: "Ruta de liderazgo, vulnerabilidad y propósito para equipos tech.",
                    mod: "Presencial / Virtual",
                  },
                  {
                    cat: "Diagnóstico de Madurez Ágil y Cultural",
                    desc: "Evaluación de la cultura organizacional y su evolución.",
                    mod: "Remoto / Presencial",
                  },
                ].map((service, idx) => (
                  <motion.tr
                    key={idx}
                    className={`border-b ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-brand/5 transition-colors`}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <td className="p-4 font-bold text-customgray">
                      {service.cat}
                    </td>
                    <td className="p-4 text-gray-700">{service.desc}</td>
                    <td className="p-4 text-gray-700 font-semibold">
                      {service.mod}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Versión Mobile de la Tabla */}
          <div className="md:hidden space-y-4 mt-8">
            {[
              {
                cat: "Talleres de Cultura y Agilidad",
                desc: "Experiencias grupales para transformar el mindset del equipo.",
                mod: "Presencial / Virtual",
              },
              {
                cat: "Acompañamiento Técnico-Cultural (Squads)",
                desc: "Programas de 4–6 meses que combinan agilidad, mentoring y coaching.",
                mod: "Híbrido",
              },
              {
                cat: "Mentoring Ejecutivo / Coaching 1:1",
                desc: "Sesiones personalizadas para líderes técnicos o estratégicos.",
                mod: "Online",
              },
              {
                cat: "Transformación del SER en Equipos",
                desc: "Ruta de liderazgo, vulnerabilidad y propósito para equipos tech.",
                mod: "Presencial / Virtual",
              },
              {
                cat: "Diagnóstico de Madurez Ágil y Cultural",
                desc: "Evaluación de la cultura organizacional y su evolución.",
                mod: "Remoto / Presencial",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-shadow"
                shadow="md"
              >
                <CardBody className="p-6">
                  <h3 className="font-bold text-base md:text-lg font-heading text-primary mb-2 leading-tight">
                    {service.cat}
                  </h3>
                  <p className="text-gray-700 mb-3 text-[15px] leading-relaxed">
                    {service.desc}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Modalidad:</strong> {service.mod}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white relative overflow-hidden"
        id="contacto-empresas"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-1400 px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-8 leading-tight">
              🤝 ¿Tu equipo está listo para transformarse?
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-[2] tracking-wide">
              Cada empresa tiene su propio camino, pero todas comparten el mismo
              punto de partida: <strong>las personas</strong>.
            </p>
            <p className="text-base md:text-lg mb-10 text-white/90 max-w-2xl mx-auto leading-[1.9] tracking-wide">
              Si buscas acompañar a tus talentos a dar su siguiente salto,
              Hugotech está listo para caminar contigo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                isExternal
                as={Link}
                className="bg-brand text-white font-bold text-base md:text-lg px-8 py-6 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                href="https://calendly.com/hugotech/reunion-exploratoria"
                size="lg"
              >
                👉 Agenda una reunión exploratoria
              </Button>
              <Button
                as={Link}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-base md:text-lg transition-all duration-300"
                href="mailto:hola@hugotech.pe"
                size="lg"
                variant="bordered"
              >
                Enviar email
              </Button>
            </div>
            <p className="mt-8 text-white/80 italic font-quote text-base md:text-lg leading-[1.9]">
              &ldquo;Descubramos juntos qué necesita tu equipo para alcanzar su mejor
              versión.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
