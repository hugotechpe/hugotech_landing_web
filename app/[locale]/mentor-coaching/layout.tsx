import Footer from "@/components/layout/footer";
import CoachingNavbar from "@/components/layout/navbarCoaching";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd, getBreadcrumbSchema } from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata, pageMetadata } from "@/lib/metadata";

// Metadata dinámica para Mentor Coaching page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const metaData = isSpanish
    ? pageMetadata.mentorCoaching.es
    : pageMetadata.mentorCoaching.en;

  return genMetadata({
    ...metaData,
    locale,
    path: "/mentor-coaching",
    ogImage: "/images/mentor-coaching.jpg",
  });
}

const breadcrumbData = [
  { name: "Inicio", url: "https://hugotech.pe" },
  { name: "Mentor Coaching 1 a 1", url: "https://hugotech.pe/mentor-coaching" },
];

export default function MentorCoachingLayout({
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
          message="Hola Hugo, quiero aplicar a mi primera sesión de mentoring tech 1 a 1."
          message="Hola Hugo, me gustaría agendar una sesión de Mentor Coaching 1 a 1"
          phoneNumber="51946483010"
        />
      </div>
    </>
  );
}
