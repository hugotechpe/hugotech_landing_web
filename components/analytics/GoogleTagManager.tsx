"use client";

import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-5HH6QTFK";

export function GoogleTagManager() {
  return (
    <>
      {/* Google Consent Mode v2 - Configuración por defecto */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `,
        }}
        id="gtm-consent"
        strategy="afterInteractive"
      />

      {/* Google Tag Manager Script - Lazy loaded después del contenido principal */}
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
        id="gtm-script"
        strategy="afterInteractive"
      />
    </>
  );
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        height="0"
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
        width="0"
      />
    </noscript>
  );
}
