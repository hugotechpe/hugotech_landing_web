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
      title:
        "¿Qué es el Burnout Tech? Definición, Síntomas y Cómo Prevenirlo 2025",
      description:
        "El Burnout Tech es el agotamiento emocional crónico en profesionales de tecnología causado por estrés laboral prolongado. Descubre síntomas, diferencias con depresión, y cómo prevenir el burnout en desarrolladores.",
      keywords: [
        "qué es burnout tech",
        "burnout técnico",
        "burnout en desarrolladores",
        "síntomas burnout tech",
        "cómo prevenir burnout",
        "agotamiento laboral tecnología",
        "burnout programadores",
        "burnout software engineer",
        "burnout tech Perú",
      ],
    });
  }

  return genMetadata({
    title:
      "What is Tech Burnout? Definition, Symptoms & How to Prevent It 2025",
    description:
      "Tech Burnout is chronic emotional exhaustion in technology professionals caused by prolonged work stress. Discover symptoms, differences with depression, and how to prevent burnout in developers.",
    keywords: [
      "what is tech burnout",
      "technical burnout",
      "developer burnout",
      "tech burnout symptoms",
      "how to prevent burnout",
      "technology work exhaustion",
      "programmer burnout",
      "software engineer burnout",
    ],
  });
}

export default async function BurnoutTechGlosarioPage({
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
    headline: isSpanish ? "¿Qué es el Burnout Tech?" : "What is Tech Burnout?",
    description: isSpanish
      ? "El Burnout Tech es un estado de agotamiento emocional, físico y mental causado por estrés laboral crónico en profesionales de tecnología, caracterizado por cinismo, despersonalización y baja eficacia profesional."
      : "Tech Burnout is a state of emotional, physical, and mental exhaustion caused by chronic work stress in technology professionals, characterized by cynicism, depersonalization, and low professional efficacy.",
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
      ? "burnout tech, agotamiento laboral, burnout desarrolladores"
      : "tech burnout, work exhaustion, developer burnout",
  };

  // JSON-LD Schema para FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isSpanish
      ? [
          {
            "@type": "Question",
            name: "¿Qué es el Burnout Tech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El Burnout Tech es un estado de agotamiento emocional, físico y mental causado por estrés laboral crónico y prolongado en profesionales de tecnología. Se caracteriza por tres dimensiones: agotamiento emocional (sentirse vacío y sin energía), despersonalización o cinismo (actitud negativa hacia el trabajo), y baja eficacia profesional (sentir que no aportas valor).",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuál es la diferencia entre Burnout Tech y depresión?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El Burnout Tech está específicamente relacionado con el trabajo y mejora fuera del contexto laboral, mientras que la depresión afecta todas las áreas de la vida. El burnout se caracteriza por agotamiento y cinismo laboral, mientras que la depresión incluye tristeza profunda, pérdida de interés generalizada y pensamientos negativos constantes. Sin embargo, el burnout prolongado puede evolucionar a depresión clínica.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuáles son los síntomas del Burnout Tech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los síntomas del Burnout Tech incluyen: fatiga crónica que no se recupera con descanso, insomnio o problemas para dormir, dolores de cabeza frecuentes y tensión muscular, cinismo hacia el trabajo y los compañeros, procrastinación excesiva y pérdida de productividad, errores frecuentes en el código, irritabilidad y cambios de humor, y pérdida de pasión por la tecnología.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo prevenir el Burnout Tech?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Para prevenir el Burnout Tech: establece límites claros entre trabajo y vida personal, practica desconexión digital fuera del horario laboral, prioriza el descanso y el sueño de calidad, mantén hobbies no relacionados con tecnología, busca mentoría o coaching profesional, comunica tus límites al equipo, toma vacaciones reales sin trabajar, y considera cambiar de proyecto o empresa si el ambiente es tóxico.",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "What is Tech Burnout?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tech Burnout is a state of emotional, physical, and mental exhaustion caused by chronic and prolonged work stress in technology professionals. It is characterized by three dimensions: emotional exhaustion (feeling empty and without energy), depersonalization or cynicism (negative attitude toward work), and low professional efficacy (feeling you don't add value).",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between Tech Burnout and depression?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tech Burnout is specifically work-related and improves outside the work context, while depression affects all areas of life. Burnout is characterized by exhaustion and work cynicism, while depression includes deep sadness, generalized loss of interest, and constant negative thoughts. However, prolonged burnout can evolve into clinical depression.",
            },
          },
          {
            "@type": "Question",
            name: "What are the symptoms of Tech Burnout?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tech Burnout symptoms include: chronic fatigue that doesn't recover with rest, insomnia or sleep problems, frequent headaches and muscle tension, cynicism toward work and colleagues, excessive procrastination and loss of productivity, frequent errors in code, irritability and mood swings, and loss of passion for technology.",
            },
          },
          {
            "@type": "Question",
            name: "How to prevent Tech Burnout?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To prevent Tech Burnout: establish clear boundaries between work and personal life, practice digital disconnection outside work hours, prioritize rest and quality sleep, maintain hobbies unrelated to technology, seek professional mentoring or coaching, communicate your boundaries to the team, take real vacations without working, and consider changing projects or companies if the environment is toxic.",
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
              {isSpanish ? "Burnout Tech" : "Tech Burnout"}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <Chip color="primary" size="lg" variant="flat">
              {isSpanish ? "📖 Definición" : "📖 Definition"}
            </Chip>
            <Chip color="danger" size="lg" variant="flat">
              {isSpanish ? "🔥 Salud Mental" : "🔥 Mental Health"}
            </Chip>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-customgray mb-6 leading-tight">
            {isSpanish ? "¿Qué es el Burnout Tech?" : "What is Tech Burnout?"}
          </h1>

          {/* Definición destacada (optimizada para Featured Snippet) */}
          <div className="bg-danger-50 border-l-4 border-danger p-6 rounded-r-lg mb-8">
            <p className="text-lg md:text-xl leading-relaxed">
              {isSpanish ? (
                <>
                  El <strong>Burnout Tech</strong> es un{" "}
                  <strong>
                    estado de agotamiento emocional, físico y mental
                  </strong>{" "}
                  causado por{" "}
                  <strong>estrés laboral crónico y prolongado</strong> en
                  profesionales de tecnología. Se caracteriza por{" "}
                  <strong>tres dimensiones</strong>:{" "}
                  <em>agotamiento emocional</em> (sentirse vacío y sin energía),{" "}
                  <em>despersonalización o cinismo</em> (actitud negativa hacia
                  el trabajo), y <em>baja eficacia profesional</em> (sentir que
                  no aportas valor).{" "}
                  <strong>No es lo mismo que estar cansado</strong>: el burnout
                  es agotamiento crónico que no se recupera con descanso normal.
                </>
              ) : (
                <>
                  <strong>Tech Burnout</strong> is a{" "}
                  <strong>
                    state of emotional, physical, and mental exhaustion
                  </strong>{" "}
                  caused by <strong>chronic and prolonged work stress</strong>{" "}
                  in technology professionals. It is characterized by{" "}
                  <strong>three dimensions</strong>:{" "}
                  <em>emotional exhaustion</em> (feeling empty and without
                  energy), <em>depersonalization or cynicism</em> (negative
                  attitude toward work), and <em>low professional efficacy</em>{" "}
                  (feeling you don&apos;t add value).{" "}
                  <strong>It&apos;s not the same as being tired</strong>:
                  burnout is chronic exhaustion that doesn&apos;t recover with
                  normal rest.
                </>
              )}
            </p>
          </div>
        </header>

        {/* Sección 1: ¿Qué es? - Definición Expandida */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Qué es el Burnout Tech? (Definición extendida)"
              : "What is Tech Burnout? (Extended definition)"}
          </h2>

          <Card className="mb-6">
            <CardBody className="p-6 md:p-8">
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {isSpanish
                  ? "El Burnout Tech es especialmente común en la industria tecnológica por varias razones: cultura de 'hustle' y 'siempre disponible', deadlines imposibles y sprints infinitos, on-call rotations y emergencias de producción, síndrome del impostor constante ('nunca sé lo suficiente'), cambios tecnológicos acelerados, y expectativas de aprender en tiempo personal."
                  : "Tech Burnout is especially common in the technology industry for several reasons: 'hustle' and 'always available' culture, impossible deadlines and infinite sprints, on-call rotations and production emergencies, constant impostor syndrome ('I never know enough'), accelerated technological changes, and expectations to learn in personal time."}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-danger rounded-full flex items-center justify-center text-white font-bold">
                    🔥
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Agotamiento emocional:"
                        : "Emotional exhaustion:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Sentirse drenado emocionalmente, sin energía para enfrentar el día laboral"
                      : "Feeling emotionally drained, without energy to face the work day"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-danger rounded-full flex items-center justify-center text-white font-bold">
                    😶
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Despersonalización/Cinismo:"
                        : "Depersonalization/Cynicism:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Actitud negativa, distante y cínica hacia el trabajo, compañeros y clientes"
                      : "Negative, distant, and cynical attitude toward work, colleagues, and clients"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-danger rounded-full flex items-center justify-center text-white font-bold">
                    📉
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Baja eficacia profesional:"
                        : "Low professional efficacy:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Sensación de incompetencia, de no aportar valor, de que tu trabajo no importa"
                      : "Feeling of incompetence, not adding value, that your work doesn't matter"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-danger rounded-full flex items-center justify-center text-white font-bold">
                    😴
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Fatiga crónica:" : "Chronic fatigue:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Cansancio constante que no mejora con fin de semana o vacaciones cortas"
                      : "Constant tiredness that doesn't improve with weekends or short vacations"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-danger rounded-full flex items-center justify-center text-white font-bold">
                    😤
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Irritabilidad:" : "Irritability:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Respuestas emocionales desproporcionadas, frustración constante"
                      : "Disproportionate emotional responses, constant frustration"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-danger rounded-full flex items-center justify-center text-white font-bold">
                    💔
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Pérdida de pasión:" : "Loss of passion:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Ya no te emociona la tecnología, programar se siente como obligación"
                      : "Technology no longer excites you, coding feels like an obligation"}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Sección 2: Diferencia Burnout vs Depresión (Tabla comparativa) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Cuál es la diferencia entre Burnout Tech y Depresión?"
              : "What's the difference between Tech Burnout and Depression?"}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-danger text-white">
                  <th className="border border-danger-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Aspecto" : "Aspect"}
                  </th>
                  <th className="border border-danger-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Burnout Tech" : "Tech Burnout"}
                  </th>
                  <th className="border border-danger-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Depresión" : "Depression"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Origen" : "Origin"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Relacionado específicamente con el trabajo"
                      : "Specifically related to work"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Afecta todas las áreas de la vida"
                      : "Affects all areas of life"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Síntoma principal" : "Main symptom"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Agotamiento y cinismo laboral"
                      : "Exhaustion and work cynicism"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Tristeza profunda y pérdida de interés generalizada"
                      : "Deep sadness and generalized loss of interest"}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Contexto" : "Context"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Mejora fuera del trabajo (fines de semana, vacaciones)"
                      : "Improves outside work (weekends, vacations)"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Persiste independiente del contexto"
                      : "Persists regardless of context"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Energía" : "Energy"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Fatiga física y emocional ante el trabajo"
                      : "Physical and emotional fatigue toward work"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Falta generalizada de energía vital"
                      : "Generalized lack of vital energy"}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Vida personal" : "Personal life"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Puede seguir disfrutando hobbies no-tech"
                      : "Can still enjoy non-tech hobbies"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Pérdida de interés en todo (anhedonia)"
                      : "Loss of interest in everything (anhedonia)"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Tratamiento" : "Treatment"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Cambios laborales, límites, coaching"
                      : "Work changes, boundaries, coaching"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Terapia profesional, posible medicación"
                      : "Professional therapy, possible medication"}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish ? "Relación" : "Relationship"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Burnout prolongado puede evolucionar a depresión"
                      : "Prolonged burnout can evolve into depression"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Es una condición clínica más amplia"
                      : "It's a broader clinical condition"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-warning-50 border-l-4 border-warning p-6 rounded-r-lg">
            <p className="text-default-700">
              <strong>⚠️ {isSpanish ? "Importante:" : "Important:"}</strong>{" "}
              {isSpanish
                ? "Si sientes síntomas de depresión (tristeza profunda constante, pensamientos suicidas, incapacidad para funcionar), busca ayuda profesional inmediatamente. El burnout no tratado puede convertirse en depresión clínica."
                : "If you feel symptoms of depression (constant deep sadness, suicidal thoughts, inability to function), seek professional help immediately. Untreated burnout can become clinical depression."}
            </p>
          </div>
        </section>

        {/* Sección 3: Síntomas del Burnout Tech */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Síntomas del Burnout Tech: ¿Cómo saber si lo tienes?"
              : "Tech Burnout Symptoms: How to know if you have it?"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-danger">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-danger mb-4">
                  🚨 {isSpanish ? "Síntomas físicos" : "Physical symptoms"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Fatiga crónica que no se recupera con descanso"
                      : "Chronic fatigue that doesn't recover with rest"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Insomnio o despertarse a las 3am pensando en bugs"
                      : "Insomnia or waking up at 3am thinking about bugs"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Dolores de cabeza frecuentes y tensión muscular"
                      : "Frequent headaches and muscle tension"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Problemas digestivos o cambios en el apetito"
                      : "Digestive problems or appetite changes"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Sistema inmune débil (enfermas más seguido)"
                      : "Weak immune system (getting sick more often)"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-danger">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-danger mb-4">
                  😔 {isSpanish ? "Síntomas emocionales" : "Emotional symptoms"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Cinismo hacia el trabajo ('ya nada importa')"
                      : "Cynicism toward work ('nothing matters anymore')"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Irritabilidad y explosiones emocionales"
                      : "Irritability and emotional outbursts"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Pérdida de pasión por la tecnología"
                      : "Loss of passion for technology"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Sentirse atrapado sin salida profesional"
                      : "Feeling trapped without professional exit"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Desapego emocional del equipo y proyectos"
                      : "Emotional detachment from team and projects"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-danger">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-danger mb-4">
                  💻{" "}
                  {isSpanish
                    ? "Síntomas en el rendimiento"
                    : "Performance symptoms"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Procrastinación extrema en tareas técnicas"
                      : "Extreme procrastination on technical tasks"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Errores frecuentes en el código (bugs tontos)"
                      : "Frequent errors in code (silly bugs)"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Dificultad para concentrarte más de 30 minutos"
                      : "Difficulty concentrating for more than 30 minutes"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Pérdida de creatividad y soluciones innovadoras"
                      : "Loss of creativity and innovative solutions"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Evitar code reviews o reuniones técnicas"
                      : "Avoiding code reviews or technical meetings"}
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-danger">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-danger mb-4">
                  🚪{" "}
                  {isSpanish
                    ? "Síntomas comportamentales"
                    : "Behavioral symptoms"}
                </h3>
                <ul className="space-y-2 text-default-700">
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Ausentismo (faltar al trabajo frecuentemente)"
                      : "Absenteeism (frequently missing work)"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Desconexión emocional en reuniones (cámara off siempre)"
                      : "Emotional disconnection in meetings (camera off always)"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Evitar interacciones sociales con el equipo"
                      : "Avoiding social interactions with the team"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Trabajar en exceso para compensar la baja productividad"
                      : "Overworking to compensate for low productivity"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-danger font-bold">•</span>
                    {isSpanish
                      ? "Scrolling infinito en redes sociales durante el trabajo"
                      : "Infinite scrolling on social media during work"}
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Sección 4: Cómo prevenir el Burnout Tech */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Cómo prevenir el Burnout Tech?"
              : "How to prevent Tech Burnout?"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Establece límites claros"
                    : "Set clear boundaries"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Horario fijo de trabajo, no contestar Slack/emails fuera de horario, decir 'no' a proyectos sobredemandantes, apagar notificaciones después del trabajo."
                    : "Fixed work hours, don't answer Slack/emails outside hours, say 'no' to overdemanding projects, turn off notifications after work."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">😴</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Prioriza el descanso" : "Prioritize rest"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "7-8 horas de sueño no negociables, vacaciones reales (sin laptop), breaks durante el día (técnica Pomodoro), desconexión total los fines de semana."
                    : "7-8 hours of non-negotiable sleep, real vacations (no laptop), breaks during the day (Pomodoro technique), total disconnection on weekends."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Hobbies no-tech" : "Non-tech hobbies"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Deportes, arte, música, lectura no técnica, cocina, jardinería. Cualquier cosa que no sea pantallas ni código. Tu cerebro necesita descansar del tech."
                    : "Sports, art, music, non-technical reading, cooking, gardening. Anything that isn't screens or code. Your brain needs to rest from tech."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Busca apoyo profesional"
                    : "Seek professional support"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Mentoría, coaching, terapia profesional. No tienes que pasar por esto solo. Un mentor puede ayudarte a navegar situaciones laborales tóxicas."
                    : "Mentoring, coaching, professional therapy. You don't have to go through this alone. A mentor can help you navigate toxic work situations."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Comunica tus límites"
                    : "Communicate your boundaries"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Habla con tu manager sobre carga de trabajo insostenible, negocia deadlines realistas, pide ayuda cuando estés sobrepasado, rechaza on-call excesivo."
                    : "Talk to your manager about unsustainable workload, negotiate realistic deadlines, ask for help when overwhelmed, refuse excessive on-call."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🚪</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Considera cambiar de ambiente"
                    : "Consider changing environment"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Si la cultura es tóxica y no cambia, busca otra empresa. Tu salud mental vale más que cualquier salario o título. No esperes al burnout severo."
                    : "If the culture is toxic and doesn't change, look for another company. Your mental health is worth more than any salary or title. Don't wait for severe burnout."}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Sección IA 2025 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Burnout Tech en la Era de la IA (2025)"
              : "Tech Burnout in the AI Era (2025)"}
          </h2>

          <Card className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-orange-500">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {isSpanish
                      ? "La paradoja de la IA: ¿Libera o aumenta el Burnout?"
                      : "The AI paradox: Does it free or increase Burnout?"}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "La promesa: 'La IA hará tu trabajo más fácil'. La realidad en 2025:"
                      : "The promise: 'AI will make your work easier'. The reality in 2025:"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📈</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Expectativas infladas"
                          : "Inflated expectations"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "'Si Copilot escribe código, deberías entregar el doble'. La presión aumenta porque asumen que la IA te hace 2x más rápido."
                          : "'If Copilot writes code, you should deliver twice as much'. Pressure increases because they assume AI makes you 2x faster."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">😰</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Ansiedad existencial"
                          : "Existential anxiety"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "'¿Me reemplazará la IA?' es el nuevo síndrome del impostor. Ansiedad constante por estar 'obsoleto' aunque seas Senior."
                          : "'Will AI replace me?' is the new impostor syndrome. Constant anxiety about being 'obsolete' even if you're Senior."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Aprender 24/7 para no quedar atrás"
                          : "Learning 24/7 to not fall behind"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Cada semana sale una nueva herramienta de IA. Sientes que si no aprendes Claude, Cursor, v0, quedas obsoleto. El FOMO tecnológico se vuelve insostenible."
                          : "Every week a new AI tool comes out. You feel if you don't learn Claude, Cursor, v0, you become obsolete. Tech FOMO becomes unsustainable."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧹</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Limpiar código generado por IA"
                          : "Cleaning up AI-generated code"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "La IA genera código rápido pero no siempre mantenible. Ahora tu trabajo es 'limpiar' detrás de la IA, lo cual es agotador mentalmente."
                          : "AI generates code fast but not always maintainable. Now your job is 'cleaning up' after AI, which is mentally exhausting."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-orange-100 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed">
                  <strong>
                    {isSpanish
                      ? "La IA no causa burnout directamente, pero amplifica las condiciones que lo generan."
                      : "AI doesn't directly cause burnout, but amplifies the conditions that generate it."}
                  </strong>{" "}
                  {isSpanish
                    ? "La solución no es rechazar la IA, sino establecer límites claros: 'Uso IA para acelerar, pero no trabajo más horas por eso'. Y reconectar con tu propósito profesional más allá de la productividad."
                    : "The solution isn't rejecting AI, but setting clear boundaries: 'I use AI to accelerate, but I don't work more hours because of it'. And reconnect with your professional purpose beyond productivity."}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-danger to-danger-600 text-white">
            <CardBody className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isSpanish
                  ? "¿Estás experimentando Burnout Tech?"
                  : "Are you experiencing Tech Burnout?"}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isSpanish
                  ? "No estás solo. En HugoTech ayudamos a developers a recuperarse del burnout, establecer límites saludables, y reconstruir su relación con la tecnología."
                  : "You're not alone. At HugoTech we help developers recover from burnout, establish healthy boundaries, and rebuild their relationship with technology."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#cita">
                  <Button
                    className="bg-white text-danger font-bold text-lg px-8 py-6 h-auto"
                    size="lg"
                  >
                    {isSpanish
                      ? "Agendar Sesión de Recuperación"
                      : "Schedule Recovery Session"}
                  </Button>
                </Link>
                <Link href="/mentoring-burnout">
                  <Button
                    className="bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-6 h-auto hover:bg-white hover:text-danger transition-colors"
                    size="lg"
                    variant="bordered"
                  >
                    {isSpanish
                      ? "Más sobre Mentoring Burnout"
                      : "More about Burnout Mentoring"}
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
              href="/glosario/sindrome-impostor"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {isSpanish
                  ? "¿Qué es el Síndrome del Impostor?"
                  : "What is Impostor Syndrome?"}
              </h3>
              <p className="text-default-600">
                {isSpanish
                  ? "El síndrome del impostor suele acompañar al burnout tech. Descubre qué es y cómo superarlo."
                  : "Impostor syndrome often accompanies tech burnout. Discover what it is and how to overcome it."}
              </p>
            </Link>

            <Link
              className="block p-6 border-2 border-default-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
              href="/blog/burnout-silencioso-tech-2026"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {isSpanish
                  ? "Burnout Silencioso en Tech"
                  : "Silent Burnout in Tech"}
              </h3>
              <p className="text-default-600">
                {isSpanish
                  ? "El burnout que nadie nota: cómo el agotamiento se camufla detrás de la productividad."
                  : "The burnout nobody notices: how exhaustion camouflages behind productivity."}
              </p>
            </Link>
          </div>
        </section>
      </article>
    </HomeLayout>
  );
}
