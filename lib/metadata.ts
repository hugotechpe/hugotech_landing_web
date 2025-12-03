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
    es: `${BASE_URL}${path}`,
    "en-US": `${BASE_URL}/en${path}`,
    en: `${BASE_URL}/en${path}`,
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
      title: "Mentoría para Programadores y Coaching Tech | Hugotech Perú",
      description:
        "Acompañamos a jóvenes talentos tech en su desarrollo humano y profesional. Mentoring de carrera TI, liderazgo técnico y coaching por donación voluntaria. Evita el burnout y crece con propósito.",
      keywords: [
        "mentoring para programadores",
        "habilidades que la IA no puede reemplazar",
        "cómo superar síndrome del impostor en tecnología",
        "transición de senior developer a manager",
        "tech lead para introvertidos",
        "equilibrio vida trabajo programadores",
        "burnout silencioso tech",
        "plan de carrera ingeniería de software 2026",
      ],
    },
    en: {
      title: "HugoTech - Tech Mentoring with Purpose in the AI Era",
      description:
        "I accompany young tech talents to find their professional purpose. Free 1-on-1 coaching and tech mentoring sessions. Avoid burnout, build a sustainable career.",
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
      description:
        "Conoce mi historia: 18+ años en tech, mi transformación personal y cómo llegué al coaching y mentoring tecnológico. De ingeniero a mentor con propósito.",
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
      description:
        "Know my story: 18+ years in tech, my personal transformation and how I got to tech coaching and mentoring. From engineer to mentor with purpose.",
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
      description:
        "Lee testimonios reales de talentos tech que encontraron su propósito profesional. Historias de crecimiento, superación del síndrome del impostor y desarrollo de carrera.",
      keywords: [
        "testimonios tech",
        "historias transformación",
        "casos éxito mentoring",
        "desarrollo profesional tech",
      ],
    },
    en: {
      title: "Real Testimonials - Transformation Stories | HugoTech",
      description:
        "Read real testimonials from tech talents who found their professional purpose. Stories of growth, overcoming impostor syndrome and career development.",
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
      title: "Programas de Mentoring Grupal para Equipos Tech | HugoTech Perú",
      description:
        "Diseño programas de mentoring y coaching para equipos de tecnología. Liderazgo consciente, cultura ágil, retención de talento tech y equipos de alto rendimiento. Transforma tu organización.",
      keywords: [
        "mentoring grupal tech",
        "coaching equipos tecnológicos",
        "retención talento tech",
        "liderazgo ágil corporativo",
        "cultura tech empresarial",
        "equipos alto rendimiento tecnología",
        "desarrollo talento programadores",
      ],
    },
    en: {
      title: "Programs for Tech Companies - Team Transformation | HugoTech",
      description:
        "I design group mentoring and coaching programs for tech teams. Conscious leadership, agile culture and talent development. Transform your organization from BEING.",
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
      title: "Mentoring de Carrera TI y Liderazgo Técnico (1 a 1) | HugoTech",
      description:
        "Sesiones 1 a 1 de mentoring para desarrolladores y líderes tech. Plan de carrera, transición laboral, liderazgo técnico. Evita el burnout y crece con claridad y propósito en tecnología.",
      keywords: [
        "mentoring de carrera TI",
        "mentor para desarrolladores",
        "plan de carrera ingeniero software",
        "coaching liderazgo técnico",
        "transición de carrera tech",
        "mentoring para tech leads",
        "desarrollo profesional programadores",
      ],
    },
    en: {
      title: "1-on-1 Mentor Coaching - Personalized 45min Sessions | HugoTech",
      description:
        "Schedule your individual mentor coaching session. 45 minutes of transformation to take your next professional leap with clarity, purpose and renewed confidence.",
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
      description:
        "Sesiones de coaching individual para autoconocimiento, claridad mental y propósito de vida. 45 minutos de exploración profunda y transformación personal auténtica.",
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
      description:
        "Individual coaching sessions for self-awareness, mental clarity and life purpose. 45 minutes of deep exploration and authentic personal transformation.",
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
