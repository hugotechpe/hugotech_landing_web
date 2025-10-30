import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import {
  JsonLd,
  aggregateRatingSchema,
  getBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata, pageMetadata } from "@/lib/metadata";

// Metadata dinámica para Testimonials page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const metaData = isSpanish ? pageMetadata.testimonials.es : pageMetadata.testimonials.en;
  
  return genMetadata({
    ...metaData,
    locale,
    path: "/testimonials",
    ogImage: "/images/testimonials-og.jpg",
  });
}

const breadcrumbData = [
  { name: "Inicio", url: "https://hugotech.pe" },
  { name: "Testimonios", url: "https://hugotech.pe/testimonials" },
];

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schemas JSON-LD para Testimonials */}
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbData)} />

      <div className="relative flex flex-col min-h-screen">
        <HeroNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton
          phoneNumber="51946483010"
          message="Hola Hugo, me inspiraron los testimonios. Quiero agendar mi sesión gratuita"
        />
      </div>
    </>
  );
}
