"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import LinkedInSquareIcon from "@/common/icons/social/LinkedInSquareIcon";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -8,
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <Card 
        shadow="none" 
        className={clsx(
          "bg-white rounded-2xl p-3 border border-default-200",
          "hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default",
          className
        )}
      >
        <CardBody>
          <figure aria-label={`Testimonio de ${authorName}`} itemScope itemType="https://schema.org/Review">
            <blockquote itemProp="reviewBody" className="text-customgray text-[15px] md:text-base leading-[1.9] tracking-wide">
              {quote}
            </blockquote>
            <hr className="my-6 border-default-200" />
            <figcaption className="mt-6 flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src={avatarSrc}
                  alt={avatarAlt}
                  width={64}
                  height={64}
                  className="rounded-full object-cover w-16 h-16 ring-2 ring-transparent hover:ring-primary/20 transition-all duration-300"
                />
              </motion.div>
              <div>
                <p className="font-semibold font-heading text-customgray text-base md:text-lg">
                  {authorName}{authorAge ? ` – ${authorAge}` : ""}
                </p>
                <p className="text-default-500 text-sm leading-relaxed">{role}</p>
                {linkedInUrl ? (
                  <Link 
                    isExternal 
                    href={linkedInUrl} 
                    title={`Perfil de ${authorName} en LinkedIn`} 
                    className="text-customgray text-bold text-sm hover:text-primary transition-colors"
                  >
                    <LinkedInSquareIcon className="h-4 w-4 mr-1 text-[#0e76a8]" /> Conéctate conmigo en LinkedIn
                  </Link>
                ) : null}
              </div>
            </figcaption>
          </figure>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default TestimonioCard;