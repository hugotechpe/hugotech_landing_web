import { setRequestLocale } from "next-intl/server";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import HomeLayout from "../../HomeLayout";

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
        ? "Soft Skills para Developers: Comunicación, Liderazgo y Empatía | HugoTech"
        : "Soft Skills for Developers: Communication, Leadership and Empathy | HugoTech",
    description:
      locale === "es"
        ? "Descubre las 8 Soft Skills críticas que todo developer necesita para crecer: comunicación, colaboración, empatía, adaptabilidad. En 2025, las Soft Skills son tu ventaja competitiva frente a la IA."
        : "Discover the 8 critical Soft Skills every developer needs to grow: communication, collaboration, empathy, adaptability. In 2025, Soft Skills are your competitive advantage against AI.",
    keywords:
      locale === "es"
        ? [
            "soft skills developers",
            "habilidades blandas programadores",
            "comunicación técnica",
            "liderazgo developers",
            "empatía tech",
            "trabajo en equipo desarrollo",
            "feedback técnico",
            "adaptabilidad tech",
          ]
        : [
            "soft skills developers",
            "soft skills programmers",
            "technical communication",
            "developer leadership",
            "tech empathy",
            "teamwork development",
            "technical feedback",
            "tech adaptability",
          ],
    locale,
    path: "glosario/soft-skills-developers",
  });
}

