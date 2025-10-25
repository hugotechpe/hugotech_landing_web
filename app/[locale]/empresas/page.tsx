import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios para Empresas Tech | HugoTech",
  description: "Transforma tu equipo tech con programas de liderazgo ágil, coaching ejecutivo y cultura consciente. Retención de talento y equipos de alto rendimiento.",
};

export default function EmpresasPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#0d4746] text-white py-20 md:py-32">
        <div className="container mx-auto max-w-1400 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Equipos de Alto Rendimiento con Cultura Consciente
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              El talento tech busca <strong>impacto, propósito y liderazgo humano</strong>. 
              Transformo tu equipo en una fuerza imparable, innovadora y, sobre todo, humana.
            </p>
            <Button
              as={Link}
              href="#contacto-empresas"
              size="lg"
              className="bg-white text-primary font-bold hover:scale-105 transition-transform"
            >
              Agenda una consultoría gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-16 md:py-24 bg-[#FBF7EC]">
        <div className="container mx-auto max-w-1400 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-customgray mb-8 text-center">
              El Verdadero Problema del Talento Tech en 2025
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card shadow="none" className="bg-white p-6">
                <CardBody>
                  <h3 className="text-xl font-bold text-red-600 mb-3">❌ Lo que NO funciona</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ping-pong y salarios altos sin propósito</li>
                    <li>• Líderes técnicos sin habilidades humanas</li>
                    <li>• Burnout disfrazado de "cultura startup"</li>
                    <li>• Rotación constante de talento Gen Z</li>
                  </ul>
                </CardBody>
              </Card>

              <Card shadow="none" className="bg-primary/5 p-6 border-2 border-primary">
                <CardBody>
                  <h3 className="text-xl font-bold text-primary mb-3">✅ Lo que tu equipo necesita</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Liderazgo consciente que inspire</li>
                    <li>• Seguridad psicológica para innovar</li>
                    <li>• Cultura de feedback y crecimiento</li>
                    <li>• Equipos felices y comprometidos</li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-1400 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-customgray mb-12 text-center">
            Cómo Transformamos tu Equipo Tech
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <Card shadow="sm" className="p-6 hover:shadow-xl transition-shadow">
              <CardBody>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-customgray mb-4">
                  Workshops de Liderazgo Ágil
                </h3>
                <p className="text-gray-700 mb-4">
                  Capacitación intensiva para líderes tech. Aprenden a liderar con empatía, 
                  dar feedback efectivo y construir equipos de alto rendimiento.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Duración: 2-3 días intensivos</li>
                  <li>✓ Máximo 15 participantes</li>
                  <li>✓ Incluye seguimiento 1 mes</li>
                </ul>
              </CardBody>
            </Card>

            {/* Servicio 2 */}
            <Card shadow="sm" className="p-6 hover:shadow-xl transition-shadow border-2 border-primary">
              <CardBody>
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-customgray mb-4">
                  Coaching Ejecutivo 1-a-1
                </h3>
                <p className="text-gray-700 mb-4">
                  Acompañamiento personalizado para CTOs, Tech Leads y Engineering Managers. 
                  Resolución de conflictos, toma de decisiones estratégicas y liderazgo consciente.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Sesiones semanales/quincenales</li>
                  <li>✓ 100% confidencial</li>
                  <li>✓ Planes de 3, 6 o 12 meses</li>
                </ul>
              </CardBody>
            </Card>

            {/* Servicio 3 */}
            <Card shadow="sm" className="p-6 hover:shadow-xl transition-shadow">
              <CardBody>
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-customgray mb-4">
                  Programas de Cultura Tech
                </h3>
                <p className="text-gray-700 mb-4">
                  Diagnóstico y transformación cultural completa. Implementamos prácticas 
                  de innovación ágil, seguridad psicológica y retención de talento.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Duración: 3-6 meses</li>
                  <li>✓ Diagnóstico inicial gratuito</li>
                  <li>✓ Métricas de impacto medibles</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios Medibles */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0FAF9]">
        <div className="container mx-auto max-w-1400 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-customgray mb-12 text-center">
            Resultados que Impactan tu Bottom Line
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">↓ 40%</div>
              <p className="text-gray-700 font-semibold">Reducción de rotación de talento</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">↑ 60%</div>
              <p className="text-gray-700 font-semibold">Mejora en satisfacción del equipo</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">↑ 35%</div>
              <p className="text-gray-700 font-semibold">Incremento en productividad</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Equipos más innovadores</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto-empresas" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto max-w-1400 px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para Transformar tu Equipo Tech?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una consultoría de 30 minutos sin costo. Analizamos tu situación 
            y diseñamos un plan personalizado para tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="https://wa.me/51987654321?text=Hola%20Hugo,%20quiero%20agendar%20una%20consultoría%20empresarial"
              size="lg"
              className="bg-white text-primary font-bold hover:scale-105 transition-transform"
              isExternal
            >
              Agendar consultoría gratuita
            </Button>
            <Button
              as={Link}
              href="mailto:hola@hugotech.pe"
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white hover:text-primary transition-all"
            >
              Enviar email
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}