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

// Schema de Organización y Persona profesional para SEO
const professionalSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": "https://hugotech.pe/about#hugo-casanova",
    name: "Hugo Casanova",
    alternateName: "Hugo Casanova Mendoza",
    jobTitle: [
      "Agile Coach",
      "Tech Leadership Mentor",
      "Software Engineering Coach",
    ],
    description:
      "Ingeniero de Software con 18+ años de experiencia transformado en mentor de liderazgo tech. Especializado en prevenir burnout y desarrollar líderes sostenibles.",
    url: "https://hugotech.pe/about",
    image: "https://hugotech.pe/images/about-hugocasanova.jpg",
    sameAs: [
      "https://www.linkedin.com/in/hcasanovam/",
      "https://github.com/hugotechpe",
    ],
    knowsAbout: [
      "Agile Coaching",
      "Tech Leadership",
      "Burnout Prevention",
      "Software Engineering",
      "Career Development",
      "Management 3.0",
      "Scrum",
      "Kanban",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "ICF Professional Coach",
        credentialCategory: "Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Professional Scrum Master",
        credentialCategory: "Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Cloud Practitioner",
        credentialCategory: "Certification",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "HugoTech",
      url: "https://hugotech.pe",
    },
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schemas JSON-LD específicos para About */}
      <JsonLd data={personSchema} />
      <JsonLd data={professionalSchema} />
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
