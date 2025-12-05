import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "./i18n/routing";

// Middleware personalizado para forzar español como idioma predeterminado
const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: false, // ⚠️ Desactiva detección automática de idioma del navegador
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Excluir rutas de Sanity Studio
  if (pathname.startsWith("/studio")) {
    return NextResponse.next();
  }

  // Si es la raíz sin idioma, redirigir explícitamente a /es
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/es", request.url));
  }

  // Si no tiene prefijo de idioma y no es un archivo estático, redirigir a /es
  const hasLocale = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!hasLocale && !pathname.match(/\.[^\/]+$/)) {
    return NextResponse.redirect(new URL(`/es${pathname}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|sitemap|robots|.*\\..*).*)"],
};
