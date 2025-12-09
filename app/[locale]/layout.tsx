import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontHeading, fontQuote } from "@/config/fonts";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import { AlternateLinks } from "@/components/seo/AlternateLinks";
import { PersonSchema } from "@/components/seo/PersonSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://hugotech.pe"),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "HugoTech - Mentoring Tech con Propósito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@hugotechpe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
    <html
      suppressHydrationWarning
      className="motion-safe:scroll-smooth motion-reduce:scroll-auto"
      lang={locale}
    >
      <head>
        {/* Preconnect para dominios externos - mejora performance */}
        {/* Preconnect to external services */}
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <link href="https://www.google-analytics.com" rel="preconnect" />
        <link href="https://calendly.com" rel="preconnect" />
        <link href="https://assets.calendly.com" rel="preconnect" />
        {/* DNS Prefetch */}
        <link href="https://www.googletagmanager.com" rel="dns-prefetch" />
        <link href="https://www.google-analytics.com" rel="dns-prefetch" />
        <link href="https://calendly.com" rel="dns-prefetch" />
        <link href="https://assets.calendly.com" rel="dns-prefetch" />
        {/* SEO: hreflang para soporte multiidioma */}
        <AlternateLinks locale={locale} />
        <GoogleTagManager />
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontQuote.variable,
        )}
      >
        {/* Schema.org Person markup for Hugo Casanova - GEO optimization */}
        <PersonSchema />
        <GoogleTagManagerNoScript />
        <Providers
          locale={locale}
          messages={messages}
          themeProps={{ attribute: "class", defaultTheme: "light" }}
        >
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
