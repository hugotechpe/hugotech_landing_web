import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  JsonLd,
  personSchema,
  getBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata, pageMetadata } from "@/lib/metadata";

// Metadata dinámica para About page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const metaData = isSpanish ? pageMetadata.about.es : pageMetadata.about.en;

  return genMetadata({
    ...metaData,
    locale,
    path: "/about",
    ogImage: "/images/hugo-casanova.jpg",
  });
}

const breadcrumbData = [
  { name: "Inicio", url: "https://hugotech.pe" },
  { name: "Acerca de", url: "https://hugotech.pe/about" },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schemas JSON-LD específicos para About */}
      <JsonLd data={personSchema} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbData)} />

      <div className="relative flex flex-col min-h-screen">
        <HeroNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton
          message="Hola Hugo, me gustaría conocer más sobre tu historia y propósito"
          phoneNumber="51946483010"
        />
      </div>
    </>
  );
}
