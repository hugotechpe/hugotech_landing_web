import { Metadata } from "next";

const BASE_URL = "https://hugotech.pe";

export interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  locale?: string;
  ogImage?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = "",
  locale = "es",
  ogImage = "/images/og-image.png",
}: MetadataConfig): Metadata {
  const isDefaultLocale = locale === "es";
  const localePath = isDefaultLocale ? path : `/${locale}${path}`;
  const canonicalUrl = `${BASE_URL}${localePath}`;
  
  // URLs alternativas para hreflang con x-default
  const alternateUrls = {
    "es-PE": `${BASE_URL}${path}`,
    "es": `${BASE_URL}${path}`,
    "en-US": `${BASE_URL}/en${path}`,
    "en": `${BASE_URL}/en${path}`,
    "x-default": `${BASE_URL}${path}`, // Español como predeterminado
  };

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Hugo Casanova", url: BASE_URL }],
    creator: "Hugo Casanova",
    publisher: "HugoTech",
    
    // Canonical URLs dinámicas
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls,
    },
    
    // Open Graph dinámico
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_PE" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_PE"],
      url: canonicalUrl,
      siteName: "HugoTech",
      title,
      description,
      images: [
        {
          url: `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "HugoTech - Mentoring y Coaching Tech",
        },
      ],
    },
    
    // Twitter Cards
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${ogImage}`],
    },
    
    // Robots
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
  };
}

// Metadatos específicos por página
export const pageMetadata = {
  home: {
    es: {
      title: "HugoTech - Mentoring Tech con Propósito en la Era de la IA",
      description: "Acompaño a jóvenes talentos tech a encontrar su propósito profesional. Sesiones 1 a 1 gratuitas de coaching y mentoring tecnológico. Evita el burnout, construye una carrera sostenible.",
      keywords: [
        "mentoring tech",
        "coaching tecnológico", 
        "desarrollo profesional",
        "mentalidad tech",
        "burnout tech",
        "carrera sostenible",
        "liderazgo ágil",
        "transformación digital",
      ],
    },
    en: {
      title: "HugoTech - Tech Mentoring with Purpose in the AI Era",
      description: "I accompany young tech talents to find their professional purpose. Free 1-on-1 coaching and tech mentoring sessions. Avoid burnout, build a sustainable career.",
      keywords: [
        "tech mentoring",
        "technology coaching",
        "professional development", 
        "tech mindset",
        "tech burnout",
        "sustainable career",
        "agile leadership",
        "digital transformation",
      ],
    },
  },
  
  about: {
    es: {
      title: "Sobre Hugo Casanova - Mi Historia y Experiencia | HugoTech",
      description: "Conoce mi historia: 18+ años en tech, mi transformación personal y cómo llegué al coaching y mentoring tecnológico. De ingeniero a mentor con propósito.",
      keywords: [
        "Hugo Casanova",
        "historia personal tech",
        "experiencia mentoring",
        "transformación profesional",
        "coach tech Peru",
      ],
    },
    en: {
      title: "About Hugo Casanova - My Story and Experience | HugoTech", 
      description: "Know my story: 18+ years in tech, my personal transformation and how I got to tech coaching and mentoring. From engineer to mentor with purpose.",
      keywords: [
        "Hugo Casanova",
        "personal tech story",
        "mentoring experience", 
        "professional transformation",
        "tech coach Peru",
      ],
    },
  },

  testimonials: {
    es: {
      title: "Testimonios Reales - Historias de Transformación | HugoTech",
      description: "Lee testimonios reales de talentos tech que encontraron su propósito profesional. Historias de crecimiento, superación del síndrome del impostor y desarrollo de carrera.",
      keywords: [
        "testimonios tech",
        "historias transformación",
        "casos éxito mentoring",
        "desarrollo profesional tech",
      ],
    },
    en: {
      title: "Real Testimonials - Transformation Stories | HugoTech",
      description: "Read real testimonials from tech talents who found their professional purpose. Stories of growth, overcoming impostor syndrome and career development.",
      keywords: [
        "tech testimonials",
        "transformation stories", 
        "mentoring success cases",
        "professional tech development",
      ],
    },
  },

  empresas: {
    es: {
      title: "Programas para Empresas Tech - Transformación de Equipos | HugoTech",
      description: "Diseño programas de mentoring y coaching grupal para equipos tech. Liderazgo consciente, cultura ágil y desarrollo de talento. Transforma tu organización desde el SER.",
      keywords: [
        "mentoring grupal tech",
        "coaching equipos tecnológicos",
        "transformación digital empresas",
        "liderazgo ágil corporativo",
        "cultura tech empresarial",
        "desarrollo talento tecnológico",
      ],
    },
    en: {
      title: "Programs for Tech Companies - Team Transformation | HugoTech",
      description: "I design group mentoring and coaching programs for tech teams. Conscious leadership, agile culture and talent development. Transform your organization from BEING.",
      keywords: [
        "group tech mentoring",
        "technology team coaching",
        "corporate digital transformation",
        "corporate agile leadership",
        "corporate tech culture",
        "technological talent development",
      ],
    },
  },

  mentorCoaching: {
    es: {
      title: "Mentor Coaching 1 a 1 - Sesiones Personalizadas de 45min | HugoTech",
      description: "Agenda tu sesión individual de mentor coaching. 45 minutos de transformación para dar tu siguiente salto profesional con claridad, propósito y confianza renovada.",
      keywords: [
        "mentor coaching individual",
        "sesiones coaching 1 a 1",
        "coaching personalizado tech",
        "mentoring profesional",
        "desarrollo carrera tech",
        "sesión coaching 45 minutos",
      ],
    },
    en: {
      title: "1-on-1 Mentor Coaching - Personalized 45min Sessions | HugoTech",
      description: "Schedule your individual mentor coaching session. 45 minutes of transformation to take your next professional leap with clarity, purpose and renewed confidence.",
      keywords: [
        "individual mentor coaching",
        "1-on-1 coaching sessions",
        "personalized tech coaching",
        "professional mentoring",
        "tech career development",
        "45 minute coaching session",
      ],
    },
  },

  coaching: {
    es: {
      title: "Coaching Personal 1 a 1 - Transformación desde el Ser | HugoTech",
      description: "Sesiones de coaching individual para autoconocimiento, claridad mental y propósito de vida. 45 minutos de exploración profunda y transformación personal auténtica.",
      keywords: [
        "coaching personal",
        "coaching individual",
        "autoconocimiento",
        "transformación personal",
        "propósito de vida",
        "coaching ontológico",
        "bienestar personal",
      ],
    },
    en: {
      title: "Personal 1-on-1 Coaching - Transformation from Being | HugoTech",
      description: "Individual coaching sessions for self-awareness, mental clarity and life purpose. 45 minutes of deep exploration and authentic personal transformation.",
      keywords: [
        "personal coaching",
        "individual coaching",
        "self-awareness",
        "personal transformation",
        "life purpose",
        "ontological coaching",
        "personal well-being",
      ],
    },
  },
};