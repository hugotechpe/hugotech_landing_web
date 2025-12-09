import { Card, CardBody } from "@heroui/card";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Button } from "@heroui/button";

import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Link } from "@/i18n/navigation";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({
    locale,
    namespace: "SoftSkillsDevelopers",
  });

  const title = t("metaTitle");
  const description = t("metaDescription");
  const canonicalUrl = `https://www.hugotech.pe/${locale}/glosario/soft-skills-developers`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: "https://www.hugotech.pe/es/glosario/soft-skills-developers",
        en: "https://www.hugotech.pe/en/glosario/soft-skills-developers",
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

export default function SoftSkillsDevelopersPage({
  params: { locale },
}: Props) {
  const t = useTranslations("SoftSkillsDevelopers");
  const isSpanish = locale === "es";

  const breadcrumbItems = [
    { name: isSpanish ? "Inicio" : "Home", url: `/${locale}` },
    { name: isSpanish ? "Glosario" : "Glossary", url: `/${locale}/glosario` },
    { name: t("title"), url: `/${locale}/glosario/soft-skills-developers` },
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
              <p className="text-lg text-default-700 leading-relaxed">
                {t("definition.content2")}
              </p>
            </CardBody>
          </Card>
        </section>

        {/* Por qué importan las Soft Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("whyMatter.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("whyMatter.hiring.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("whyMatter.hiring.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("whyMatter.senior.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("whyMatter.senior.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("whyMatter.teamwork.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("whyMatter.teamwork.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("whyMatter.impact.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("whyMatter.impact.content")}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Las 8 Soft Skills Críticas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("skills.title")}
          </h2>

          <div className="space-y-6">
            <Card className="border-l-4 border-blue-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  1. 🗣️ {t("skills.communication.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("skills.communication.content")}
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "Ejemplo práctico:" : "Practical example:"}
                    </strong>{" "}
                    {t("skills.communication.example")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  2. 🤝 {t("skills.collaboration.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("skills.collaboration.content")}
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "Ejemplo práctico:" : "Practical example:"}
                    </strong>{" "}
                    {t("skills.collaboration.example")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  3. 🧠 {t("skills.problemSolving.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("skills.problemSolving.content")}
                </p>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "Ejemplo práctico:" : "Practical example:"}
                    </strong>{" "}
                    {t("skills.problemSolving.example")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  4. 🎯 {t("skills.adaptability.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("skills.adaptability.content")}
                </p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "Ejemplo práctico:" : "Practical example:"}
                    </strong>{" "}
                    {t("skills.adaptability.example")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-pink-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  5. ❤️ {t("skills.empathy.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("skills.empathy.content")}
                </p>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "Ejemplo práctico:" : "Practical example:"}
                    </strong>{" "}
                    {t("skills.empathy.example")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-indigo-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  6. ⏰ {t("skills.timeManagement.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("skills.timeManagement.content")}
                </p>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "Ejemplo práctico:" : "Practical example:"}
                    </strong>{" "}
                    {t("skills.timeManagement.example")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-yellow-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  7. 💬 {t("skills.feedback.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("skills.feedback.content")}
                </p>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "Ejemplo práctico:" : "Practical example:"}
                    </strong>{" "}
                    {t("skills.feedback.example")}
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-teal-500">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  8. 🎓 {t("skills.learning.title")}
                </h3>
                <p className="text-default-700 leading-relaxed mb-3">
                  {t("skills.learning.content")}
                </p>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <p className="text-sm text-default-700">
                    <strong>
                      {isSpanish ? "Ejemplo práctico:" : "Practical example:"}
                    </strong>{" "}
                    {t("skills.learning.example")}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Soft Skills en la Era de la IA (2025) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Soft Skills en la Era de la IA (2025)"
              : "Soft Skills in the AI Era (2025)"}
          </h2>

          <Card className="bg-gradient-to-br from-cyan-50 to-white border-l-4 border-cyan-500">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {isSpanish
                      ? "¿Por qué las Soft Skills son tu mayor ventaja competitiva en 2025?"
                      : "Why are Soft Skills your biggest competitive advantage in 2025?"}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "ChatGPT puede escribir código perfecto. Copilot puede completar funciones. Claude puede debuggear errores. Pero ninguna IA puede:"
                      : "ChatGPT can write perfect code. Copilot can complete functions. Claude can debug errors. But no AI can:"}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-cyan-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎭</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Negociar plazos imposibles"
                          : "Negotiate impossible deadlines"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Cuando tu manager pide una feature 'para mañana', necesitas argumentar técnicamente por qué tomará 2 semanas. La IA no negocia."
                          : "When your manager asks for a feature 'by tomorrow', you need to technically argue why it will take 2 weeks. AI doesn't negotiate."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-cyan-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔥</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Gestionar conflictos humanos"
                          : "Manage human conflicts"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Dos developers seniors discuten sobre arquitectura. Necesitas mediar, encontrar consenso, y mantener al equipo unido. La IA no maneja ego."
                          : "Two senior developers argue about architecture. You need to mediate, find consensus, and keep the team united. AI doesn't handle ego."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-cyan-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧭</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Decidir qué NO hacer"
                          : "Decide what NOT to do"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA siempre sugiere soluciones. Pero en el mundo real, 80% de las ideas deben descartarse. Priorizar requiere criterio humano."
                          : "AI always suggests solutions. But in the real world, 80% of ideas must be discarded. Prioritizing requires human judgment."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-cyan-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Inspirar y motivar a otros"
                          : "Inspire and motivate others"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Un junior está perdiendo la confianza. Necesitas mentorearlo, mostrarle su progreso, y devolverle la motivación. La IA no inspira."
                          : "A junior is losing confidence. You need to mentor them, show their progress, and restore motivation. AI doesn't inspire."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-cyan-100 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>
                    {isSpanish
                      ? "En 2025, las Soft Skills no son un 'nice to have': son tu principal diferenciador."
                      : "In 2025, Soft Skills are not a 'nice to have': they are your main differentiator."}
                  </strong>{" "}
                  {isSpanish
                    ? "Los developers que dominan IA + Soft Skills ganan 40% más que quienes solo saben programar. La IA escribe código, pero el éxito requiere comunicación, empatía, liderazgo y criterio."
                    : "Developers who master AI + Soft Skills earn 40% more than those who only know how to code. AI writes code, but success requires communication, empathy, leadership and judgment."}
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
                  ? "¿Quieres desarrollar tus Soft Skills?"
                  : "Want to develop your Soft Skills?"}
              </h2>
              <p className="text-xl mb-6 text-white/90">
                {isSpanish
                  ? "Te ayudo a comunicar mejor, liderar equipos, y avanzar en tu carrera tech."
                  : "I help you communicate better, lead teams, and advance your tech career."}
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
