import Footer from "@/components/layout/footer"
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd, personSchema, organizationSchema, serviceSchema } from "@/components/seo/JsonLd";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* SEO: Schema.org JSON-LD */}
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      
      <div className="relative flex flex-col h-screen">
        <HeroNavbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton 
          phoneNumber="51987654321"
          message="Hola Hugo, me gustaría agendar una sesión de mentoring 1-a-1"
        />
      </div>
    </>
  );
}