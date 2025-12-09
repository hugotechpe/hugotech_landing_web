"use client";

import { usePostViews } from "@/hooks/usePostViews";

interface PostViewTrackerProps {
  slug: string;
}

/**
 * Componente cliente para trackear views de posts
 * Se monta en la página del post para incrementar el contador
 */
export default function PostViewTracker({ slug }: PostViewTrackerProps) {
  // Trackear view después de 3 segundos (confirmar lectura real)
  usePostViews(slug, true);

  // Este componente no renderiza nada visible
  return null;
}
