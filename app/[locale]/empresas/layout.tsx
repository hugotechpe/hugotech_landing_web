import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  JsonLd,
  serviceSchema,
  getBreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata, pageMetadata } from "@/lib/metadata";

// Metadata dinámica para Empresas page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const metaData = isSpanish
    ? pageMetadata.empresas.es
    : pageMetadata.empresas.en;

  return genMetadata({
    ...metaData,
    locale,
    path: "/empresas",
    ogImage: "/images/empresas-og.jpg",
  });
}

const breadcrumbData = [
  { name: "Inicio", url: "https://hugotech.pe" },
  { name: "Empresas", url: "https://hugotech.pe/empresas" },
];

export default function EmpresasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schemas JSON-LD para Empresas */}
      <JsonLd data={serviceSchema} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbData)} />

      <div className="relative flex flex-col min-h-screen">
        <HeroNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton
          message="Hola Hugo, vengo de la web. Me interesa evaluar un diagnóstico para mi equipo."
          message="Hola Hugo, quiero agendar una consultoría empresarial"
          phoneNumber="51946483010"
        />
      </div>
    </>
  );
}
