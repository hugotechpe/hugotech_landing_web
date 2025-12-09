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
    namespace: "LiderazgoIntrovertidos",
  });

  const title = t("metaTitle");
  const description = t("metaDescription");
  const canonicalUrl = `https://www.hugotech.pe/${locale}/glosario/liderazgo-introvertidos`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: "https://www.hugotech.pe/es/glosario/liderazgo-introvertidos",
        en: "https://www.hugotech.pe/en/glosario/liderazgo-introvertidos",
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

export default function LiderazgoIntrovertidosPage({
  params: { locale },
}: Props) {
  const t = useTranslations("LiderazgoIntrovertidos");
  const isSpanish = locale === "es";

  const breadcrumbItems = [
    { name: isSpanish ? "Inicio" : "Home", url: `/${locale}` },
    { name: isSpanish ? "Glosario" : "Glossary", url: `/${locale}/glosario` },
    {
      name: t("title"),
      url: `/${locale}/glosario/liderazgo-introvertidos`,
    },
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
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>{t("definition.stat")}</strong>{" "}
                  {t("definition.statText")}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Mitos sobre Introversión y Liderazgo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("myths.title")}
          </h2>

          <div className="space-y-6">
            <Card className="border-l-4 border-red-500">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">❌</div>
                  <div>
                    <h3 className="text-xl font-bold text-customgray mb-3">
                      {t("myths.myth1.title")}
                    </h3>
                    <p className="text-default-700 leading-relaxed mb-3">
                      {t("myths.myth1.content")}
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-default-700">
                        <strong>✅ {t("myths.reality")}</strong>{" "}
                        {t("myths.myth1.reality")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">❌</div>
                  <div>
                    <h3 className="text-xl font-bold text-customgray mb-3">
                      {t("myths.myth2.title")}
                    </h3>
                    <p className="text-default-700 leading-relaxed mb-3">
                      {t("myths.myth2.content")}
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-default-700">
                        <strong>✅ {t("myths.reality")}</strong>{" "}
                        {t("myths.myth2.reality")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">❌</div>
                  <div>
                    <h3 className="text-xl font-bold text-customgray mb-3">
                      {t("myths.myth3.title")}
                    </h3>
                    <p className="text-default-700 leading-relaxed mb-3">
                      {t("myths.myth3.content")}
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-default-700">
                        <strong>✅ {t("myths.reality")}</strong>{" "}
                        {t("myths.myth3.reality")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">❌</div>
                  <div>
                    <h3 className="text-xl font-bold text-customgray mb-3">
                      {t("myths.myth4.title")}
                    </h3>
                    <p className="text-default-700 leading-relaxed mb-3">
                      {t("myths.myth4.content")}
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-default-700">
                        <strong>✅ {t("myths.reality")}</strong>{" "}
                        {t("myths.myth4.reality")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Fortalezas de los Líderes Introvertidos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("strengths.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">👂</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("strengths.listening.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("strengths.listening.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("strengths.thinking.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("strengths.thinking.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("strengths.oneOnOne.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("strengths.oneOnOne.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("strengths.calm.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("strengths.calm.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("strengths.writing.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("strengths.writing.content")}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-customgray mb-3">
                  {t("strengths.empower.title")}
                </h3>
                <p className="text-default-700 leading-relaxed">
                  {t("strengths.empower.content")}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Estrategias Prácticas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {t("strategies.title")}
          </h2>

          <div className="space-y-6">
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  💬 {t("strategies.meetings.title")}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.meetings.tip1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.meetings.tip2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.meetings.tip3")}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  🔋 {t("strategies.energy.title")}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.energy.tip1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.energy.tip2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.energy.tip3")}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-customgray mb-3">
                  📝 {t("strategies.communication.title")}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.communication.tip1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.communication.tip2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{t("strategies.communication.tip3")}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Liderazgo Introvertido en la Era de la IA (2025) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Liderazgo Introvertido en la Era de la IA (2025)"
              : "Introverted Leadership in the AI Era (2025)"}
          </h2>

          <Card className="bg-gradient-to-br from-violet-50 to-white border-l-4 border-violet-500">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {isSpanish
                      ? "¿Por qué los Líderes Introvertidos tienen ventaja en la Era de la IA?"
                      : "Why do Introverted Leaders have an advantage in the AI Era?"}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "En 2025, la IA revoluciona el trabajo, pero los líderes introvertidos están mejor posicionados porque:"
                      : "In 2025, AI revolutionizes work, but introverted leaders are better positioned because:"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Pensamiento profundo es más valioso que rapidez"
                          : "Deep thinking is more valuable than speed"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA genera respuestas rápidas, pero superficiales. Los líderes introvertidos destacan por su capacidad de análisis profundo, pensamiento estratégico a largo plazo, y decisiones bien fundamentadas."
                          : "AI generates fast but superficial answers. Introverted leaders stand out for their deep analysis, long-term strategic thinking, and well-founded decisions."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👂</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Escuchar activamente diferencia a los humanos"
                          : "Active listening differentiates humans"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA 'escucha' datos, pero no empatiza. Los líderes introvertidos sobresalen en escucha activa profunda, captar emociones no expresadas, y entender contextos humanos que la IA no puede procesar."
                          : "AI 'listens' to data but doesn't empathize. Introverted leaders excel at deep active listening, capturing unexpressed emotions, and understanding human contexts that AI cannot process."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✍️</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Comunicación asíncrona es el nuevo estándar"
                          : "Asynchronous communication is the new standard"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "El trabajo remoto + IA favoreció la comunicación escrita (Slack, Notion, RFCs). Los líderes introvertidos naturalmente destacan en comunicación clara, concisa y reflexiva por escrito."
                          : "Remote work + AI favored written communication (Slack, Notion, RFCs). Introverted leaders naturally excel at clear, concise and thoughtful written communication."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "One-on-ones son más críticos que reuniones masivas"
                          : "One-on-ones are more critical than mass meetings"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Con la IA automatizando procesos, el valor del líder está en conexiones profundas individuales. Los líderes introvertidos sobresalen en one-on-ones, mentoring personal, y desarrollo humano."
                          : "With AI automating processes, the leader's value is in deep individual connections. Introverted leaders excel at one-on-ones, personal mentoring, and human development."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-violet-100 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>
                    {isSpanish
                      ? "En 2025, la introversión dejó de ser una 'desventaja': es una superpotencia de liderazgo."
                      : "In 2025, introversion stopped being a 'disadvantage': it's a leadership superpower."}
                  </strong>{" "}
                  {isSpanish
                    ? "Mientras la IA domina la velocidad y el volumen, los líderes introvertidos dominan la profundidad, la reflexión, la empatía y las conexiones humanas auténticas. Eso ninguna IA puede replicar."
                    : "While AI dominates speed and volume, introverted leaders dominate depth, reflection, empathy and authentic human connections. No AI can replicate that."}
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
                  ? "¿Eres líder introvertido?"
                  : "Are you an introverted leader?"}
              </h2>
              <p className="text-xl mb-6 text-white/90">
                {isSpanish
                  ? "Te ayudo a liderar desde tu autenticidad, sin forzarte a ser extrovertido."
                  : "I help you lead from your authenticity, without forcing you to be extroverted."}
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
