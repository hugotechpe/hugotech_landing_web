import { Card, CardBody } from "@heroui/card";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Button } from "@heroui/button";
import { use } from "react";

import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Management30" });

  const title = t("metaTitle");
  const description = t("metaDescription");
  const canonicalUrl = `https://www.hugotech.pe/${locale}/glosario/management-3-0`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: "https://www.hugotech.pe/es/glosario/management-3-0",
        en: "https://www.hugotech.pe/en/glosario/management-3-0",
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "HugoTech",
      images: [
        {
          url: "https://www.hugotech.pe/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "es" ? "es_PE" : "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.hugotech.pe/images/og-image.jpg"],
      creator: "@hugotechpe",
    },
  };
}

export default function Management30Page({ params }: Props) {
  const resolvedParams = use(params);
  const { locale } = resolvedParams;
  const t = useTranslations("Management30");
  const isSpanish = locale === "es";

  const breadcrumbItems = [
    { name: isSpanish ? "Inicio" : "Home", url: `/${locale}` },
    { name: isSpanish ? "Glosario" : "Glossary", url: `/${locale}/glosario` },
    { name: t("title"), url: `/${locale}/glosario/management-3-0` },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-customgray mb-6">
          {t("title")}
        </h1>

        <p className="text-xl text-default-700 leading-relaxed mb-8">
          {t("subtitle")}
        </p>

        {/* Definición */}
        <section className="mb-12">
          <Card>
            <CardBody className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-customgray mb-4">
                {t("definition.title")}
              </h2>
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {t("definition.content")}
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>{t("definition.creator")}</strong>{" "}
                  {t("definition.creatorText")}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Los 6 Principios de Management 3.0 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("principles.title")}
          </h2>

          <div className="space-y-6">
            <Card className="border-l-4 border-green-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  1. 🌱 {t("principles.energize.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("principles.energize.content")}
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "En la práctica:" : "In practice:"}
                    </strong>{" "}
                    {t("principles.energize.practice")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  2. 💪 {t("principles.empower.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("principles.empower.content")}
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "En la práctica:" : "In practice:"}
                    </strong>{" "}
                    {t("principles.empower.practice")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  3. 🎯 {t("principles.align.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("principles.align.content")}
                </p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "En la práctica:" : "In practice:"}
                    </strong>{" "}
                    {t("principles.align.practice")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  4. 📚 {t("principles.develop.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("principles.develop.content")}
                </p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "En la práctica:" : "In practice:"}
                    </strong>{" "}
                    {t("principles.develop.practice")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-pink-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  5. 🌟 {t("principles.grow.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("principles.grow.content")}
                </p>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "En la práctica:" : "In practice:"}
                    </strong>{" "}
                    {t("principles.grow.practice")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-indigo-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  6. 🔄 {t("principles.improve.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("principles.improve.content")}
                </p>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "En la práctica:" : "In practice:"}
                    </strong>{" "}
                    {t("principles.improve.practice")}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Herramientas Prácticas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("tools.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🎲</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("tools.delegation.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("tools.delegation.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("tools.kudos.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("tools.kudos.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("tools.okr.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("tools.okr.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("tools.competency.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("tools.competency.content")}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Management 3.0 en la Era de la IA (2025) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Management 3.0 en la Era de la IA (2025)"
              : "Management 3.0 in the AI Era (2025)"}
          </h2>

          <Card className="bg-gradient-to-br from-teal-50 to-white border-l-4 border-teal-500">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {isSpanish
                      ? "¿Cómo Management 3.0 se vuelve más relevante con la IA?"
                      : "How Management 3.0 becomes more relevant with AI?"}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "En 2025, la IA automatiza tareas, pero Management 3.0 es más necesario que nunca porque:"
                      : "In 2025, AI automates tasks, but Management 3.0 is more necessary than ever because:"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "La IA no puede energizar personas"
                          : "AI cannot energize people"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Copilot genera código, pero no puede motivar a un developer que perdió la pasión. Management 3.0 enseña a reconectar a tu equipo con su propósito, algo que ninguna IA puede hacer."
                          : "Copilot generates code, but can't motivate a developer who lost passion. Management 3.0 teaches how to reconnect your team with their purpose, something no AI can do."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Empoderamiento es crítico cuando la IA hace todo"
                          : "Empowerment is critical when AI does everything"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Si la IA genera código, ¿qué rol le queda al developer? Management 3.0 enseña a empoderar equipos para tomar decisiones arquitectónicas, de producto, y de impacto, no solo escribir código."
                          : "If AI generates code, what role does the developer have? Management 3.0 teaches how to empower teams to make architectural, product, and impact decisions, not just write code."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌱</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Competencias humanas se vuelven el diferenciador"
                          : "Human competencies become the differentiator"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA escribe código técnico perfecto. Pero las competencias de Management 3.0 (comunicación, empatía, liderazgo, creatividad) son imposibles de automatizar y determinan quién avanza en su carrera."
                          : "AI writes perfect technical code. But Management 3.0 competencies (communication, empathy, leadership, creativity) are impossible to automate and determine who advances in their career."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Mejora continua incluye ahora 'usar IA correctamente'"
                          : "Continuous improvement now includes 'using AI correctly'"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Management 3.0 siempre promovió experimentación. En 2025, incluye experimentar con IA: ¿Cuándo usamos Copilot? ¿Cuándo escribimos código manualmente? ¿Cómo validamos código generado por IA?"
                          : "Management 3.0 always promoted experimentation. In 2025, it includes experimenting with AI: When do we use Copilot? When do we write code manually? How do we validate AI-generated code?"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-teal-100 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>
                    {isSpanish
                      ? "En 2025, Management 3.0 no compite con la IA: la complementa."
                      : "In 2025, Management 3.0 doesn't compete with AI: it complements it."}
                  </strong>{" "}
                  {isSpanish
                    ? "Los mejores líderes tech usan IA para acelerar ejecución, pero aplican Management 3.0 para mantener equipos motivados, empoderados, alineados y en constante evolución. La tecnología cambia, pero las personas siguen siendo el corazón de todo."
                    : "The best tech leaders use AI to accelerate execution, but apply Management 3.0 to keep teams motivated, empowered, aligned and constantly evolving. Technology changes, but people remain at the heart of everything."}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-primary to-primary-600 text-white">
            <CardBody className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                {isSpanish
                  ? "¿Quieres liderar con Management 3.0?"
                  : "Want to lead with Management 3.0?"}
              </h2>
              <p className="text-xl mb-6 text-white/90">
                {isSpanish
                  ? "Te ayudo a implementar Management 3.0 en tu equipo tech."
                  : "I help you implement Management 3.0 in your tech team."}
              </p>
              <Button
                as={Link}
                className="font-semibold"
                color="default"
                href={`/${locale}`}
                size="lg"
              >
                {isSpanish ? "Agenda tu sesión" : "Schedule your session"}
              </Button>
            </CardBody>
          </Card>
        </section>
      </div>
    </>
  );
}
