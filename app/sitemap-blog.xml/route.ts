import { MetadataRoute } from "next";

import { client } from "@/lib/sanity.client";

const baseUrl = "https://hugotech.pe";
const locales = ["es", "en"] as const;

export async function GET() {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Obtener posts dinámicos del blog desde Sanity
  try {
    const posts = await client.fetch<
      Array<{ slug: string; _updatedAt: string }>
    >(
      `*[_type == "post" && defined(slug.current)] | order(_updatedAt desc) {
        "slug": slug.current,
        _updatedAt
      }`,
    );

    // Agregar cada post del blog en ambos idiomas
    posts.forEach((post) => {
      locales.forEach((locale) => {
        sitemapEntries.push({
          url: `${baseUrl}/${locale}/blog/${post.slug}`,
          lastModified: new Date(post._updatedAt),
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: {
            languages: {
              es: `${baseUrl}/es/blog/${post.slug}`,
              en: `${baseUrl}/en/blog/${post.slug}`,
            },
          },
        });
      });
    });

    // Agregar página índice del blog
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es/blog`,
            en: `${baseUrl}/en/blog`,
          },
        },
      });
    });
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    // Si falla, al menos incluir la página índice del blog
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es/blog`,
            en: `${baseUrl}/en/blog`,
          },
        },
      });
    });
  }

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
