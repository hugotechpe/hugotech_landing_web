// Last verified: 2025-12-10 - All pages working
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { getTranslations } from "next-intl/server";
import NextLink from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GlosarioIndex" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: t("keywords"),
  };
}

export default async function GlosarioIndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GlosarioIndex" });
  const isSpanish = locale === "es";

  const glosarioPages = [
    {
      category: t("categories.roles"),
      items: [
        {
          slug: "tech-lead",
          title: isSpanish ? "Tech Lead" : "Tech Lead",
          description: isSpanish
            ? "El rol que une liderazgo técnico con gestión de personas"
            : "The role that unites technical leadership with people management",
          icon: "👨‍💻",
        },
        {
          slug: "mentor-tecnico",
          title: isSpanish ? "Mentor Técnico" : "Technical Mentor",
          description: isSpanish
            ? "Guía experimentada para acelerar el crecimiento de developers"
            : "Experienced guide to accelerate developer growth",
          icon: "🎯",
        },
        {
          slug: "liderazgo-introvertidos",
          title: isSpanish
            ? "Liderazgo para Introvertidos"
            : "Leadership for Introverts",
          description: isSpanish
            ? "Lidera desde tu autenticidad sin imitar extrovertidos"
            : "Lead from your authenticity without imitating extroverts",
          icon: "🧘",
        },
      ],
    },
    {
      category: t("categories.skills"),
      items: [
        {
          slug: "soft-skills-developers",
          title: isSpanish
            ? "Soft Skills para Developers"
            : "Soft Skills for Developers",
          description: isSpanish
            ? "8 habilidades humanas que la IA no puede reemplazar"
            : "8 human skills that AI cannot replace",
          icon: "🤝",
        },
        {
          slug: "feedback-tecnico",
          title: isSpanish ? "Feedback Técnico" : "Technical Feedback",
          description: isSpanish
            ? "Cómo dar críticas constructivas sin romper egos"
            : "How to give constructive criticism without breaking egos",
          icon: "💬",
        },
        {
          slug: "one-on-ones",
          title: "One-on-Ones",
          description: isSpanish
            ? "Reuniones 1-a-1 que realmente importan para tu equipo"
            : "1-on-1 meetings that really matter for your team",
          icon: "☕",
        },
      ],
    },
    {
      category: t("categories.wellbeing"),
      items: [
        {
          slug: "burnout-tech",
          title: isSpanish ? "Burnout Tech" : "Tech Burnout",
          description: isSpanish
            ? "El agotamiento silencioso que afecta a developers"
            : "The silent exhaustion that affects developers",
          icon: "🔥",
        },
        {
          slug: "sindrome-impostor",
          title: isSpanish ? "Síndrome del Impostor" : "Impostor Syndrome",
          description: isSpanish
            ? "Por qué sientes que no mereces tu rol senior"
            : "Why you feel you don't deserve your senior role",
          icon: "🎭",
        },
      ],
    },
    {
      category: t("categories.frameworks"),
      items: [
        {
          slug: "management-3-0",
          title: "Management 3.0",
          description: isSpanish
            ? "Liderazgo ágil para equipos tech modernos"
            : "Agile leadership for modern tech teams",
          icon: "🚀",
        },
        {
          slug: "coaching-tech",
          title: isSpanish ? "Coaching Tech" : "Tech Coaching",
          description: isSpanish
            ? "Metodología de transformación profesional para developers"
            : "Professional transformation methodology for developers",
          icon: "🎓",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Chip className="mb-6" color="primary" size="lg" variant="flat">
          {t("hero.badge")}
        </Chip>
        <h1 className="text-5xl md:text-6xl font-bold text-customgray mb-6 leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-2xl text-default-700 max-w-3xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>
      </div>

      {/* Glosario por categorías */}
      <div className="space-y-16">
        {glosarioPages.map((category, catIndex) => (
          <section key={catIndex}>
            <h2 className="text-3xl font-bold text-customgray mb-8 flex items-center gap-3">
              <span className="text-primary">•</span>
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <NextLink
                  key={itemIndex}
                  className="block transition-transform hover:scale-105"
                  href={`/${locale}/glosario/${item.slug}`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardBody className="p-6">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-customgray mb-3">
                        {item.title}
                      </h3>
                      <p className="text-lg text-default-600 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-4 text-primary font-semibold flex items-center gap-2">
                        {isSpanish ? "Leer más" : "Read more"} →
                      </div>
                    </CardBody>
                  </Card>
                </NextLink>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Final */}
      <section className="mt-20">
        <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
          <CardBody className="p-10 text-center">
            <h2 className="text-4xl font-bold text-customgray mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-default-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <NextLink
              className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary-600 transition-colors"
              href={`/${locale}/metodo-hugotech`}
            >
              {t("cta.button")}
            </NextLink>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
