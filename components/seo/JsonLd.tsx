import React from "react";

// Schema.org para Hugo Casanova (Person)
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hugo Casanova",
  alternateName: ["HugoTech", "Hugo Casanova M."],
  jobTitle: "Mentor de Carrera para Programadores | Coach Tech Perú",
  description:
    "Mentor tech especializado en desarrollo de carrera para programadores y liderazgo técnico. 18+ años de experiencia acompañando a desarrolladores junior y tech leads a evitar el burnout y construir carreras con propósito en tecnología.",
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
    "Mentoring para Programadores",
    "Coaching de Carrera Tech",
    "Liderazgo Técnico",
    "Desarrollo de Carrera para Desarrolladores",
    "Prevención Burnout Programadores",
    "Transición de Carrera Tech",
    "Primer Empleo Tech",
    "Tech Lead Mentoring",
    "Scrum Master",
    "Product Ownership",
    "Transformación Ágil",
    "Equipos Alto Rendimiento Tech",
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
  name: "HugoTech - Mentoring para Programadores por Hugo Casanova",
  alternateName: ["Hugo Tech", "HugoTech Perú"],
  legalName: "HugoTech - Mentoría de Carrera para Desarrolladores",
  description:
    "Mentoría de carrera para programadores y liderazgo técnico. Sesiones 1-a-1 por donación voluntaria (100% va a causas sociales). Ayudamos a desarrolladores junior y tech leads a evitar el burnout y construir carreras con propósito.",
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
  name: "Mentoría de Carrera para Programadores y Coaching Tech",
  description:
    "Sesiones 1-a-1 de mentoría para desarrolladores por donación voluntaria. Plan de carrera para ingenieros de software, liderazgo técnico, prevención del burnout y programas empresariales para equipos tech.",
  provider: {
    "@type": "Person",
    name: "Hugo Casanova",
    url: "https://hugotech.pe/about",
  },
  brand: {
    "@type": "Organization",
    name: "HugoTech - Mentoring para Programadores",
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
    "Mentoring para Desarrolladores Junior",
    "Coaching de Carrera Tech",
    "Plan de Carrera Ingeniero Software",
    "Liderazgo para Tech Leads",
    "Prevención Burnout Programadores",
    "Mentoría Primer Empleo Tech",
    "Coaching Equipos Tecnológicos",
    "Transformación Ágil Empresarial",
  ],
  category: "Professional Services",
  url: "https://hugotech.pe",
  termsOfService: "https://hugotech.pe/terminos-y-condiciones",
  offers: [
    {
      "@type": "Offer",
      name: "Mentoría 1-a-1 para Programadores (Donación Voluntaria)",
      description:
        "Sesiones individuales de mentoría de carrera para desarrolladores. Plan de carrera, transición laboral, primer empleo tech, liderazgo técnico. 100% de lo recaudado se dona a causas sociales.",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://hugotech.pe/mentor-coaching",
    },
    {
      "@type": "Offer",
      name: "Programas para Equipos Tech y Empresas",
      description:
        "Transformación de equipos tecnológicos, liderazgo ágil y retención de talento tech. Cultura consciente y equipos de alto rendimiento.",
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