export default async function SoftSkillsDevelopersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <HomeLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <Chip className="mb-6" color="primary" size="lg" variant="flat">
          {locale === "es" ? "Habilidades Humanas" : "Human Skills"}
        </Chip>
        <h1 className="text-5xl md:text-6xl font-bold text-customgray mb-6">
          {locale === "es"
            ? "Soft Skills para Developers"
            : "Soft Skills for Developers"}
        </h1>
        <p className="text-2xl text-default-700 max-w-3xl mx-auto">
          {locale === "es"
            ? "Las habilidades humanas que la IA no puede reemplazar y que determinan quién avanza en su carrera tech."
            : "The human skills that AI cannot replace and that determine who advances in their tech career."}
        </p>
      </div>

      {/* Definición */}
      <section className="mb-16">
        <Card>
          <CardBody className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-customgray mb-6">
              {locale === "es"
                ? "¿Qué son las Soft Skills?"
                : "What are Soft Skills?"}
            </h2>
            <p className="text-xl text-default-700 leading-relaxed mb-4">
              {locale === "es"
                ? "Las Soft Skills son las habilidades interpersonales, emocionales y de comunicación que determinan cómo trabajas con otros, cómo te adaptas al cambio, y cómo resuelves problemas complejos en contextos humanos."
                : "Soft Skills are the interpersonal, emotional and communication skills that determine how you work with others, how you adapt to change, and how you solve complex problems in human contexts."}
            </p>
            <p className="text-xl text-default-700 leading-relaxed">
              {locale === "es"
                ? "A diferencia de las Hard Skills (programar en Python, usar React, conocer AWS), las Soft Skills se centran en el CÓMO trabajas, no en el QUÉ sabes hacer técnicamente."
                : "Unlike Hard Skills (programming in Python, using React, knowing AWS), Soft Skills focus on HOW you work, not WHAT you know how to do technically."}
            </p>
          </CardBody>
        </Card>
      </section>

      {/* Por qué importan */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-customgray mb-8">
          {locale === "es"
            ? "¿Por qué las Soft Skills son críticas?"
            : "Why are Soft Skills critical?"}
        </h2>

        <div className="space-y-8">
          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-customgray mb-4">
                {locale === "es"
                  ? "85% de contrataciones se basan en Soft Skills"
                  : "85% of hires are based on Soft Skills"}
              </h3>
              <p className="text-lg text-default-700 leading-relaxed">
                {locale === "es"
                  ? "Según LinkedIn, el 85% de las decisiones de contratación y promoción se basan en Soft Skills, no en habilidades técnicas. Puedes ser un genio en algoritmos, pero si no sabes comunicar tus ideas, nunca llegarás a Senior."
                  : "According to LinkedIn, 85% of hiring and promotion decisions are based on Soft Skills, not technical skills. You can be a genius in algorithms, but if you don't know how to communicate your ideas, you'll never reach Senior."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-customgray mb-4">
                {locale === "es"
                  ? "Diferenciador para llegar a Senior/Lead"
                  : "Differentiator to reach Senior/Lead"}
              </h3>
              <p className="text-lg text-default-700 leading-relaxed">
                {locale === "es"
                  ? "La diferencia entre un Mid y un Senior no es código más complejo: es mentoría, influencia, comunicación, liderazgo técnico. Las Soft Skills determinan si escalas en tu carrera."
                  : "The difference between a Mid and a Senior is not more complex code: it's mentoring, influence, communication, technical leadership. Soft Skills determine if you scale in your career."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-customgray mb-4">
                {locale === "es"
                  ? "Equipos tech funcionan por personas, no por código"
                  : "Tech teams work because of people, not code"}
              </h3>
              <p className="text-lg text-default-700 leading-relaxed">
                {locale === "es"
                  ? "Los mejores equipos no son los que tienen los mejores developers técnicamente, sino los que se comunican bien, confían entre sí, y resuelven conflictos constructivamente."
                  : "The best teams are not those with the best developers technically, but those that communicate well, trust each other, and resolve conflicts constructively."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Las 8 Skills */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-customgray mb-8">
          {locale === "es"
            ? "Las 8 Soft Skills críticas para Developers"
            : "The 8 critical Soft Skills for Developers"}
        </h2>

        <div className="space-y-6">
          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "1. Comunicación técnica clara"
                  : "1. Clear technical communication"}
              </h3>
              <p className="text-default-700 mb-3">
                {locale === "es"
                  ? "Ser capaz de explicar conceptos técnicos complejos a personas no técnicas (Product Managers, stakeholders, usuarios). Documentar código de forma clara. Escribir PRs descriptivos."
                  : "Being able to explain complex technical concepts to non-technical people (Product Managers, stakeholders, users). Document code clearly. Write descriptive PRs."}
              </p>
              <p className="text-sm text-default-600 italic">
                {locale === "es"
                  ? "Ejemplo: En lugar de decir 'refactoricé el módulo de autenticación', explicas: 'Separé la lógica de validación de tokens para que sea más fácil agregar OAuth en el futuro.'"
                  : "Example: Instead of saying 'I refactored the authentication module', you explain: 'I separated the token validation logic to make it easier to add OAuth in the future.'"}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "2. Colaboración y trabajo en equipo"
                  : "2. Collaboration and teamwork"}
              </h3>
              <p className="text-default-700 mb-3">
                {locale === "es"
                  ? "Trabajar bien en pair programming, participar constructivamente en code reviews, aceptar feedback sin defensividad, y ayudar a otros developers a crecer."
                  : "Work well in pair programming, participate constructively in code reviews, accept feedback without defensiveness, and help other developers grow."}
              </p>
              <p className="text-sm text-default-600 italic">
                {locale === "es"
                  ? "Ejemplo: En un code review, en lugar de decir 'Este código está mal', preguntas: '¿Consideraste usar X patrón para evitar Y problema?'"
                  : "Example: In a code review, instead of saying 'This code is wrong', you ask: 'Did you consider using X pattern to avoid Y problem?'"}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "3. Resolución creativa de problemas"
                  : "3. Creative problem solving"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Pensar más allá de la solución técnica obvia. Considerar contexto de negocio, impacto en usuarios, trade-offs de arquitectura."
                  : "Think beyond the obvious technical solution. Consider business context, user impact, architecture trade-offs."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "4. Adaptabilidad y aprendizaje continuo"
                  : "4. Adaptability and continuous learning"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Capacidad de aprender nuevas tecnologías rápidamente, adaptarte a cambios en prioridades, y no aferrarte a 'tu forma' de hacer las cosas."
                  : "Ability to learn new technologies quickly, adapt to changes in priorities, and not cling to 'your way' of doing things."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "5. Empatía con usuarios y equipo"
                  : "5. Empathy with users and team"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Ponerte en los zapatos del usuario final para diseñar mejores soluciones. Entender las presiones y contextos de tus compañeros de equipo."
                  : "Put yourself in the shoes of the end user to design better solutions. Understand the pressures and contexts of your teammates."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "6. Gestión del tiempo y priorización"
                  : "6. Time management and prioritization"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Saber qué hacer primero, cuándo decir 'no' a tareas que no agregan valor, estimar realista, y evitar el perfeccionismo que bloquea entregas."
                  : "Know what to do first, when to say 'no' to tasks that don't add value, estimate realistically, and avoid perfectionism that blocks deliveries."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "7. Dar y recibir feedback constructivo"
                  : "7. Give and receive constructive feedback"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Dar feedback técnico sin atacar a la persona. Recibir críticas sin ponerte defensivo. Ver el feedback como oportunidad de crecimiento."
                  : "Give technical feedback without attacking the person. Receive criticism without becoming defensive. See feedback as an opportunity for growth."}
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "8. Curiosidad y mentalidad de crecimiento"
                  : "8. Curiosity and growth mindset"}
              </h3>
              <p className="text-default-700">
                {locale === "es"
                  ? "Estar siempre aprendiendo no solo tecnología, sino sobre el negocio, los usuarios, el dominio del problema."
                  : "Always be learning not only technology, but about the business, users, and problem domain."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
    </HomeLayout>
  );
}
