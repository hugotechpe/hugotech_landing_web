import { setRequestLocale } from "next-intl/server";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import Link from "next/link";
import { generateMetadata as genMetadata } from "@/lib/metadata";
import HomeLayout from "../../HomeLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return genMetadata({
    title:
      locale === "es"
        ? "One-on-Ones: El superpoder del liderazgo técnico | HugoTech"
        : "One-on-Ones: The superpower of technical leadership | HugoTech",
    description:
      locale === "es"
        ? "Aprende a tener One-on-Ones efectivos: estructura, preguntas poderosas, frecuencia. En 2025, los One-on-Ones son más críticos que nunca."
        : "Learn to have effective One-on-Ones: structure, powerful questions, frequency. In 2025, One-on-Ones are more critical than ever.",
    locale,
    path: "glosario/one-on-ones",
  });
}

export default async function OneOnOnesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <HomeLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-default-600">
          <li>
            <Link className="hover:text-primary transition-colors" href="/">
              {locale === "es" ? "Inicio" : "Home"}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link className="hover:text-primary transition-colors" href="/glosario">
              {locale === "es" ? "Glosario Tech" : "Tech Glossary"}
            </Link>
          </li>
          <li>/</li>
          <li className="text-primary font-semibold">
            One-on-Ones
          </li>
        </ol>
      </nav>

      <div className="text-center mb-16">
        <Chip className="mb-6" color="primary" size="lg" variant="flat">
          {locale === "es" ? "Herramienta de Liderazgo" : "Leadership Tool"}
        </Chip>
        <h1 className="text-5xl md:text-6xl font-bold text-customgray mb-6">
          One-on-Ones
        </h1>
        <p className="text-2xl text-default-700 max-w-3xl mx-auto">
          {locale === "es"
            ? "La herramienta de liderazgo más poderosa y subutilizada en equipos tech."
            : "The most powerful and underutilized leadership tool in tech teams."}
        </p>
      </div>

      <section className="mb-16">
        <Card>
          <CardBody className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-customgray mb-6">
              {locale === "es"
                ? "¿Qué son los One-on-Ones?"
                : "What are One-on-Ones?"}
            </h2>
            <p className="text-xl text-default-700 leading-relaxed mb-4">
              {locale === "es"
                ? "Son reuniones regulares (usualmente semanales o quincenales) entre un líder y un miembro de su equipo, enfocadas en el crecimiento profesional, bienestar emocional, desafíos del día a día, y alineación de expectativas."
                : "They are regular meetings (usually weekly or biweekly) between a leader and a team member, focused on professional growth, emotional well-being, day-to-day challenges, and alignment of expectations."}
            </p>
            <p className="text-lg font-semibold text-primary">
              {locale === "es"
                ? "Clave: El One-on-One es el espacio del colaborador, no del líder. La agenda la define el colaborador."
                : "Key: The One-on-One is the collaborator's space, not the leader's. The agenda is defined by the collaborator."}
            </p>
          </CardBody>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-customgray mb-8">
          {locale === "es"
            ? "Estructura de un One-on-One efectivo"
            : "Structure of an effective One-on-One"}
        </h2>

        <div className="space-y-6">
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es" ? "Duración: 30-45 minutos" : "Duration: 30-45 minutes"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "30 minutos es el mínimo. 45 minutos es ideal para conversaciones profundas. Menos de 30 se siente superficial."
                  : "30 minutes is the minimum. 45 minutes is ideal for deep conversations. Less than 30 feels superficial."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es" ? "Frecuencia: Semanal o quincenal" : "Frequency: Weekly or biweekly"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Semanal es ideal para juniors o personas nuevas. Quincenal funciona para seniors con alta autonomía. NUNCA mensual: pierde efectividad."
                  : "Weekly is ideal for juniors or new people. Biweekly works for seniors with high autonomy. NEVER monthly: loses effectiveness."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es" ? "Regla de oro: Escucha 80%, habla 20%" : "Golden rule: Listen 80%, talk 20%"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "El One-on-One no es para que el líder hable. Es para que el colaborador hable y el líder escuche activamente, haga preguntas profundas, y ayude a clarificar pensamientos."
                  : "The One-on-One is not for the leader to talk. It's for the collaborator to talk and the leader to actively listen, ask deep questions, and help clarify thoughts."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
    </HomeLayout>
  );
}
