import { MetadataRoute } from "next";

const baseUrl = "https://hugotech.pe";
const locales = ["es", "en"] as const;

// Rutas estáticas del sitio (sin el prefijo de locale)
const routes = [
  // Páginas principales
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/empresas", priority: 0.9, changeFrequency: "monthly" as const },

  // Servicios de coaching
  { path: "/coaching", priority: 0.9, changeFrequency: "monthly" as const },
  {
    path: "/mentor-coaching",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/coaching-con-causa",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },

  // Landing Pages Específicas (High Priority SEO)
  {
    path: "/mentoring-burnout",
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/primer-empleo-tech",
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/liderazgo-introvertidos",
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },

  // Contenido y recursos
  { path: "/testimonials", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/docs", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },

  // Método Hugotech (Highest Priority SEO - Manifesto)
  {
    path: "/metodo-hugotech",
    priority: 1.0,
    changeFrequency: "weekly" as const,
  },

  // Páginas legales
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

export async function GET() {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  // Generar entradas para rutas estáticas en cada idioma
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

  // Generar XML del sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified?.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
    ${
      entry.alternates?.languages
        ? Object.entries(entry.alternates.languages)
            .map(
              ([lang, url]) =>
                `<xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`,
            )
            .join("\n    ")
        : ""
    }
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
