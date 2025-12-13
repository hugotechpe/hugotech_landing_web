import { MetadataRoute } from "next";

const baseUrl = "https://hugotech.pe";

// Sitemap completo con todas las páginas estáticas e i18n
export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["es", "en"];
  const staticPages = [
    { path: "/", changeFreq: "daily" as const, priority: 1.0 },
    { path: "/about", changeFreq: "monthly" as const, priority: 0.8 },
    { path: "/testimonials", changeFreq: "weekly" as const, priority: 0.9 },
    { path: "/mentor-coaching", changeFreq: "monthly" as const, priority: 0.9 },
    { path: "/coaching", changeFreq: "monthly" as const, priority: 0.9 },
    { path: "/coaching-con-causa", changeFreq: "monthly" as const, priority: 0.8 },
    { path: "/empresas", changeFreq: "monthly" as const, priority: 0.8 },
    { path: "/pricing", changeFreq: "monthly" as const, priority: 0.7 },
    { path: "/blog", changeFreq: "daily" as const, priority: 0.8 },
    { path: "/faq", changeFreq: "weekly" as const, priority: 0.9 }, // ✨ Nueva página FAQ para SEO
    { path: "/privacy-policy", changeFreq: "yearly" as const, priority: 0.3 },
    { path: "/terminos-y-condiciones", changeFreq: "yearly" as const, priority: 0.3 },
    { path: "/libro-de-reclamaciones", changeFreq: "yearly" as const, priority: 0.3 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generar entradas para cada idioma
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFreq,
        priority: page.priority,
        alternates: {
          languages: {
            es: `${baseUrl}/es${page.path}`,
            en: `${baseUrl}/en${page.path}`,
          },
        },
      });
    });
  });

  // Agregar URL raíz con alternates
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
    alternates: {
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
  });

  return sitemapEntries;
}

