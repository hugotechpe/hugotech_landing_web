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
      title: "¿Qué es un Tech Lead? Definición, Responsabilidades y Guía 2025",
      description:
        "Un Tech Lead es un líder técnico que guía equipos de desarrollo combinando habilidades técnicas y de liderazgo. Descubre qué hace un Tech Lead, diferencias con Engineering Manager, salarios y cómo convertirte en uno.",
      keywords: [
        "qué es un tech lead",
        "tech lead definición",
        "responsabilidades tech lead",
        "tech lead vs engineering manager",
        "salario tech lead",
        "cómo ser tech lead",
        "líder técnico",
        "technical lead",
        "tech lead Perú",
      ],
    });
  }

  return genMetadata({
    title: "What is a Tech Lead? Definition, Responsibilities & Guide 2025",
    description:
      "A Tech Lead is a technical leader who guides development teams combining technical and leadership skills. Discover what a Tech Lead does, differences with Engineering Manager, salaries, and how to become one.",
    keywords: [
      "what is a tech lead",
      "tech lead definition",
      "tech lead responsibilities",
      "tech lead vs engineering manager",
      "tech lead salary",
      "how to become tech lead",
      "technical leader",
      "technical lead",
    ],
  });
}

export default async function TechLeadGlosarioPage({
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
    headline: isSpanish ? "¿Qué es un Tech Lead?" : "What is a Tech Lead?",
    description: isSpanish
      ? "Un Tech Lead es un líder técnico que guía equipos de desarrollo, tomando decisiones de arquitectura, mentorizando developers y asegurando la calidad técnica del producto."
      : "A Tech Lead is a technical leader who guides development teams, making architecture decisions, mentoring developers, and ensuring the technical quality of the product.",
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
      ? "tech lead, líder técnico, liderazgo técnico"
      : "tech lead, technical leader, technical leadership",
  };

  // JSON-LD Schema para FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isSpanish
      ? [
          {
            "@type": "Question",
            name: "¿Qué es un Tech Lead?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Un Tech Lead (Technical Lead o Líder Técnico) es un desarrollador senior que lidera técnicamente un equipo de desarrollo. El Tech Lead combina habilidades técnicas avanzadas con capacidades de liderazgo para guiar al equipo en decisiones arquitectónicas, estándares de código, y entrega de software de calidad.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la diferencia entre Tech Lead y Engineering Manager?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El Tech Lead se enfoca en decisiones técnicas, arquitectura, y calidad del código (50% código, 50% liderazgo). El Engineering Manager se enfoca en la gestión de personas, planificación, y objetivos del equipo (10% código, 90% gestión). El Tech Lead pregunta '¿cómo lo construimos?', el Engineering Manager pregunta '¿qué construimos y cuándo?'",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuáles son las responsabilidades de un Tech Lead?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Las responsabilidades de un Tech Lead incluyen: tomar decisiones de arquitectura, mentoría técnica del equipo, code reviews y control de calidad, resolución de bloqueos técnicos, comunicación con stakeholders, gestión de deuda técnica, y establecimiento de estándares de código.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué tipos de Tech Lead existen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Existen varios tipos: Tech Lead Individual (lidera sin equipo directo), Tech Lead de Equipo (lidera 3-7 developers), Tech Lead Multiplayer (coordina múltiples equipos), Tech Lead de Producto (enfocado en features de producto), y Tech Lead de Plataforma (enfocado en infraestructura y herramientas internas).",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "What is a Tech Lead?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Tech Lead (Technical Lead) is a senior developer who technically leads a development team. The Tech Lead combines advanced technical skills with leadership capabilities to guide the team in architectural decisions, code standards, and quality software delivery.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between Tech Lead and Engineering Manager?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Tech Lead focuses on technical decisions, architecture, and code quality (50% code, 50% leadership). The Engineering Manager focuses on people management, planning, and team objectives (10% code, 90% management). The Tech Lead asks 'how do we build it?', the Engineering Manager asks 'what do we build and when?'",
            },
          },
          {
            "@type": "Question",
            name: "What are the responsibilities of a Tech Lead?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tech Lead responsibilities include: making architecture decisions, technical mentoring of the team, code reviews and quality control, resolving technical blockers, stakeholder communication, technical debt management, and establishing code standards.",
            },
          },
          {
            "@type": "Question",
            name: "What types of Tech Lead exist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Several types exist: Individual Tech Lead (leads without direct team), Team Tech Lead (leads 3-7 developers), Multiplayer Tech Lead (coordinates multiple teams), Product Tech Lead (focused on product features), and Platform Tech Lead (focused on infrastructure and internal tools).",
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
            <li className="text-primary font-semibold">Tech Lead</li>
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
            {isSpanish ? "¿Qué es un Tech Lead?" : "What is a Tech Lead?"}
          </h1>

          {/* Definición destacada (optimizada para Featured Snippet) */}
          <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <p className="text-lg md:text-xl leading-relaxed">
              {isSpanish ? (
                <>
                  Un <strong>Tech Lead</strong> (Technical Lead o{" "}
                  <strong>Líder Técnico</strong>) es un{" "}
                  <strong>desarrollador senior que lidera técnicamente</strong>{" "}
                  un equipo de desarrollo. El Tech Lead{" "}
                  <strong>
                    combina habilidades técnicas avanzadas con capacidades de
                    liderazgo
                  </strong>{" "}
                  para guiar al equipo en{" "}
                  <strong>
                    decisiones arquitectónicas, estándares de código, y entrega
                    de software de calidad
                  </strong>
                  . A diferencia de un Engineering Manager, el Tech Lead{" "}
                  <em>sigue escribiendo código</em> (aproximadamente 50% de su
                  tiempo) mientras lidera técnicamente al equipo.
                </>
              ) : (
                <>
                  A <strong>Tech Lead</strong> (Technical Lead) is a{" "}
                  <strong>senior developer who technically leads</strong> a
                  development team. The Tech Lead{" "}
                  <strong>
                    combines advanced technical skills with leadership
                    capabilities
                  </strong>{" "}
                  to guide the team in{" "}
                  <strong>
                    architectural decisions, code standards, and quality
                    software delivery
                  </strong>
                  . Unlike an Engineering Manager, the Tech Lead{" "}
                  <em>continues writing code</em> (approximately 50% of their
                  time) while technically leading the team.
                </>
              )}
            </p>
          </div>
        </header>

        {/* Sección 1: ¿Qué es? - Definición Expandida */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Qué es un Tech Lead? (Definición extendida)"
              : "What is a Tech Lead? (Extended definition)"}
          </h2>

          <Card className="mb-6">
            <CardBody className="p-6 md:p-8">
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {isSpanish
                  ? "El Tech Lead es el 'arquitecto ejecutor': diseña la solución técnica y también construye partes críticas del sistema. No solo delega, también modela con ejemplo escribiendo código limpio, haciendo pair programming, y compartiendo conocimiento constantemente."
                  : "The Tech Lead is the 'executing architect': designs the technical solution and also builds critical parts of the system. They don't just delegate, they also model by example writing clean code, doing pair programming, and constantly sharing knowledge."}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Decisiones de arquitectura:"
                        : "Architecture decisions:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Define la estructura técnica del producto, patrones, y stack tecnológico"
                      : "Defines the technical structure of the product, patterns, and technology stack"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Mentoría técnica:" : "Technical mentoring:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Desarrolla las capacidades técnicas del equipo a través de code reviews y pair programming"
                      : "Develops team technical capabilities through code reviews and pair programming"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Control de calidad:" : "Quality control:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Establece estándares de código, testing, y documentación técnica"
                      : "Establishes code standards, testing, and technical documentation"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Resolución de bloqueos:"
                        : "Blocker resolution:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Desbloquea al equipo cuando se estancan técnicamente"
                      : "Unblocks the team when they get stuck technically"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Comunicación técnica:"
                        : "Technical communication:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Traduce requerimientos de negocio a soluciones técnicas y viceversa"
                      : "Translates business requirements into technical solutions and vice versa"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Gestión de deuda técnica:"
                        : "Technical debt management:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Prioriza refactorizaciones y mejoras técnicas necesarias"
                      : "Prioritizes necessary refactorings and technical improvements"}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Sección 2: Diferencia Tech Lead vs Engineering Manager (Tabla comparativa) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Cuál es la diferencia entre Tech Lead y Engineering Manager?"
              : "What's the difference between Tech Lead and Engineering Manager?"}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-primary-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Aspecto" : "Aspect"}
                  </th>
                  <th className="border border-primary-200 px-6 py-4 text-left font-bold">
                    Tech Lead
                  </th>
                  <th className="border border-primary-200 px-6 py-4 text-left font-bold">
                    Engineering Manager
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Enfoque principal" : "Main focus"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Decisiones técnicas y arquitectura"
                      : "Technical decisions and architecture"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Gestión de personas y objetivos"
                      : "People management and objectives"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Tiempo en código" : "Time coding"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "50% código, 50% liderazgo"
                      : "50% code, 50% leadership"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "10% código, 90% gestión"
                      : "10% code, 90% management"}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Pregunta clave" : "Key question"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"¿Cómo lo construimos?"'
                      : '"How do we build it?"'}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"¿Qué construimos y cuándo?"'
                      : '"What do we build and when?"'}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Responsabilidades" : "Responsibilities"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Arquitectura, calidad código, mentoría técnica"
                      : "Architecture, code quality, technical mentoring"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Roadmap, 1:1s, evaluaciones, contratación"
                      : "Roadmap, 1:1s, evaluations, hiring"}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Reuniones típicas" : "Typical meetings"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Design reviews, code reviews, tech spikes"
                      : "Design reviews, code reviews, tech spikes"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "1:1s, planning, retrospectives, stakeholders"
                      : "1:1s, planning, retrospectives, stakeholders"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Métricas clave" : "Key metrics"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Calidad código, performance, deuda técnica"
                      : "Code quality, performance, technical debt"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Velocidad equipo, satisfacción, entrega de objetivos"
                      : "Team velocity, satisfaction, objective delivery"}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Ideal para" : "Ideal for"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Seniors apasionados por tecnología y arquitectura"
                      : "Seniors passionate about technology and architecture"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Seniors con interés en gestión de personas"
                      : "Seniors interested in people management"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-warning-50 border-l-4 border-warning p-6 rounded-r-lg">
            <p className="text-default-700">
              <strong>
                💡 {isSpanish ? "Nota importante:" : "Important note:"}
              </strong>{" "}
              {isSpanish
                ? "En empresas pequeñas, una misma persona puede tener ambos roles (Tech Lead + Engineering Manager). En empresas grandes, son roles separados trabajando en conjunto."
                : "In small companies, the same person can have both roles (Tech Lead + Engineering Manager). In large companies, they are separate roles working together."}
            </p>
          </div>
        </section>

        {/* Sección 3: Responsabilidades principales */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Responsabilidades principales de un Tech Lead"
              : "Main responsibilities of a Tech Lead"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  🏗️{" "}
                  {isSpanish
                    ? "Arquitectura y diseño técnico"
                    : "Architecture and technical design"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Diseñar la arquitectura de alto nivel del sistema"
                      : "Design high-level system architecture"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Evaluar y decidir qué tecnologías usar"
                      : "Evaluate and decide which technologies to use"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Crear ADRs (Architecture Decision Records)"
                      : "Create ADRs (Architecture Decision Records)"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  👨‍🏫{" "}
                  {isSpanish
                    ? "Mentoría y desarrollo del equipo"
                    : "Mentoring and team development"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Code reviews detallados con feedback constructivo"
                      : "Detailed code reviews with constructive feedback"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Pair programming con developers junior/mid"
                      : "Pair programming with junior/mid developers"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Compartir conocimiento en tech talks internas"
                      : "Share knowledge in internal tech talks"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  ⚙️{" "}
                  {isSpanish
                    ? "Gestión de calidad y deuda técnica"
                    : "Quality and technical debt management"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Definir estándares de código y best practices"
                      : "Define code standards and best practices"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Priorizar refactorizaciones críticas"
                      : "Prioritize critical refactorings"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Establecer estrategia de testing (unit, integration, e2e)"
                      : "Establish testing strategy (unit, integration, e2e)"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  🗣️{" "}
                  {isSpanish
                    ? "Comunicación técnica"
                    : "Technical communication"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Traducir requerimientos de negocio a tareas técnicas"
                      : "Translate business requirements into technical tasks"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Comunicar limitaciones técnicas a stakeholders"
                      : "Communicate technical limitations to stakeholders"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    {isSpanish
                      ? "Documentar decisiones y trade-offs técnicos"
                      : "Document decisions and technical trade-offs"}
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Sección 4: Tipos de Tech Lead */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish ? "Tipos de Tech Lead" : "Types of Tech Lead"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🦸</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Tech Lead Individual" : "Individual Tech Lead"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Lidera la parte técnica sin tener reportes directos. Influencia por expertise técnico, no por autoridad jerárquica. Común en equipos pequeños."
                    : "Leads the technical side without having direct reports. Influences through technical expertise, not hierarchical authority. Common in small teams."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-secondary-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Tech Lead de Equipo" : "Team Tech Lead"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Lidera técnicamente un equipo de 3-7 developers. Responsable de la calidad técnica del equipo y su crecimiento técnico. El más común."
                    : "Technically leads a team of 3-7 developers. Responsible for the team's technical quality and technical growth. The most common."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🎮</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Tech Lead Multiplayer"
                    : "Multiplayer Tech Lead"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Coordina la coherencia técnica entre múltiples equipos. Asegura alineación en arquitectura, estándares y decisiones técnicas cross-team."
                    : "Coordinates technical coherence across multiple teams. Ensures alignment in architecture, standards, and cross-team technical decisions."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-warning-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Tech Lead de Producto" : "Product Tech Lead"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Enfocado en la implementación técnica de features de producto. Trabaja muy cerca de Product Managers y diseñadores. Prioriza velocidad de entrega."
                    : "Focused on technical implementation of product features. Works closely with Product Managers and designers. Prioritizes delivery speed."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-danger-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🏗️</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Tech Lead de Plataforma" : "Platform Tech Lead"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Enfocado en infraestructura, CI/CD, herramientas internas, y developer experience. Prioriza escalabilidad y productividad del equipo."
                    : "Focused on infrastructure, CI/CD, internal tools, and developer experience. Prioritizes scalability and team productivity."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-primary-100 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Tech Lead Staff/Principal"
                    : "Staff/Principal Tech Lead"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Tech Lead senior que lidera iniciativas técnicas company-wide. Influencia en decisiones arquitectónicas de toda la organización."
                    : "Senior Tech Lead who leads company-wide technical initiatives. Influences architectural decisions across the entire organization."}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Sección IA 2025 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Tech Lead en la Era de la IA (2025)"
              : "Tech Lead in the AI Era (2025)"}
          </h2>

          <Card className="bg-gradient-to-br from-indigo-50 to-white border-l-4 border-indigo-500">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {isSpanish
                      ? "¿Cómo cambia el rol de Tech Lead con la IA?"
                      : "How does the Tech Lead role change with AI?"}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "En 2025, la IA genera código, pero el Tech Lead es más crítico que nunca porque:"
                      : "In 2025, AI generates code, but the Tech Lead is more critical than ever because:"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Decisiones arquitectónicas estratégicas"
                          : "Strategic architectural decisions"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA no puede decidir si usar microservicios vs monolito considerando el contexto del negocio, equipo y roadmap a 2 años. Eso lo hace un Tech Lead."
                          : "AI cannot decide whether to use microservices vs monolith considering business context, team, and 2-year roadmap. That's what a Tech Lead does."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👥</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Liderazgo humano que la IA no puede hacer"
                          : "Human leadership that AI cannot do"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Motivar a un developer junior que está perdiendo la confianza, mediar un conflicto técnico entre dos seniors, o detectar burnout en tu equipo. La IA no siente empatía."
                          : "Motivating a junior developer losing confidence, mediating a technical conflict between two seniors, or detecting burnout in your team. AI doesn't feel empathy."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Validar código generado por IA"
                          : "Validate AI-generated code"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Copilot genera código rápido, pero ¿es mantenible? ¿Escalable? ¿Seguro? ¿Alineado con la arquitectura? Un Tech Lead debe tener criterio técnico para validar o rechazar código de IA."
                          : "Copilot generates code fast, but is it maintainable? Scalable? Secure? Aligned with architecture? A Tech Lead must have technical judgment to validate or reject AI code."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🗣️</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Traducir entre técnico y no-técnico"
                          : "Translate between technical and non-technical"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Explicar a un CEO por qué migrar a la nube tomará 6 meses, o a un Product Manager por qué no podemos hacer esa feature en 1 sprint. La IA no negocia con stakeholders."
                          : "Explaining to a CEO why migrating to the cloud will take 6 months, or to a Product Manager why we can't do that feature in 1 sprint. AI doesn't negotiate with stakeholders."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-indigo-100 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>
                    {isSpanish
                      ? "En 2025, el Tech Lead no compite con la IA: la usa como herramienta."
                      : "In 2025, the Tech Lead doesn't compete with AI: uses it as a tool."}
                  </strong>{" "}
                  {isSpanish
                    ? "Los mejores Tech Leads usan IA para acelerar desarrollo, pero mantienen el juicio humano para decisiones críticas, liderazgo de equipo, y visión arquitectónica a largo plazo."
                    : "The best Tech Leads use AI to accelerate development, but maintain human judgment for critical decisions, team leadership, and long-term architectural vision."}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-primary to-primary-600 text-white">
            <CardBody className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isSpanish
                  ? "¿Quieres convertirte en Tech Lead o mejorar tu liderazgo técnico?"
                  : "Want to become a Tech Lead or improve your technical leadership?"}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isSpanish
                  ? "En HugoTech te ayudamos a desarrollar las habilidades técnicas y de liderazgo necesarias para ser un Tech Lead efectivo."
                  : "At HugoTech we help you develop the technical and leadership skills needed to be an effective Tech Lead."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#cita">
                  <Button
                    className="bg-white text-primary font-bold text-lg px-8 py-6 h-auto"
                    size="lg"
                  >
                    {isSpanish
                      ? "Agendar Sesión Gratuita"
                      : "Schedule Free Session"}
                  </Button>
                </Link>
                <Link href="/liderazgo-introvertidos">
                  <Button
                    className="bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-6 h-auto hover:bg-white hover:text-primary transition-colors"
                    size="lg"
                    variant="bordered"
                  >
                    {isSpanish
                      ? "Ver Coaching de Liderazgo"
                      : "View Leadership Coaching"}
                  </Button>
                </Link>
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
              href="/glosario/mentor-tecnico"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {isSpanish
                  ? "¿Qué es un Mentor Técnico?"
                  : "What is a Technical Mentor?"}
              </h3>
              <p className="text-default-600">
                {isSpanish
                  ? "Descubre qué es un Mentor Técnico y cómo se diferencia del Tech Lead."
                  : "Discover what a Technical Mentor is and how it differs from Tech Lead."}
              </p>
            </Link>

            <Link
              className="block p-6 border-2 border-default-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              href="/blog/liderazgo-tech-leads-introvertidos-2026"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {isSpanish
                  ? "Liderazgo para Tech Leads Introvertidos"
                  : "Leadership for Introverted Tech Leads"}
              </h3>
              <p className="text-default-600">
                {isSpanish
                  ? "Cómo liderar efectivamente siendo introvertido en el mundo tech."
                  : "How to lead effectively as an introvert in the tech world."}
              </p>
            </Link>
          </div>
        </section>
      </article>
    </HomeLayout>
  );
}
