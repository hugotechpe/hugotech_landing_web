import Footer from "@/components/layout/footer"
import HeroNavbar from "@/components/layout/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <HeroNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}