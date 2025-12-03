import { setRequestLocale } from "next-intl/server";

import HomeLayout from "../homeLayout";

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
    title:
      "Liderazgo Tech para Introvertidos | Lidera sin Fingir Ser Extrovertido",
    description:
      "No necesitas fingir extroversión para ser Tech Lead. Aprende a liderar equipos desde tu estilo natural: escucha activa, 1-on-1s profundos y decisiones estratégicas sin ser el más ruidoso.",
    keywords: [
      "liderazgo introvertido",
      "tech lead introvertido",
      "líder tech callado",
      "gestión equipos introvertidos",
      "liderazgo silencioso tech",
    ],
    locale,
    path: "/liderazgo-introvertidos",
  });
}

export default async function LiderazgoIntrovertidosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <HomeLayout>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 md:py-32">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎯 Lidera desde tu fuerza, no desde el ruido
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Lidera sin Fingir Ser Extrovertido
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                No necesitas ser el más ruidoso para ser un gran Tech Lead. Tu
                escucha activa, reflexión profunda y 1-on-1s genuinos son tu
                ventaja competitiva.
              </p>

              <div className="flex flex-col gap-4">
                <CalendlyButton
                  className="w-full sm:w-auto"
                  color="default"
                  size="lg"
                  text="Descubre tu Estilo de Liderazgo"
                  utm={{
                    utmSource: "hugotech.pe",
                    utmMedium: "landing",
                    utmCampaign: "liderazgo_introvertidos",
                  }}
                  variant="solid"
                />
                <p className="text-sm text-white/80">
                  Primera sesión gratis • Diseña tu plan de liderazgo auténtico
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">
                ¿Te identificas con esto?
              </h3>
              <ul className="space-y-4">
                {[
                  "Te dicen que tienes que 'hablar más' en reuniones",
                  "Te cuesta interrumpir para dar tu opinión",
                  "Los 1-on-1s te energizan, las dailies te agotan",
                  "Prefieres Slack al brainstorming presencial",
                  "Piensas antes de hablar y eso te hace parecer 'lento'",
                  "Liderar te atrae pero no quieres ser el centro de atención",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-purple-400 text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/80 italic">
                No estás roto. Solo necesitas liderar desde tu estilo, no contra
                él.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitos del Liderazgo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Los Mitos que Te Están Limitando
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El liderazgo tradicional fue diseñado por (y para) extrovertidos.
              Es hora de reescribir las reglas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                myth: "Los líderes deben ser carismáticos y ruidosos",
                reality:
                  "Bill Gates, Larry Page, Mark Zuckerberg: introvertidos que cambiaron el mundo. El carisma es innecesario si tienes claridad.",
              },
              {
                myth: "Tienes que disfrutar las reuniones todo el día",
                reality:
                  "Los mejores líderes protegen su energía. 2 horas de Deep Work valen más que 6 reuniones improductivas.",
              },
              {
                myth: "Debes tomar decisiones rápidas en público",
                reality:
                  "Pensar antes de hablar es una fortaleza, no una debilidad. Las mejores decisiones vienen de la reflexión.",
              },
              {
                myth: "El networking es obligatorio para crecer",
                reality:
                  "3 relaciones profundas con mentores clave > 300 contactos superficiales en LinkedIn.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200"
              >
                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-start gap-2">
                  <span className="text-2xl flex-shrink-0">❌</span>
                  <span>Mito: {item.myth}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  <strong className="text-green-700">✓ Realidad:</strong>{" "}
                  {item.reality}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tu Ventaja Competitiva */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tus Fortalezas como Líder Introvertido
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lo que creías que era tu debilidad es en realidad tu superpoder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                strength: "Escucha Activa Profunda",
                description:
                  "Mientras otros hablan para brillar, tú escuchas para entender. Eso crea seguridad psicológica real en tu equipo.",
                emoji: "👂",
                example:
                  "Tu dev junior se siente escuchado y se atreve a decir 'no entiendo esto'.",
              },
              {
                strength: "1-on-1s Genuinos",
                description:
                  "No son check-ins superficiales. Son conversaciones profundas donde tu equipo se siente visto.",
                emoji: "💬",
                example:
                  "Detectas el burnout de alguien antes de que renuncie porque realmente prestaste atención.",
              },
              {
                strength: "Decisiones Estratégicas",
                description:
                  "Piensas antes de actuar. En un mundo de reacciones impulsivas, tu reflexión es oro.",
                emoji: "🧠",
                example:
                  "Mientras otros quieren 'mover rápido y romper cosas', tú evitas la deuda técnica crítica.",
              },
              {
                strength: "Comunicación Escrita Clara",
                description:
                  "Tu documentation, ADRs y async updates son precisos. No necesitas ser elocuente en Zoom.",
                emoji: "✍️",
                example:
                  "Tu equipo remoto en 3 zonas horarias entiende perfectamente las decisiones de arquitectura.",
              },
              {
                strength: "Empatía sin Agenda",
                description:
                  "No estás vendiendo nada. Tu feedback es genuino porque realmente quieres que tu equipo crezca.",
                emoji: "❤️",
                example:
                  "Tu dev senior confía en ti con sus dudas de impostor porque sabe que no juzgas.",
              },
              {
                strength: "Liderazgo por Ejemplo",
                description:
                  "No necesitas dar discursos motivacionales. Tu código limpio y tu ética de trabajo hablan por ti.",
                emoji: "⚡",
                example:
                  "El equipo ve que haces code reviews detallados y todos empiezan a hacerlo también.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-purple-200 shadow-md"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">
                  {item.strength}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                  <p className="text-sm text-gray-600">
                    <strong className="text-purple-700">Ejemplo real:</strong>{" "}
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework QUIET Leadership */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Framework QUIET Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El sistema que usé para pasar de Senior Dev callado a Tech Lead
              respetado sin fingir extroversión.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                letter: "Q",
                word: "Question Deeply",
                title: "Pregunta Profundamente",
                description:
                  "En lugar de dar órdenes, haz preguntas que hagan pensar. 'What if...?' es más poderoso que 'Do this'.",
              },
              {
                letter: "U",
                word: "Understand Context",
                title: "Entiende el Contexto",
                description:
                  "Tu superpoder es ver patrones que otros ignoran. Usa eso para tomar decisiones informadas.",
              },
              {
                letter: "I",
                word: "Intentional Energy",
                title: "Energía Intencional",
                description:
                  "Protege tu batería social. 2 reuniones clave > 8 reuniones que te drenan.",
              },
              {
                letter: "E",
                word: "Empower Others",
                title: "Empodera a Otros",
                description:
                  "No necesitas ser el héroe. Crea más líderes haciendo que tu equipo brille.",
              },
              {
                letter: "T",
                word: "Think, Then Speak",
                title: "Piensa, Luego Habla",
                description:
                  "Tus palabras tienen peso porque no las desperdicias. Cuando hablas, todos escuchan.",
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 border border-purple-200 flex items-start gap-6"
              >
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">
                  {principle.letter}
                </div>
                <div>
                  <p className="text-sm text-purple-600 font-semibold mb-1">
                    {principle.word}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto max-w-screen-xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            No Cambies Quién Eres. Cambia Cómo Lideras.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Primera sesión gratis. Diseñamos tu estilo de liderazgo auténtico:
            sin fingir, sin agotarte, sin traicionar tu esencia.
          </p>
          <CalendlyButton
            className="mx-auto"
            color="default"
            size="lg"
            text="Agenda tu Sesión de Liderazgo Auténtico"
            utm={{
              utmSource: "hugotech.pe",
              utmMedium: "landing",
              utmCampaign: "liderazgo_introvertidos_cta_final",
            }}
            variant="solid"
          />
          <p className="text-sm text-white/70 mt-4">
            100% de lo recaudado va a causas sociales en Perú
          </p>
        </div>
      </section>
      </div>
    </HomeLayout>
  );
}
