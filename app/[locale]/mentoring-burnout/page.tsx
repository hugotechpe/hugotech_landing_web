import { setRequestLocale } from "next-intl/server";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Brain, ArrowRight } from "lucide-react";

import HomeLayout from "../HomeLayout";
import { Link } from "@/i18n/navigation";

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
    title: "Supera el Burnout Tech sin Renunciar | Mentoring Anti-Burnout Perú",
    description:
      "Plan de 30 días para superar el burnout de programadores. Identifica las 7 señales tempranas, recupera tu energía y construye límites digitales saludables. Mentoring 1-a-1 por donación voluntaria.",
    keywords: [
      "burnout programadores",
      "agotamiento desarrolladores",
      "síndrome burnout tech",
      "recuperación burnout perú",
      "límites digitales",
      "salud mental programadores",
    ],
    locale,
    path: "/mentoring-burnout",
  });
}

export default async function MentoringBurnoutPage({
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
        <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-20 md:py-32">
          <div className="container mx-auto max-w-screen-xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🔥 Recupera tu energía en 30 días
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Supera el Burnout Tech sin Renunciar a tu Carrera
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  El agotamiento no es debilidad. Es una señal de que necesitas
                  un sistema mejor. Te ayudo a diseñar tu plan anti-burnout
                  personalizado.
                </p>

                <div className="flex flex-col gap-4">
                  <CalendlyButton
                    className="w-full sm:w-auto"
                    color="default"
                    size="lg"
                    text="Diseña tu Plan Anti-Burnout"
                    utm={{
                      utmSource: "hugotech.pe",
                      utmMedium: "landing",
                      utmCampaign: "mentoring_burnout",
                    }}
                    variant="solid"
                  />
                  <p className="text-sm text-white/80">
                    Primera sesión gratis • 100% donación voluntaria
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">
                    ¿Te identificas con esto?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Te cuesta concentrarte más de 30 minutos seguidos",
                      "Sientes que tu trabajo ya no tiene sentido",
                      "Revisas Slack hasta en tu tiempo libre",
                      "Evitas las daily meetings porque te agotan",
                      "Ya no disfrutas programar como antes",
                      "Piensas en renunciar pero no sabes a dónde ir",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-400 text-xl flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Las 7 Señales del Burnout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-screen-xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Las 7 Señales del Burnout Tech
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No se trata de trabajar menos horas. Se trata de reconocer las
                señales antes de llegar al colapso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "Agotamiento Crónico",
                  description:
                    "Ya no es solo cansancio. Es una fatiga profunda que no se va con vacaciones.",
                },
                {
                  number: "2",
                  title: "Cinismo y Distancia",
                  description:
                    "Tu trabajo que antes amabas ahora te parece sin sentido. Todo es 'da igual'.",
                },
                {
                  number: "3",
                  title: "Baja Productividad",
                  description:
                    "Tareas que antes hacías en 2 horas ahora te toman todo el día.",
                },
                {
                  number: "4",
                  title: "Problemas de Concentración",
                  description:
                    "Leer documentación técnica se vuelve imposible. Tu mente divaga constantemente.",
                },
                {
                  number: "5",
                  title: "Irritabilidad",
                  description:
                    "Cualquier interrupción te molesta. Las reuniones son torture.",
                },
                {
                  number: "6",
                  title: "Insomnio Paradójico",
                  description:
                    "Estás agotado pero no puedes dormir. Tu cerebro no desconecta.",
                },
                {
                  number: "7",
                  title: "Síntomas Físicos",
                  description:
                    "Dolores de cabeza, problemas digestivos, tensión muscular crónica.",
                },
              ].map((signal, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-400 transition-colors"
                >
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {signal.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{signal.title}</h3>
                  <p className="text-gray-600">{signal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan de 30 Días */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto max-w-screen-xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tu Plan Anti-Burnout de 30 Días
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No necesitas renunciar. Necesitas un sistema que funcione para
                ti, no contra ti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  week: "Semana 1",
                  title: "Diagnosticar",
                  items: [
                    "Identificar tus 3 drenajes principales de energía",
                    "Mapear tu semana laboral real (no la ideal)",
                    "Detectar tus límites digitales inexistentes",
                  ],
                },
                {
                  week: "Semana 2",
                  title: "Proteger",
                  items: [
                    "Crear bloques de Deep Work sin interrupciones",
                    "Diseñar tu ritual de desconexión post-trabajo",
                    "Establecer límites con Slack/email fuera de horario",
                  ],
                },
                {
                  week: "Semana 3",
                  title: "Reconstruir",
                  items: [
                    "Recuperar tu energía creativa con micro-proyectos",
                    "Redescubrir por qué elegiste programar",
                    "Construir tu lista de 'No' con claridad",
                  ],
                },
                {
                  week: "Semana 4",
                  title: "Sostener",
                  items: [
                    "Sistema de revisión semanal anti-recaída",
                    "Red de soporte (mentoría 1-a-1 continua)",
                    "Plan B: cuándo sí es momento de cambiar de trabajo",
                  ],
                },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">
                      {idx === 0
                        ? "🔍"
                        : idx === 1
                          ? "🛡️"
                          : idx === 2
                            ? "🌱"
                            : "⚡"}
                    </span>
                    <div>
                      <p className="text-sm text-red-600 font-semibold">
                        {phase.week}
                      </p>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">→</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Link a Coaching Tecnológico */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto max-w-screen-xl px-6">
            <Card className="border-2 border-red-100 bg-white/80 backdrop-blur-sm">
              <CardBody className="p-10 md:p-14">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Chip className="mb-4" color="danger" size="lg" variant="flat">
                      🔥 Transformación Profunda
                    </Chip>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {locale === "es" 
                        ? "¿El burnout viene de más adentro? Descubre el Coaching Tecnológico Ontológico"
                        : "Does burnout come from deeper within? Discover Ontological Tech Coaching"}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                      {locale === "es"
                        ? "Si el burnout no es solo cansancio, sino una crisis de identidad ('¿quién soy sin mi trabajo?'), el coaching tecnológico basado en ontología transforma quién ERES cuando lideras, no solo cómo gestionas el estrés."
                        : "If burnout is not just tiredness, but an identity crisis ('who am I without my work?'), tech coaching based on ontology transforms who you ARE when you lead, not just how you manage stress."}
                    </p>
                    <Link href="/coaching-tecnologico">
                      <Button 
                        color="danger" 
                        size="lg" 
                        className="font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                        endContent={<ArrowRight className="w-5 h-5" />}
                      >
                        {locale === "es" 
                          ? "Conocer Coaching Tecnológico Anti-Burnout" 
                          : "Discover Tech Anti-Burnout Coaching"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-red-900 text-white">
          <div className="container mx-auto max-w-screen-xl px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              No Estás Solo en Esto
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              He acompañado a más de 100 developers a salir del burnout sin
              renunciar a su carrera. Tu primera sesión es gratis y sin
              compromiso.
            </p>
            <CalendlyButton
              className="mx-auto"
              color="default"
              size="lg"
              text="Agenda tu Primera Sesión Gratis"
              utm={{
                utmSource: "hugotech.pe",
                utmMedium: "landing",
                utmCampaign: "mentoring_burnout_cta_final",
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
