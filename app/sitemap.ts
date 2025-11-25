import { MetadataRoute } from "next";

const baseUrl = "https://hugotech.pe";
const locales = ["es", "en"] as const;

// Rutas estáticas del sitio (sin el prefijo de locale)
const routes = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/empresas", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/testimonials", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/docs", priority: 0.7, changeFrequency: "weekly" as const },
  {
    path: "/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/terminos-y-condiciones",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/libro-de-reclamaciones",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const lastModified = new Date("2024-10-31"); // Fecha de la última actualización del sitio

  // Generar entradas para cada ruta en cada idioma
  routes.forEach((route) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${route.path}`;

      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            es: `${baseUrl}/es${route.path}`,
            en: `${baseUrl}/en${route.path}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
