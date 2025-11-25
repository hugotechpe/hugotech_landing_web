import { TestimoniosHeaderSection } from "@/features/testimonials/TestimoniosHeaderSection";
import { TestimoniosListSection } from "@/features/testimonials/TestimoniosListSection";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTestimoniosList } from "@/features/testimonials/enums";

export default async function TestimonialPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const testimonios = getTestimoniosList(locale);

  // Crear JSON-LD para la organización con aggregate rating
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hugotech.pe/#organization",
    name: "HugoTech",
    url: "https://hugotech.pe",
    logo: "https://hugotech.pe/images/logo.png",
    description: "Coaching y Mentoring Tecnológico para profesionales tech",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: testimonios.length.toString(),
      reviewCount: testimonios.length.toString(),
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <Breadcrumb />
      <TestimoniosHeaderSection />
      <TestimoniosListSection />
    </>
  );
}
