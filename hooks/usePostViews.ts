"use client";

import { useEffect, useRef } from "react";

/**
 * Hook para trackear views de un post del blog
 * Se ejecuta una sola vez cuando el usuario ve el post
 * 
 * @param slug - Slug único del post
 * @param enabled - Si false, no trackea (útil para preview)
 */
export function usePostViews(slug: string, enabled: boolean = true) {
  const tracked = useRef(false);

  useEffect(() => {
    // Solo trackear una vez y si está habilitado
    if (!enabled || tracked.current || !slug) return;

    // Esperar 3 segundos para confirmar que el usuario realmente está leyendo
    const timeout = setTimeout(async () => {
      try {
        await fetch("/api/increment-views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug }),
        });
        tracked.current = true;
      } catch (error) {
        console.error("Error tracking post view:", error);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [slug, enabled]);
}
