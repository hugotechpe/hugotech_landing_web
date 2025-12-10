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
        ? "Feedback Técnico: Cómo dar críticas constructivas sin romper egos | HugoTech"
        : "Technical Feedback: How to give constructive criticism without breaking egos | HugoTech",
    description:
      locale === "es"
        ? "Aprende a dar feedback técnico usando el framework SBI. En 2025, el feedback se centra en criterio estratégico, no en sintaxis."
        : "Learn to give technical feedback using the SBI framework. In 2025, feedback focuses on strategic judgment, not syntax.",
    locale,
    path: "glosario/feedback-tecnico",
  });
}

export default async function FeedbackTecnicoPage({
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
            {locale === "es" ? "Feedback Técnico" : "Technical Feedback"}
          </li>
        </ol>
      </nav>

      <div className="text-center mb-16">
        <Chip className="mb-6" color="primary" size="lg" variant="flat">
          {locale === "es" ? "Comunicación Efectiva" : "Effective Communication"}
        </Chip>
        <h1 className="text-5xl md:text-6xl font-bold text-customgray mb-6">
          {locale === "es" ? "Feedback Técnico" : "Technical Feedback"}
        </h1>
        <p className="text-2xl text-default-700 max-w-3xl mx-auto">
          {locale === "es"
            ? "El arte de dar críticas constructivas que aceleran el crecimiento sin destruir la confianza."
            : "The art of giving constructive criticism that accelerates growth without destroying trust."}
        </p>
      </div>

      <section className="mb-16">
        <Card>
          <CardBody className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-customgray mb-6">
              {locale === "es"
                ? "Framework SBI para Feedback Técnico"
                : "SBI Framework for Technical Feedback"}
            </h2>
            <p className="text-xl text-default-700 leading-relaxed mb-6">
              {locale === "es"
                ? "SBI (Situation-Behavior-Impact) es un framework usado en coaching profesional que te ayuda a estructurar feedback de forma clara, específica y no atacante."
                : "SBI (Situation-Behavior-Impact) is a framework used in professional coaching that helps you structure feedback in a clear, specific and non-attacking way."}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-customgray mb-2">
                  {locale === "es" ? "1. Situación (Contexto específico)" : "1. Situation (Specific context)"}
                </h3>
                <p className="text-default-700">
                  {locale === "es"
                    ? "Describe CUÁNDO y DÓNDE ocurrió el comportamiento. Sé específico."
                    : "Describe WHEN and WHERE the behavior occurred. Be specific."}
                </p>
                <p className="text-sm text-default-600 italic mt-2">
                  {locale === "es"
                    ? "Ejemplo: 'En la PR #245 del feature de pagos que revisé ayer...'"
                    : "Example: 'In the PR #245 of the payments feature I reviewed yesterday...'"}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-customgray mb-2">
                  {locale === "es" ? "2. Comportamiento (Observable y objetivo)" : "2. Behavior (Observable and objective)"}
                </h3>
                <p className="text-default-700">
                  {locale === "es"
                    ? "Describe QUÉ hizo la persona de forma observable. No interpretes intenciones."
                    : "Describe WHAT the person did in an observable way. Don't interpret intentions."}
                </p>
                <p className="text-sm text-default-600 italic mt-2">
                  {locale === "es"
                    ? "Ejemplo: '...vi que el método processPayment() tiene 250 líneas, maneja 5 responsabilidades diferentes...'"
                    : "Example: '...I saw that the processPayment() method has 250 lines, handles 5 different responsibilities...'"}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-customgray mb-2">
                  {locale === "es" ? "3. Impacto (Consecuencias concretas)" : "3. Impact (Concrete consequences)"}
                </h3>
                <p className="text-default-700">
                  {locale === "es"
                    ? "Explica POR QUÉ eso es un problema. Conecta con impacto real: mantenibilidad, bugs, tiempo de otros."
                    : "Explain WHY that's a problem. Connect with real impact: maintainability, bugs, others' time."}
                </p>
                <p className="text-sm text-default-600 italic mt-2">
                  {locale === "es"
                    ? "Ejemplo: 'Esto hace que sea muy difícil debuggear problemas en producción. ¿Te parece bien si lo refactorizamos juntos?'"
                    : "Example: 'This makes it very difficult to debug production problems. How about we refactor it together?'"}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
    </HomeLayout>
  );
}
