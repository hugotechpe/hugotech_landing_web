/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "¿Estancado como Senior Developer? Guía 2026 para el Siguiente Paso | HugoTech",
    description:
      "Si eres Senior Developer y no sabes si ir a Manager, Staff Engineer o emprender, esta guía te ayuda a decidir tu siguiente paso sin morir en el intento. Aprende a superar el estancamiento profesional en tech.",
    keywords: [
      "estancamiento senior developer",
      "transición senior a manager",
      "staff engineer vs manager",
      "carrera tech 2026",
      "siguiente paso senior developer",
      "burnout senior developer",
      "liderazgo técnico",
      "mentoring para seniors",
    ],
    openGraph: {
      title:
        "¿Estancado como Senior Developer? Guía 2026 para tu Siguiente Paso",
      description:
        "Manager, Staff Engineer o Emprender: Cómo decidir tu siguiente paso como Senior Developer sin morir en el intento.",
      type: "article",
      publishedTime: "2025-12-03T00:00:00.000Z",
      authors: ["Hugo Casanova"],
      tags: [
        "Career Development",
        "Senior Developer",
        "Tech Leadership",
        "Staff Engineer",
        "Engineering Manager",
      ],
    },
  };
}

export default async function EstancamientoSeniorDevPage() {
  return (
    <article className="container mx-auto max-w-4xl px-4 py-12">
      {/* Hero Section */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-default-500">
          <time dateTime="2025-12-03">3 de diciembre, 2025</time>
          <span>•</span>
          <span>12 min de lectura</span>
          <span>•</span>
          <span>Por Hugo Casanova</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          ¿Estancado como Senior Developer?
          <br />
          <span className="text-primary">
            Guía 2026 para decidir tu siguiente paso
          </span>
        </h1>

        <p className="text-xl text-default-600">
          Manager, Staff Engineer o Emprender: Cómo elegir tu camino sin morir
          en el intento (y sin que la IA te quite el sueño).
        </p>
      </header>

      {/* Intro: El Problema */}
      <section className="prose prose-lg dark:prose-invert mb-12">
        <h2 className="text-3xl font-bold">El problema que nadie te dice</h2>

        <p>
          Llevas 5-7 años como developer. Ya eres <strong>Senior</strong>. Sabes
          React, Node, arquitecturas complejas. Tu código es limpio. Tus pull
          requests son perfectos.
        </p>

        <p>
          <strong>Pero te sientes estancado.</strong>
        </p>

        <p>
          Tu jefe te ofrece ser <em>Tech Lead</em>. Un amigo te cuenta que se
          fue a <em>Staff Engineer</em> y gana el doble. Otro dejó todo y armó
          su startup. Y tú estás ahí, en el limbo, preguntándote:
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic">
          &ldquo;¿Cuál es MI siguiente paso? ¿Y si elijo mal y me
          arrepiento?&rdquo;
        </blockquote>

        <p>
          <strong>Spoiler:</strong> No existe la decisión perfecta. Pero sí
          existe una decisión <em>informada</em> que se alinea con quién eres y
          qué quieres.
        </p>
      </section>

      {/* Sección 1: Las 3 Rutas */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          Las 3 rutas clásicas (y lo que nadie te cuenta)
        </h2>

        {/* Ruta 1: Engineering Manager */}
        <div className="mb-8 rounded-lg border border-default-200 p-6">
          <h3 className="mb-3 text-2xl font-semibold text-primary">
            Ruta 1: Engineering Manager (el &ldquo;Líder de Personas&rdquo;)
          </h3>

          <p className="mb-4 text-default-600">
            <strong>Lo que crees que es:</strong> Liderar equipos, tomar
            decisiones estratégicas, ganar más.
          </p>

          <p className="mb-4 text-default-600">
            <strong>Lo que realmente es:</strong> 1-on-1s infinitos, resolver
            conflictos humanos, menos código, más PowerPoint.
          </p>

          <div className="mb-4">
            <p className="mb-2 font-semibold text-success">✅ Es para ti si:</p>
            <ul className="list-disc space-y-1 pl-6 text-default-600">
              <li>Te energiza ayudar a otros a crecer.</li>
              <li>Disfrutas las conversaciones difíciles.</li>
              <li>Puedes soltar el teclado sin sufrir.</li>
              <li>Quieres impactar a través de tu equipo, no tu código.</li>
            </ul>
          </div>

          <div>
            <p className="mb-2 font-semibold text-danger">
              ❌ NO es para ti si:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-default-600">
              <li>Prefieres 8 horas de código a 1 hora de reunión.</li>
              <li>Te frustra lidiar con &ldquo;drama humano&rdquo;.</li>
              <li>Eres introvertido extremo sin ganas de adaptarte.</li>
            </ul>
          </div>
        </div>

        {/* Ruta 2: Staff Engineer */}
        <div className="mb-8 rounded-lg border border-default-200 p-6">
          <h3 className="mb-3 text-2xl font-semibold text-primary">
            Ruta 2: Staff Engineer (el &ldquo;Arquitecto Ninja&rdquo;)
          </h3>

          <p className="mb-4 text-default-600">
            <strong>Lo que crees que es:</strong> Código de élite, arquitecturas
            complejas, respeto técnico.
          </p>

          <p className="mb-4 text-default-600">
            <strong>Lo que realmente es:</strong> Influencia sin autoridad,
            documentar TODO, ser el &ldquo;gurú&rdquo; al que todos consultan
            (pero nadie lee tu Notion).
          </p>

          <div className="mb-4">
            <p className="mb-2 font-semibold text-success">✅ Es para ti si:</p>
            <ul className="list-disc space-y-1 pl-6 text-default-600">
              <li>El código es tu forma de meditar.</li>
              <li>Te gusta resolver problemas técnicos complejos.</li>
              <li>Puedes influir sin necesidad de &ldquo;mandar&rdquo;.</li>
              <li>Disfrutas escribir RFCs y diseñar sistemas.</li>
            </ul>
          </div>

          <div>
            <p className="mb-2 font-semibold text-danger">
              ❌ NO es para ti si:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-default-600">
              <li>Necesitas controlar y decidir sobre personas.</li>
              <li>Te aburre documentar y explicar lo mismo 5 veces.</li>
              <li>Quieres impacto de negocio directo, no solo técnico.</li>
            </ul>
          </div>
        </div>

        {/* Ruta 3: Emprender */}
        <div className="mb-8 rounded-lg border border-default-200 p-6">
          <h3 className="mb-3 text-2xl font-semibold text-primary">
            Ruta 3: Emprender (el &ldquo;Founder Valiente&rdquo;)
          </h3>

          <p className="mb-4 text-default-600">
            <strong>Lo que crees que es:</strong> Libertad, ser tu propio jefe,
            construir tu visión.
          </p>

          <p className="mb-4 text-default-600">
            <strong>Lo que realmente es:</strong> 80 horas semanales,
            incertidumbre financiera, hacer ventas/marketing/contabilidad cuando
            prefieres codear.
          </p>

          <div className="mb-4">
            <p className="mb-2 font-semibold text-success">✅ Es para ti si:</p>
            <ul className="list-disc space-y-1 pl-6 text-default-600">
              <li>Tienes colchón financiero (6-12 meses).</li>
              <li>Un problema que te obsesiona y quieres resolver.</li>
              <li>Alta tolerancia al caos y al fracaso.</li>
              <li>Energía para aprender ventas, marketing, finanzas.</li>
            </ul>
          </div>

          <div>
            <p className="mb-2 font-semibold text-danger">
              ❌ NO es para ti si:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-default-600">
              <li>Necesitas estabilidad económica YA.</li>
              <li>Te estresa no tener un &ldquo;plan claro&rdquo;.</li>
              <li>Solo quieres &ldquo;escapar&rdquo; de tu trabajo actual.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección 2: Cómo Decidir */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          Cómo tomar la decisión (sin arrepentirte)
        </h2>

        <div className="space-y-6">
          <div className="rounded-lg bg-primary/10 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Paso 1: Autoevaluación brutal
            </h3>
            <p className="mb-4">Responde esto con honestidad:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>¿Qué te energiza?</strong> ¿Resolver bugs o ayudar a
                juniors?
              </li>
              <li>
                <strong>¿Qué te drena?</strong> ¿Reuniones o documentación?
              </li>
              <li>
                <strong>¿Qué te hace sentir orgulloso?</strong> ¿Tu código o ver
                crecer a tu equipo?
              </li>
              <li>
                <strong>En 5 años, ¿qué quieres contar?</strong> "Construí
                sistemas escalables" o "Formé a 20 developers"?
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-success/10 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Paso 2: Experimenta antes de decidir
            </h3>
            <p className="mb-4">No renuncies para "probar". Experimenta:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>¿Manager?</strong> Pide liderar un proyecto pequeño. Haz
                1-on-1s con juniors.
              </li>
              <li>
                <strong>¿Staff?</strong> Escribe un RFC, diseña una
                arquitectura.
              </li>
              <li>
                <strong>¿Emprender?</strong> Construye un side project. Véndelo
                a 5 personas.
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-warning/10 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Paso 3: Habla con alguien que YA lo hizo
            </h3>
            <p>
              No decidas solo. Busca un <strong>mentor</strong> o coach que haya
              pasado por las 3 rutas. Pregúntale:
            </p>
            <ul className="list-disc space-y-2 pl-6 mt-4">
              <li>¿Qué te sorprendió (bueno y malo)?</li>
              <li>¿Qué harías diferente?</li>
              <li>¿Cuál fue el costo emocional real?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección 3: El Elefante en la Sala */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          El elefante en la sala: "¿Y si la IA me reemplaza?"
        </h2>

        <p className="mb-4 text-lg">
          Hablemos claro: <strong>La IA NO va a reemplazarte</strong>. Pero SÍ
          va a cambiar lo que valoramos.
        </p>

        <div className="rounded-lg border border-primary/50 bg-primary/5 p-6">
          <h3 className="mb-4 text-xl font-semibold">
            Habilidades que la IA no puede reemplazar (2026+):
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <strong>Pensamiento crítico:</strong> Saber QUÉ construir, no
                solo CÓMO.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <strong>Comunicación estratégica:</strong> Traducir "tech" a
                "negocio".
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <strong>Liderazgo empático:</strong> Crear seguridad psicológica
                en equipos.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <strong>Visión de producto:</strong> Entender al usuario más
                allá del código.
              </div>
            </li>
          </ul>

          <p className="mt-6 text-default-600">
            <strong>Conclusión:</strong> Si tu siguiente paso te aleja del
            código y te acerca a <em>pensar, liderar y decidir</em>, estás
            invirtiendo en skills a prueba de IA.
          </p>
        </div>
      </section>

      {/* Sección 4: Mi Historia */}
      <section className="mb-12 rounded-lg bg-default-100 p-8">
        <h2 className="mb-4 text-2xl font-bold">
          Mi historia (por si te sirve)
        </h2>

        <p className="mb-4">
          Yo fui Senior Developer en startups y consultoras. A los 35 años
          estaba <strong>quemado</strong>. Excelente técnicamente, pero vacío
          por dentro.
        </p>

        <p className="mb-4">
          No sabía si seguir como Individual Contributor o dar el salto a
          liderar equipos. Tenía miedo de &ldquo;perder mi identidad
          técnica&rdquo;.
        </p>

        <p className="mb-4">
          Decidí <strong>pausar</strong>. Me certifiqué como Coach (ICF).
          Aprendí Management 3.0. Hice terapia. Y descubrí que mi siguiente paso
          no era &ldquo;más código&rdquo;, era{" "}
          <em>ayudar a otros developers a no sentirse como yo me sentía</em>.
        </p>

        <p className="font-semibold">
          Hoy llevo 18+ años en tech. Y te digo esto:{" "}
          <span className="text-primary">
            Tu siguiente paso no tiene que ser lineal. Puede ser lateral, hacia
            adentro, o completamente nuevo.
          </span>
        </p>
      </section>

      {/* CTA Final */}
      <section className="rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          ¿Necesitas ayuda para decidir TU siguiente paso?
        </h2>

        <p className="mb-6 text-lg">
          Te ofrezco una <strong>sesión gratuita de 45 minutos</strong> donde
          trabajaremos:
        </p>

        <ul className="mb-8 space-y-2 text-left text-default-600 mx-auto max-w-xl">
          <li>✅ Claridad sobre tus fortalezas y valores reales.</li>
          <li>✅ Análisis de las 3 rutas según TU perfil.</li>
          <li>✅ Plan de acción concreto para los próximos 90 días.</li>
          <li>✅ Herramientas anti-burnout si estás agotado.</li>
        </ul>

        <div className="mb-4">
          <Link
            className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
            href="/es/#cita"
          >
            Reservar mi Sesión Gratuita Ahora
          </Link>
        </div>

        <p className="text-sm text-default-500">
          💚 <strong>Modelo Non-Profit:</strong> Si decides continuar después de
          la primera sesión, trabajamos por donación voluntaria. El 100% va a
          causas sociales en Perú.
        </p>
      </section>

      {/* Footer del Artículo */}
      <footer className="mt-12 border-t border-default-200 pt-8">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold">
            HC
          </div>
          <div>
            <p className="font-semibold">Hugo Casanova</p>
            <p className="text-sm text-default-500">
              Mentor de Carrera Tech | Coach ICF | 18+ años en LATAM y EE.UU.
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
