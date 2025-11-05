import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroNavbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Sections.CoachingConCausa",
  });

  return {
    title: `${t("hero.title")} | HugoTech`,
    description: t("hero.subtitle"),
    openGraph: {
      title: `${t("hero.title")} | HugoTech`,
      description: t("hero.subtitle"),
      type: "website",
      locale: locale === "es" ? "es_PE" : "en_US",
    },
  };
}

export default function CoachingConCausaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
