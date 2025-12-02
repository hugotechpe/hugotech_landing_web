"use client";

import * as React from "react";
import { Card, CardBody } from "@heroui/card";
import clsx from "clsx";
import { motion } from "framer-motion";

import { IconSvgProps } from "@/types";

export type IconComponent = React.FC<IconSvgProps>;

export interface IconBoxCardProps {
  title: string;
  description: string;
  Icon?: IconComponent;
  iconAriaLabel?: string; // si se provee, el icono será role="img"; de lo contrario será decorativo
  headingAs?: keyof JSX.IntrinsicElements; // h3 por defecto
  className?: string;
  classNameCardBody?: string;
}

// Componente reutilizable tipo "Icon Box" con el mejor SEO básico:
// - Contenedor semántico <article>
// - Título como heading (h3 por defecto) para estructura clara
// - Icono accesible: aria-hidden cuando es decorativo, o role="img" cuando se provee iconAriaLabel
// - Usa HeroUI Card para consistencia visual, pero sin sombra para que sea ligero
export const IconBoxCard: React.FC<IconBoxCardProps> = ({
  title,
  description,
  Icon,
  iconAriaLabel,
  headingAs = "h3",
  className,
  classNameCardBody,
}) => {
  const HeadingTag = headingAs;
  const titleId = React.useId();

  return (
    <article aria-labelledby={titleId} className={clsx("", className)}>
      <Card className="bg-transparent" shadow="none">
        <CardBody>
          <div className={clsx("flex items-start gap-4", classNameCardBody)}>
            <motion.div
              aria-hidden={iconAriaLabel ? undefined : true}
              aria-label={iconAriaLabel}
              className="flex h-18 w-18 items-center justify-center rounded-full bg-[#E0F1DF] text-primary shrink-0"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
              }}
            >
              {Icon ? <Icon aria-label={iconAriaLabel} size={35} /> : null}
            </motion.div>
            <div>
              <HeadingTag
                className="text-lg font-semibold text-customgray"
                id={titleId}
              >
                {title}
              </HeadingTag>
              <p className="mt-4 text-customgray text-base">{description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </article>
  );
};

export default IconBoxCard;
