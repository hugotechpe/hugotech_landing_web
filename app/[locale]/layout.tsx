import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontRubik } from "@/config/fonts";
import HeroNavbar from "@/components/navbar";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale} className="motion-safe:scroll-smooth motion-reduce:scroll-auto">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
          fontRubik.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }} locale={locale} messages={messages}>
          <div className="relative flex flex-col h-screen">
            <HeroNavbar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=hugotech_landing_web"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
