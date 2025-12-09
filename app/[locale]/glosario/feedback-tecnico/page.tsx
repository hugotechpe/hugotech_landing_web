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
  const t = await getTranslations({ locale, namespace: "FeedbackTecnico" });

  const title = t("metaTitle");
  const description = t("metaDescription");
  const canonicalUrl = `https://www.hugotech.pe/${locale}/glosario/feedback-tecnico`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: "https://www.hugotech.pe/es/glosario/feedback-tecnico",
        en: "https://www.hugotech.pe/en/glosario/feedback-tecnico",
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

export default function FeedbackTecnicoPage({ params }: Props) {
  const resolvedParams = use(params);
  const { locale } = resolvedParams;
  const t = useTranslations("FeedbackTecnico");
  const isSpanish = locale === "es";

  const breadcrumbItems = [
    { name: isSpanish ? "Inicio" : "Home", url: `/${locale}` },
    { name: isSpanish ? "Glosario" : "Glossary", url: `/${locale}/glosario` },
    { name: t("title"), url: `/${locale}/glosario/feedback-tecnico` },
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
                  <strong>{t("definition.key")}</strong>{" "}
                  {t("definition.keyText")}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Por qué es difícil dar feedback técnico */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("challenges.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-red-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">😰</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("challenges.fear.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("challenges.fear.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("challenges.ego.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("challenges.ego.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("challenges.time.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("challenges.time.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("challenges.words.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("challenges.words.content")}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Framework SBI para Feedback Técnico */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("sbi.title")}
          </h2>

          <Card className="mb-6">
            <CardBody className="p-6">
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {t("sbi.intro")}
              </p>
            </CardBody>
          </Card>

          <div className="space-y-6">
            <Card className="border-l-4 border-blue-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  1. 📍 {t("sbi.situation.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("sbi.situation.content")}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-default-700 mb-2">
                    <strong>{t("sbi.example")}</strong>
                  </p>
                  <p className="text-sm text-default-700 italic">
                    {t("sbi.situation.exampleText")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  2. 👁️ {t("sbi.behavior.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("sbi.behavior.content")}
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-default-700 mb-2">
                    <strong>{t("sbi.example")}</strong>
                  </p>
                  <p className="text-sm text-default-700 italic">
                    {t("sbi.behavior.exampleText")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  3. 💥 {t("sbi.impact.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("sbi.impact.content")}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-default-700 mb-2">
                    <strong>{t("sbi.example")}</strong>
                  </p>
                  <p className="text-sm text-default-700 italic">
                    {t("sbi.impact.exampleText")}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Ejemplos de Feedback Técnico */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("examples.title")}
          </h2>

          <div className="space-y-6">
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-4">
                  🔴 {t("examples.code.titleBad")}
                </h3>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="text-default-700 italic">
                    {t("examples.code.bad")}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-customgray mb-4">
                  ✅ {t("examples.code.titleGood")}
                </h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-default-700">{t("examples.code.good")}</p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-4">
                  🔴 {t("examples.architecture.titleBad")}
                </h3>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="text-default-700 italic">
                    {t("examples.architecture.bad")}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-customgray mb-4">
                  ✅ {t("examples.architecture.titleGood")}
                </h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-default-700">
                    {t("examples.architecture.good")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-4">
                  🔴 {t("examples.collaboration.titleBad")}
                </h3>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="text-default-700 italic">
                    {t("examples.collaboration.bad")}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-customgray mb-4">
                  ✅ {t("examples.collaboration.titleGood")}
                </h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-default-700">
                    {t("examples.collaboration.good")}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Feedback Técnico en la Era de la IA (2025) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Feedback Técnico en la Era de la IA (2025)"
              : "Technical Feedback in the AI Era (2025)"}
          </h2>

          <Card className="bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-500">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {isSpanish
                      ? "¿Cómo cambia el Feedback con código generado por IA?"
                      : "How does Feedback change with AI-generated code?"}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "En 2025, el 70% del código es generado o asistido por IA. El feedback técnico evoluciona:"
                      : "In 2025, 70% of code is generated or assisted by AI. Technical feedback evolves:"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Feedback sobre 'criterio' en lugar de sintaxis"
                          : "Feedback on 'judgment' instead of syntax"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Antes: 'Usa const en lugar de let'. Ahora: '¿Por qué elegiste esta arquitectura sobre microservicios?' El feedback se centra en decisiones estratégicas, no en código sintáctico."
                          : "Before: 'Use const instead of let'. Now: 'Why did you choose this architecture over microservices?' Feedback focuses on strategic decisions, not syntactic code."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Validar código de IA requiere feedback educativo"
                          : "Validating AI code requires educational feedback"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Los juniors usan Copilot sin validar. El feedback ahora es: 'Este código funciona, pero ¿entiendes por qué? ¿Qué pasa si cambias X?' Enseñar pensamiento crítico sobre IA."
                          : "Juniors use Copilot without validating. Feedback now is: 'This code works, but do you understand why? What happens if you change X?' Teaching critical thinking about AI."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔍</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Feedback sobre mantenibilidad a largo plazo"
                          : "Feedback on long-term maintainability"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA genera código que funciona ahora. El feedback humano pregunta: '¿Esto será mantenible en 2 años? ¿Escalable? ¿Testeable?' Perspectiva temporal que la IA no tiene."
                          : "AI generates code that works now. Human feedback asks: 'Will this be maintainable in 2 years? Scalable? Testable?' Temporal perspective that AI doesn't have."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Feedback sobre colaboración humana"
                          : "Feedback on human collaboration"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA no trabaja en equipo. El feedback ahora incluye: '¿Comunicaste esta decisión al equipo? ¿Documentaste el contexto?' Aspectos humanos que la IA ignora."
                          : "AI doesn't work in teams. Feedback now includes: 'Did you communicate this decision to the team? Did you document the context?' Human aspects that AI ignores."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-emerald-100 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>
                    {isSpanish
                      ? "En 2025, el feedback técnico no desaparece: se vuelve más humano."
                      : "In 2025, technical feedback doesn't disappear: it becomes more human."}
                  </strong>{" "}
                  {isSpanish
                    ? "La IA revisa sintaxis automáticamente. Los humanos damos feedback sobre criterio, contexto, mantenibilidad, impacto en el equipo, y decisiones estratégicas. Eso es irremplazable."
                    : "AI automatically reviews syntax. Humans give feedback on judgment, context, maintainability, team impact, and strategic decisions. That's irreplaceable."}
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
                  ? "¿Quieres mejorar tu Feedback Técnico?"
                  : "Want to improve your Technical Feedback?"}
              </h2>
              <p className="text-xl mb-6 text-white/90">
                {isSpanish
                  ? "Te enseño a dar feedback constructivo que acelera el crecimiento de tu equipo."
                  : "I teach you to give constructive feedback that accelerates your team's growth."}
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
