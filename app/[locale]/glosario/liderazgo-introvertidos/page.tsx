import { setRequestLocale } from "next-intl/server";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { generateMetadata as genMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return genMetadata({
    title:
      locale === "es"
        ? "Liderazgo para Introvertidos: Tu Introversión es tu Superpotencia | HugoTech"
        : "Leadership for Introverts: Your Introversion is your Superpower | HugoTech",
    description:
      locale === "es"
        ? "Descubre por qué el 40% de líderes exitosos son introvertidos. Aprende a liderar desde tu autenticidad: escucha profunda, pensamiento estratégico, one-on-ones."
        : "Discover why 40% of successful leaders are introverts. Learn to lead from your authenticity: deep listening, strategic thinking, one-on-ones.",
    locale,
    path: "glosario/liderazgo-introvertidos",
  });
}

export default async function LiderazgoIntrovertidosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <Chip className="mb-6" color="primary" size="lg" variant="flat">
          {locale === "es" ? "Liderazgo Auténtico" : "Authentic Leadership"}
        </Chip>
        <h1 className="text-5xl md:text-6xl font-bold text-customgray mb-6">
          {locale === "es" ? "Liderazgo para Introvertidos" : "Leadership for Introverts"}
        </h1>
        <p className="text-2xl text-default-700 max-w-3xl mx-auto">
          {locale === "es"
            ? "No necesitas ser extrovertido para ser un gran líder. Tu introversión puede ser tu mayor fortaleza."
            : "You don't need to be an extrovert to be a great leader. Your introversion can be your greatest strength."}
        </p>
      </div>

      <section className="mb-16">
        <Card>
          <CardBody className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-customgray mb-6">
              {locale === "es"
                ? "¿Qué significa Liderazgo para Introvertidos?"
                : "What does Leadership for Introverts mean?"}
            </h2>
            <p className="text-xl text-default-700 leading-relaxed mb-4">
              {locale === "es"
                ? "Es un estilo de liderazgo que honra la naturaleza de las personas introvertidas: reflexión profunda, escucha activa, pensamiento estratégico, y conexiones uno-a-uno. Los líderes introvertidos no tratan de 'fingir' ser extrovertidos, sino que lideran desde su autenticidad."
                : "It's a leadership style that honors the nature of introverted people: deep reflection, active listening, strategic thinking, and one-on-one connections. Introverted leaders don't try to 'fake' being extroverts, but lead from their authenticity."}
            </p>
            <p className="text-lg font-semibold text-primary">
              {locale === "es"
                ? "El 40% de ejecutivos son introvertidos. Incluye nombres como Bill Gates, Larry Page, Mark Zuckerberg, y muchos CTOs de startups unicornio."
                : "40% of executives are introverts. Includes names like Bill Gates, Larry Page, Mark Zuckerberg, and many CTOs of unicorn startups."}
            </p>
          </CardBody>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-customgray mb-8">
          {locale === "es"
            ? "Fortalezas de los Líderes Introvertidos"
            : "Strengths of Introverted Leaders"}
        </h2>

        <div className="space-y-6">
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Escucha profunda y activa"
                  : "Deep and active listening"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Los líderes introvertidos escuchan más de lo que hablan. Eso les permite captar problemas que otros ignoran, entender emociones no expresadas, y tomar decisiones más informadas."
                  : "Introverted leaders listen more than they talk. This allows them to capture problems others ignore, understand unexpressed emotions, and make more informed decisions."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Pensamiento estratégico"
                  : "Strategic thinking"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Los introvertidos procesan información profundamente antes de actuar. Eso los hace excelentes para decisiones arquitectónicas complejas, planificación a largo plazo, y prever riesgos."
                  : "Introverts process information deeply before acting. This makes them excellent for complex architectural decisions, long-term planning, and anticipating risks."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Conexiones uno-a-uno auténticas"
                  : "Authentic one-on-one connections"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Los líderes introvertidos destacan en one-on-ones. Prefieren conversaciones profundas con una persona que small talk con 20. Eso genera confianza y lealtad en el equipo."
                  : "Introverted leaders excel at one-on-ones. They prefer deep conversations with one person over small talk with 20. This builds trust and loyalty in the team."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es" ? "Calma en crisis" : "Calm in crisis"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Los introvertidos no reaccionan impulsivamente. En momentos de crisis (producción caída, conflicto en equipo), su naturaleza reflexiva les permite mantener la calma y tomar decisiones racionales."
                  : "Introverts don't react impulsively. In crisis moments (production down, team conflict), their reflective nature allows them to stay calm and make rational decisions."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
}
