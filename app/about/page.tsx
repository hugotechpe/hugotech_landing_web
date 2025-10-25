"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

// Metadata se exporta desde un archivo separado para client components
// Ver: app/about/metadata.ts

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-[#115C5B] text-white py-20">
        <div className="container mx-auto max-w-1400 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mi Historia 🌱
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Cómo un ingeniero peruano descubrió que su verdadero propósito 
              no estaba en el código, sino en las personas que lo crean.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          
          {/* El Inicio */}
          <div className="mb-16">
            <Chip color="primary" variant="flat" className="mb-4">
              El Inicio
            </Chip>
            <h2 className="text-3xl font-bold text-customgray mb-6">
              Raíces en Perú, sueños sin fronteras
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Nací en Perú y crecí con la curiosidad de entender cómo funcionan las cosas. 
                Estudié <strong>Ingeniería de Sistemas</strong> porque creía que la tecnología 
                podía cambiar el mundo.
              </p>
              <p>
                Durante mis primeros años como desarrollador, trabajé en proyectos desafiantes, 
                aprendí lenguajes, frameworks, arquitecturas... pero algo faltaba.
              </p>
              <p>
                Veía equipos talentosos bloqueados no por falta de habilidad técnica, 
                sino por <strong>falta de claridad, confianza y propósito</strong>.
              </p>
            </div>
          </div>

          {/* El Despertar */}
          <div className="mb-16">
            <Chip color="primary" variant="flat" className="mb-4">
              El Despertar
            </Chip>
            <h2 className="text-3xl font-bold text-customgray mb-6">
              El mejor código no sirve si quien lo escribe está perdido
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                En mi carrera como líder técnico, me di cuenta de algo que cambió todo: 
                <strong> los problemas más grandes no eran técnicos, eran humanos</strong>.
              </p>
              <p>
                Developers brillantes que no sabían comunicar sus ideas. Product Owners 
                sin visión clara. Equipos con talento individual pero sin cohesión.
              </p>
              <p>
                Ahí empezó mi verdadero camino: estudiar coaching profesional, liderazgo, 
                agilidad, comunicación... todo lo que la universidad nunca enseña pero 
                que determina el éxito real.
              </p>
            </div>

            <Card className="mt-8 bg-primary/5 border-l-4 border-primary" shadow="none">
              <CardBody className="p-6">
                <p className="text-lg italic text-gray-700">
                  "Me certifiqué como <strong>Coach Profesional ICF</strong>, me formé 
                  en <strong>Management 3.0, Agile Team Facilitation, Scrum, Lean</strong>... 
                  no para agregar títulos a mi perfil, sino para tener herramientas 
                  reales que ayuden a las personas a crecer."
                </p>
              </CardBody>
            </Card>
          </div>

          {/* La Transformación */}
          <div className="mb-16">
            <Chip color="primary" variant="flat" className="mb-4">
              La Transformación
            </Chip>
            <h2 className="text-3xl font-bold text-customgray mb-6">
              De construir software a construir personas
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Durante <strong>18+ años</strong> he trabajado con equipos en LATAM y EE. UU., 
                liderando transformaciones digitales, construyendo productos desde cero y 
                optimizando procesos ágiles.
              </p>
              <p>
                Pero lo que más me llenó fueron las conversaciones de mentoring. 
                Ver a un junior descubrir su potencial. A un líder encontrar su voz. 
                A un equipo construir confianza real.
              </p>
              <p>
                Cada vez que alguien me decía <em>"esta conversación cambió mi perspectiva"</em>, 
                sentía que estaba en el camino correcto.
              </p>
            </div>
          </div>

          {/* El Propósito */}
          <div className="mb-16">
            <Chip color="primary" variant="flat" className="mb-4">
              El Propósito
            </Chip>
            <h2 className="text-3xl font-bold text-customgray mb-6">
              HugoTech: devolver lo que la vida me dio
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                HugoTech nació de una pregunta: <strong>¿Cómo puedo ayudar a más personas 
                sin que el dinero sea una barrera?</strong>
              </p>
              <p>
                Decidí que las sesiones 1 a 1 serían <strong>gratuitas</strong>. 
                No por marketing, sino por responsabilidad. Si hoy puedo guiar a alguien, 
                es porque otros lo hicieron conmigo cuando más lo necesitaba.
              </p>
              <p>
                Este espacio es mi forma de honrar ese camino. De sembrar semillas 
                que quizás algún día se conviertan en árboles que den sombra a otros.
              </p>
            </div>

            <Card className="mt-8 bg-gradient-to-r from-primary/10 to-[#115C5B]/10" shadow="sm">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-customgray mb-4">
                  Mi filosofía de vida
                </h3>
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "Transformar desde el ser, construir desde el propósito y liderar con el alma."
                </blockquote>
                <p className="text-gray-600">
                  Creo que primero se transforma el <strong>ser</strong>, luego el <strong>hacer</strong> cobra 
                  sentido, y finalmente el <strong>tener</strong> llega como consecuencia natural.
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Mi Deseo */}
          <div className="mb-16">
            <Chip color="primary" variant="flat" className="mb-4">
              Mi Deseo
            </Chip>
            <h2 className="text-3xl font-bold text-customgray mb-6">
              Que HugoTech sea una semilla
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Deseo que este espacio inspire a otros a <strong>creer en sí mismos</strong>, 
                a encontrar su camino y a recordar que el verdadero cambio empieza dentro.
              </p>
              <p>
                Quiero que cada joven o profesional que pase por una sesión sienta que 
                <strong> no está solo</strong>, que su historia importa y que puede construir 
                un futuro con alma.
              </p>
              <p>
                Si logro que una sola persona descubra su propósito, todo habrá valido la pena.
              </p>
            </div>
          </div>

          {/* CTA Final */}
          <Card className="bg-primary text-white" shadow="lg">
            <CardBody className="p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para tu propia transformación?
              </h3>
              <p className="text-lg mb-8 text-white/90">
                Agenda una sesión gratuita y empecemos a construir tu camino con propósito.
              </p>
              <Button 
                as={Link}
                href="/#cita"
                size="lg"
                className="bg-white text-primary font-bold hover:bg-gray-100"
              >
                Agenda tu sesión ahora
              </Button>
            </CardBody>
          </Card>

        </div>
      </section>

      {/* Certificaciones y Experiencia */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-customgray mb-8 text-center">
            Formación y Experiencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardBody className="p-6">
                <h3 className="font-bold text-xl text-primary mb-3">🎓 Coaching</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Coach Profesional ICF</li>
                  <li>• Coaching para el Liderazgo</li>
                  <li>• Mentoring Tecnológico</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="font-bold text-xl text-primary mb-3">⚡ Agilidad</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Management 3.0 Facilitator</li>
                  <li>• Agile Team Facilitation</li>
                  <li>• Scrum Master & Product Owner</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="font-bold text-xl text-primary mb-3">💻 Tecnología</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ingeniería de Sistemas</li>
                  <li>• Arquitectura de Software</li>
                  <li>• Liderazgo Técnico</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="font-bold text-xl text-primary mb-3">🌎 Experiencia</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 18+ años en tecnología</li>
                  <li>• LATAM y Estados Unidos</li>
                  <li>• +200 talentos guiados</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
