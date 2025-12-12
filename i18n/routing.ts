import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"] as string[],
  defaultLocale: "es",
  localePrefix: "always", // Siempre muestra el prefijo de idioma (/es/ y /en/)
  // Mapea rutas por idioma (opcional, útil para SEO):
  pathnames: {
    "/": "/",
    "/testimonials": { es: "/testimonios", en: "/testimonials" },
    "/mentor-coaching": { es: "/mentor-coaching", en: "/mentor-coaching" },
    "/coaching": { es: "/coaching", en: "/coaching" },
    "/coaching-tecnologico": {
      es: "/coaching-tecnologico",
      en: "/tech-coaching",
    },
    "/coaching-con-causa": {
      es: "/coaching-con-causa",
      en: "/coaching-with-purpose",
    },
    "/metodo-hugotech": { es: "/metodo-hugotech", en: "/hugotech-method" },
    "/mentoring-burnout": { es: "/mentoring-burnout", en: "/burnout-mentoring" },
    "/primer-empleo-tech": { es: "/primer-empleo-tech", en: "/first-tech-job" },
    "/liderazgo-introvertidos": { es: "/liderazgo-introvertidos", en: "/introverted-leadership" },
    "/pricing": { es: "/pricing", en: "/pricing" },
    "/faq": { es: "/faq", en: "/faq" },
    "/terms": { es: "/terms", en: "/terms" },
    "/privacy": { es: "/privacy", en: "/privacy" },
  },
});

export type AppLocale = (typeof routing.locales)[number];
