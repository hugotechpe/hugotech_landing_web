import Footer from "@/components/layout/footer";
import CoachingNavbar from "@/components/layout/navbarCoaching";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata, pageMetadata } from "@/lib/metadata";

// Metadata dinámica para Coaching page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const metaData = isSpanish
    ? pageMetadata.coaching.es
    : pageMetadata.coaching.en;

  return genMetadata({
    ...metaData,
    locale,
    path: "/coaching",
    ogImage: "/images/coaching.jpg",
  });
}

const breadcrumbData = [
  { name: "Inicio", url: "https://hugotech.pe" },
  { name: "Coaching 1 a 1", url: "https://hugotech.pe/coaching" },
];

export default function CoachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schema JSON-LD para Breadcrumb */}
      <JsonLd data={getBreadcrumbSchema(breadcrumbData)} />

      <div className="relative flex flex-col min-h-screen">
        <CoachingNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton
          message="Hola Hugo, me gustaría agendar una sesión de Coaching 1 a 1"
          phoneNumber="51946483010"
        />
      </div>
    </>
  );
}
