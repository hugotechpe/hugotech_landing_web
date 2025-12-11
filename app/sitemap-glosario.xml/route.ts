import { MetadataRoute } from "next";

const baseUrl = "https://hugotech.pe";
const locales = ["es", "en"] as const;

// Artículos del glosario
const glosarioArticles = [
  "coaching-tech",
  "mentor-tecnico",
  "tech-lead",
  "burnout-tech",
  "sindrome-impostor",
  "soft-skills-developers",
  "management-3-0",
  "liderazgo-introvertidos",
  "feedback-tecnico",
  "one-on-ones",
] as const;

export async function GET() {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  // Agregar página índice del glosario
  locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}/glosario`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/es/glosario`,
          en: `${baseUrl}/en/glosario`,
        },
      },
    });
  });

  // Agregar cada artículo del glosario
  glosarioArticles.forEach((article) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/glosario/${article}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.95,
        alternates: {
          languages: {
            es: `${baseUrl}/es/glosario/${article}`,
            en: `${baseUrl}/en/glosario/${article}`,
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
    (entry) => {
      const lastMod = entry.lastModified instanceof Date 
        ? entry.lastModified.toISOString() 
        : entry.lastModified;
      return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${lastMod}</lastmod>
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
  </url>`;
    },
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
