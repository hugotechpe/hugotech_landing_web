import { MetadataRoute } from "next";

import { client } from "@/lib/sanity.client";

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
  { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/docs", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },

  // Glosario Tech (High Priority SEO - Featured Snippets)
  {
    path: "/glosario/coaching-tech",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/glosario/mentor-tecnico",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/glosario/tech-lead",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/glosario/burnout-tech",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/glosario/sindrome-impostor",
    priority: 0.95,
    changeFrequency: "monthly" as const,
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
  } catch {
    // Error fetching blog posts for sitemap
  }

  return sitemapEntries;
}
