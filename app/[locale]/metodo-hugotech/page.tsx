import { setRequestLocale } from "next-intl/server";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";

import { Link } from "@/i18n/navigation";
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
        ? "Método Hugotech: Mentoría Tech + IA 2025 para Desarrolladores | Hugo Casanova"
        : "Hugotech Method: Tech Mentoring + AI 2025 for Developers | Hugo Casanova",
    description:
      locale === "es"
        ? "El único método que integra mentoría técnica, coaching profesional e inteligencia artificial para acelerar tu crecimiento como desarrollador o tech lead. 5 pilares probados con +200 desarrolladores en Perú."
        : "The only method that integrates technical mentoring, professional coaching and artificial intelligence to accelerate your growth as a developer or tech lead. 5 proven pillars with +200 developers in Peru.",
    keywords:
      locale === "es"
        ? [
            "método hugotech",
            "mentoría tech perú",
            "coaching para desarrolladores",
            "tech mentor IA",
            "crecimiento desarrollador senior",
            "método tech lead",
            "mentoría personalizada tech",
            "coaching tech lima",
          ]
        : [
            "hugotech method",
            "tech mentoring peru",
            "coaching for developers",
            "AI tech mentor",
            "senior developer growth",
            "tech lead method",
            "personalized tech mentoring",
            "tech coaching lima",
          ],
    locale,
    path: "metodo-hugotech",
  });
}

