import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"] as string[],
  defaultLocale: "es",
  localePrefix: "as-needed", // Solo muestra /en cuando es inglés, español sin prefijo
  // Mapea rutas por idioma (opcional, útil para SEO):
  pathnames: {
    "/": "/",
    "/testimonials": { es: "/testimonios", en: "/testimonials" },
    "/terms": { es: "/terms", en: "/terms" },
    "/privacy": { es: "/privacy", en: "/privacy" },
  },
});

export type AppLocale = (typeof routing.locales)[number];
