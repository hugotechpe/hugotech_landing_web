"use client";

import React, { useEffect } from "react";
import { useCalendlyScript } from "@/hooks/useCalendlyScript";
import {
  trackCTAClick,
  trackCalendlyEventScheduled,
  trackCalendlyDateSelected,
} from "@/lib/gtm";

// Declaración de tipos para la API de Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
    };
  }
}

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
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoaded, loadCalendlyScript } = useCalendlyScript();

  // Listen to Calendly PostMessage events
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;

      const eventData = e.data;

      if (eventData.event) {
        if (process.env.NODE_ENV === "development") {
          console.log("[Calendly Event - Popup]", eventData.event, eventData);
        }

        switch (eventData.event) {
          case "calendly.date_and_time_selected":
            trackCalendlyDateSelected();
            break;
          case "calendly.event_scheduled":
            trackCalendlyEventScheduled(
              eventData.payload?.event?.uri,
              eventData.payload?.invitee?.uri,
              eventData.payload?.event?.start_time,
            );
            // Cerrar modal después de agendar
            setTimeout(() => setIsOpen(false), 2000);
            break;
        }
      }
    };

    if (isOpen) {
      window.addEventListener("message", handleCalendlyEvent);
    }

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, [isOpen]);

  const handleClick = () => {
    // Cargar script de Calendly si no está cargado
    if (!isLoaded) {
      loadCalendlyScript();
    }
    setIsOpen(true);
    trackCTAClick("calendly_button", text, url);
  };

  // Abrir popup de Calendly cuando el script esté cargado
  useEffect(() => {
    if (isOpen && isLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
        prefill,
        utm,
      });
      setIsOpen(false); // Reset para próximas aperturas
    }
  }, [isOpen, isLoaded, url, prefill, utm]);

  // Determinar clases de Tailwind basadas en props
  const getButtonClasses = () => {
    const baseClasses =
      "font-bold transition-all rounded-lg inline-flex items-center justify-center";

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
    <>
      <button
        onClick={handleClick}
        className={getButtonClasses()}
        type="button"
        aria-label={text}
      >
        {text}
      </button>
    </>
  );
}
