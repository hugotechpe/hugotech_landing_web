"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { motion } from "framer-motion";

import LinkedInSquareIcon from "@/common/icons/social/LinkedInSquareIcon";

export interface TestimonioCardProps {
  quote: string;
  authorName: string;
  authorAge?: number | string;
  jobTitle: string;
  linkedInUrl?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  className?: string;
  tags?: string[]; // Nuevo: tags de impacto
  highlight?: string; // Nuevo: frase clave para destacar
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
  jobTitle,
  linkedInUrl,
  avatarSrc = "/images/image5.png",
  avatarAlt = authorName,
  className,
  tags,
  highlight,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Detectar si el testimonio es largo (más de 280 caracteres)
  const isLongQuote = quote.length > 280;
  const truncatedQuote =
    isLongQuote && !isExpanded ? quote.substring(0, 280) + "..." : quote;

  // Función para resaltar la frase clave si existe
  const renderQuoteWithHighlight = (text: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong
          key={i}
          className="text-primary font-semibold bg-brand/10 px-1 rounded"
        >
          {part}
        </strong>
      ) : (
        part
      ),
    );
  };

  return (
    <motion.div
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
        y: -8,
      }}
    >
      <Card
        className={clsx(
          "bg-white rounded-2xl p-4 border-2 border-default-200",
          "hover:border-primary/40 hover:shadow-2xl transition-all duration-300 cursor-default",
          "backdrop-blur-sm bg-white/90",
          className,
        )}
        shadow="none"
      >
        <CardBody className="gap-4">
          {/* Tags de impacto */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  className="text-xs font-medium"
                  color="primary"
                  size="sm"
                  variant="flat"
                >
                  {tag}
                </Chip>
              ))}
            </div>
          )}

          <figure
            itemScope
            aria-label={`Testimonio de ${authorName}`}
            itemType="https://schema.org/Review"
          >
            {/* Schema.org microdata for Google Rich Results */}
            <span
              itemScope
              itemProp="author"
              itemType="https://schema.org/Person"
              style={{ display: "none" }}
            >
              <span itemProp="name">{authorName}</span>
            </span>
            <span
              itemScope
              itemProp="itemReviewed"
              itemType="https://schema.org/Organization"
              style={{ display: "none" }}
            >
              <span itemProp="name">HugoTech</span>
            </span>
            <span
              itemScope
              itemProp="reviewRating"
              itemType="https://schema.org/Rating"
              style={{ display: "none" }}
            >
              <span itemProp="ratingValue">5</span>
              <span itemProp="bestRating">5</span>
            </span>

            <blockquote
              className="text-customgray/90 text-base md:text-lg leading-[1.8] font-body"
              itemProp="reviewBody"
            >
              <span className="text-3xl text-primary/20 font-heading leading-none mr-1">
                &ldquo;
              </span>
              {renderQuoteWithHighlight(truncatedQuote)}
              <span className="text-3xl text-primary/20 font-heading leading-none ml-1">
                &rdquo;
              </span>
            </blockquote>

            {/* Botón expandir/colapsar para testimonios largos */}
            {isLongQuote && (
              <Button
                className="mt-3 text-sm font-medium"
                color="primary"
                size="sm"
                variant="light"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Ver menos ↑" : "Leer historia completa ↓"}
              </Button>
            )}

            <hr className="my-6 border-default-200" />

            <figcaption className="mt-4 flex items-center gap-4">
              <motion.div
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Image
                  alt={avatarAlt}
                  className="rounded-full object-cover w-16 h-16 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300 shadow-md"
                  height={64}
                  src={avatarSrc}
                  width={64}
                />
              </motion.div>
              <div className="flex-1">
                <p className="font-semibold font-heading text-customgray text-base md:text-lg leading-tight">
                  {authorName}
                  {authorAge ? ` – ${authorAge}` : ""}
                </p>
                <p className="text-default-500 text-sm leading-relaxed mt-1">
                  {jobTitle}
                </p>
                {linkedInUrl && (
                  <Link
                    isExternal
                    className="text-customgray text-sm hover:text-primary transition-colors inline-flex items-center gap-1 mt-2"
                    href={linkedInUrl}
                    title={`Perfil de ${authorName} en LinkedIn`}
                  >
                    <LinkedInSquareIcon className="h-4 w-4 text-[#0e76a8]" />
                    <span className="font-medium">Ver perfil</span>
                  </Link>
                )}
              </div>
            </figcaption>
          </figure>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default TestimonioCard;
