import React from "react";

// Schema.org para Hugo Casanova (Person)
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hugo Casanova",
  alternateName: "HugoTech",
  jobTitle: "Mentor de Transformación Tech y Coach Anti-Burnout",
  description:
    "Mentor tech con 18+ años de experiencia especializado en desarrollo humano, liderazgo consciente y transformación ágil. Acompaño a profesionales tech a encontrar propósito más allá del código.",
  url: "https://hugotech.pe",
  image: "https://hugotech.pe/images/hugo-casanova.jpg",
  email: "hola@hugotech.pe",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
    addressLocality: "Lima",
  },
  sameAs: [
    "https://www.linkedin.com/in/hugocasanovam",
    "https://www.instagram.com/hugotechpe",
    "https://www.facebook.com/hugotechpe",
  ],
  knowsAbout: [
    "Mentoring Tech",
    "Liderazgo Consciente",
    "Desarrollo Humano",
    "Anti-Burnout",
    "Transformación Digital",
    "Agilidad",
    "Coaching de Carrera Tech",
    "Scrum",
    "Product Ownership",
    "Team Building",
  ],
  knowsLanguage: ["es-PE", "en-US"],
  award: ["Certified Scrum Master", "Professional Scrum Product Owner"],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Formación en Coaching y Liderazgo",
  },
};

// Schema.org para HugoTech (Organization)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HugoTech",
  alternateName: "Hugo Tech",
  legalName: "HugoTech - Mentoring Tech con Propósito",
  description:
    "Mentoring tech con alma. Sesiones 1-a-1 gratuitas y programas empresariales para transformación humana en tecnología.",
  url: "https://hugotech.pe",
  logo: {
    "@type": "ImageObject",
    url: "https://hugotech.pe/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://hugotech.pe/images/og-image.jpg",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Hugo Casanova",
    url: "https://hugotech.pe/about",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
    addressLocality: "Lima",
    addressRegion: "Lima",
  },
  areaServed: {
    "@type": "Place",
    name: "América Latina",
  },
  sameAs: [
    "https://www.linkedin.com/in/hugocasanovam",
    "https://www.instagram.com/hugotechpe",
    "https://www.facebook.com/hugotechpe",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hola@hugotech.pe",
    availableLanguage: ["Spanish", "English"],
  },
  slogan: "Forma tu talento tech con propósito y alma",
};

// Schema.org para Servicios (ProfessionalService)
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mentoring Tech con Propósito",
  description:
    "Sesiones gratuitas 1-a-1 de mentoring tech, coaching anti-burnout y programas empresariales de liderazgo ágil.",
  provider: {
    "@type": "Person",
    name: "Hugo Casanova",
    url: "https://hugotech.pe/about",
  },
  brand: {
    "@type": "Organization",
    name: "HugoTech",
  },
  areaServed: {
    "@type": "Place",
    name: "América Latina",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://hugotech.pe",
    availableLanguage: ["Spanish", "English"],
  },
  serviceType: [
    "Mentoring Tech Gratuito",
    "Coaching Anti-Burnout",
    "Liderazgo Ágil para Equipos",
    "Transformación Cultural Tech",
    "Coaching de Carrera Tech",
    "Formación de Product Owners",
  ],
  category: "Professional Services",
  url: "https://hugotech.pe",
  termsOfService: "https://hugotech.pe/terminos-y-condiciones",
  offers: [
    {
      "@type": "Offer",
      name: "Mentoría 1-a-1 Gratuita",
      description: "Sesiones individuales de mentoring tech sin costo",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://hugotech.pe",
    },
    {
      "@type": "Offer",
      name: "Programas Empresariales",
      description: "Transformación de equipos tech y liderazgo ágil",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      url: "https://hugotech.pe/empresas",
    },
  ],
};

// Schema.org para FAQ (opcional, para cuando tengas FAQ)
export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Schema.org para AggregateRating (de testimonios)
export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HugoTech",
  image: "https://hugotech.pe/logo.png",
  url: "https://hugotech.pe",
  telephone: "+51-XXX-XXX-XXX",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
    addressLocality: "Lima",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "200",
    reviewCount: "200",
  },
  priceRange: "Gratis - Consultar",
};

// Schema.org para Breadcrumb
export const getBreadcrumbSchema = (
  items: { name: string; url: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Componente para renderizar JSON-LD
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}
