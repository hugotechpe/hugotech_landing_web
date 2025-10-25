import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"] as string[],
  defaultLocale: "es",
  localePrefix: "always", // URLs siempre con /es /en
  // Mapea rutas por idioma (opcional, útil para SEO):
  pathnames: {
    "/": "/",
    "/testimonials": { es: "/testimonios", en: "/testimonials" },
    "/terms": { es: "/terms", en: "/terms" },
    "/privacy": { es: "/privacy", en: "/privacy" },
  },
});

export type AppLocale = (typeof routing.locales)[number];
