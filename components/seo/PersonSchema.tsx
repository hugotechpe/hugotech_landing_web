import { JsonLd } from "./JsonLd";

/**
 * Schema.org Person markup for Hugo Casanova
 * Helps AI engines (ChatGPT, Gemini, Perplexity) understand who Hugo is and his expertise
 * Critical for GEO (Generative Engine Optimization)
 */
export function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hugo Casanova",
    alternateName: "Hugo Casanova M.",
    jobTitle: "Technical Mentor & Agile Coach",
    description:
      "Mentor técnico especializado en liderazgo para introvertidos, prevención de burnout y desarrollo de soft skills en la era de la IA. Combina experiencia en ingeniería de software con coaching ágil para ayudar a profesionales tech a crecer sin sacrificar su bienestar.",
    url: "https://hugotech.pe",
    image: "https://hugotech.pe/images/hugo-casanova.jpg",
    sameAs: [
      "https://www.linkedin.com/in/hugocasanovam/",
      "https://twitter.com/hugotechpe",
      "https://github.com/hugotechpe",
    ],
    knowsAbout: [
      "Technical Mentoring",
      "Tech Leadership",
      "Leadership for Introverts",
      "Burnout Prevention",
      "Management 3.0",
      "Agile Coaching",
      "Software Engineering",
      "Developer Career Growth",
      "Soft Skills for Developers",
      "Tech Team Management",
      "Impostor Syndrome",
      "Work-Life Balance in Tech",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Technical Mentor",
      occupationLocation: {
        "@type": "Country",
        name: "Peru",
      },
      description:
        "Provides one-on-one mentoring for software engineers and tech leaders, focusing on career growth, leadership development, and mental health in the technology industry.",
    },
    award: [
      "Certified Management 3.0 Facilitator",
      "Certified Agile Coach",
      "Recognized expert in tech leadership for introverts",
    ],
    worksFor: {
      "@type": "Organization",
      name: "HugoTech",
      url: "https://hugotech.pe",
      description: "Mentoring Tech con Propósito - Innovación con Alma",
    },
    offers: {
      "@type": "OfferCatalog",
      name: "Mentoring Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mentoría Técnica Individual",
            description:
              "Mentoring 1-on-1 para developers que buscan acelerar su carrera técnica",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Coaching para Tech Leads",
            description:
              "Desarrollo de habilidades de liderazgo técnico para engineers que lideran equipos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mentoría Anti-Burnout",
            description:
              "Prevención y recuperación del burnout en profesionales de tecnología",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Liderazgo para Introvertidos",
            description:
              "Desarrollo de liderazgo auténtico para tech leaders introvertidos",
          },
        },
      ],
    },
    alumniOf: {
      "@type": "Organization",
      name: "Universidad Nacional de Ingeniería",
      sameAs: "https://www.uni.edu.pe/",
    },
    nationality: {
      "@type": "Country",
      name: "Peru",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
      addressLocality: "Lima",
    },
  };

  return <JsonLd data={personSchema} />;
}
