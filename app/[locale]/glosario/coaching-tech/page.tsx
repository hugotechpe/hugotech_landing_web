import { setRequestLocale } from "next-intl/server";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

import HomeLayout from "../../HomeLayout";

import { JsonLd } from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata } from "@/lib/metadata";

// Metadata optimizada para Featured Snippet
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return genMetadata({
    title:
      locale === "es"
        ? "¿Qué es el Coaching Tech? Definición completa 2025"
        : "What is Tech Coaching? Complete Definition 2025",
    description:
      locale === "es"
        ? "El Coaching Tech es un proceso de acompañamiento profesional diseñado específicamente para desarrolladores, líderes técnicos y profesionales de tecnología. Descubre diferencias con mentoría, tipos y cuándo necesitas coaching tecnológico en Lima, Perú."
        : "Tech Coaching is a professional accompaniment process designed specifically for developers, technical leaders and technology professionals. Discover differences with mentoring, types and when you need tech coaching in Lima, Peru.",
    keywords:
      locale === "es"
        ? [
            "qué es coaching tech",
            "coaching tecnológico definición",
            "coaching tech significado",
            "diferencia mentor coach tech",
            "tipos de coaching tech",
            "coaching para programadores",
            "technical coach definición",
            "coaching tech Lima",
            "coaching tech Perú",
          ]
        : [
            "what is tech coaching",
            "tech coaching definition",
            "tech coaching meaning",
            "mentor vs coach difference",
            "types of tech coaching",
            "coaching for programmers",
            "technical coach definition",
            "tech coaching Lima",
            "tech coaching Peru",
          ],
    locale,
    path: "glosario/coaching-tech",
  });
}

