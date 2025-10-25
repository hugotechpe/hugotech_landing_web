"use client";

import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

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
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
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

  useCalendlyEventListener({
    onEventScheduled: () => {
      setIsOpen(false);
      // Opcional: tracking analytics
      console.log("¡Evento agendado exitosamente!");
    },
  });

  const handleClick = () => {
    setIsOpen(true);
  };

  // Determinar clases de Tailwind basadas en props
  const getButtonClasses = () => {
    const baseClasses = "font-bold transition-all rounded-lg";
    
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const colorClasses = {
      primary: variant === "solid" 
        ? "bg-primary text-white hover:bg-primary/90" 
        : "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      default: variant === "solid"
        ? "bg-customgray text-white hover:bg-customgray/90"
        : "border-2 border-customgray text-customgray hover:bg-customgray hover:text-white",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return `${baseClasses} ${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary} ${widthClass} ${className}`;
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={getButtonClasses()}
        type="button"
      >
        {text}
      </button>

      {/* Modal/Popup con Calendly */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Calendly Inline Widget */}
            <InlineWidget
              url={url}
              prefill={prefill}
              utm={utm}
              styles={{
                height: '100%',
                width: '100%',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