export default async function MetodoHugotechPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Chip className="mb-6" color="primary" size="lg" variant="flat">
          {locale === "es" ? "Metodología Única" : "Unique Methodology"}
        </Chip>
        <h1 className="text-5xl md:text-6xl font-bold text-customgray mb-6 leading-tight">
          {locale === "es"
            ? "Mentoría Tech + IA que Transforma Desarrolladores en Líderes"
            : "Tech Mentoring + AI that Transforms Developers into Leaders"}
        </h1>
        <p className="text-2xl text-default-700 max-w-3xl mx-auto leading-relaxed">
          {locale === "es"
            ? "El único método en Perú que integra mentoría técnica, coaching profesional e inteligencia artificial para acelerar tu carrera tech."
            : "The only method in Peru that integrates technical mentoring, professional coaching and artificial intelligence to accelerate your tech career."}
        </p>
      </div>

      {/* Introducción */}
      <section className="mb-16">
        <Card>
          <CardBody className="p-8 md:p-12">
            <p className="text-xl text-default-700 leading-relaxed mb-6">
              {locale === "es"
                ? "Después de mentorear a más de 200 desarrolladores, descubrí un patrón: la mayoría tiene el conocimiento técnico, pero les falta el acompañamiento estratégico para salir del estancamiento. No es falta de talento. Es falta de método."
                : "After mentoring more than 200 developers, I discovered a pattern: most have the technical knowledge, but lack the strategic guidance to overcome stagnation. It's not a lack of talent. It's a lack of method."}
            </p>
            <p className="text-xl text-default-700 leading-relaxed mb-6">
              {locale === "es"
                ? "El Método Hugotech nace de 15+ años en la industria tech, combinando mi experiencia como desarrollador senior, tech lead, y coach profesional certificado. Pero lo que lo hace único en 2025 es que integra la inteligencia artificial no como reemplazo, sino como multiplicador de tu potencial humano."
                : "The Hugotech Method is born from 15+ years in the tech industry, combining my experience as a senior developer, tech lead, and certified professional coach. But what makes it unique in 2025 is that it integrates artificial intelligence not as a replacement, but as a multiplier of your human potential."}
            </p>
            <p className="text-xl text-default-700 leading-relaxed">
              {locale === "es"
                ? "Este no es un curso grabado. No son consejos genéricos de LinkedIn. Es un sistema completo de transformación profesional, con sesiones 1-a-1, seguimiento personalizado, y herramientas prácticas que puedes aplicar desde el día uno."
                : "This is not a recorded course. Not generic LinkedIn advice. It's a complete professional transformation system, with 1-on-1 sessions, personalized follow-up, and practical tools you can apply from day one."}
            </p>
          </CardBody>
        </Card>
      </section>

      {/* Por qué nace el método */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-customgray mb-8">
          {locale === "es"
            ? "¿Por Qué Nace Este Método?"
            : "Why Was This Method Born?"}
        </h2>

        <div className="space-y-8">
          {/* Problema 1 */}
          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-customgray mb-4">
                {locale === "es"
                  ? "El Burnout Silencioso del Tech"
                  : "The Silent Burnout of Tech"}
              </h3>
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {locale === "es"
                  ? "Veo a desarrolladores brillantes que trabajan 10+ horas diarias, aprenden frameworks cada mes, pero siguen sintiendo que no avanzan. El agotamiento no grita, susurra. Y cuando te das cuenta, ya perdiste años en modo supervivencia."
                  : "I see brilliant developers working 10+ hours daily, learning frameworks every month, but still feeling like they're not progressing. Burnout doesn't scream, it whispers. And when you realize it, you've already lost years in survival mode."}
              </p>
              <p className="text-lg font-semibold text-primary">
                {locale === "es"
                  ? "Este método te enseña a crecer sin quemarte, a decir no sin culpa, y a liderar proyectos sin sacrificar tu salud mental."
                  : "This method teaches you to grow without burning out, to say no without guilt, and to lead projects without sacrificing your mental health."}
              </p>
            </CardBody>
          </Card>

          {/* Problema 2 */}
          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-customgray mb-4">
                {locale === "es"
                  ? "La Ansiedad de la IA (2025)"
                  : "AI Anxiety (2025)"}
              </h3>
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {locale === "es"
                  ? "ChatGPT, GitHub Copilot, Cursor... La IA está escribiendo código más rápido que nosotros. Es normal sentir miedo. Pero el miedo paraliza. La estrategia impulsa."
                  : "ChatGPT, GitHub Copilot, Cursor... AI is writing code faster than us. It's normal to feel fear. But fear paralyzes. Strategy drives."}
              </p>
              <p className="text-lg font-semibold text-primary">
                {locale === "es"
                  ? "Este método te posiciona como el humano que la IA no puede reemplazar: el que toma decisiones críticas, lidera equipos, y resuelve problemas ambiguos que las máquinas no entienden."
                  : "This method positions you as the human that AI cannot replace: the one who makes critical decisions, leads teams, and solves ambiguous problems that machines don't understand."}
              </p>
            </CardBody>
          </Card>

          {/* Problema 3 */}
          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-customgray mb-4">
                {locale === "es"
                  ? "El Síndrome del Impostor en Seniors"
                  : "Impostor Syndrome in Seniors"}
              </h3>
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {locale === "es"
                  ? 'Llegar a senior no cura el síndrome del impostor. Lo intensifica. "¿Y si descubren que no sé tanto?". "¿Merezco este salario?". "¿Y si el junior sabe más que yo?"'
                  : 'Reaching senior doesn\'t cure impostor syndrome. It intensifies it. "What if they find out I don\'t know that much?". "Do I deserve this salary?". "What if the junior knows more than me?"'}
              </p>
              <p className="text-lg font-semibold text-primary">
                {locale === "es"
                  ? "Este método te ayuda a reconocer tu valor real, validar tus logros sin compararte con otros, y liderar con confianza (no con soberbia)."
                  : "This method helps you recognize your real value, validate your achievements without comparing yourself to others, and lead with confidence (not arrogance)."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mt-20">
        <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
          <CardBody className="p-10 text-center">
            <h2 className="text-4xl font-bold text-customgray mb-6">
              {locale === "es"
                ? "¿Listo para Transformar tu Carrera Tech?"
                : "Ready to Transform Your Tech Career?"}
            </h2>
            <p className="text-xl text-default-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              {locale === "es"
                ? "La primera sesión es 100% gratuita. Sin compromiso. Solo tú, yo, y un plan claro para tu siguiente nivel profesional."
                : "The first session is 100% free. No commitment. Just you, me, and a clear plan for your next professional level."}
            </p>
            <Link href={`/${locale}/pricing`}>
              <Button color="primary" size="lg" className="font-semibold">
                {locale === "es" ? "Agenda tu Sesión Gratuita" : "Schedule Your Free Session"}
              </Button>
            </Link>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
