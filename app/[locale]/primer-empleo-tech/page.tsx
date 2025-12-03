import { setRequestLocale } from "next-intl/server";

import { CalendlyButton } from "@/components/calendly/CalendlyButton";
import { generateMetadata as genMetadata } from "@/lib/metadata";

// Metadata específica para SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return genMetadata({
    title: "Tu Primer Empleo como Developer Junior | Mentoring Tech Perú 2026",
    description:
      "Consigue tu primer trabajo como programador en Perú. CV técnico optimizado, preparación para entrevistas técnicas, portafolio que destaca y mentoría 1-a-1 hasta que consigas tu primer empleo.",
    keywords: [
      "primer empleo programador",
      "trabajo developer junior perú",
      "entrevista técnica junior",
      "portafolio programador",
      "cv developer",
      "bootcamp graduado empleo",
    ],
    locale,
    path: "/primer-empleo-tech",
  });
}

export default async function PrimerEmpleoTechPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 md:py-32">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Acelera tu búsqueda de empleo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Consigue tu Primer Empleo Tech en Perú
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Del bootcamp a tu primer sueldo: CV optimizado, portafolio que
                destaca y preparación real para entrevistas técnicas.
              </p>

              <div className="flex flex-col gap-4">
                <CalendlyButton
                  className="w-full sm:w-auto"
                  color="default"
                  size="lg"
                  text="Acelera tu Búsqueda de Empleo"
                  utm={{
                    utmSource: "hugotech.pe",
                    utmMedium: "landing",
                    utmCampaign: "primer_empleo_tech",
                  }}
                  variant="solid"
                />
                <p className="text-sm text-white/80">
                  Primera sesión gratis • Te acompaño hasta que consigas tu
                  primer empleo
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                Lo que realmente necesitas:
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "📄",
                    title: "CV Técnico que pasa el ATS",
                    desc: "80% de CVs son rechazados por bots antes de llegar a RRHH",
                  },
                  {
                    icon: "💼",
                    title: "Portafolio que habla por ti",
                    desc: "3 proyectos bien hechos > 20 tutoriales copiados",
                  },
                  {
                    icon: "🎯",
                    title: "Preparación para entrevistas",
                    desc: "Leetcode + preguntas de comportamiento reales",
                  },
                  {
                    icon: "🔍",
                    title: "Estrategia de búsqueda",
                    desc: "Dónde buscar, cómo postular, cuándo hacer follow-up",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué no consigues empleo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Qué No Estás Consiguiendo Entrevistas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No es que no seas bueno. Es que nadie te enseñó cómo mostrar tu
              valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                problem: "Tu CV no pasa el ATS",
                solution:
                  "Los sistemas automáticos filtran por keywords. Necesitas un formato ATS-friendly con las palabras clave exactas del JD.",
                emoji: "🤖",
              },
              {
                problem: "Tu portafolio es genérico",
                solution:
                  "3 proyectos con README profesional, arquitectura clara y despliegue en producción valen más que 20 tutoriales.",
                emoji: "💼",
              },
              {
                problem: "No sabes venderte",
                solution:
                  "En entrevistas te preguntan 'Háblame de ti' y no sabes qué decir. Necesitas tu elevator pitch de 2 minutos.",
                emoji: "💬",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  ❌ {item.problem}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-green-700">✓ Solución:</strong>{" "}
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan de Acción */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tu Plan de Acción: 4 Semanas al Empleo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema probado con +50 juniors que consiguieron su primer empleo
              en 2024.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                week: "Semana 1",
                title: "Fundamentos: CV + LinkedIn",
                tasks: [
                  "Auditoría completa de tu CV actual (qué funciona, qué eliminar)",
                  "Rediseño con formato ATS-friendly y keywords del stack que buscas",
                  "Optimización de LinkedIn (headline, about, featured projects)",
                  "Elevator pitch de 2 minutos (¿quién eres? ¿qué buscas?)",
                ],
              },
              {
                week: "Semana 2",
                title: "Portafolio que Impacta",
                tasks: [
                  "Seleccionar tus 3 mejores proyectos (o crearlos si no los tienes)",
                  "README profesional: problema, solución, tech stack, cómo ejecutar",
                  "Deploy en producción (Vercel/Netlify) + dominio personalizado",
                  "Video demo de 3 minutos explicando tu proyecto más complejo",
                ],
              },
              {
                week: "Semana 3",
                title: "Preparación Técnica",
                tasks: [
                  "Leetcode Easy: dominar 20 problemas core (arrays, strings, hashmaps)",
                  "Preguntas de comportamiento STAR method (situación, tarea, acción, resultado)",
                  "Mock interviews 1-a-1: feedback real sobre tu performance",
                  "Cómo explicar gaps en tu CV o cambios de carrera",
                ],
              },
              {
                week: "Semana 4",
                title: "Estrategia de Búsqueda",
                tasks: [
                  "Dónde buscar: LinkedIn, GetOnBoard, Computrabajo, networking",
                  "Cómo adaptar tu CV a cada job description (sin mentir)",
                  "Follow-up post-aplicación: cuándo y cómo hacerlo",
                  "Negociación salarial para juniors: qué pedir sin sonar arrogante",
                ],
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-blue-200 shadow-md"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                    {phase.week}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {phase.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {phase.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start gap-3">
                      <span className="text-green-600 text-xl flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Reales */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados Reales de Juniors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estos developers pasaron de &ldquo;no consigo ni
              entrevistas&rdquo; a &ldquo;tengo que elegir entre ofertas&rdquo;.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "María G.",
                result: "Frontend Dev @ Startup",
                time: "6 semanas",
                quote:
                  "Reescribí mi CV 3 veces hasta que Hugo me dijo 'este sí pasa el filtro'. A la semana tenía 4 entrevistas.",
              },
              {
                name: "Carlos R.",
                result: "Backend Jr @ BCP",
                time: "8 semanas",
                quote:
                  "El portafolio fue clave. Agregué READMEs profesionales y pasé de 0 a 12 respuestas en LinkedIn.",
              },
              {
                name: "Lucía P.",
                result: "Fullstack @ Consultora",
                time: "5 semanas",
                quote:
                  "Los mock interviews me dieron confianza. Ya no me quedaba en blanco cuando me preguntaban 'háblame de ti'.",
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {story.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-green-600">{story.result}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-3">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <p className="text-sm text-gray-500">
                  ⏱️ Consiguió empleo en {story.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tu Primer Empleo Tech Está Más Cerca de lo que Crees
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Primera sesión gratis. Revisamos tu CV, portafolio y estrategia de
            búsqueda. Te acompaño hasta que consigas tu primer empleo.
          </p>
          <CalendlyButton
            className="mx-auto"
            color="default"
            size="lg"
            text="Agenda tu Sesión de Diagnóstico Gratis"
            utm={{
              utmSource: "hugotech.pe",
              utmMedium: "landing",
              utmCampaign: "primer_empleo_cta_final",
            }}
            variant="solid"
          />
          <p className="text-sm text-white/70 mt-4">
            100% de lo recaudado va a becas tech para jóvenes vulnerables
          </p>
        </div>
      </section>
    </div>
  );
}
