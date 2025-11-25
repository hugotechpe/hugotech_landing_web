"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const baseUrl = "https://hugotech.pe";

  // Si no se proporcionan items, generar automáticamente desde el pathname
  const breadcrumbItems: BreadcrumbItem[] =
    items || generateBreadcrumbs(pathname, locale);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

function generateBreadcrumbs(
  pathname: string,
  locale: string,
): BreadcrumbItem[] {
  const paths = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ name: "Inicio", url: `/${locale}` }];

  // Mapa de rutas a nombres legibles
  const pathNames: Record<string, string> = {
    about: "Sobre Mí",
    testimonials: "Testimonios",
    empresas: "Empresas",
    pricing: "Precios",
    blog: "Blog",
    docs: "Documentación",
  };

  let currentPath = "";
  paths.forEach((path, index) => {
    // Skip locale segment
    if (index === 0 && (path === "es" || path === "en")) {
      return;
    }

    currentPath += `/${path}`;
    const name =
      pathNames[path] || path.charAt(0).toUpperCase() + path.slice(1);
    breadcrumbs.push({
      name,
      url: `/${locale}${currentPath}`,
    });
  });

  return breadcrumbs;
}
