import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import Link from "next/link";
import { Metadata } from "next";

import HomeLayout from "../../HomeLayout";

import { JsonLd } from "@/components/seo/JsonLd";
import { generateMetadata as genMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === "es";

  if (isSpanish) {
    return genMetadata({
      title: "¿Qué es un Mentor Técnico? Definición y Guía Completa 2025",
      description:
        "Un Mentor Técnico es un profesional experimentado que guía a desarrolladores en su crecimiento técnico y profesional. Descubre la diferencia con coaching, tipos de mentoría y cómo conseguir un mentor tech en Perú.",
      keywords: [
        "qué es un mentor técnico",
        "mentor técnico definición",
        "diferencia mentor coach",
        "mentoría técnica",
        "mentor para programadores",
        "cómo conseguir mentor tech",
        "mentor senior developer",
        "mentoría tecnológica Lima",
        "mentor tech Perú",
      ],
    });
  }

  return genMetadata({
    title: "What is a Technical Mentor? Complete Definition & Guide 2025",
    description:
      "A Technical Mentor is an experienced professional who guides developers in their technical and professional growth. Discover the difference with coaching, mentorship types, and how to find a tech mentor.",
    keywords: [
      "what is a technical mentor",
      "technical mentor definition",
      "mentor vs coach difference",
      "technical mentorship",
      "mentor for programmers",
      "how to find tech mentor",
      "senior developer mentor",
      "tech mentorship",
    ],
  });
}

export default async function MentorTecnicoGlosarioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isSpanish = locale === "es";

  // JSON-LD Schema para Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isSpanish
      ? "¿Qué es un Mentor Técnico?"
      : "What is a Technical Mentor?",
    description: isSpanish
      ? "Un Mentor Técnico es un profesional experimentado que guía a desarrolladores en su crecimiento técnico y profesional compartiendo conocimientos, experiencias y consejos prácticos."
      : "A Technical Mentor is an experienced professional who guides developers in their technical and professional growth by sharing knowledge, experiences, and practical advice.",
    author: {
      "@type": "Person",
      name: "Hugo Casanova",
      jobTitle: "Tech Mentor & Agile Coach",
      url: "https://hugotech.pe",
    },
    publisher: {
      "@type": "Organization",
      name: "HugoTech",
      logo: {
        "@type": "ImageObject",
        url: "https://hugotech.pe/images/logo.png",
      },
    },
    datePublished: "2025-12-08",
    dateModified: "2025-12-08",
    inLanguage: isSpanish ? "es-PE" : "en-US",
    keywords: isSpanish
      ? "mentor técnico, mentoría técnica, mentor para programadores"
      : "technical mentor, technical mentorship, mentor for programmers",
  };

  // JSON-LD Schema para FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isSpanish
      ? [
          {
            "@type": "Question",
            name: "¿Qué es un Mentor Técnico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un Mentor Técnico es un profesional con experiencia consolidada que guía a otros profesionales (usualmente menos experimentados) en su desarrollo técnico y profesional. El mentor comparte conocimientos, experiencias, lecciones aprendidas y consejos prácticos basados en su trayectoria.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la diferencia entre un Mentor Técnico y un Coach Tech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un Mentor Técnico da direcciones específicas, comparte su experiencia y enseña desde su expertise (enfoque directivo). Un Coach Tech hace preguntas poderosas para que tú descubras tus propias respuestas (enfoque facilitador). El mentor dice 'así lo hice yo', el coach pregunta '¿cómo podrías tú hacerlo?'",
            },
          },
          {
            "@type": "Question",
            name: "¿Para qué sirve un Mentor Técnico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un Mentor Técnico sirve para acelerar tu curva de aprendizaje técnico, evitar errores comunes, descubrir mejores prácticas, expandir tu red profesional, recibir feedback objetivo y navegar tu carrera en tecnología de forma estratégica.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué tipos de Mentoría Técnica existen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Existen varios tipos: Mentoría Técnica Pura (arquitectura, código limpio, testing), Mentoría de Carrera Tech (cómo crecer de Junior a Senior), Mentoría de Liderazgo Técnico (para Tech Leads y Engineering Managers), Mentoría de Transición (cambio de rol o tecnología), y Mentoría Inversa (junior enseña a senior sobre nuevas tecnologías).",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "What is a Technical Mentor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Technical Mentor is an experienced professional who guides other professionals (usually less experienced) in their technical and professional development. The mentor shares knowledge, experiences, lessons learned, and practical advice based on their career path.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a Technical Mentor and a Tech Coach?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Technical Mentor gives specific directions, shares their experience, and teaches from their expertise (directive approach). A Tech Coach asks powerful questions so you discover your own answers (facilitative approach). The mentor says 'this is how I did it', the coach asks 'how could you do it?'",
            },
          },
          {
            "@type": "Question",
            name: "What is a Technical Mentor for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Technical Mentor helps accelerate your technical learning curve, avoid common mistakes, discover best practices, expand your professional network, receive objective feedback, and strategically navigate your tech career.",
            },
          },
          {
            "@type": "Question",
            name: "What types of Technical Mentorship exist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Several types exist: Pure Technical Mentorship (architecture, clean code, testing), Tech Career Mentorship (how to grow from Junior to Senior), Technical Leadership Mentorship (for Tech Leads and Engineering Managers), Transition Mentorship (role or technology change), and Reverse Mentorship (junior teaches senior about new technologies).",
            },
          },
        ],
  };

  return (
    <HomeLayout>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <article className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-default-600">
            <li>
              <Link className="hover:text-primary transition-colors" href="/">
                {isSpanish ? "Inicio" : "Home"}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/glosario"
              >
                {isSpanish ? "Glosario Tech" : "Tech Glossary"}
              </Link>
            </li>
            <li>/</li>
            <li className="text-primary font-semibold">
              {isSpanish ? "Mentor Técnico" : "Technical Mentor"}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <Chip color="primary" size="lg" variant="flat">
              {isSpanish ? "📖 Definición" : "📖 Definition"}
            </Chip>
            <Chip color="secondary" size="lg" variant="flat">
              {isSpanish ? "🎯 Glosario Tech" : "🎯 Tech Glossary"}
            </Chip>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-customgray mb-6 leading-tight">
            {isSpanish
              ? "¿Qué es un Mentor Técnico?"
              : "What is a Technical Mentor?"}
          </h1>

          {/* Definición destacada (optimizada para Featured Snippet) */}
          <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg md:text-xl leading-relaxed">
              {isSpanish ? (
                <>
                  Un <strong>Mentor Técnico</strong> es un{" "}
                  <strong>
                    profesional con experiencia consolidada que guía a otros
                    profesionales
                  </strong>{" "}
                  (usualmente menos experimentados) en su{" "}
                  <strong>desarrollo técnico y profesional</strong>. El mentor{" "}
                  <strong>
                    comparte conocimientos, experiencias, lecciones aprendidas y
                    consejos prácticos
                  </strong>{" "}
                  basados en su trayectoria. A diferencia del coaching, la
                  mentoría es más directiva: el mentor dice{" "}
                  <em>&quot;así lo hice yo&quot;</em>, mientras que el coach
                  pregunta <em>&quot;¿cómo podrías hacerlo tú?&quot;</em>
                </>
              ) : (
                <>
                  A <strong>Technical Mentor</strong> is an{" "}
                  <strong>
                    experienced professional who guides other professionals
                  </strong>{" "}
                  (usually less experienced) in their{" "}
                  <strong>technical and professional development</strong>. The
                  mentor{" "}
                  <strong>
                    shares knowledge, experiences, lessons learned, and
                    practical advice
                  </strong>{" "}
                  based on their career path. Unlike coaching, mentorship is
                  more directive: the mentor says{" "}
                  <em>&quot;this is how I did it&quot;</em>, while the coach
                  asks <em>&quot;how could you do it?&quot;</em>
                </>
              )}
            </p>
          </div>
        </header>

        {/* Sección 1: ¿Qué es? - Definición Expandida */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Qué es un Mentor Técnico? (Definición extendida)"
              : "What is a Technical Mentor? (Extended definition)"}
          </h2>

          <Card className="mb-6">
            <CardBody className="p-6 md:p-8">
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {isSpanish
                  ? "Un Mentor Técnico no solo enseña tecnología, también ayuda a navegar la complejidad del mundo tech: cómo elegir especializaciones, cuándo cambiar de empresa, cómo negociar salarios, qué certificaciones valen la pena, y cómo construir una reputación profesional."
                  : "A Technical Mentor doesn't just teach technology, they also help navigate the complexity of the tech world: how to choose specializations, when to change companies, how to negotiate salaries, which certifications are worthwhile, and how to build a professional reputation."}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Experiencia real:" : "Real experience:"}
                    </strong>{" "}
                    {isSpanish
                      ? "El mentor ha pasado por los mismos desafíos que tú enfrentas ahora"
                      : "The mentor has faced the same challenges you're facing now"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Conexiones profesionales:"
                        : "Professional connections:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Acceso a su red de contactos en la industria tech"
                      : "Access to their network of contacts in the tech industry"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Visión de carrera:" : "Career vision:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Te ayuda a ver el panorama completo de tu trayectoria profesional"
                      : "Helps you see the complete picture of your professional path"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Atajos validados:" : "Validated shortcuts:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Te evita meses o años de prueba y error"
                      : "Saves you months or years of trial and error"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Feedback directo:" : "Direct feedback:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Revisión de código, arquitectura y decisiones técnicas"
                      : "Code review, architecture, and technical decisions"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Accountability técnico:"
                        : "Technical accountability:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Te mantiene enfocado en tu plan de crecimiento técnico"
                      : "Keeps you focused on your technical growth plan"}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Sección 2: Diferencia Mentor vs Coach (Tabla comparativa) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Cuál es la diferencia entre Mentor Técnico y Coach Tech?"
              : "What's the difference between Technical Mentor and Tech Coach?"}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Aspecto" : "Aspect"}
                  </th>
                  <th className="border border-primary-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Mentor Técnico" : "Technical Mentor"}
                  </th>
                  <th className="border border-primary-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Coach Tech" : "Tech Coach"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Enfoque" : "Approach"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Directivo: da respuestas y soluciones"
                      : "Directive: gives answers and solutions"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Facilitador: hace preguntas poderosas"
                      : "Facilitative: asks powerful questions"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Experiencia" : "Experience"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Comparte su propia experiencia técnica"
                      : "Shares their own technical experience"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "No necesita ser experto en tu área técnica"
                      : "Doesn't need to be an expert in your technical area"}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Relación" : "Relationship"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Experto → Aprendiz (jerárquica)"
                      : "Expert → Learner (hierarchical)"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Igual a igual (horizontal)"
                      : "Peer to peer (horizontal)"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Duración" : "Duration"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Largo plazo (6 meses - años)"
                      : "Long-term (6 months - years)"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Corto/medio plazo (3-6 meses)"
                      : "Short/medium term (3-6 months)"}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Objetivo" : "Objective"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Transferir conocimiento y experiencia técnica"
                      : "Transfer knowledge and technical experience"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Desarrollar tu propio pensamiento y soluciones"
                      : "Develop your own thinking and solutions"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Metodología" : "Methodology"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"Así lo resolví yo cuando..."'
                      : '"This is how I solved it when..."'}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"¿Cómo podrías abordarlo tú?"'
                      : '"How could you approach it?"'}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Ideal para" : "Ideal for"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Crecer técnicamente, aprender arquitectura, buenas prácticas"
                      : "Technical growth, learning architecture, best practices"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Bloqueos mentales, transiciones, liderazgo"
                      : "Mental blocks, transitions, leadership"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sección 3: ¿Para qué sirve? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Para qué sirve un Mentor Técnico?"
              : "What is a Technical Mentor for?"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  🎯{" "}
                  {isSpanish
                    ? "Acelerar tu curva de aprendizaje"
                    : "Accelerate your learning curve"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Aprende en semanas lo que te tomaría meses solo"
                      : "Learn in weeks what would take months alone"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Evita errores comunes de principiantes"
                      : "Avoid common beginner mistakes"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Descubre mejores prácticas validadas"
                      : "Discover validated best practices"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  🚀{" "}
                  {isSpanish
                    ? "Navegar tu carrera tech"
                    : "Navigate your tech career"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Decidir qué tecnologías aprender y cuándo"
                      : "Decide which technologies to learn and when"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Entender cuándo es momento de cambiar de trabajo"
                      : "Understand when it's time to change jobs"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Negociar aumentos salariales con confianza"
                      : "Negotiate salary increases with confidence"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  🔥{" "}
                  {isSpanish
                    ? "Recibir feedback objetivo"
                    : "Receive objective feedback"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Code reviews personalizados y detallados"
                      : "Personalized and detailed code reviews"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Identificar tus puntos ciegos técnicos"
                      : "Identify your technical blind spots"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Validar tus decisiones de arquitectura"
                      : "Validate your architecture decisions"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  👥{" "}
                  {isSpanish
                    ? "Expandir tu red profesional"
                    : "Expand your professional network"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Conexiones con seniors y líderes tech"
                      : "Connections with seniors and tech leaders"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Referencias profesionales para futuros trabajos"
                      : "Professional references for future jobs"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Acceso a oportunidades no publicadas"
                      : "Access to unpublished opportunities"}
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Sección 4: Tipos de Mentoría Técnica */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Tipos de Mentoría Técnica"
              : "Types of Technical Mentorship"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Mentoría Técnica Pura"
                    : "Pure Technical Mentorship"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Enfocada 100% en habilidades técnicas: arquitectura de software, clean code, testing, patrones de diseño, performance optimization."
                    : "100% focused on technical skills: software architecture, clean code, testing, design patterns, performance optimization."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-secondary-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Mentoría de Carrera Tech"
                    : "Tech Career Mentorship"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Cómo crecer de Junior a Senior, de Senior a Tech Lead, cómo posicionarte en el mercado, negociar salarios, construir marca personal."
                    : "How to grow from Junior to Senior, from Senior to Tech Lead, how to position yourself in the market, negotiate salaries, build personal brand."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">👔</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Mentoría de Liderazgo Técnico"
                    : "Technical Leadership Mentorship"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Para Tech Leads, Engineering Managers y CTOs: cómo liderar equipos técnicos, tomar decisiones de arquitectura, gestionar deuda técnica."
                    : "For Tech Leads, Engineering Managers and CTOs: how to lead technical teams, make architecture decisions, manage technical debt."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-warning-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Mentoría de Transición"
                    : "Transition Mentorship"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Para cambios de rol (backend a fullstack), cambios de tecnología (Java a Go), o cambios de industria (fintech a edtech)."
                    : "For role changes (backend to fullstack), technology changes (Java to Go), or industry changes (fintech to edtech)."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-danger-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🔁</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Mentoría Inversa" : "Reverse Mentorship"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Un junior enseña a un senior sobre nuevas tecnologías, herramientas modernas, tendencias actuales (ej: un Gen Z enseña TikTok a un Millennial)."
                    : "A junior teaches a senior about new technologies, modern tools, current trends (e.g., a Gen Z teaches TikTok to a Millennial)."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-primary-100 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Mentoría de Primer Empleo"
                    : "First Job Mentorship"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Para estudiantes o bootcamp grads: cómo armar portfolio, preparar entrevistas técnicas, conseguir tu primer trabajo tech."
                    : "For students or bootcamp grads: how to build a portfolio, prepare technical interviews, get your first tech job."}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-primary to-primary-600 text-white">
            <CardBody className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isSpanish
                  ? "¿Necesitas un Mentor Técnico o un Coach Tech?"
                  : "Need a Technical Mentor or a Tech Coach?"}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isSpanish
                  ? "En HugoTech combinamos ambos enfoques: mentoría técnica directiva cuando necesitas respuestas, y coaching facilitador cuando necesitas descubrir tus propias soluciones."
                  : "At HugoTech we combine both approaches: directive technical mentorship when you need answers, and facilitative coaching when you need to discover your own solutions."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  as={Link}
                  className="bg-white text-primary font-bold text-lg px-8 py-6 h-auto"
                  href="/#cita"
                  size="lg"
                >
                  {isSpanish
                    ? "Agendar Sesión Gratuita"
                    : "Schedule Free Session"}
                </Button>
                <Button
                  as={Link}
                  className="bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-6 h-auto hover:bg-white hover:text-primary transition-colors"
                  href="/mentor-coaching"
                  size="lg"
                  variant="bordered"
                >
                  {isSpanish ? "Ver Mentoría Tech" : "View Tech Mentorship"}
                </Button>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-customgray mb-6">
            {isSpanish ? "Artículos Relacionados" : "Related Articles"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              className="block p-6 border-2 border-default-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              href="/glosario/coaching-tech"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {isSpanish
                  ? "¿Qué es el Coaching Tech?"
                  : "What is Tech Coaching?"}
              </h3>
              <p className="text-default-600">
                {isSpanish
                  ? "Descubre qué es el Coaching Tech y cómo se diferencia de la mentoría técnica."
                  : "Discover what Tech Coaching is and how it differs from technical mentorship."}
              </p>
            </Link>

            <Link
              className="block p-6 border-2 border-default-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              href="/blog/estancamiento-senior-developer-2026"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {isSpanish
                  ? "Estancamiento como Senior Developer"
                  : "Stagnation as Senior Developer"}
              </h3>
              <p className="text-default-600">
                {isSpanish
                  ? "Por qué muchos seniors se estancan y cómo salir de esa meseta."
                  : "Why many seniors stagnate and how to break out of that plateau."}
              </p>
            </Link>
          </div>
        </section>
      </article>
    </HomeLayout>
  );
}
