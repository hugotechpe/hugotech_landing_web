"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import clsx from "clsx";

export interface TestimonioCardProps {
  quote: string;
  authorName: string;
  authorAge?: number | string;
  role: string;
  linkedInUrl?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  className?: string;
}

// Tarjeta reutilizable para testimonios
// Buenas prácticas de SEO y accesibilidad:
// - Semántica con <figure>, <blockquote> (itemProp="reviewBody") y <figcaption>
// - Alt de la imagen descriptivo y tamaño explícito
// - Enlace a LinkedIn con título para contexto
export const TestimonioCard: React.FC<TestimonioCardProps> = ({
  quote,
  authorName,
  authorAge,
  role,
  linkedInUrl,
  avatarSrc = "/images/image5.png",
  avatarAlt = authorName,
  className,
}) => {
  return (
    <Card shadow="none" className={clsx("bg-white rounded-2xl p-3", className)}>
      <CardBody>
        <figure aria-label={`Testimonio de ${authorName}`} itemScope itemType="https://schema.org/Review">
          <blockquote itemProp="reviewBody" className="text-customgray text-sm md:text-base leading-relaxed">
            {quote}
          </blockquote>
          <hr className="my-6 border-default-200" />
          <figcaption className="mt-6 flex items-center gap-4">
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              width={64}
              height={64}
              className="rounded-full object-cover w-16 h-16"
            />
            <div>
              <p className="font-semibold text-customgray">
                {authorName}{authorAge ? ` – ${authorAge}` : ""}
              </p>
              <p className="text-default-500 text-sm">{role}</p>
              {linkedInUrl ? (
                <Link isExternal href={linkedInUrl} title={`Perfil de ${authorName} en LinkedIn`} className="text-primary text-sm">
                  Conéctate conmigo en LinkedIn
                </Link>
              ) : null}
            </div>
          </figcaption>
        </figure>
      </CardBody>
    </Card>
  );
};

export default TestimonioCard;