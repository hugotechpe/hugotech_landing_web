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
        "¿Qué es el Síndrome del Impostor? Definición y Cómo Superarlo 2025",
      description:
        "El Síndrome del Impostor es la sensación persistente de ser un fraude profesional a pesar de evidencia objetiva de competencia. Descubre qué es, cómo afecta a developers, y estrategias para superarlo.",
      keywords: [
        "qué es síndrome del impostor",
        "síndrome impostor tech",
        "síndrome impostor desarrolladores",
        "síndrome impostor programadores",
        "cómo superar síndrome impostor",
        "impostor syndrome developers",
        "síndrome impostor Perú",
        "fraude profesional tech",
      ],
    });
  }

  return genMetadata({
    title: "What is Impostor Syndrome? Definition & How to Overcome It 2025",
    description:
      "Impostor Syndrome is the persistent feeling of being a professional fraud despite objective evidence of competence. Discover what it is, how it affects developers, and strategies to overcome it.",
    keywords: [
      "what is impostor syndrome",
      "impostor syndrome tech",
      "impostor syndrome developers",
      "impostor syndrome programmers",
      "how to overcome impostor syndrome",
      "professional fraud feeling",
    ],
  });
}

export default async function SindromeImpostorGlosarioPage({
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
      ? "¿Qué es el Síndrome del Impostor?"
      : "What is Impostor Syndrome?",
    description: isSpanish
      ? "El Síndrome del Impostor es la sensación persistente de ser un fraude profesional a pesar de evidencia objetiva de competencia. Es especialmente común en tecnología debido a la velocidad de cambio, la amplitud del conocimiento requerido, y la cultura de 'rockstars' y 'ninjas' que crea expectativas irreales."
      : "Impostor Syndrome is the persistent feeling of being a professional fraud despite objective evidence of competence. It is especially common in technology due to the speed of change, breadth of required knowledge, and 'rockstar' and 'ninja' culture that creates unrealistic expectations.",
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
      ? "síndrome del impostor, fraude profesional, inseguridad tech"
      : "impostor syndrome, professional fraud, tech insecurity",
  };

  // JSON-LD Schema para FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isSpanish
      ? [
          {
            "@type": "Question",
            name: "¿Qué es el Síndrome del Impostor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El Síndrome del Impostor es la sensación persistente de ser un fraude profesional, de no merecer tus logros, y de que en cualquier momento serás 'descubierto' como incompetente, a pesar de tener evidencia objetiva de tu competencia y éxitos. No es una condición médica, sino un patrón psicológico común especialmente en profesionales de alto rendimiento.",
            },
          },
          {
            "@type": "Question",
            name: "¿Por qué es tan común en developers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El Síndrome del Impostor es especialmente común en developers por varias razones: la tecnología cambia constantemente (siempre hay algo que no sabes), la amplitud de conocimiento es abrumadora (frontend, backend, DevOps, cloud, etc.), comparación constante con 'rockstars' y 'ninjas' en redes sociales, entrevistas técnicas estresantes que te hacen sentir incompetente, y la cultura tech de ser autodidacta ('deberías saber esto').",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuáles son los síntomas del Síndrome del Impostor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Los síntomas incluyen: atribuir tus éxitos a suerte o factores externos, miedo constante a ser 'descubierto', perfeccionismo paralizante ('nunca es suficiente'), dificultad para aceptar cumplidos o reconocimiento, compararte negativamente con otros developers, evitar desafíos por miedo al fracaso, y descartar tus logros como insignificantes.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo superar el Síndrome del Impostor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Para superar el Síndrome del Impostor: documenta tus logros objetivos (portfolio, pull requests exitosos, feedback positivo), habla del síndrome con otros developers (verás que es común), acepta que 'no saber' es normal en tech, busca mentoría con alguien que haya pasado por lo mismo, celebra tus éxitos sin minimizarlos, y reemplaza 'no sé esto' por 'aún no sé esto'.",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "What is Impostor Syndrome?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Impostor Syndrome is the persistent feeling of being a professional fraud, of not deserving your achievements, and that at any moment you will be 'discovered' as incompetent, despite having objective evidence of your competence and successes. It is not a medical condition, but a common psychological pattern especially in high-performing professionals.",
            },
          },
          {
            "@type": "Question",
            name: "Why is it so common in developers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Impostor Syndrome is especially common in developers for several reasons: technology constantly changes (there's always something you don't know), the breadth of knowledge is overwhelming (frontend, backend, DevOps, cloud, etc.), constant comparison with 'rockstars' and 'ninjas' on social media, stressful technical interviews that make you feel incompetent, and tech culture of being self-taught ('you should know this').",
            },
          },
          {
            "@type": "Question",
            name: "What are the symptoms of Impostor Syndrome?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Symptoms include: attributing your successes to luck or external factors, constant fear of being 'discovered', paralyzing perfectionism ('it's never enough'), difficulty accepting compliments or recognition, negatively comparing yourself with other developers, avoiding challenges for fear of failure, and dismissing your achievements as insignificant.",
            },
          },
          {
            "@type": "Question",
            name: "How to overcome Impostor Syndrome?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To overcome Impostor Syndrome: document your objective achievements (portfolio, successful pull requests, positive feedback), talk about the syndrome with other developers (you'll see it's common), accept that 'not knowing' is normal in tech, seek mentorship with someone who has been through it, celebrate your successes without minimizing them, and replace 'I don't know this' with 'I don't know this yet'.",
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
              {isSpanish ? "Síndrome del Impostor" : "Impostor Syndrome"}
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
              {isSpanish ? "🧠 Psicología Tech" : "🧠 Tech Psychology"}
            </Chip>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-customgray mb-6 leading-tight">
            {isSpanish
              ? "¿Qué es el Síndrome del Impostor?"
              : "What is Impostor Syndrome?"}
          </h1>

          {/* Definición destacada (optimizada para Featured Snippet) */}
          <div className="bg-secondary-50 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
            <p className="text-lg md:text-xl leading-relaxed">
              {isSpanish ? (
                <>
                  El <strong>Síndrome del Impostor</strong> es la{" "}
                  <strong>
                    sensación persistente de ser un fraude profesional
                  </strong>
                  , de <em>no merecer tus logros</em>, y de que en cualquier
                  momento serás <em>&quot;descubierto&quot;</em> como
                  incompetente,{" "}
                  <strong>
                    a pesar de tener evidencia objetiva de tu competencia
                  </strong>{" "}
                  y éxitos. No es una condición médica, sino un{" "}
                  <strong>patrón psicológico común</strong> especialmente en
                  profesionales de alto rendimiento. En tech es{" "}
                  <em>extremadamente frecuente</em> debido a la velocidad de
                  cambio tecnológico y la cultura de comparación constante.
                </>
              ) : (
                <>
                  <strong>Impostor Syndrome</strong> is the{" "}
                  <strong>
                    persistent feeling of being a professional fraud
                  </strong>
                  , of <em>not deserving your achievements</em>, and that at any
                  moment you will be <em>&quot;discovered&quot;</em> as
                  incompetent,{" "}
                  <strong>
                    despite having objective evidence of your competence
                  </strong>{" "}
                  and successes. It is not a medical condition, but a{" "}
                  <strong>common psychological pattern</strong> especially in
                  high-performing professionals. In tech it is{" "}
                  <em>extremely frequent</em> due to the speed of technological
                  change and culture of constant comparison.
                </>
              )}
            </p>
          </div>
        </header>

        {/* Sección 1: ¿Qué es? - Definición Expandida */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Qué es el Síndrome del Impostor? (Definición extendida)"
              : "What is Impostor Syndrome? (Extended definition)"}
          </h2>

          <Card className="mb-6">
            <CardBody className="p-6 md:p-8">
              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {isSpanish
                  ? "El término fue acuñado en 1978 por las psicólogas Pauline Clance y Suzanne Imes. Aunque no es un diagnóstico clínico, afecta al 70% de las personas en algún momento de su carrera, siendo especialmente prevalente en tech por la naturaleza cambiante de la industria."
                  : "The term was coined in 1978 by psychologists Pauline Clance and Suzanne Imes. Although it is not a clinical diagnosis, it affects 70% of people at some point in their career, being especially prevalent in tech due to the changing nature of the industry."}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    🎭
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Sentimiento de fraude:"
                        : "Feeling of fraud:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Crees que estás engañando a todos, que no mereces tu posición"
                      : "You believe you're deceiving everyone, that you don't deserve your position"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    🍀
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Atribución a la suerte:"
                        : "Attribution to luck:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Tus logros son 'suerte', 'timing', o 'ayuda de otros', nunca tu mérito"
                      : "Your achievements are 'luck', 'timing', or 'help from others', never your merit"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    😰
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Miedo a ser descubierto:"
                        : "Fear of being discovered:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Ansiedad constante de que alguien se dé cuenta de que 'no sabes nada'"
                      : "Constant anxiety that someone will realize you 'know nothing'"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    🚫
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Descartar logros:"
                        : "Dismissing achievements:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Minimizar tus éxitos como insignificantes o 'cualquiera podría haberlo hecho'"
                      : "Minimizing your successes as insignificant or 'anyone could have done it'"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    🔄
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish ? "Comparación tóxica:" : "Toxic comparison:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Compararte constantemente con otros developers y siempre salir perdiendo"
                      : "Constantly comparing yourself with other developers and always losing"}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    💯
                  </div>
                  <p className="text-default-700 leading-relaxed flex-1">
                    <strong>
                      {isSpanish
                        ? "Perfeccionismo paralizante:"
                        : "Paralyzing perfectionism:"}
                    </strong>{" "}
                    {isSpanish
                      ? "Nada es suficiente, siempre ves tus deficiencias en lugar de tus logros"
                      : "Nothing is enough, you always see your deficiencies instead of your achievements"}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Sección 2: Por qué es común en Developers (Tabla comparativa) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Por qué el Síndrome del Impostor es tan común en Developers?"
              : "Why is Impostor Syndrome so common in Developers?"}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="border border-secondary-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Factor Tech" : "Tech Factor"}
                  </th>
                  <th className="border border-secondary-200 px-6 py-4 text-left font-bold">
                    {isSpanish
                      ? "Cómo alimenta el Síndrome del Impostor"
                      : "How it feeds Impostor Syndrome"}
                  </th>
                  <th className="border border-secondary-200 px-6 py-4 text-left font-bold">
                    {isSpanish ? "Ejemplo Real" : "Real Example"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish
                      ? "Cambio tecnológico constante"
                      : "Constant technological change"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Siempre hay algo nuevo que no sabes"
                      : "There's always something new you don't know"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"Acabo de aprender React, ahora todos usan Next.js"'
                      : '"I just learned React, now everyone uses Next.js"'}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish
                      ? "Amplitud del conocimiento"
                      : "Breadth of knowledge"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Es imposible saber todo (frontend, backend, DevOps, etc.)"
                      : "It's impossible to know everything (frontend, backend, DevOps, etc.)"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"Soy fullstack pero solo conozco bien React y Node"'
                      : '"I\'m fullstack but only know React and Node well"'}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish
                      ? "Cultura de 'rockstars'"
                      : "'Rockstar' culture"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Comparación con devs en Twitter/LinkedIn que parecen saberlo todo"
                      : "Comparison with devs on Twitter/LinkedIn who seem to know everything"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"Este dev tiene 10k seguidores, yo apenas hago mi trabajo"'
                      : '"This dev has 10k followers, I barely do my job"'}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish
                      ? "Entrevistas técnicas"
                      : "Technical interviews"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Te hacen sentir incompetente incluso si pasas"
                      : "They make you feel incompetent even if you pass"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"Tardé 45 minutos en resolver un problema de algoritmos"'
                      : '"It took me 45 minutes to solve an algorithm problem"'}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish
                      ? "Autodidacta vs. CS Degree"
                      : "Self-taught vs. CS Degree"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Sientes que te faltan 'fundamentos'"
                      : "You feel you're missing 'fundamentals'"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"No estudié CS, no entiendo bien Big O notation"'
                      : "\"I didn't study CS, I don't understand Big O notation well\""}
                  </td>
                </tr>
                <tr>
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish
                      ? "Stack Overflow / GitHub"
                      : "Stack Overflow / GitHub"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Ver código 'perfecto' de otros te hace sentir inferior"
                      : "Seeing others' 'perfect' code makes you feel inferior"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"Mi código se ve horrible comparado con este repo"'
                      : '"My code looks horrible compared to this repo"'}
                  </td>
                </tr>
                <tr className="bg-default-50">
                  <td className="border border-default-200 px-6 py-4 font-semibold">
                    {isSpanish
                      ? "Cultura de 'deberías saber'"
                      : "'You should know' culture"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? "Expectativa de que todos saben todo"
                      : "Expectation that everyone knows everything"}
                  </td>
                  <td className="border border-default-200 px-6 py-4">
                    {isSpanish
                      ? '"¿No sabes lo que es un monorepo?" (tono condescendiente)'
                      : '"You don\'t know what a monorepo is?" (condescending tone)'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-primary-50 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-default-700">
              <strong>💡 {isSpanish ? "Realidad:" : "Reality:"}</strong>{" "}
              {isSpanish
                ? "El 70% de los developers experimentan Síndrome del Impostor. Incluso developers senior con 15+ años de experiencia lo sienten. No estás solo."
                : "70% of developers experience Impostor Syndrome. Even senior developers with 15+ years of experience feel it. You're not alone."}
            </p>
          </div>
        </section>

        {/* Sección 3: Tipos de Síndrome del Impostor */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "5 Tipos de Síndrome del Impostor en Tech"
              : "5 Types of Impostor Syndrome in Tech"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-secondary">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  🏆 {isSpanish ? "El Perfeccionista" : "The Perfectionist"}
                </h3>
                <p className="text-default-700 mb-3">
                  {isSpanish
                    ? "Nada es suficiente. Si el código no es perfecto, eres un fracaso."
                    : "Nothing is enough. If the code isn't perfect, you're a failure."}
                </p>
                <p className="text-sm text-default-600 italic">
                  {isSpanish
                    ? '"Mi pull request tiene 98% coverage pero debería ser 100%"'
                    : '"My pull request has 98% coverage but should be 100%"'}
                </p>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-secondary">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  🎓 {isSpanish ? "El Experto" : "The Expert"}
                </h3>
                <p className="text-default-700 mb-3">
                  {isSpanish
                    ? "Sientes que debes saber TODO antes de intentar algo."
                    : "You feel you must know EVERYTHING before trying something."}
                </p>
                <p className="text-sm text-default-600 italic">
                  {isSpanish
                    ? '"No puedo aplicar a Senior porque aún no sé Kubernetes"'
                    : "\"I can't apply to Senior because I don't know Kubernetes yet\""}
                </p>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-secondary">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  💪 {isSpanish ? "El Genio Natural" : "The Natural Genius"}
                </h3>
                <p className="text-default-700 mb-3">
                  {isSpanish
                    ? "Si algo te cuesta trabajo, es porque 'no eres bueno'."
                    : "If something is hard for you, it's because 'you're not good'."}
                </p>
                <p className="text-sm text-default-600 italic">
                  {isSpanish
                    ? '"Tardé 3 horas en debuggear esto, debería haberlo hecho en 30min"'
                    : '"It took me 3 hours to debug this, should have done it in 30min"'}
                </p>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-secondary">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  🦸 {isSpanish ? "El Solista" : "The Soloist"}
                </h3>
                <p className="text-default-700 mb-3">
                  {isSpanish
                    ? "Pedir ayuda es admitir incompetencia. Debes hacerlo solo."
                    : "Asking for help is admitting incompetence. You must do it alone."}
                </p>
                <p className="text-sm text-default-600 italic">
                  {isSpanish
                    ? '"Si pregunto en Slack, pensarán que no sé programar"'
                    : "\"If I ask in Slack, they'll think I can't code\""}
                </p>
              </CardBody>
            </Card>

            <Card className="border-l-4 border-secondary md:col-span-2">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  🎭{" "}
                  {isSpanish
                    ? "El Superhombre/Supermujer"
                    : "The Superman/Superwoman"}
                </h3>
                <p className="text-default-700 mb-3">
                  {isSpanish
                    ? "Debes ser excepcional en TODO (código + liderazgo + comunicación + diseño + etc.)."
                    : "You must be exceptional at EVERYTHING (code + leadership + communication + design + etc.)."}
                </p>
                <p className="text-sm text-default-600 italic">
                  {isSpanish
                    ? '"Soy Tech Lead pero no sé Figma, soy un fraude"'
                    : "\"I'm a Tech Lead but I don't know Figma, I'm a fraud\""}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Sección 4: Cómo superar el Síndrome del Impostor */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "¿Cómo superar el Síndrome del Impostor?"
              : "How to overcome Impostor Syndrome?"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Documenta tus logros"
                    : "Document your achievements"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Crea un 'brag document': pull requests exitosos, features lanzados, feedback positivo, problemas resueltos. Evidencia objetiva derrota al impostor."
                    : "Create a 'brag document': successful pull requests, launched features, positive feedback, solved problems. Objective evidence defeats the impostor."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Habla de ello abiertamente"
                    : "Talk about it openly"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Comparte con otros developers. Descubrirás que el 70% se siente igual. El impostor pierde poder cuando lo nombras."
                    : "Share with other developers. You'll discover that 70% feel the same. The impostor loses power when you name it."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Redefine 'saber'" : "Redefine 'knowing'"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "En tech, 'saber' es saber buscar, aprender rápido, y resolver problemas. No es memorizar cada API. Nadie lo sabe todo."
                    : "In tech, 'knowing' is knowing how to search, learn fast, and solve problems. It's not memorizing every API. Nobody knows everything."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish ? "Busca mentoría" : "Seek mentorship"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Un mentor que pasó por lo mismo te ayuda a normalizar tus inseguridades y ver tus logros objetivamente."
                    : "A mentor who went through the same thing helps you normalize your insecurities and see your achievements objectively."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Celebra pequeños éxitos"
                    : "Celebrate small wins"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? "Resolviste un bug? Deployaste a prod? Ayudaste a un junior? Celébralo. No minimices tus logros."
                    : "Solved a bug? Deployed to prod? Helped a junior? Celebrate it. Don't minimize your achievements."}
                </p>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-success-50 to-white">
              <CardBody className="p-6">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="text-lg font-bold text-customgray mb-3">
                  {isSpanish
                    ? "Cambia el diálogo interno"
                    : "Change internal dialogue"}
                </h3>
                <p className="text-default-700 text-sm leading-relaxed">
                  {isSpanish
                    ? 'Reemplaza "no sé esto" por "AÚN no sé esto". El "aún" implica crecimiento, no incompetencia.'
                    : 'Replace "I don\'t know this" with "I don\'t know this YET". The "yet" implies growth, not incompetence.'}
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Sección IA 2025 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-customgray mb-6">
            {isSpanish
              ? "Síndrome del Impostor en la Era de la IA (2025)"
              : "Impostor Syndrome in the AI Era (2025)"}
          </h2>

          <Card className="bg-gradient-to-br from-violet-50 to-white border-l-4 border-violet-500">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-customgray mb-4">
                    {isSpanish
                      ? "¿Cómo la IA intensifica el Síndrome del Impostor en Developers?"
                      : "How AI intensifies Impostor Syndrome in Developers?"}
                  </h3>
                  <p className="text-lg text-default-700 leading-relaxed mb-4">
                    {isSpanish
                      ? "En 2025, el Síndrome del Impostor alcanzó niveles históricos. La IA no te reemplaza, pero sí alimenta tus inseguridades:"
                      : "In 2025, Impostor Syndrome reached historic levels. AI doesn't replace you, but it does feed your insecurities:"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💭</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "'Si ChatGPT lo hace en segundos, ¿qué tan valioso soy?'"
                          : "'If ChatGPT does it in seconds, how valuable am I?'"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Ves a la IA generar en 10 segundos lo que a ti te tomaría 1 hora. Tu cerebro dice: 'No valgo nada, cualquiera con Copilot puede hacer mi trabajo'."
                          : "You see AI generate in 10 seconds what would take you 1 hour. Your brain says: 'I'm worthless, anyone with Copilot can do my job'."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎭</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "'¿Estoy usando IA como ayuda o como muleta?'"
                          : "'Am I using AI as help or as a crutch?'"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Usas Copilot para completar código y piensas: '¿Realmente sé programar o solo sé usar IA?' La línea entre asistencia e incompetencia se vuelve borrosa."
                          : "You use Copilot to complete code and think: 'Do I really know how to code or do I just know how to use AI?' The line between assistance and incompetence becomes blurry."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "La barra de 'suficientemente bueno' sube infinito"
                          : "The bar of 'good enough' rises infinitely"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Antes: 'Debo saber React'. Ahora: 'Debo saber React + Next.js + prompt engineering + LangChain + fine-tuning models'. Nunca es suficiente."
                          : "Before: 'I must know React'. Now: 'I must know React + Next.js + prompt engineering + LangChain + fine-tuning models'. It's never enough."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-violet-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👀</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-customgray mb-2">
                        {isSpanish
                          ? "Comparación tóxica amplificada"
                          : "Amplified toxic comparison"}
                      </h4>
                      <p className="text-sm text-default-700">
                        {isSpanish
                          ? "Ves en Twitter a developers que 'construyeron una startup en 2 días con Claude'. Te comparas y sientes que eres lento, incompetente, un fraude."
                          : "You see on Twitter developers who 'built a startup in 2 days with Claude'. You compare yourself and feel slow, incompetent, a fraud."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-violet-100 p-4 rounded-lg">
                <p className="text-default-700 leading-relaxed mb-3">
                  <strong>
                    {isSpanish
                      ? "La verdad incómoda: La IA no reemplaza tu valor, pero sí redefine dónde está."
                      : "The uncomfortable truth: AI doesn't replace your value, but it does redefine where it is."}
                  </strong>
                </p>
                <p className="text-default-700 leading-relaxed">
                  {isSpanish
                    ? "Tu valor en 2025 no está en escribir código sintácticamente perfecto (eso lo hace la IA). Está en tu criterio técnico, tu capacidad de resolver problemas ambiguos, tu comunicación empática, tu liderazgo de equipo, y tu habilidad para tomar decisiones arquitectónicas considerando contexto humano y de negocio. Eso ninguna IA puede hacerlo. Aún."
                    : "Your value in 2025 isn't in writing syntactically perfect code (AI does that). It's in your technical judgment, your ability to solve ambiguous problems, your empathetic communication, your team leadership, and your ability to make architectural decisions considering human and business context. No AI can do that. Yet."}
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-secondary to-secondary-600 text-white">
            <CardBody className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isSpanish
                  ? "¿El Síndrome del Impostor está limitando tu carrera?"
                  : "Is Impostor Syndrome limiting your career?"}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isSpanish
                  ? "En HugoTech trabajamos con developers para superar el síndrome del impostor, reconocer tu verdadero valor, y avanzar con confianza en tu carrera tech."
                  : "At HugoTech we work with developers to overcome impostor syndrome, recognize your true value, and advance with confidence in your tech career."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#cita">
                  <Button
                    className="bg-white text-secondary font-bold text-lg px-8 py-6 h-auto"
                    size="lg"
                  >
                    {isSpanish
                      ? "Agendar Sesión de Confianza"
                      : "Schedule Confidence Session"}
                  </Button>
                </Link>
                <Link href="/coaching">
                  <Button
                    className="bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-6 h-auto hover:bg-white hover:text-secondary transition-colors"
                    size="lg"
                    variant="bordered"
                  >
                    {isSpanish ? "Ver Coaching Tech" : "View Tech Coaching"}
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
              href="/glosario/burnout-tech"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {isSpanish
                  ? "¿Qué es el Burnout Tech?"
                  : "What is Tech Burnout?"}
              </h3>
              <p className="text-default-600">
                {isSpanish
                  ? "El síndrome del impostor puede llevar al burnout. Aprende a identificarlo y prevenirlo."
                  : "Impostor syndrome can lead to burnout. Learn to identify and prevent it."}
              </p>
            </Link>

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
                  ? "Un mentor puede ayudarte a superar el síndrome del impostor y ver tus verdaderas fortalezas."
                  : "A mentor can help you overcome impostor syndrome and see your true strengths."}
              </p>
            </Link>
          </div>
        </section>
      </article>
    </HomeLayout>
  );
}
