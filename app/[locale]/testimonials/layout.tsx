import Footer from "@/components/layout/footer"
import NavbarSecondary from "@/components/layout/navbarSecondary"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <NavbarSecondary />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
