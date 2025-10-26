"use client";

import React, { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Tabs, Tab } from "@heroui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const timelineData = [
    {
      phase: "El Inicio",
      icon: "🌱",
      color: "from-green-400 to-green-600",
      title: "Del código a las conversaciones",
      content: [
        "Empecé escribiendo código a las 3am, apasionado por encontrar la solución perfecta. <strong>PHP, MySQL, arquitecturas complejas</strong>... siempre fui hacia adelante: del desarrollo full-stack al liderazgo técnico, de Product Owner a transformar culturas organizacionales completas.",
        "Nunca me detuve. Pero en ese camino descubrí algo más poderoso que el framework perfecto: <strong>el impacto de acompañar a personas tech a encontrar su propósito</strong>.",
        "Hoy ya no programo en PHP ni JavaScript, pero sigo siendo el mismo innovador comprometido. Solo que ahora mi código son <strong>conversaciones que transforman equipos</strong>, mi deployment es <strong>ayudar a líderes a crecer</strong>, y mi mejor arquitectura es <strong>construir culturas donde las personas florecen</strong>."
      ]
    },
    {
      phase: "El Despertar",
      icon: "💡",
      color: "from-yellow-400 to-orange-500",
      title: "Los desafíos reales no están en el código",
      content: [
        "Como Tech Lead descubrí algo: <strong>el mejor código no transforma si quien lo escribe no se siente conectado</strong>.",
        "Developers talentosos sin espacios para crecer. Product Owners sin claridad de visión. Equipos sin conversaciones reales.",
        "Ahí empezó mi búsqueda: estudié coaching, agilidad, facilitación, liderazgo consciente.",
        "Me certifiqué en <strong>Coaching ICF, Management 3.0, Scrum, Lean</strong>... buscando respuestas más allá del código."
      ]
    },
    {
      phase: "La Pausa",
      icon: "🌧️",
      color: "from-gray-400 to-slate-600",
      title: "Cuando el éxito no es suficiente",
      content: [
        "<strong>A los 35, me detuve</strong>. Lideraba equipos, proyectos importantes, reconocimiento... pero algo faltaba.",
        "Noches preguntándome: <strong>¿Estoy construyendo lo que realmente importa?</strong>",
        "Esa pausa fue incómoda y necesaria. Me llevó al coaching profesional, a conversaciones honestas, a preguntarme quién era sin el cargo.",
        "Descubrí que <strong>muchos comparten esta sensación</strong>. Ese entendimiento se volvió mi punto de partida."
      ]
    },
    {
      phase: "La Transformación",
      icon: "🚀",
      color: "from-blue-400 to-indigo-600",
      title: "De tecnología a personas",
      content: [
        "Trabajé <strong>18+ años</strong> en tech (Perú, LATAM, EE.UU.). Lideré transformaciones digitales, equipos ágiles, productos escalables.",
        "Pero lo que más sentido me dio fueron las conversaciones de mentoring con alguien buscando su camino.",
        "Ver a alguien <strong>conectar con su propósito</strong> en una sesión valía más que cualquier milestone técnico.",
        "Cada vez que alguien decía <em>\"esta conversación me dio claridad\"</em>, sentía que estaba aportando algo real."
      ]
    },
    {
      phase: "El Propósito",
      icon: "✨",
      color: "from-primary to-[#0d4746]",
      title: "HugoTech: compartir lo aprendido",
      content: [
        "HugoTech nació de una pregunta: <strong>¿Cómo acompañar sin que el dinero sea obstáculo?</strong>",
        "Decidí que las sesiones 1 a 1 serían <strong>100% gratuitas</strong>. No como estrategia, sino como compromiso.",
        "Si hoy puedo acompañar a alguien, es porque otros hicieron lo mismo conmigo en momentos clave.",
        "Este espacio es mi forma de <strong>devolver lo que recibí y construir con propósito</strong>."
      ]
    }
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section con Parallax */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635]"
          style={{ y }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
          </div>
        </motion.div>

        <motion.div 
          className="container mx-auto max-w-1400 px-6 relative z-10"
          style={{ opacity }}
        >
          <div className="max-w-5xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Chip color="warning" variant="shadow" size="lg" className="mb-8 text-base md:text-lg px-6 py-2">
                Mi Historia 🌱
              </Chip>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight">
                Yo también estuve <span className="text-brand">buscando mi norte</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 leading-[1.8] tracking-wide max-w-4xl mx-auto">
                18 años en tech. Equipos, proyectos, logros. 
                Pero a los 35, <strong>una pregunta me detuvo: ¿Esto es todo?</strong>
              </p>
              <Button
                as={Link}
                href="#journey"
                size="lg"
                className="bg-brand text-white font-bold text-lg px-10 py-7 hover:scale-110 hover:shadow-2xl transition-all duration-300"
              >
                Conoce mi viaje →
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="text-white/60 text-sm">Scroll para descubrir más</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full mt-2 mx-auto flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-2.5 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Propósito Destacado */}
      <section className="py-16 md:py-24 bg-white relative" id="journey">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-customgray mb-8 leading-tight">
                Lo que aprendí en el camino
              </h2>
              <div className="relative inline-block mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand blur-3xl opacity-20" />
                <p className="relative text-xl md:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#0d4746] to-brand leading-tight px-4">
                  El propósito no aparece en un dashboard. Se descubre en conversaciones honestas.
                </p>
              </div>
              <div className="max-w-4xl mx-auto mt-8">
                <p className="text-base md:text-lg text-gray-600 leading-[2] tracking-wide">
                  <strong className="text-primary">A mis 40 años</strong>, después de pausas necesarias y preguntas incómodas, entendí algo: 
                  <strong className="text-customgray font-sans font-semibold"> No estaba solo</strong>. Había miles de profesionales tech sintiendo lo mismo. 
                  Talentosos en código, buscando propósito.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-[2] tracking-wide mt-6">
                  Ahí nació mi norte: <strong className="text-customgray font-sans font-semibold">Ser auténtico</strong> (sin poses corporativas), 
                  <strong className="text-customgray font-sans font-semibold"> acompañar a quienes vienen detrás</strong>, y 
                  <strong className="text-customgray font-sans font-semibold"> construir con alma</strong> donde lo humano importa tanto como el código.
                </p>
              </div>
            </div>            <Card className="bg-gradient-to-br from-primary/10 via-white to-brand/10 border-2 border-primary/20" shadow="lg">
              <CardBody className="p-10 md:p-16">
                <p className="text-lg md:text-xl text-gray-700 leading-[2] tracking-wide text-center">
                  No quiero que esperes años para hacer las preguntas importantes. 
                  <strong className="text-primary font-sans font-semibold"> Hoy acompaño a profesionales tech</strong> a encontrar su camino 
                  <strong className="text-customgray font-sans font-semibold"> con claridad y propósito</strong>. 
                  Porque la mejor tecnología la construyen personas que <strong className="text-brand font-sans font-semibold">se conocen a sí mismas</strong>.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline Interactivo */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-16 text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            El Viaje
          </motion.h2>

          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-brand to-primary transform md:-translate-x-1/2" />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-16 md:mb-24"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="md:w-5/12 ml-20 md:ml-0">
                    <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardBody className="p-8">
                        <Chip color="primary" variant="flat" className="mb-4">
                          {item.phase}
                        </Chip>
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-customgray mb-4 leading-tight">
                          {item.title}
                        </h3>
                        <div className="space-y-3">
                          {item.content.map((text, i) => (
                            <p 
                              key={i} 
                              className="text-gray-700 leading-[1.9] tracking-wide text-[15px] md:text-base"
                              dangerouslySetInnerHTML={{ __html: text }}
                            />
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-8 top-8 md:static md:w-2/12 flex justify-center transform -translate-x-1/2 md:translate-x-0">
                    <motion.div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl md:text-4xl shadow-2xl`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section con AnimatedCounter */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="container mx-auto max-w-1400 px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
              El Impacto en Números
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-[1.8] tracking-wide">
              Cada número representa vidas transformadas, equipos fortalecidos, propósitos descubiertos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { end: 18, suffix: "+ años", label: "En tecnología y liderazgo", icon: "📅", description: "Innovando, fallando y aprendiendo en tech" },
              { end: 200, prefix: "+", label: "Equipos y talentos", icon: "🌟", description: "Que me enseñaron tanto como yo a ellos" },
              { end: 31, suffix: "+", label: "Certificaciones profesionales", icon: "🎓", description: "Herramientas para servir mejor" },
              { end: 0, suffix: "∞", label: "Aprendiz eterno", icon: "🌱", description: "Del ser humano y la vida" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <CardBody className="p-8 text-center">
                    <div className="text-5xl mb-4">{stat.icon}</div>
                    <div className="text-5xl md:text-6xl font-bold text-brand mb-2">
                      {stat.suffix === "∞" ? (
                        <span>∞</span>
                      ) : (
                        <AnimatedCounter 
                          end={stat.end} 
                          prefix={stat.prefix} 
                          suffix={stat.suffix}
                        />
                      )}
                    </div>
                    <p className="text-white/90 font-semibold text-lg mb-2">{stat.label}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{stat.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofía con Glassmorphism */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-customgray mb-12 text-center leading-tight">
              Lo que guía mi trabajo
            </h2>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-brand/20 to-primary/20 blur-3xl" />
              <Card className="relative bg-white/40 backdrop-blur-xl border-2 border-white/60 shadow-2xl">
                <CardBody className="p-10 md:p-16">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🌟</div>
                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold font-quote text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand mb-8 italic leading-tight">
                      "Primero conocerse. Luego construir con sentido."
                    </blockquote>
                    <p className="text-lg md:text-xl text-gray-700 leading-[2] tracking-wide">
                      Aprendí que primero viene el <strong className="text-primary font-sans font-semibold">autoconocimiento</strong> (quién soy), 
                      luego el <strong className="text-brand font-sans font-semibold">propósito</strong> (para qué lo hago), 
                      y finalmente los <strong className="text-primary font-sans font-semibold">resultados</strong> llegan como consecuencia natural.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-[1.9] tracking-wide mt-6 italic">
                      El éxito sin claridad interna se vuelve frágil con el tiempo.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificaciones con Tabs Interactivos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-12 text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Formación y Certificaciones
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            <Tabs 
              aria-label="Formación" 
              size="lg"
              color="primary"
              variant="underlined"
              classNames={{
                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-6 h-12",
                tabContent: "group-data-[selected=true]:text-primary font-bold"
              }}
            >
              <Tab 
                key="coaching" 
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎓</span>
                    <span>Coaching & Liderazgo</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {/* Newfield Coaching Ontológico */}
                      <div className="flex items-start gap-4 pb-6 border-b-2 border-brand/30">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">✨</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg md:text-xl font-bold font-heading text-customgray">
                              Coaching Profesional Ontológico (en proceso)
                            </h3>
                            <Chip size="sm" color="success" variant="flat">Activo</Chip>
                          </div>
                          <p className="text-base font-semibold text-brand mb-2">Newfield Network</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Formación en coaching ontológico profesional - Transformación del ser, lenguaje, emocionalidad y corporalidad
                          </p>
                          <p className="text-xs text-gray-500">oct. 2025 - en curso</p>
                        </div>
                      </div>

                      {/* Ruwalab ICF */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">💬</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg md:text-xl font-bold font-heading text-customgray">
                              Coach Profesional ICF (en proceso)
                            </h3>
                            <Chip size="sm" color="warning" variant="flat">En curso</Chip>
                          </div>
                          <p className="text-base font-semibold text-primary mb-2">Ruwalab</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Formación acreditada por International Coaching Federation (ICF) - Desarrollo personal y liderazgo
                          </p>
                          <p className="text-xs text-gray-500">abr. 2024 - nov. 2025</p>
                        </div>
                      </div>

                      {/* UPC Coaching & Mentoring */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🔴</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Herramientas de Coaching y Mentoring para el Liderazgo
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Universidad Peruana de Ciencias Aplicadas</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Programa especializado en coaching como líder, competencias para liderazgo adaptativo del siglo XXI
                          </p>
                          <p className="text-xs text-gray-500">feb. 2025 - oct. 2025</p>
                        </div>
                      </div>

                      {/* ISIL Gestión Talento Humano */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">👥</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Gestión de Talento Humano
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">ISIL</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Retención de personal, liderazgo servicial, dirección de talentos, desarrollo de talento, liderazgo organizacional
                          </p>
                          <p className="text-xs text-gray-500">ene. 2023</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              <Tab 
                key="agilidad" 
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⚡</span>
                    <span>Agilidad & Frameworks</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {/* ICAgile ACC */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎯</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            ICAgile Certified Professional - Agile Coaching (ICP ACC)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">ICAgile</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Agile methodologies, liderazgo de equipos, product owner, agile coach
                          </p>
                          <p className="text-xs text-gray-500">jun. 2024 | ID: 346-44232-c7a7699f-6c03-4440-8152-5def04f215fd</p>
                        </div>
                      </div>

                      {/* ICAgile HR */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🌱</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            ICAgile Certified Professional - Agility in HR
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">ICAgile</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Agilidad aplicada a recursos humanos y gestión de personas
                          </p>
                          <p className="text-xs text-gray-500">sept. 2025 | ID: 316-53764-c7a7699f-6c03-4440-8152-5def04f215fd</p>
                        </div>
                      </div>

                      {/* Management 3.0 */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🚀</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Management 3.0 - Energizing People Plus & Fundamentals
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Management 3.0</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Gestión de personas, entrenamiento personal, estrategia empresarial, liderazgo moderno
                          </p>
                          <p className="text-xs text-gray-500">ago. 2022</p>
                        </div>
                      </div>

                      {/* SCRUMstudy SAMC */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">📊</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            SCRUMstudy Agile Master Certified (SAMC)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Vabro.ai and VMEdu.com</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Agile methodologies, Waterfall, Lean software development, Agile leadership, Entorno Agile
                          </p>
                          <p className="text-xs text-gray-500">jun. 2024 | ID: 775162</p>
                        </div>
                      </div>

                      {/* PMI-ACP */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">📋</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            PMI Agile Certified Practitioner (PMI-ACP)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Project Management Institute</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Certificación en metodologías ágiles y gestión de proyectos
                          </p>
                          <p className="text-xs text-gray-500">oct. 2024 | ID: 3956641</p>
                        </div>
                      </div>

                      {/* Scrum Master/Product Owner/Developer */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">✅</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Scrum Master, Product Owner & Developer Certified
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">SCRUMstudy</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Scrum Master, Product Owner, Developer - Framework completo Scrum
                          </p>
                          <p className="text-xs text-gray-500">2021-2024</p>
                        </div>
                      </div>

                      {/* Kanban */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">📌</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Kanban Management Professional (KMP)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Kanban University</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Gestión de programas, operaciones lean, transformación lean, transformación digital, Kanban
                          </p>
                          <p className="text-xs text-gray-500">oct. 2021</p>
                        </div>
                      </div>

                      {/* Lean Startup */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">💡</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Lean StartUp Certified Associate
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">CertJoin</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Lean Startup, operaciones lean, modelo-vista-presentador (MVP)
                          </p>
                          <p className="text-xs text-gray-500">ago. 2021 | ID: 6dBxDaN1C1</p>
                        </div>
                      </div>

                      {/* Lean UX */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎨</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Lean UX
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">UTEC Posgrado</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Liderazgo de equipos de desarrollo, Lean Startup, herramientas Lean, desarrollo de software lean, Lean UX, transformación lean
                          </p>
                          <p className="text-xs text-gray-500">dic. 2022</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              <Tab 
                key="tech" 
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💻</span>
                    <span>Tecnología & Cloud</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {/* MIT */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-red-700">MIT</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Transformación Digital: Tecnologías y Aplicaciones Prácticas
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">MIT Professional Education</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Programa ejecutivo del MIT: IA, Big Data, Machine Learning, IoT, Blockchain. Transformación organizacional y análisis de casos prácticos.
                          </p>
                          <p className="text-xs text-gray-500">jun. 2025 - nov. 2025 | ID: 161063771</p>
                        </div>
                      </div>

                      {/* Google Cloud */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">☁️</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Google Cloud Certified - Cloud Digital Leader
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Google</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Google Cloud Platform - Liderazgo digital en la nube
                          </p>
                          <p className="text-xs text-gray-500">sept. 2024 - sept. 2027</p>
                        </div>
                      </div>

                      {/* AWS */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🟠</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            AWS Certified Cloud Practitioner
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Amazon Web Services (AWS)</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Seguridad de Cloud, Amazon Web Services (AWS), Computación en la nube
                          </p>
                          <p className="text-xs text-gray-500">ago. 2024 - ago. 2027</p>
                        </div>
                      </div>

                      {/* Microsoft Azure */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🔷</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Microsoft Certified: Azure Fundamentals
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Microsoft</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Fundamentos de Microsoft Azure Cloud
                          </p>
                          <p className="text-xs text-gray-500">jul. 2024 | ID: DA756991C65912ABE</p>
                        </div>
                      </div>

                      {/* DevOps */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">⚙️</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            DevOps Foundation Professional Certification (DFPC)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">CertiProf</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            DevOps, Microsoft Azure, DevSecOps
                          </p>
                          <p className="text-xs text-gray-500">jul. 2024 - jul. 2027</p>
                        </div>
                      </div>

                      {/* Cybersecurity */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🔐</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Lead CyberSecurity Professional Certification (LCSPC™)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">CertiProf</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Liderazgo en ciberseguridad profesional
                          </p>
                          <p className="text-xs text-gray-500">abr. 2025 - abr. 2027</p>
                        </div>
                      </div>

                      {/* Scrum for Ops */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🔄</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Scrum for Ops and DevOps Fundamentals Certified
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">SCRUMstudy</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Scrum/Kanban/AI/Business Analysis/OKRs/Six Sigma - Integración continua
                          </p>
                          <p className="text-xs text-gray-500">2024</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>

              <Tab 
                key="education" 
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎓</span>
                    <span>Educación</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <div className="space-y-6">
                      {/* ESAN */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl font-bold text-red-700">E</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            PADE Internacional en Transformación Digital
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">ESAN Graduate School of Business</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Tecnología en la gestión empresarial / Procesamiento de datos
                          </p>
                          <p className="text-xs text-gray-500">jun. 2024 - jun. 2025</p>
                        </div>
                      </div>

                      {/* UPC CTO */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎯</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Programa Alta Dirección CTO - Excelencia en Gestión Estratégica de la Tecnología
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Universidad del Pacífico (PE)</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Informática, comunicaciones y servicios de asistencia. Emplear nuevas tecnologías de manera estratégica, desarrollar capacidad de liderazgo e influencia personal para liderar la transformación a través de Tecnología, Innovación y Transformación Digital. IA, Big Data, ML, Robotics, Blockchain, Biotechnology.
                          </p>
                          <p className="text-xs text-gray-500">ene. 2023 - sept. 2024</p>
                        </div>
                      </div>

                      {/* UPN Maestría */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎓</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Maestría en Tecnologías de la Información (TI)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Universidad Privada del Norte</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Ingeniería de sistemas
                          </p>
                          <p className="text-xs text-gray-500">feb. 2018 - abr. 2020</p>
                        </div>
                      </div>

                      {/* MBA */}
                      <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                        <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">📊</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Master of Business Administration (MBA)
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">Universidad Nacional de Trujillo</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Ciencias Económicas
                          </p>
                          <p className="text-xs text-gray-500">feb. 2009 - jul. 2011</p>
                        </div>
                      </div>

                      {/* Design Thinking & OKR */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🎨</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">
                            Design Thinking Professional & OKR Certified Professional
                          </h3>
                          <p className="text-base font-semibold text-primary mb-2">CertiProf</p>
                          <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-2">
                            Gestión de productos, planificación de proyectos, planificación estratégica, indicadores clave de desempeño, planificación de negocios, planificación de procesos, objetivos y resultados clave (OKR)
                          </p>
                          <p className="text-xs text-gray-500">2021-2023</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Misión y Visión con 3D Hover */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-1400 px-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-16 text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A dónde voy (y por qué)
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary hover:shadow-2xl transition-all duration-300">
                <CardBody className="p-10">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-6">Lo que hago hoy</h3>
                  <p className="text-[15px] md:text-base text-gray-700 leading-[1.9] tracking-wide">
                    Acompaño a profesionales tech en su <strong className="text-primary font-sans font-semibold">transformación personal y profesional</strong>. 
                    Ofrezco <strong className="text-customgray font-sans font-semibold">sesiones 1-a-1 100% gratuitas</strong> 
                    para quien las necesite, y programas empresariales que transforman equipos con <strong className="text-primary font-sans font-semibold">agilidad, 
                    innovación y mentalidad de crecimiento</strong>. Del autoconocimiento al liderazgo consciente, del propósito a la acción con impacto.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-brand/10 to-brand/5 border-2 border-brand hover:shadow-2xl transition-all duration-300">
                <CardBody className="p-10">
                  <div className="text-6xl mb-6">🌟</div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-6">A dónde voy</h3>
                  <p className="text-[15px] md:text-base text-gray-700 leading-[1.9] tracking-wide">
                    Quiero ser referente en <strong className="text-brand font-sans font-semibold">transformación humana en tech latinoamericano</strong>. 
                    Crear una comunidad de líderes conscientes que lideren con empatía, 
                    construyan productos con propósito, y transformen la industria desde 
                    <strong className="text-customgray font-sans font-semibold"> la innovación con alma</strong>.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Valores */}
          <motion.div
            className="mt-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-primary/5 via-white to-brand/5 border-2 border-primary/20">
              <CardBody className="p-10">
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-8 text-center flex items-center justify-center">
                  <span className="text-5xl mr-4">💎</span>
                  Los 4 pilares que me sostienen
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: "🤝", title: "Humanidad", desc: "Tech al servicio de personas, no al revés" },
                    { icon: "✨", title: "Propósito", desc: "Sin por qué, no hay cómo que valga" },
                    { icon: "🌱", title: "Crecimiento", desc: "Evolución consciente, no éxito vacío" },
                    { icon: "💪", title: "Excelencia", desc: "Alto rendimiento con alma, no solo métricas" }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-5xl mb-3">{value.icon}</div>
                      <h4 className="text-lg md:text-xl font-bold font-heading text-customgray mb-2">{value.title}</h4>
                      <p className="text-sm md:text-[15px] text-gray-600">{value.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Impactante */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>
        
        <div className="container mx-auto max-w-1400 px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-8">🚀</div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              ¿Listo para construir con claridad?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto leading-[2] tracking-wide">
              No esperes años para hacer las preguntas importantes.
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-[1.9]">
              Agenda tu sesión gratuita. Conversemos con honestidad. 
              Sin agendas ocultas, sin discursos ensayados. <strong>Solo tú, tus preguntas, y un espacio seguro para explorarlas</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/#cita"
                size="lg"
                className="bg-brand text-white font-bold text-lg px-10 py-7 hover:scale-110 hover:shadow-2xl transition-all duration-300"
              >
                Agenda tu sesión gratuita →
              </Button>
              <Button
                as={Link}
                href="/empresas"
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold transition-all duration-300"
              >
                Programas para empresas
              </Button>
            </div>
            <p className="mt-10 text-white/70 font-quote italic text-base md:text-lg max-w-2xl mx-auto leading-[1.9]">
              "Si una sola persona encuentra su propósito gracias a esta conversación, todo habrá valido la pena."
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
