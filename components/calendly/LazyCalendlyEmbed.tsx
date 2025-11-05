"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Spinner } from "@heroui/spinner";

// Dynamic import con loading state
const CalendlyEmbed = dynamic(
  () => import("./CalendlyEmbed").then((mod) => ({ default: mod.CalendlyEmbed })),
  {
    loading: () => (
      <div className="w-full h-[700px] flex items-center justify-center bg-gray-50 rounded-2xl">
        <div className="text-center">
          <Spinner size="lg" color="primary" />
          <p className="mt-4 text-gray-600">Cargando calendario...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);

interface LazyCalendlyEmbedProps {
  url?: string;
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
  height?: string;
}

export function LazyCalendlyEmbed(props: LazyCalendlyEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has scrolled to #agendar anchor
    const hash = window.location.hash;
    if (hash === "#agendar") {
      setShouldLoad(true);
      return;
    }

    // Intersection Observer para cargar cuando esté cerca
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Cargar 200px antes de que sea visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {shouldLoad ? (
        <CalendlyEmbed {...props} />
      ) : (
        <div className="w-full h-[700px] bg-gray-50 rounded-2xl flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>Scroll para cargar el calendario</p>
          </div>
        </div>
      )}
    </div>
  );
}
