// Last verified: 2025-12-10 - All pages working
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { getTranslations } from "next-intl/server";
import NextLink from "next/link";
import { 
  Users, 
  Target, 
  Heart, 
  Handshake, 
  MessageSquare, 
  Coffee,
  Flame,
  ShieldAlert,
  Rocket,
  GraduationCap,
  BookOpen,
  Sparkles,
  ArrowRight,
  UserCircle
} from "lucide-react";
import HomeLayout from "../HomeLayout";

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
          icon: Users,
          color: "primary",
        },
        {
          slug: "mentor-tecnico",
          title: isSpanish ? "Mentor Técnico" : "Technical Mentor",
          description: isSpanish
            ? "Guía experimentada para acelerar el crecimiento de developers"
            : "Experienced guide to accelerate developer growth",
          icon: Target,
          color: "secondary",
        },
        {
          slug: "liderazgo-introvertidos",
          title: isSpanish
            ? "Liderazgo para Introvertidos"
            : "Leadership for Introverts",
          description: isSpanish
            ? "Lidera desde tu autenticidad sin imitar extrovertidos"
            : "Lead from your authenticity without imitating extroverts",
          icon: Heart,
          color: "success",
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
          icon: Handshake,
          color: "primary",
        },
        {
          slug: "feedback-tecnico",
          title: isSpanish ? "Feedback Técnico" : "Technical Feedback",
          description: isSpanish
            ? "Cómo dar críticas constructivas sin romper egos"
            : "How to give constructive criticism without breaking egos",
          icon: MessageSquare,
          color: "secondary",
        },
        {
          slug: "one-on-ones",
          title: "One-on-Ones",
          description: isSpanish
            ? "Reuniones 1-a-1 que realmente importan para tu equipo"
            : "1-on-1 meetings that really matter for your team",
          icon: Coffee,
          color: "warning",
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
          icon: Flame,
          color: "danger",
        },
        {
          slug: "sindrome-impostor",
          title: isSpanish ? "Síndrome del Impostor" : "Impostor Syndrome",
          description: isSpanish
            ? "Por qué sientes que no mereces tu rol senior"
            : "Why you feel you don't deserve your senior role",
          icon: ShieldAlert,
          color: "secondary",
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
          icon: Rocket,
          color: "primary",
        },
        {
          slug: "coaching-tech",
          title: isSpanish ? "Coaching Tech" : "Tech Coaching",
          description: isSpanish
            ? "Metodología de transformación profesional para developers"
            : "Professional transformation methodology for developers",
          icon: GraduationCap,
          color: "success",
        },
      ],
    },
  ];

  return (
    <HomeLayout>
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 mb-6">
          <BookOpen className="w-6 h-6 text-primary animate-pulse" />
          <Chip color="primary" size="lg" variant="flat">
            {t("hero.badge")}
          </Chip>
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-customgray mb-6 leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-2xl md:text-3xl text-default-700 max-w-4xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>
      </div>

      {/* Glosario por categorías */}
      <div className="space-y-20">
        {glosarioPages.map((category, catIndex) => (
          <section key={catIndex}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
              <h2 className="text-4xl font-bold text-customgray">
                {category.category}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => {
                const IconComponent = item.icon;
                const colorMap: Record<string, string> = {
                  primary: "bg-primary-100 text-primary border-primary-200",
                  secondary: "bg-secondary-100 text-secondary border-secondary-200",
                  success: "bg-success-100 text-success-600 border-success-200",
                  warning: "bg-warning-100 text-warning-600 border-warning-200",
                  danger: "bg-danger-100 text-danger-600 border-danger-200",
                };
                
                return (
                  <NextLink
                    key={itemIndex}
                    className="block transition-all hover:scale-105"
                    href={`/${locale}/glosario/${item.slug}`}
                  >
                    <Card className={`h-full hover:shadow-2xl transition-all border-2 ${colorMap[item.color] || colorMap.primary} group`}>
                      <CardBody className="p-8">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${colorMap[item.color]?.split(' ')[0]} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-customgray mb-4">
                          {item.title}
                        </h3>
                        <p className="text-lg text-default-600 leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className={`flex items-center gap-2 font-semibold ${colorMap[item.color]?.split(' ')[1]}`}>
                          {isSpanish ? "Leer artículo" : "Read article"}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardBody>
                    </Card>
                  </NextLink>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Final */}
      <section className="mt-24">
        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-100">
          <CardBody className="p-12 md:p-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
              <UserCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-customgray mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-lg md:text-xl text-default-600 mb-8 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <NextLink
              className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-primary-600 hover:scale-105 transition-all shadow-lg"
              href={`/${locale}/metodo-hugotech`}
            >
              {t("cta.button")}
              <ArrowRight className="w-5 h-5" />
            </NextLink>
          </CardBody>
        </Card>
      </section>
    </div>
    </HomeLayout>
  );
}
