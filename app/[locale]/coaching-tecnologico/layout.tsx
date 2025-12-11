import { generateMetadata as genMetadata, pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const metaData = isSpanish
    ? pageMetadata.coachingTecnologico.es
    : pageMetadata.coachingTecnologico.en;

  return genMetadata({
    ...metaData,
    locale,
    path: isSpanish ? "/coaching-tecnologico" : "/tech-coaching",
  });
}

export default function CoachingTecnologicoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
