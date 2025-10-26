import React from "react";

// Schema.org para Hugo Casanova (Person)
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hugo Casanova",
  jobTitle: "Mentor de Transformación Tech",
  description:
    "Mentor tech especializado en desarrollo humano y liderazgo consciente. Acompaño a profesionales tech a encontrar propósito más allá del código.",
  url: "https://hugotech.pe",
  sameAs: [
    "https://www.linkedin.com/in/hugotechpe",
    "https://www.instagram.com/hugotechpe",
  ],
  knowsAbout: [
    "Mentoring Tech",
    "Liderazgo Consciente",
    "Desarrollo Humano",
    "Anti-Burnout",
    "Transformación Digital",
    "Agilidad",
    "Coaching de Carrera Tech",
  ],
};

// Schema.org para HugoTech (Organization)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HugoTech",
  description:
    "Mentoring tech con alma. Sesiones 1-a-1 gratuitas y programas empresariales para transformación humana en tecnología.",
  url: "https://hugotech.pe",
  logo: "https://hugotech.pe/logo.png",
  founder: {
    "@type": "Person",
    name: "Hugo Casanova",
  },
  sameAs: [
    "https://www.linkedin.com/company/hugotechpe",
    "https://www.instagram.com/hugotechpe",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hola@hugotech.pe",
  },
};

// Schema.org para Servicios (ProfessionalService)
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HugoTech - Mentoring Tech con Propósito",
  description:
    "Sesiones gratuitas 1-a-1 de mentoring tech, coaching anti-burnout y programas empresariales de liderazgo ágil.",
  provider: {
    "@type": "Person",
    name: "Hugo Casanova",
  },
  areaServed: {
    "@type": "Place",
    name: "América Latina",
  },
  serviceType: [
    "Mentoring Tech Gratuito",
    "Coaching Anti-Burnout",
    "Liderazgo Ágil para Equipos",
    "Transformación Cultural Tech",
  ],
  url: "https://hugotech.pe",
  priceRange: "Gratis (1-a-1) / Consultar (Empresas)",
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
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
