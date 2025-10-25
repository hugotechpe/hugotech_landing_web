import Footer from "@/components/layout/footer";
import HeroNavbar from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <HeroNavbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton 
          phoneNumber="51987654321"
          message="Hola Hugo, me gustaría conocer más sobre tu historia y propósito"
        />
      </div>
    </>
  );
}
