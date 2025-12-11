import { MetadataRoute } from "next";

const baseUrl = "https://hugotech.pe";

export default function sitemapIndex(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/sitemap-pages.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-glosario.xml`,
      lastModified: new Date(),
    },
  ];
}