export default async function CoachingTechGlosarioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  // Schema para Article (Featured Snippet)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      locale === "es"
        ? "¿Qué es el Coaching Tech? Definición completa"
        : "What is Tech Coaching? Complete Definition",
    description:
      locale === "es"
        ? "Definición completa de Coaching Tech: proceso de acompañamiento para desarrolladores y líderes técnicos."
        : "Complete definition of Tech Coaching: accompaniment process for developers and technical leaders.",
    author: {
      "@type": "Person",
      name: "Hugo Casanova",
      jobTitle: "Technical Coach y Mentor para Programadores",
    },
    publisher: {
      "@type": "Organization",
      name: "HugoTech",
      logo: {
        "@type": "ImageObject",
        url: "https://hugotech.pe/logo.png",
      },
    },
    datePublished: "2025-12-08",
    dateModified: "2025-12-08",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hugotech.pe/${locale}/glosario/coaching-tech`,
    },
  };

  // FAQPage Schema para Featured Snippet
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          locale === "es"
            ? "¿Qué es el Coaching Tech?"
            : "What is Tech Coaching?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "El Coaching Tech es un proceso de acompañamiento profesional diseñado específicamente para desarrolladores, líderes técnicos y profesionales de tecnología que buscan acelerar su crecimiento profesional, superar desafíos de liderazgo o transicionar a roles de mayor impacto. A diferencia del mentoring técnico, se enfoca en desarrollar habilidades blandas, inteligencia emocional y estrategias de carrera adaptadas al ecosistema tecnológico."
              : "Tech Coaching is a professional accompaniment process designed specifically for developers, technical leaders and technology professionals seeking to accelerate their professional growth, overcome leadership challenges or transition to higher impact roles. Unlike technical mentoring, it focuses on developing soft skills, emotional intelligence and career strategies adapted to the technology ecosystem.",
        },
      },
      {
        "@type": "Question",
        name:
          locale === "es"
            ? "¿Cuál es la diferencia entre Mentor Técnico y Coach Tech?"
            : "What's the difference between Technical Mentor and Tech Coach?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Un Mentor Técnico enseña habilidades técnicas específicas (código, arquitectura, herramientas) desde su experiencia, mientras que un Coach Tech facilita el autoconocimiento a través de preguntas poderosas, enfocándose en habilidades blandas, carrera y liderazgo. El mentor te dice 'cómo' hacer las cosas; el coach te ayuda a descubrir 'tu propio cómo'."
              : "A Technical Mentor teaches specific technical skills (code, architecture, tools) from their experience, while a Tech Coach facilitates self-knowledge through powerful questions, focusing on soft skills, career and leadership. The mentor tells you 'how' to do things; the coach helps you discover 'your own how'.",
        },
      },
      {
        "@type": "Question",
        name:
          locale === "es"
            ? "¿Para qué sirve el Coaching Tech?"
            : "What is Tech Coaching for?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "El Coaching Tech sirve para: superar el síndrome del impostor, navegar transiciones de carrera (de developer a tech lead, de empleado a freelance), prevenir y recuperar del burnout, desarrollar liderazgo técnico efectivo, y tomar decisiones estratégicas de carrera. Resuelve desafíos que las habilidades técnicas por sí solas no pueden solucionar."
              : "Tech Coaching is for: overcoming impostor syndrome, navigating career transitions (from developer to tech lead, from employee to freelance), preventing and recovering from burnout, developing effective technical leadership, and making strategic career decisions. It solves challenges that technical skills alone cannot solve.",
        },
      },
      {
        "@type": "Question",
        name:
          locale === "es"
            ? "¿Cuáles son los tipos de Coaching Tech?"
            : "What are the types of Tech Coaching?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            locale === "es"
              ? "Los principales tipos de Coaching Tech son: 1) Executive Tech Coaching (para CTOs, VPs of Engineering), 2) Technical Leadership Coaching (para Tech Leads, Staff Engineers), 3) Career Development Coaching (para Mid-Senior Developers), 4) Anti-Burnout Coaching (para devs con agotamiento), y 5) First Tech Job Coaching (para bootcamp grads y career switchers)."
              : "The main types of Tech Coaching are: 1) Executive Tech Coaching (for CTOs, VPs of Engineering), 2) Technical Leadership Coaching (for Tech Leads, Staff Engineers), 3) Career Development Coaching (for Mid-Senior Developers), 4) Anti-Burnout Coaching (for burned-out devs), and 5) First Tech Job Coaching (for bootcamp grads and career switchers).",
        },
      },
    ],
  };

  const isSpanish = locale === "es";

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <HomeLayout>
        <section className="py-16 md:py-20 bg-gradient-to-b from-default-50 to-background">
          <div className="container mx-auto max-w-4xl px-6">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-default-600">
              <a className="hover:text-primary" href={`/${locale}`}>
                {isSpanish ? "Inicio" : "Home"}
              </a>
              <span className="mx-2">›</span>
              <a className="hover:text-primary" href={`/${locale}/glosario`}>
                {isSpanish ? "Glosario Tech" : "Tech Glossary"}
              </a>
              <span className="mx-2">›</span>
              <span className="text-foreground font-medium">
                {isSpanish ? "Coaching Tech" : "Tech Coaching"}
              </span>
            </nav>

            {/* Header - Definición directa para Featured Snippet */}
            <div className="mb-8">
              <div className="flex gap-2 mb-4">
                <Chip color="primary" size="sm" variant="flat">
                  {isSpanish ? "Definición" : "Definition"}
                </Chip>
                <Chip size="sm" variant="flat">
                  {isSpanish ? "Glosario Tech" : "Tech Glossary"}
                </Chip>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                {isSpanish
                  ? "¿Qué es el Coaching Tech?"
                  : "What is Tech Coaching?"}
              </h1>

              {/* Definición corta - Primer párrafo clave para Featured Snippet */}
              <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  {isSpanish ? (
                    <>
                      El <strong>Coaching Tech</strong> es un proceso de
                      acompañamiento profesional diseñado específicamente para{" "}
                      <strong>
                        desarrolladores, líderes técnicos y profesionales de
                        tecnología
                      </strong>{" "}
                      que buscan acelerar su crecimiento profesional, superar
                      desafíos de liderazgo o transicionar a roles de mayor
                      impacto. A diferencia del mentoring técnico tradicional,
                      el coaching tech se enfoca en desarrollar{" "}
                      <strong>habilidades blandas</strong>,{" "}
                      <strong>inteligencia emocional</strong> y{" "}
                      <strong>estrategias de carrera</strong> adaptadas al
                      ecosistema tecnológico.
                    </>
                  ) : (
                    <>
                      <strong>Tech Coaching</strong> is a professional
                      accompaniment process designed specifically for{" "}
                      <strong>
                        developers, technical leaders and technology
                        professionals
                      </strong>{" "}
                      seeking to accelerate their professional growth, overcome
                      leadership challenges or transition to higher impact
                      roles. Unlike traditional technical mentoring, tech
                      coaching focuses on developing{" "}
                      <strong>soft skills</strong>,{" "}
                      <strong>emotional intelligence</strong> and{" "}
                      <strong>career strategies</strong> adapted to the
                      technology ecosystem.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="space-y-12">
              {/* Sección 1: Definición extendida */}
              <Card className="border border-default-200">
                <CardBody className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {isSpanish ? "Definición completa" : "Complete definition"}
                  </h2>

                  <p className="text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "El coaching tecnológico es una metodología de desarrollo profesional que combina las técnicas del coaching ejecutivo con el profundo conocimiento del sector tech. Un coach tech trabaja con profesionales de la industria del software para ayudarles a:"
                      : "Tech coaching is a professional development methodology that combines executive coaching techniques with deep knowledge of the tech sector. A tech coach works with software industry professionals to help them:"}
                  </p>

                  <ul className="space-y-3 text-default-700">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <span>
                        {isSpanish
                          ? "Desbloquear su potencial profesional más allá de las habilidades técnicas"
                          : "Unlock their professional potential beyond technical skills"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <span>
                        {isSpanish
                          ? "Desarrollar liderazgo técnico efectivo sin sacrificar su identidad como desarrollador"
                          : "Develop effective technical leadership without sacrificing their identity as a developer"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <span>
                        {isSpanish
                          ? "Navegar transiciones de carrera (de IC a manager, de startup a corporativo, etc.)"
                          : "Navigate career transitions (from IC to manager, from startup to corporate, etc.)"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <span>
                        {isSpanish
                          ? "Prevenir y superar el burnout tan común en la industria"
                          : "Prevent and overcome burnout so common in the industry"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <span>
                        {isSpanish
                          ? "Mejorar comunicación y colaboración en equipos distribuidos"
                          : "Improve communication and collaboration in distributed teams"}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl mt-0.5">✓</span>
                      <span>
                        {isSpanish
                          ? "Tomar decisiones estratégicas de carrera alineadas con sus valores"
                          : "Make strategic career decisions aligned with their values"}
                      </span>
                    </li>
                  </ul>
                </CardBody>
              </Card>

              {/* Sección 2: Diferencia Mentor vs Coach - Tabla */}
              <Card className="border border-default-200">
                <CardBody className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {isSpanish
                      ? "¿Cuál es la diferencia entre un Mentor Técnico y un Coach Tech?"
                      : "What's the difference between a Technical Mentor and a Tech Coach?"}
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-default-300">
                          <th className="p-3 font-bold text-foreground">
                            {isSpanish ? "Aspecto" : "Aspect"}
                          </th>
                          <th className="p-3 font-bold text-foreground">
                            {isSpanish ? "Mentor Técnico" : "Technical Mentor"}
                          </th>
                          <th className="p-3 font-bold text-foreground">
                            {isSpanish ? "Coach Tech" : "Tech Coach"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-default-700">
                        <tr className="border-b border-default-200">
                          <td className="p-3 font-semibold">
                            {isSpanish ? "Enfoque" : "Focus"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Habilidades técnicas (código, arquitectura)"
                              : "Technical skills (code, architecture)"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Habilidades blandas, carrera, liderazgo"
                              : "Soft skills, career, leadership"}
                          </td>
                        </tr>
                        <tr className="border-b border-default-200">
                          <td className="p-3 font-semibold">
                            {isSpanish ? "Metodología" : "Methodology"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Enseña desde la experiencia"
                              : "Teaches from experience"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Facilita autoconocimiento con preguntas"
                              : "Facilitates self-knowledge with questions"}
                          </td>
                        </tr>
                        <tr className="border-b border-default-200">
                          <td className="p-3 font-semibold">
                            {isSpanish ? "Relación" : "Relationship"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Experto → Aprendiz"
                              : "Expert → Learner"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Socios de desarrollo"
                              : "Development partners"}
                          </td>
                        </tr>
                        <tr className="border-b border-default-200">
                          <td className="p-3 font-semibold">
                            {isSpanish ? "Duración" : "Duration"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Variable, informal"
                              : "Variable, informal"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Estructurada (3-6 meses)"
                              : "Structured (3-6 months)"}
                          </td>
                        </tr>
                        <tr className="border-b border-default-200">
                          <td className="p-3 font-semibold">
                            {isSpanish
                              ? "Cuándo lo necesitas"
                              : "When you need it"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Aprender framework, subir nivel técnico"
                              : "Learn framework, level up technically"}
                          </td>
                          <td className="p-3">
                            {isSpanish
                              ? "Estancamiento, burnout, transición de rol"
                              : "Stagnation, burnout, role transition"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                    <p className="text-default-700">
                      <strong>
                        {isSpanish ? "En resumen:" : "In summary:"}
                      </strong>{" "}
                      {isSpanish
                        ? 'Un mentor te dice "cómo" hacer las cosas desde su experiencia; un coach te ayuda a descubrir "tu propio cómo" que funcione para ti.'
                        : 'A mentor tells you "how" to do things from their experience; a coach helps you discover "your own how" that works for you.'}
                    </p>
                  </div>
                </CardBody>
              </Card>

              {/* Sección 3: Para qué sirve */}
              <Card className="border border-default-200">
                <CardBody className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {isSpanish
                      ? "¿Para qué sirve el Coaching Tech?"
                      : "What is Tech Coaching for?"}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        {isSpanish
                          ? "Superar el Síndrome del Impostor"
                          : "Overcome Impostor Syndrome"}
                      </h3>
                      <p className="text-default-700 mb-2">
                        {isSpanish
                          ? "Más del 70% de los desarrolladores experimentan síndrome del impostor. El coaching tech te ayuda a:"
                          : "More than 70% of developers experience impostor syndrome. Tech coaching helps you:"}
                      </p>
                      <ul className="list-disc list-inside text-default-700 space-y-1 ml-4">
                        <li>
                          {isSpanish
                            ? "Reconocer y validar tus logros reales"
                            : "Recognize and validate your real achievements"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Separar hechos de percepciones distorsionadas"
                            : "Separate facts from distorted perceptions"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Construir confianza genuina basada en evidencia"
                            : "Build genuine evidence-based confidence"}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="text-2xl">🚀</span>
                        {isSpanish
                          ? "Navegar Transiciones de Carrera"
                          : "Navigate Career Transitions"}
                      </h3>
                      <ul className="list-disc list-inside text-default-700 space-y-1 ml-4">
                        <li>
                          {isSpanish
                            ? "De Individual Contributor a Tech Lead"
                            : "From Individual Contributor to Tech Lead"}
                        </li>
                        <li>
                          {isSpanish
                            ? "De Empleado a Freelance/Emprendedor"
                            : "From Employee to Freelance/Entrepreneur"}
                        </li>
                        <li>
                          {isSpanish
                            ? "De Junior a Senior (más allá de años de experiencia)"
                            : "From Junior to Senior (beyond years of experience)"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Entre industrias (startup ↔ corporativo)"
                            : "Between industries (startup ↔ corporate)"}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="text-2xl">🔥</span>
                        {isSpanish
                          ? "Prevención y Recuperación del Burnout"
                          : "Burnout Prevention and Recovery"}
                      </h3>
                      <p className="text-default-700 mb-2">
                        {isSpanish
                          ? "El burnout tech es una epidemia silenciosa. El coaching te ayuda a:"
                          : "Tech burnout is a silent epidemic. Coaching helps you:"}
                      </p>
                      <ul className="list-disc list-inside text-default-700 space-y-1 ml-4">
                        <li>
                          {isSpanish
                            ? "Identificar señales tempranas"
                            : "Identify early warning signs"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Establecer límites saludables trabajo-vida"
                            : "Establish healthy work-life boundaries"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Redescubrir tu pasión por la tecnología"
                            : "Rediscover your passion for technology"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Crear estrategias sostenibles de productividad"
                            : "Create sustainable productivity strategies"}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="text-2xl">👥</span>
                        {isSpanish
                          ? "Desarrollo de Liderazgo Técnico"
                          : "Technical Leadership Development"}
                      </h3>
                      <p className="text-default-700 mb-2">
                        {isSpanish
                          ? "Especialmente para líderes técnicos introvertidos:"
                          : "Especially for introverted technical leaders:"}
                      </p>
                      <ul className="list-disc list-inside text-default-700 space-y-1 ml-4">
                        <li>
                          {isSpanish
                            ? "Técnicas de liderazgo que respetan tu personalidad"
                            : "Leadership techniques that respect your personality"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Dar feedback efectivo sin confrontación"
                            : "Give effective feedback without confrontation"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Delegación estratégica sin micromanagement"
                            : "Strategic delegation without micromanagement"}
                        </li>
                        <li>
                          {isSpanish
                            ? "Comunicación ascendente con stakeholders"
                            : "Upward communication with stakeholders"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Sección 4: Tipos de Coaching Tech */}
              <Card className="border border-default-200">
                <CardBody className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {isSpanish
                      ? "Tipos de Coaching Tech"
                      : "Types of Tech Coaching"}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border border-default-200 rounded-lg">
                      <h3 className="font-bold text-foreground mb-2">
                        1. Executive Tech Coaching
                      </h3>
                      <p className="text-sm text-default-600 mb-2">
                        <strong>
                          {isSpanish ? "Para quién:" : "For whom:"}
                        </strong>{" "}
                        CTOs, VPs of Engineering
                      </p>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Liderazgo organizacional, gestión de equipos grandes, estrategia técnica empresarial"
                          : "Organizational leadership, large team management, corporate technical strategy"}
                      </p>
                    </div>

                    <div className="p-4 border border-default-200 rounded-lg">
                      <h3 className="font-bold text-foreground mb-2">
                        2. Technical Leadership Coaching
                      </h3>
                      <p className="text-sm text-default-600 mb-2">
                        <strong>
                          {isSpanish ? "Para quién:" : "For whom:"}
                        </strong>{" "}
                        Tech Leads, Staff Engineers
                      </p>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Liderazgo técnico sin autoridad formal, influencia, mentoría de equipo"
                          : "Technical leadership without formal authority, influence, team mentoring"}
                      </p>
                    </div>

                    <div className="p-4 border border-default-200 rounded-lg">
                      <h3 className="font-bold text-foreground mb-2">
                        3. Career Development Coaching
                      </h3>
                      <p className="text-sm text-default-600 mb-2">
                        <strong>
                          {isSpanish ? "Para quién:" : "For whom:"}
                        </strong>{" "}
                        Mid-Senior Developers
                      </p>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Planificación de carrera, marca personal, preparación para promociones"
                          : "Career planning, personal branding, promotion preparation"}
                      </p>
                    </div>

                    <div className="p-4 border border-default-200 rounded-lg">
                      <h3 className="font-bold text-foreground mb-2">
                        4. Anti-Burnout Coaching
                      </h3>
                      <p className="text-sm text-default-600 mb-2">
                        <strong>
                          {isSpanish ? "Para quién:" : "For whom:"}
                        </strong>{" "}
                        {isSpanish ? "Devs con agotamiento" : "Burned-out devs"}
                      </p>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Recuperación, balance, rediseño de relación con el trabajo"
                          : "Recovery, balance, redesigning relationship with work"}
                      </p>
                    </div>

                    <div className="p-4 border border-default-200 rounded-lg">
                      <h3 className="font-bold text-foreground mb-2">
                        5. First Tech Job Coaching
                      </h3>
                      <p className="text-sm text-default-600 mb-2">
                        <strong>
                          {isSpanish ? "Para quién:" : "For whom:"}
                        </strong>{" "}
                        {isSpanish
                          ? "Bootcamp grads, career switchers"
                          : "Bootcamp grads, career switchers"}
                      </p>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Primer empleo tech, entrevistas, onboarding efectivo"
                          : "First tech job, interviews, effective onboarding"}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* CTA Final */}
              <Card className="border-2 border-primary bg-gradient-to-br from-primary-50 to-background">
                <CardBody className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {isSpanish
                      ? "¿Necesitas Coaching Tech?"
                      : "Need Tech Coaching?"}
                  </h2>
                  <p className="text-default-700 mb-6 max-w-2xl mx-auto">
                    {isSpanish
                      ? "Agenda una sesión exploratoria gratuita de 30 minutos para entender tu situación y evaluar si el coaching tech es el camino correcto para ti."
                      : "Schedule a free 30-minute exploratory session to understand your situation and evaluate if tech coaching is the right path for you."}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      href={`/${locale}#cita`}
                    >
                      {isSpanish
                        ? "Agendar Sesión Gratuita"
                        : "Schedule Free Session"}{" "}
                      →
                    </a>
                    <a
                      className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                      href={`/${locale}/coaching`}
                    >
                      {isSpanish
                        ? "Ver más sobre Coaching"
                        : "Learn more about Coaching"}
                    </a>
                  </div>
                </CardBody>
              </Card>

              {/* Enlaces relacionados */}
              <div className="pt-8 border-t border-default-200">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {isSpanish ? "Artículos relacionados" : "Related articles"}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    className="p-4 border border-default-200 rounded-lg hover:border-primary transition-colors"
                    href={`/${locale}/blog/burnout-silencioso-tech-2026`}
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {isSpanish
                        ? "Burnout Silencioso en Tech"
                        : "Silent Burnout in Tech"}
                    </h4>
                    <p className="text-sm text-default-600">
                      {isSpanish
                        ? "Identifica las señales tempranas del burnout tech"
                        : "Identify early warning signs of tech burnout"}
                    </p>
                  </a>
                  <a
                    className="p-4 border border-default-200 rounded-lg hover:border-primary transition-colors"
                    href={`/${locale}/blog/liderazgo-tech-leads-introvertidos-2026`}
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {isSpanish
                        ? "Liderazgo para Tech Leads Introvertidos"
                        : "Leadership for Introverted Tech Leads"}
                    </h4>
                    <p className="text-sm text-default-600">
                      {isSpanish
                        ? "Lidera desde tu autenticidad sin fingir extroversión"
                        : "Lead from your authenticity without faking extroversion"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeLayout>
    </>
  );
}
