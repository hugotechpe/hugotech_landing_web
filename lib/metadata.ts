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
        "Coaching Tech y mentoría para programadores en Lima, Perú. Acompañamos a desarrolladores, tech leads y managers en su crecimiento profesional. Anti-burnout, liderazgo técnico y carrera tech. Primera sesión gratuita.",
      keywords: [
        "coaching tech Lima",
        "coaching tech Perú",
        "mentoría para programadores Lima",
        "technical coach Perú",
        "coaching para desarrolladores",
        "mentor programadores Lima",
        "liderazgo técnico Lima",
        "burnout tech Perú",
        "coaching tecnológico Lima",
        "mentor tech leads Perú",
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
      title: "Tech Coaching & Mentoring for Developers | HugoTech Peru",
      description:
        "Tech coaching and mentoring for programmers in Lima, Peru. We help developers, tech leads and managers grow professionally. Anti-burnout, technical leadership and tech career. First session free.",
      keywords: [
        "tech coaching Lima",
        "tech coaching Peru",
        "mentoring for developers Lima",
        "technical coach Peru",
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
      title: "Hugo Casanova: De Ingeniero a Agile Coach & Mentor | Sobre Mí",
      description:
        "Ingeniero de Software con 18+ años de experiencia (PHP, React, AWS) transformado en Mentor de Liderazgo y Agile Coach. Conoce mi trayectoria desde Backend Developer hasta Country Manager.",
      keywords: [
        "Hugo Casanova",
        "Agile Coach Peru",
        "mentor de liderazgo tech",
        "ingeniero de software senior",
        "transformación profesional tech",
        "coach tech Peru",
        "Backend a Country Manager",
      ],
    },
    en: {
      title: "Hugo Casanova: From Engineer to Agile Coach & Mentor | About Me",
      description:
        "Software Engineer with 18+ years of experience (PHP, React, AWS) transformed into Leadership Mentor and Agile Coach. Discover my journey from Backend Developer to Country Manager.",
      keywords: [
        "Hugo Casanova",
        "Agile Coach Peru",
        "tech leadership mentor",
        "senior software engineer",
        "professional transformation tech",
        "tech coach Peru",
        "Backend to Country Manager",
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
        "Sesiones 1-1 de mentoring para desarrolladores y líderes tech en Lima, Perú. Plan de carrera, transición laboral, liderazgo técnico. Evita el burnout y crece con claridad y propósito.",
      keywords: [
        "mentoring de carrera TI",
        "mentor para desarrolladores Lima",
        "mentor programadores Perú",
        "coaching tech Lima",
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
      title: "Coaching Personal 1-1 - Transformación desde el Ser | HugoTech",
      description:
        "Sesiones de coaching individual en Lima, Perú para autoconocimiento, claridad mental y propósito de vida. 45 minutos de exploración profunda y transformación personal auténtica.",
      keywords: [
        "coaching personal Lima",
        "coaching individual Perú",
        "coaching tech Lima",
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

  coachingTecnologico: {
    es: {
      title:
        "Coaching Tecnológico para Líderes Tech | Hugo Casanova - Basado en Ontología",
      description:
        "Coaching tecnológico basado en ontología del lenguaje para CTOs, Tech Leads y Engineering Managers. Hugo Casanova, ingeniero con 18+ años + coach ontológico en formación ICF. Transforma tu SER, no solo tu hacer. Del observador que eres a los resultados que generas.",
      keywords: [
        "coaching tecnológico",
        "coaching tecnológico para líderes",
        "Hugo Casanova coach ontológico",
        "transformación del ser",
        "coaching para CTOs",
        "liderazgo ontológico",
        "transformación ontológica tech",
        "coach ontológico Peru",
        "observador líder",
        "identidad de líder",
        "conversaciones poderosas liderazgo",
        "liderazgo auténtico tech",
        "coaching ser hacer tener",
        "ontología del coaching",
        "anti-burnout ontológico",
      ],
    },
    en: {
      title:
        "Ontological Coaching for Tech Leaders | Hugo Casanova - Being Transformation",
      description:
        "Specialized ontological coaching for CTOs, Tech Leads and Engineering Managers. Hugo Casanova, engineer with 18+ years + ontological coach in ICF training. Transform your BEING, not just your doing.",
      keywords: [
        "ontological coaching",
        "ontological coaching for leaders",
        "Hugo Casanova ontological coach",
        "being transformation",
        "coaching for CTOs",
        "ontological leadership",
        "tech ontological transformation",
        "ontological coach Peru",
        "leader observer",
        "leader identity",
      ],
    },
  },
};
