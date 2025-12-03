"use client";

import React from "react";

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  prefill?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
  };
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    utmTerm?: string;
  };
  className?: string;
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function CalendlyButton({
  url = "https://calendly.com/hugotech/mentoria1a1",
  text = "Agendar sesión gratuita",
  prefill,
  utm,
  className = "",
  variant = "solid",
  color = "primary",
  size = "lg",
  fullWidth = false,
}: CalendlyButtonProps) {
  const handleClick = () => {
    // Construir URL con parámetros
    let calendlyUrl = url;
    const params = new URLSearchParams();

    // Agregar prefill si existe
    if (prefill?.email) params.append("email", prefill.email);
    if (prefill?.firstName) params.append("first_name", prefill.firstName);
    if (prefill?.lastName) params.append("last_name", prefill.lastName);
    if (prefill?.name) params.append("name", prefill.name);

    // Agregar UTM si existe
    if (utm?.utmCampaign) params.append("utm_campaign", utm.utmCampaign);
    if (utm?.utmSource) params.append("utm_source", utm.utmSource);
    if (utm?.utmMedium) params.append("utm_medium", utm.utmMedium);
    if (utm?.utmContent) params.append("utm_content", utm.utmContent);
    if (utm?.utmTerm) params.append("utm_term", utm.utmTerm);

    const queryString = params.toString();

    if (queryString) {
      calendlyUrl += (calendlyUrl.includes("?") ? "&" : "?") + queryString;
    }

    // Abrir en nueva pestaña
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  // Determinar clases de Tailwind basadas en props
  const getButtonClasses = () => {
    const baseClasses =
      "font-bold transition-all rounded-lg inline-flex items-center justify-center cursor-pointer";

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantColorClasses = {
      solid: {
        primary: "bg-primary text-white hover:bg-primary/90",
        default: "bg-white text-primary hover:bg-gray-100",
      },
      bordered: {
        primary:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
        default:
          "border-2 border-customgray text-customgray hover:bg-customgray hover:text-white bg-transparent",
      },
    };

    const widthClass = fullWidth ? "w-full" : "";

    const colorKey = color === "primary" ? "primary" : "default";
    const variantKey = variant === "solid" ? "solid" : "bordered";
    const colorClass = variantColorClasses[variantKey][colorKey];

    return `${baseClasses} ${sizeClasses[size]} ${colorClass} ${widthClass} ${className}`;
  };

  return (
    <button
      aria-label={text}
      className={getButtonClasses()}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
