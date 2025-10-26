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
      title: "Raíces en Perú, sueños sin fronteras",
      content: [
        "Nací en Perú con la curiosidad de entender cómo funcionan las cosas.",
        "Estudié <strong>Ingeniería de Sistemas</strong> creyendo que la tecnología podía cambiar el mundo.",
        "Trabajé en proyectos desafiantes, aprendí lenguajes, frameworks, arquitecturas... pero algo faltaba.",
        "Veía equipos talentosos bloqueados no por falta de habilidad técnica, sino por <strong>falta de claridad, confianza y propósito</strong>."
      ]
    },
    {
      phase: "El Despertar",
      icon: "💡",
      color: "from-yellow-400 to-orange-500",
      title: "El mejor código no sirve si quien lo escribe está perdido",
      content: [
        "Como líder técnico descubrí que <strong>los problemas más grandes no eran técnicos, eran humanos</strong>.",
        "Developers brillantes que no sabían comunicar. Product Owners sin visión clara. Equipos sin cohesión.",
        "Ahí empezó mi verdadero camino: estudiar coaching profesional, liderazgo, agilidad, comunicación...",
        "Me certifiqué como <strong>Coach Profesional ICF, Management 3.0, Agile Team Facilitation, Scrum, Lean</strong>..."
      ]
    },
    {
      phase: "La Transformación",
      icon: "🚀",
      color: "from-blue-400 to-indigo-600",
      title: "De construir software a construir personas",
      content: [
        "Durante <strong>18+ años</strong> lideré transformaciones digitales en LATAM y EE. UU.",
        "Pero lo que más me llenó fueron las conversaciones de mentoring.",
        "Ver a un junior descubrir su potencial. A un líder encontrar su voz. A un equipo construir confianza real.",
        "Cada vez que alguien decía <em>\"esta conversación cambió mi perspectiva\"</em>, sentía que estaba en el camino correcto."
      ]
    },
    {
      phase: "El Propósito",
      icon: "✨",
      color: "from-primary to-[#0d4746]",
      title: "HugoTech: devolver lo que la vida me dio",
      content: [
        "HugoTech nació de una pregunta: <strong>¿Cómo ayudar a más personas sin que el dinero sea una barrera?</strong>",
        "Decidí que las sesiones 1 a 1 serían <strong>gratuitas</strong>. No por marketing, sino por responsabilidad.",
        "Si hoy puedo guiar a alguien, es porque otros lo hicieron conmigo cuando más lo necesitaba.",
        "Este espacio es mi forma de honrar ese camino y sembrar semillas para el futuro."
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
              <Chip color="warning" variant="shadow" size="lg" className="mb-8 text-lg px-6 py-2">
                Mi Historia 🌱
              </Chip>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                De ingeniero <span className="text-brand">a guía de transformación</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto">
                Cómo un ingeniero peruano descubrió que su verdadero propósito 
                no estaba en el código, sino en <strong>las personas que lo crean</strong>.
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
              <h2 className="text-4xl md:text-6xl font-bold text-customgray mb-8">
                Mi Propósito
              </h2>
              <div className="relative inline-block mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand blur-3xl opacity-20" />
                <p className="relative text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#0d4746] to-brand leading-tight px-4">
                  Ser auténtico, inspirar a jóvenes talentos tech y construir con fe un legado con alma.
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 via-white to-brand/10 border-2 border-primary/20" shadow="lg">
              <CardBody className="p-10 md:p-16">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
                  Ayudar a profesionales tech a encontrar su camino con <strong className="text-primary">claridad, propósito y humanidad</strong>. 
                  Porque la mejor tecnología la construyen personas que se conocen a sí mismas.
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
            className="text-4xl md:text-5xl font-bold text-customgray mb-16 text-center"
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
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="md:w-5/12 ml-16 md:ml-0">
                    <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardBody className="p-8">
                        <Chip color="primary" variant="flat" className="mb-4">
                          {item.phase}
                        </Chip>
                        <h3 className="text-2xl font-bold text-customgray mb-4">
                          {item.title}
                        </h3>
                        <div className="space-y-3">
                          {item.content.map((text, i) => (
                            <p 
                              key={i} 
                              className="text-gray-700 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: text }}
                            />
                          ))}
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 md:relative md:w-2/12 flex justify-center">
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl shadow-2xl`}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              El Impacto en Números
            </h2>
            <p className="text-xl text-white/80">
              Cada número representa vidas transformadas, equipos fortalecidos, propósitos descubiertos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { end: 18, suffix: "+ años", label: "En tecnología y liderazgo", icon: "📅" },
              { end: 200, prefix: "+", label: "Talentos guiados", icon: "🌟" },
              { end: 10, suffix: "+", label: "Certificaciones profesionales", icon: "🎓" },
              { end: 100, suffix: "%", label: "Compromiso con el propósito", icon: "💪" }
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
                      <AnimatedCounter 
                        end={stat.end} 
                        prefix={stat.prefix} 
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-white/90 font-semibold text-lg">{stat.label}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-customgray mb-12 text-center">
              Mi Filosofía de Vida
            </h2>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-brand/20 to-primary/20 blur-3xl" />
              <Card className="relative bg-white/40 backdrop-blur-xl border-2 border-white/60 shadow-2xl">
                <CardBody className="p-10 md:p-16">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🌟</div>
                    <blockquote className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand mb-8 italic leading-tight">
                      "Transformar desde el ser, construir desde el propósito y liderar con el alma."
                    </blockquote>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                      Creo que primero se transforma el <strong className="text-primary">ser</strong>, 
                      luego el <strong className="text-brand">hacer</strong> cobra sentido, 
                      y finalmente el <strong className="text-primary">tener</strong> llega como consecuencia natural.
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
            className="text-4xl md:text-5xl font-bold text-customgray mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Formación y Experiencia
          </motion.h2>

          <div className="max-w-5xl mx-auto">
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
                    <span>Coaching</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Coach Profesional ICF</strong>
                          <p className="text-gray-600">International Coaching Federation - Acreditación profesional</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Coaching para el Liderazgo</strong>
                          <p className="text-gray-600">Especialización en desarrollo de líderes conscientes</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Mentoring Tecnológico</strong>
                          <p className="text-gray-600">Acompañamiento especializado para profesionales tech</p>
                        </div>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Tab>

              <Tab 
                key="agilidad" 
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⚡</span>
                    <span>Agilidad</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="text-brand mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Management 3.0 Facilitator</strong>
                          <p className="text-gray-600">Liderazgo ágil y gestión moderna de equipos</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Agile Team Facilitation</strong>
                          <p className="text-gray-600">Facilitación de equipos ágiles de alto rendimiento</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Scrum Master & Product Owner</strong>
                          <p className="text-gray-600">Certificaciones en marcos de trabajo ágiles</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Lean Thinking</strong>
                          <p className="text-gray-600">Optimización de procesos y pensamiento de valor</p>
                        </div>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Tab>

              <Tab 
                key="tech" 
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💻</span>
                    <span>Tecnología</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Ingeniería de Sistemas</strong>
                          <p className="text-gray-600">Fundamentos sólidos en desarrollo de software</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Arquitectura de Software</strong>
                          <p className="text-gray-600">Diseño de sistemas escalables y mantenibles</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Liderazgo Técnico</strong>
                          <p className="text-gray-600">Tech Lead en proyectos de transformación digital</p>
                        </div>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Tab>

              <Tab 
                key="experiencia" 
                title={
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🌎</span>
                    <span>Experiencia</span>
                  </div>
                }
              >
                <Card className="mt-8" shadow="lg">
                  <CardBody className="p-8">
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="text-brand mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">18+ años en tecnología</strong>
                          <p className="text-gray-600">Desarrollo, liderazgo y transformación digital</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">LATAM y Estados Unidos</strong>
                          <p className="text-gray-600">Experiencia internacional en diversos mercados</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">+200 talentos guiados</strong>
                          <p className="text-gray-600">Mentoring, coaching y desarrollo profesional</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand mr-3 text-2xl">✓</span>
                        <div>
                          <strong className="text-xl">Transformación de equipos</strong>
                          <p className="text-gray-600">De equipos buenos a equipos extraordinarios</p>
                        </div>
                      </li>
                    </ul>
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
            className="text-4xl md:text-5xl font-bold text-customgray mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Misión, Visión y Valores
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
                  <h3 className="text-3xl font-bold text-customgray mb-6">Misión</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Acompañar a profesionales tech en su <strong className="text-primary">autoconocimiento y crecimiento consciente</strong>, 
                    transformando equipos y organizaciones desde el ser hacia el hacer. 
                    Ofrezco sesiones 1-a-1 gratuitas y programas empresariales que integran 
                    liderazgo ágil, coaching ejecutivo y cultura de innovación humana.
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
                  <h3 className="text-3xl font-bold text-customgray mb-6">Visión</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ser el referente latinoamericano en <strong className="text-brand">transformación humana dentro del mundo tech</strong>. 
                    Crear una comunidad de líderes conscientes que lideren con empatía, 
                    construyan productos con propósito y transformen la industria desde 
                    la innovación con alma.
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
                <h3 className="text-3xl font-bold text-customgray mb-8 text-center flex items-center justify-center">
                  <span className="text-5xl mr-4">💎</span>
                  Valores Fundamentales
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: "🤝", title: "Humanidad", desc: "La tecnología al servicio de las personas" },
                    { icon: "✨", title: "Propósito", desc: "Cada acción con sentido y dirección" },
                    { icon: "🌱", title: "Crecimiento", desc: "Evolución constante y consciente" },
                    { icon: "💪", title: "Excelencia", desc: "Alto rendimiento con alma" }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-5xl mb-3">{value.icon}</div>
                      <h4 className="text-xl font-bold text-customgray mb-2">{value.title}</h4>
                      <p className="text-gray-600">{value.desc}</p>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              ¿Listo para tu propia transformación?
            </h2>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
              Cada viaje comienza con una conversación honesta.
            </p>
            <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
              Agenda una sesión gratuita y empecemos a construir tu camino con propósito, 
              claridad y autenticidad.
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
                Ver servicios para empresas
              </Button>
            </div>
            <p className="mt-10 text-white/70 italic text-lg max-w-2xl mx-auto">
              "Si logro que una sola persona descubra su propósito, todo habrá valido la pena."
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
