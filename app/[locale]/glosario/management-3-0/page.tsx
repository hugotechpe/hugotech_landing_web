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
        ? "Management 3.0: Liderazgo Ágil para Equipos Tech | HugoTech"
        : "Management 3.0: Agile Leadership for Tech Teams | HugoTech",
    description:
      locale === "es"
        ? "Descubre Management 3.0: el framework de liderazgo moderno para equipos tech. Energizar personas, empowerment, alinear restricciones. En 2025, es más relevante que nunca."
        : "Discover Management 3.0: the modern leadership framework for tech teams. Energize people, empowerment, align constraints. In 2025, it's more relevant than ever.",
    keywords:
      locale === "es"
        ? ["management 3.0", "liderazgo ágil", "equipos tech", "empowerment", "jurgen appelo"]
        : ["management 3.0", "agile leadership", "tech teams", "empowerment", "jurgen appelo"],
    locale,
    path: "glosario/management-3-0",
  });
}

export default async function Management30Page({
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
            Management 3.0
          </li>
        </ol>
      </nav>

      <div className="text-center mb-16">
        <Chip className="mb-6" color="primary" size="lg" variant="flat">
          {locale === "es" ? "Framework de Liderazgo" : "Leadership Framework"}
        </Chip>
        <h1 className="text-5xl md:text-6xl font-bold text-customgray mb-6">
          Management 3.0
        </h1>
        <p className="text-2xl text-default-700 max-w-3xl mx-auto">
          {locale === "es"
            ? "El framework de liderazgo moderno que transforma equipos jerárquicos en sistemas adaptativos, creativos y autogestionados."
            : "The modern leadership framework that transforms hierarchical teams into adaptive, creative and self-managed systems."}
        </p>
      </div>

      <section className="mb-16">
        <Card>
          <CardBody className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-customgray mb-6">
              {locale === "es" ? "¿Qué es Management 3.0?" : "What is Management 3.0?"}
            </h2>
            <p className="text-xl text-default-700 leading-relaxed mb-4">
              {locale === "es"
                ? "Management 3.0 es un conjunto de juegos, herramientas y prácticas que ayuda a líderes y equipos a trabajar con una mentalidad ágil y centrada en las personas. No es una metodología rígida, sino una filosofía de liderazgo que reconoce que las organizaciones son sistemas complejos donde las personas importan más que los procesos."
                : "Management 3.0 is a set of games, tools and practices that helps leaders and teams work with an agile and people-centered mindset. It's not a rigid methodology, but a leadership philosophy that recognizes that organizations are complex systems where people matter more than processes."}
            </p>
            <p className="text-lg text-default-600">
              {locale === "es"
                ? "Creado por Jurgen Appelo, Management 3.0 surge como respuesta a los modelos tradicionales de management (comando-control) y propone que los mejores resultados vienen de equipos empoderados, motivados y alineados con el propósito."
                : "Created by Jurgen Appelo, Management 3.0 emerges as a response to traditional management models (command-control) and proposes that the best results come from empowered, motivated and purpose-aligned teams."}
            </p>
          </CardBody>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-customgray mb-8">
          {locale === "es"
            ? "Los 6 Principios de Management 3.0"
            : "The 6 Principles of Management 3.0"}
        </h2>

        <div className="space-y-6">
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es" ? "1. Energizar a las personas" : "1. Energize people"}
              </h3>
              <p className="text-default-700 mb-3">
                {locale === "es"
                  ? "Las personas felices, motivadas y conectadas con su propósito trabajan mejor. El rol del líder es crear un ambiente donde las personas se sientan valoradas, escuchadas y con autonomía."
                  : "Happy, motivated people connected to their purpose work better. The leader's role is to create an environment where people feel valued, heard and autonomous."}
              </p>
              <p className="text-sm text-default-600 italic">
                {locale === "es"
                  ? "Práctica: Celebrar logros del equipo, hacer retrospectivas enfocadas en aprendizajes (no culpas), y dar espacio para experimentación."
                  : "Practice: Celebrate team achievements, hold retrospectives focused on learnings (not blame), and give space for experimentation."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es" ? "2. Empoderar equipos" : "2. Empower teams"}
              </h3>
              <p className="text-default-700 mb-3">
                {locale === "es"
                  ? "Los equipos deben tener autoridad para tomar decisiones sin pedir permiso constantemente. El líder no controla, facilita. La autonomía genera compromiso."
                  : "Teams must have authority to make decisions without constantly asking permission. The leader doesn't control, they facilitate. Autonomy generates commitment."}
              </p>
              <p className="text-sm text-default-600 italic">
                {locale === "es"
                  ? "Práctica: Usar Delegation Poker para definir qué decisiones toma el equipo sin consultar, cuáles requieren consenso, y cuáles son del líder."
                  : "Practice: Use Delegation Poker to define which decisions the team makes without consulting, which require consensus, and which are the leader's."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es" ? "3. Alinear restricciones" : "3. Align constraints"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "La libertad absoluta no funciona. Los equipos necesitan claridad sobre objetivos, valores, y límites. El líder define el 'marco' dentro del cual el equipo tiene autonomía."
                  : "Absolute freedom doesn't work. Teams need clarity on objectives, values, and limits. The leader defines the 'framework' within which the team has autonomy."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "4. Desarrollar competencias"
                  : "4. Develop competencies"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Las personas deben crecer constantemente en habilidades técnicas y blandas. El líder invierte en el desarrollo del equipo porque eso multiplica el impacto."
                  : "People must constantly grow in technical and soft skills. The leader invests in team development because that multiplies impact."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "5. Hacer crecer la estructura"
                  : "5. Grow the structure"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "La estructura organizacional debe evolucionar con el equipo. No aferrarse a jerarquías rígidas. Permitir que roles y responsabilidades cambien orgánicamente."
                  : "Organizational structure must evolve with the team. Don't cling to rigid hierarchies. Allow roles and responsibilities to change organically."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es" ? "6. Mejorar continuamente" : "6. Improve continuously"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Nada es perfecto. La organización debe tener mecanismos para detectar qué no funciona, experimentar con cambios, y aprender rápido de los errores."
                  : "Nothing is perfect. The organization must have mechanisms to detect what doesn't work, experiment with changes, and learn quickly from mistakes."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
    </HomeLayout>
  );
}
