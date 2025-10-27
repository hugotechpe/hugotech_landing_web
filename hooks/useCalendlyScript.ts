"use client";

import { useEffect, useState } from "react";

/**
 * Hook para cargar dinámicamente el script de Calendly solo cuando se necesita
 * Esto reduce third-party scripts en la carga inicial de la página
 */
export function useCalendlyScript() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadCalendlyScript = () => {
    // Si ya está cargado o cargando, no hacer nada
    if (isLoaded || isLoading) return;

    // Verificar si el script ya existe
    if (document.querySelector('script[src*="calendly"]')) {
      setIsLoaded(true);
      return;
    }

    setIsLoading(true);

    // Crear y agregar el script de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };
    script.onerror = () => {
      setIsLoading(false);
      console.error("Failed to load Calendly script");
    };

    document.body.appendChild(script);

    // Agregar también el CSS de Calendly
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };

  return { isLoaded, isLoading, loadCalendlyScript };
}
