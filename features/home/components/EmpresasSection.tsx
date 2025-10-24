import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

export function EmpresasSection() {
  return (
    <section
      id="empresas"
      aria-label="Empresas"
      className="scroll-mt-0 bg-[#FBF7EC]"
    >
      <div className="container mx-auto max-w-screen-2xl px-6 py-10 md:py-20">
        {/* Encabezado principal de la sección, tomado de nota.txt */}
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-customgray">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-4 text-black text-sm">
            Te acompaño a crecer con propósito —ya seas un joven talento que busca claridad en su camino tech,
            o una empresa que quiere potenciar la mentalidad, comunicación y liderazgo de su equipo.
          </p>
          <p className="mt-2 text-black text-sm">
            A través de <span className="font-semibold">mentoring, coaching y agilidad</span>, te ayudo a transformar tu potencial en acción,
            tu talento en confianza y tu crecimiento en impacto real.
          </p>
        </header>

        {/* Contenedor de dos columnas con los servicios: Mentoring 1 a 1 y Servicio Business */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna izquierda: Mentoría 1 a 1 */}
            <Card as="article" shadow="none" className="bg-[#FFE8DB] p-5 pb-0 pr-0 relative">
              <CardBody className="flex flex-col gap-3 text-customgray">
                <h3 className="text-3xl font-bold">Mentoría 1 a 1</h3>
                <p className="text-base md:text-lg font-semibold my-8">
                  Potencia tu mentalidad tech y tu crecimiento profesional
                </p>
                <p className="text-sm mr-5">
                  Un espacio diseñado para acompañarte a desarrollar <span className="font-bold">claridad, dirección y propósito</span> en tu camino tecnológico.
                </p>
                <p className="text-sm mr-5">
                  Combinamos <span className="font-bold">coaching profesional, mentoring y agilidad</span> para alinear tus habilidades técnicas con tus habilidades humanas,
                  y así avanzar con confianza y sentido.
                </p>
                <h4 className="mt-2 text-sm md:text-base font-semibold w-[85%]">Resultados que lograrás:</h4>
                <ul className="list-disc pl-10 space-y-2 text-customgray text-sm w-[70%]">
                  <li>Claridad sobre tu propósito, fortalezas y próximos pasos profesionales.</li>
                  <li>Mentalidad de crecimiento, autoliderazgo y enfoque continuo.</li>
                  <li>Estrategia personalizada según tu rol (backend, frontend, QA, PO, SM, líder técnico etc.).</li>
                  <li>Feedback individual para mejorar comunicación, productividad y marca profesional.</li>
                </ul>
                <div className="h-full flex flex-col justify-between w-[70%] mt-6">
                  <Button as={Link} href="#cita" size="md" color="primary" variant="solid" className="bg-customgray w-fit">
                    Agenda tu Sesión de Coaching
                  </Button>
                  <p className="mt-4 text-customgray text-sm">
                    Crecimiento no es solo avanzar, es hacerlo con propósito, enfoque y mentalidad expansiva.
                  </p>
                </div>

                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/images/image3.png"
                    alt="Mentoría personalizada para potenciar tu mentalidad tech y tu crecimiento"
                    width={220}
                    className="rounded-lg shadow-sm hidden md:block"
                  />
                </div>
              </CardBody>
            </Card>

            {/* Columna derecha: Servicio Business */}
            <Card as="article" shadow="none" className="bg-[#E0F1DF] p-5 pb-0 pr-0 relative">
              <CardBody className="flex flex-col gap-3 text-customgray">
                <h3 className="text-3xl font-bold">Servicio Business</h3>
                <p className="text-base md:text-lg font-semibold my-4">
                  Equipos tech de alto rendimiento y cultura data-driven
                </p>
                <p className="text-customgray text-sm mr-5">
                  Acompañamiento <span className="font-bold">técnico, cultural y estratégico</span> para equipos que buscan mejorar su colaboración,
                  entregar software de calidad y alinearse con una cultura ágil, humana y basada en datos.
                </p>
                <p className="text-customgray text-sm mr-5">
                  Integro enfoques de <span className="font-bold">Management 3.0, Agile Team Facilitation, Lean, Coaching Profesional y Data Thinking</span>
                  {" "}para desarrollar equipos autónomos, conectados y orientados a resultados reales.
                </p>

                <h4 className="mt-2 text-sm md:text-base font-semibold">Beneficios reales para tu empresa y tu equipo:</h4>
                <ul className="list-disc pl-10 space-y-2 text-customgray text-sm w-[80%]">
                  <li>Construcción de equipos de alto rendimiento con propósito y autonomía.</li>
                  <li>Reducción de deuda técnica y mejora de la calidad de entregables.</li>
                  <li>Optimización de sprints y alineamiento entre producto, QA y liderazgo.</li>
                  <li>Cultura data-driven: decisiones basadas en métricas y aprendizaje continuo.</li>
                  <li>Talleres de cultura, agilidad y liderazgo consciente.</li>
                  <li>Roadmap y dashboard de evolución técnica y humana.</li>
                </ul>
                <div className="h-full flex flex-col justify-between w-[60%] mt-2">
                  <Button
                    as={Link}
                    href="https://hugotech.pe/empresas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant="solid"
                    size="md"
                    className="bg-customgray w-fit"
                  >
                    Conocer más sobre el Programa Business
                  </Button>
                  <p className="mt-4 text-customgray text-sm">
                    Equipos que confían, deciden con datos y entregan con propósito.
                  </p>
                </div>

                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/images/image4.png"
                    alt="Equipo tech colaborando, representando cultura data-driven y alto rendimiento"
                    width={220}
                    className="rounded-lg shadow-sm hidden md:block"
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}