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
  const t = await getTranslations({ locale, namespace: "OneOnOnes" });

  const title = t("metaTitle");
  const description = t("metaDescription");
  const canonicalUrl = `https://www.hugotech.pe/${locale}/glosario/one-on-ones`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: "https://www.hugotech.pe/es/glosario/one-on-ones",
        en: "https://www.hugotech.pe/en/glosario/one-on-ones",
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

export default function OneOnOnesPage({ params }: Props) {
  const resolvedParams = use(params);
  const { locale } = resolvedParams;
  const t = useTranslations("OneOnOnes");
  const isSpanish = locale === "es";

  const breadcrumbItems = [
    { name: isSpanish ? "Inicio" : "Home", url: `/${locale}` },
    { name: isSpanish ? "Glosario" : "Glossary", url: `/${locale}/glosario` },
    { name: t("title"), url: `/${locale}/glosario/one-on-ones` },
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

        {/* Por qué los One-on-Ones son críticos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("why.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("why.trust.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("why.trust.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("why.problems.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("why.problems.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("why.growth.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("why.growth.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("why.feedback.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("why.feedback.content")}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Estructura de un One-on-One efectivo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("structure.title")}
          </h2>

          <div className="space-y-6">
            <Card className="border-l-4 border-blue-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  1. ⏰ {t("structure.duration.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("structure.duration.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  2. 📅 {t("structure.frequency.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("structure.frequency.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  3. 📝 {t("structure.agenda.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("structure.agenda.content")}
                </p>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("structure.agenda.item1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("structure.agenda.item2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("structure.agenda.item3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("structure.agenda.item4")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("structure.agenda.item5")}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  4. 👂 {t("structure.listen.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("structure.listen.content")}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Preguntas poderosas para One-on-Ones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("questions.title")}
          </h2>

          <div className="space-y-6">
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-4">
                  🌟 {t("questions.wellbeing.title")}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.wellbeing.q1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.wellbeing.q2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.wellbeing.q3")}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-4">
                  🚀 {t("questions.growth.title")}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.growth.q1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.growth.q2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.growth.q3")}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-4">
                  🤝 {t("questions.team.title")}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.team.q1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.team.q2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.team.q3")}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-4">
                  💡 {t("questions.feedback.title")}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.feedback.q1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.feedback.q2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("questions.feedback.q3")}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* One-on-Ones en la Era de la IA (2025) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "One-on-Ones en la Era de la IA (2025)"
              : "One-on-Ones in the AI Era (2025)"}
          </h2>

          <Card className="bg-gradient-to-br from-rose-50 to-white border-l-4 border-rose-500">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {isSpanish
                      ? "¿Por qué los One-on-Ones son MÁS importantes en la Era de la IA?"
                      : "Why are One-on-Ones MORE important in the AI Era?"}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "En 2025, la IA automatiza tareas, pero los One-on-Ones se vuelven el diferenciador crítico entre equipos buenos y excepcionales:"
                      : "In 2025, AI automates tasks, but One-on-Ones become the critical differentiator between good and exceptional teams:"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-rose-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤖</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "La IA no puede tener conversaciones existenciales"
                          : "AI cannot have existential conversations"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "ChatGPT puede responder preguntas técnicas. Pero no puede hablar sobre: '¿Sigo en el camino correcto?' '¿Debería cambiar de empresa?' '¿Me siento realizado?' Los One-on-Ones son el único espacio para eso."
                          : "ChatGPT can answer technical questions. But it can't talk about: 'Am I on the right path?' 'Should I change companies?' 'Do I feel fulfilled?' One-on-Ones are the only space for that."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-rose-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😔</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Detectar burnout temprano requiere conexión humana"
                          : "Detecting burnout early requires human connection"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA no nota cuando alguien está apagado, desmotivado, o al borde del colapso. Solo en un One-on-One puedes preguntar: '¿Cómo te sientes realmente?' y captar las señales invisibles."
                          : "AI doesn't notice when someone is burned out, unmotivated, or on the verge of collapse. Only in a One-on-One can you ask: 'How do you really feel?' and capture the invisible signals."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-rose-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "El crecimiento profesional no se automatiza"
                          : "Professional growth cannot be automated"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA puede sugerir cursos o libros. Pero no puede discutir tu próximo paso de carrera, prepararte para Tech Lead, o ayudarte a negociar un aumento. Eso requiere un One-on-One con alguien que te conoce."
                          : "AI can suggest courses or books. But it can't discuss your next career step, prepare you for Tech Lead, or help you negotiate a raise. That requires a One-on-One with someone who knows you."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-rose-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Conflictos humanos no se resuelven con algoritmos"
                          : "Human conflicts are not solved with algorithms"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Tensiones entre developers, frustraciones con un manager, sentir que tu trabajo no importa. Estos temas solo se exploran en un One-on-One seguro, donde hay confianza y empatía."
                          : "Tensions between developers, frustrations with a manager, feeling like your work doesn't matter. These topics are only explored in a safe One-on-One, where there's trust and empathy."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-rose-100 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>
                    {isSpanish
                      ? "En 2025, la IA resuelve problemas técnicos. Los One-on-Ones resuelven problemas humanos."
                      : "In 2025, AI solves technical problems. One-on-Ones solve human problems."}
                  </strong>{" "}
                  {isSpanish
                    ? "Los equipos más exitosos usan IA para acelerar ejecución, pero mantienen One-on-Ones constantes para garantizar bienestar, claridad, crecimiento y conexión humana. Eso es lo que la IA nunca podrá reemplazar."
                    : "The most successful teams use AI to accelerate execution, but maintain constant One-on-Ones to ensure wellbeing, clarity, growth and human connection. That's what AI can never replace."}
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
                  ? "¿Quieres mejorar tus One-on-Ones?"
                  : "Want to improve your One-on-Ones?"}
              </h2>
              <p className="text-xl mb-6 text-white/90">
                {isSpanish
                  ? "Te enseño a tener conversaciones profundas que transforman equipos."
                  : "I teach you to have deep conversations that transform teams."}
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
