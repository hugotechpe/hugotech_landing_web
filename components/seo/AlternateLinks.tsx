"use client";

import { usePathname } from "next/navigation";

interface AlternateLinksProps {
  locale: string;
}

/**
 * Componente para agregar hreflang tags dinámicos
 * Mejora SEO multiidioma indicando a Google las versiones alternativas de cada página
 */
export function AlternateLinks({ locale }: AlternateLinksProps) {
  const pathname = usePathname();
  
  // Remover el prefijo de locale de la ruta
  const pathnameWithoutLocale = pathname.replace(/^\/(es|en)/, "") || "/";
  
  const baseUrl = "https://hugotech.pe";
  const alternateLocales = ["es", "en"];

  return (
    <>
      {alternateLocales.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${baseUrl}/${lang}${pathnameWithoutLocale}`}
        />
      ))}
      {/* x-default para cuando el idioma del usuario no coincide */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/es${pathnameWithoutLocale}`}
      />
    </>
  );
}
