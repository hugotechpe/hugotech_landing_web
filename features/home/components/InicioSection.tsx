"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";

export function InicioSection() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="scroll-mt-0 bg-primary"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-40">
          {/* Columna izquierda: contenido y CTA */}
          <div>
            <p className="inline-flex items-center rounded-full bg-brand text-gray-900 px-4 py-2 text-sm">
              Propósito
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
              Forma y potencia tu talento o el de tu equipo en el mundo tech
            </h2>

            <div className="mt-6 space-y-4 text-white leading-relaxed text-xl">
              <p>
                Te acompaño a crecer con propósito: ya sea en sesiones
                personalizadas para tu desarrollo profesional o en programas
                para empresas que buscan equipos más conectados, humanos y de
                alto rendimiento.
              </p>
              <p>
                En <strong>HugoTech</strong>, integro
                {" "}
                <strong>mentoring, coaching y agilidad</strong> para que
                desarrolles habilidades humanas que impulsen tus habilidades
                técnicas, fortalezcas tu liderazgo interior y generes impacto
                real desde la confianza y el propósito.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                as={Link}
                href="#mepresento"
                size="lg"
                color="primary"
                variant="solid"
                className="bg-white text-primary hover:bg-[#183F33] hover:text-white"
                onPress={(e) => {

                }}
              >
                Mentoría 1 a 1
              </Button>

              <Button
                as={Link}
                href="#empresas"
                size="lg"
                color="primary"
                variant="solid"
                className="bg-[#115C5B] text-white hover:bg-[#183F33]"
                onPress={(e) => {

                }}
              >
                Soluciones para empresas
              </Button>
            </div>
          </div>

          {/* Columna derecha: imágenes */}
          <div className="relative">
            <div className="relative w-full max-w-md md:max-w-lg mx-auto">
              <Image
                src="/images/image1.png"
                alt="Retrato de Hugo Casanova, mentor y coach tech"
                width={538}
                height={660}
                priority
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src="/images/desarrollatutalento.png"
                alt="Liderazgo en tecnología"
                width={368}
                height={170}
                className="hidden sm:block absolute -right-20 bottom-5 md:right-2 md:-bottom-10"
              />
              <Image
                src="/images/lidertech-1.png"
                alt="Desarrolla tu talento"
                width={368}
                height={170}
                className="hidden sm:block absolute -left-20 top-10 md:-left-25 md:top-25"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}