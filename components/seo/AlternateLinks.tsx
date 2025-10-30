"use client";

import { usePathname } from "next/navigation";

interface AlternateLinksProps {
  locale: string;
}

/**
 * Componente para agregar hreflang tags dinámicos optimizados
 * Mejora SEO multiidioma indicando a Google las versiones alternativas de cada página
 * Incluye códigos de idioma específicos y x-default
 */
export function AlternateLinks({ locale }: AlternateLinksProps) {
  const pathname = usePathname();
  
  // Remover el prefijo de locale de la ruta
  const pathnameWithoutLocale = pathname.replace(/^\/(es|en)/, "") || "";
  
  const baseUrl = "https://hugotech.pe";
  
  // URLs alternativas con códigos específicos e idiomas base
  const alternateUrls = [
    // Español (Perú y general)
    { hreflang: "es-PE", href: `${baseUrl}${pathnameWithoutLocale}` },
    { hreflang: "es", href: `${baseUrl}${pathnameWithoutLocale}` },
    
    // Inglés (Estados Unidos y general)  
    { hreflang: "en-US", href: `${baseUrl}/en${pathnameWithoutLocale}` },
    { hreflang: "en", href: `${baseUrl}/en${pathnameWithoutLocale}` },
    
    // x-default (español como predeterminado)
    { hreflang: "x-default", href: `${baseUrl}${pathnameWithoutLocale}` },
  ];

  return (
    <>
      {alternateUrls.map(({ hreflang, href }) => (
        <link
          key={hreflang}
          rel="alternate"
          hrefLang={hreflang}
          href={href}
        />
      ))}
    </>
  );
}
