import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

export function CoachingSection() {
  return (
    <section
      id="cccausa"
      aria-label="Coaching con Causa"
      className="scroll-mt-0 bg-primary"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-40">
          {/* Columna izquierda: imagen de referencia */}
            <div className="relative w-full mx-auto">
              <Image
                src="/images/image6.png"
                alt="Retrato de Hugo Casanova, mentor y coach tech"
                width={538}
                height={660}
                priority
                className="block object-cover"
                style={{ width: "100%", height: "auto" }}
              />
              <Image
                src="/images/image8.png"
                alt="Liderazgo en tecnología"
                width={300}
                height={171}
                className="hidden sm:block absolute -right-10 lg:-right-30 bottom-5 md:bottom-30"
              />
              <Image
                src="/images/image7.png"
                alt="Desarrolla tu talento"
                width={300}
                height={171}
                className="hidden sm:block absolute left-0 top-0 md:-left-5 md:-top-0"
              />
            </div>

          {/* Columna derecha: contenido SEO semántico */}
          <div>
            <h2 itemProp="headline" className="text-3xl md:text-4xl font-bold text-white">
              Crecimiento con Propósito 🌍✨
            </h2>
            <p className="mt-2 text-white/90">
              Tu desarrollo profesional también genera impacto.
            </p>

            <div className="mt-6">
              <p itemProp="description" className="text-white/90">
                En HugoTech, cada sesión individual tiene un impacto que va más allá de ti.
                Mientras fortaleces tu mentalidad, claridad y crecimiento profesional,
                también contribuyes a abrir puertas para otros.
              </p>

              <p className="mt-4 text-white font-semibold">
                El 100 % de los ingresos de las mentorías 1 a 1 se destinan a apoyar iniciativas que:
              </p>

              <ul className="mt-4 space-y-8 list-disc pl-6 text-white/90">
                <li>
                  Impulsan la educación tecnológica y el desarrollo de jóvenes talentos en Latinoamérica.
                </li>
                <li>
                  Promueven la inclusión digital y el acceso equitativo al conocimiento.
                </li>
              </ul>
              <p className="text-white/90 mx-8">
                Fomentan la adopción responsable y el bienestar animal, porque la empatía también transforma.
              </p>
              <div className="mt-6 text-white/90 text-base">
                <p className="font-bold">¿Conoces alguna ONG o proyecto tech que esté transformando vidas?</p>
                <p className="mt-1">Compártelo aquí y sumemos más causas a este movimiento.</p>
              </div>

              <form className="mt-6 flex flex-col sm:flex-row gap-20" aria-label="Comparte una ONG o proyecto">
                <Input
                  name="url"
                  aria-label="Sitio Web"
                  placeholder="Sitio Web"
                  type="url"
                  size="lg"
                  variant="flat"
                  className="flex-1"
                />
                <Button type="submit" size="lg" color="primary" variant="solid" className="bg-[#115C5B] text-white hover:bg-[#183F33] w-auto sm:w-[140px]">
                  Enviar
                </Button>
              </form>

              {/* <div className="mt-6">
                <Button
                  as={Link}
                  href="#agenda"
                  color="primary"
                  className="w-full sm:w-auto"
                  aria-label="Agenda tu sesión y súmate al impacto"
                >
                  Agendá tu Sesión y Súmate al Impacto
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}