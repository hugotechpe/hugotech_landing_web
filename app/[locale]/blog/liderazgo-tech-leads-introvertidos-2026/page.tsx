/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Liderazgo para Tech Leads Introvertidos: Guía 2026 | HugoTech",
    description:
      "Ser introvertido no te descalifica para liderar equipos tech. Descubre cómo usar tu introversión como fortaleza, no debilidad. Guía práctica para Tech Leads que no quieren fingir ser extrovertidos.",
    keywords: [
      "tech lead introvertido",
      "liderazgo para introvertidos",
      "líder técnico introvertido",
      "cómo liderar siendo introvertido",
      "introversión en tecnología",
      "engineering manager introvertido",
      "liderazgo silencioso tech",
      "comunicación para introvertidos tech",
    ],
    openGraph: {
      title: "Liderazgo para Tech Leads Introvertidos: No Necesitas Fingir Extroversión",
      description:
        "5 mitos sobre liderazgo + 7 herramientas prácticas para liderar equipos tech sin dejar de ser tú mismo.",
      type: "article",
      publishedTime: "2025-12-03T12:00:00.000Z",
      authors: ["Hugo Casanova"],
      tags: [
        "Tech Leadership",
        "Introvert Leaders",
        "Engineering Management",
        "Soft Skills",
        "Career Development",
      ],
    },
  };
}

export default async function LiderazgoIntrovertidosPage() {
  return (
    <article className="container mx-auto max-w-4xl px-4 py-12">
      {/* Hero Section */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-default-500">
          <time dateTime="2025-12-03">3 de diciembre, 2025</time>
          <span>•</span>
          <span>15 min de lectura</span>
          <span>•</span>
          <span>Por Hugo Casanova</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Liderazgo para Tech Leads Introvertidos:
          <br />
          <span className="text-primary">
            No necesitas fingir ser extrovertido
          </span>
        </h1>

        <p className="text-xl text-default-600">
          5 mitos que te limitan + 7 herramientas prácticas para liderar
          equipos tech sin perder tu esencia.
        </p>
      </header>

      {/* Intro: El Problema */}
      <section className="prose prose-lg dark:prose-invert mb-12">
        <h2 className="text-3xl font-bold">La mentira que te contaron</h2>

        <p>
          Te acaban de promover a <strong>Tech Lead</strong>. Deberías estar
          feliz. Pero en cambio sientes esto:
        </p>

        <ul>
          <li>Pánico cuando te toca hablar en reuniones con 10+ personas.</li>
          <li>
            Agotamiento después de 3 horas seguidas de 1-on-1s y dailies.
          </li>
          <li>
            Culpa porque prefieres escribir código que "socializar" con el
            equipo.
          </li>
          <li>
            Miedo de que descubran que "no eres suficientemente carismático"
            para liderar.
          </li>
        </ul>

        <p>
          Y lo peor: <strong>crees que el problema eres tú</strong>. Que
          necesitas "cambiar tu personalidad" para ser un buen líder.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic">
          Spoiler: El problema no eres tú. Es que te vendieron un modelo de
          liderazgo que no funciona para introvertidos.
        </blockquote>
      </section>

      {/* Sección 1: Los 5 Mitos */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          Los 5 mitos del liderazgo (que te están frenando)
        </h2>

        {/* Mito 1 */}
        <div className="mb-8 rounded-lg border-l-4 border-danger p-6 bg-danger/5">
          <h3 className="mb-3 text-2xl font-semibold text-danger">
            ❌ Mito 1: "Los líderes son extrovertidos y carismáticos"
          </h3>

          <p className="mb-4 text-default-600">
            <strong>La verdad:</strong> Bill Gates, Satya Nadella (CEO de
            Microsoft), Larry Page (Google), Mark Zuckerberg. Todos
            introvertidos. Todos líderes de empresas multimillonarias.
          </p>

          <p className="text-default-600">
            El carisma no es hablar fuerte. Es{" "}
            <strong>
              escuchar profundo, pensar antes de hablar y tomar decisiones
              fundamentadas
            </strong>
            . Eso es exactamente lo que hacen los introvertidos.
          </p>
        </div>

        {/* Mito 2 */}
        <div className="mb-8 rounded-lg border-l-4 border-danger p-6 bg-danger/5">
          <h3 className="mb-3 text-2xl font-semibold text-danger">
            ❌ Mito 2: "Tienes que estar disponible 24/7 para tu equipo"
          </h3>

          <p className="mb-4 text-default-600">
            <strong>La verdad:</strong> Los mejores líderes ponen límites.
            Enseñan a su equipo a pensar por sí mismos, no a depender del
            "gurú" que siempre resuelve.
          </p>

          <p className="text-default-600">
            <strong>Estrategia introvertida:</strong> Office Hours. 2 bloques
            de 1 hora al día donde estás 100% disponible. El resto:{" "}
            <em>Deep Work</em>.
          </p>
        </div>

        {/* Mito 3 */}
        <div className="mb-8 rounded-lg border-l-4 border-danger p-6 bg-danger/5">
          <h3 className="mb-3 text-2xl font-semibold text-danger">
            ❌ Mito 3: "Debes ser el que más habla en las reuniones"
          </h3>

          <p className="mb-4 text-default-600">
            <strong>La verdad:</strong> Los peores líderes monopolizan el
            micrófono. Los mejores{" "}
            <strong>hacen preguntas poderosas y callan</strong>.
          </p>

          <div className="rounded-lg bg-success/10 p-4 mt-4">
            <p className="font-semibold mb-2">Ejemplo práctico:</p>
            <p className="text-sm">
              ❌ Líder extrovertido: "Yo creo que deberíamos usar GraphQL
              porque..." (monólogo de 10 minutos)
            </p>
            <p className="text-sm mt-2">
              ✅ Líder introvertido: "¿Qué opinan sobre GraphQL vs REST para
              este caso?" (escucha 5 opiniones, sintetiza, decide)
            </p>
          </div>
        </div>

        {/* Mito 4 */}
        <div className="mb-8 rounded-lg border-l-4 border-danger p-6 bg-danger/5">
          <h3 className="mb-3 text-2xl font-semibold text-danger">
            ❌ Mito 4: "Liderar significa ir a todos los after-office y happy
            hours"
          </h3>

          <p className="mb-4 text-default-600">
            <strong>La verdad:</strong> La conexión no se construye con cerveza
            y karaoke. Se construye con{" "}
            <strong>vulnerabilidad auténtica y conversaciones profundas</strong>
            .
          </p>

          <p className="text-default-600">
            Prefiero un 1-on-1 de 30 minutos donde alguien me cuenta sus miedos
            reales, que 3 horas de "networking" superficial.
          </p>
        </div>

        {/* Mito 5 */}
        <div className="mb-8 rounded-lg border-l-4 border-danger p-6 bg-danger/5">
          <h3 className="mb-3 text-2xl font-semibold text-danger">
            ❌ Mito 5: "Si no hablas, tu equipo no te respeta"
          </h3>

          <p className="mb-4 text-default-600">
            <strong>La verdad:</strong> El respeto no viene del volumen de tu
            voz. Viene de la <strong>consistencia de tus acciones</strong>.
          </p>

          <p className="text-default-600">
            Un Tech Lead que cumple lo que promete, documenta bien, da feedback
            honesto y protege a su equipo del caos... ese líder es respetado.
            Hable poco o mucho.
          </p>
        </div>
      </section>

      {/* Sección 2: Las 7 Herramientas */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          Las 7 herramientas del Tech Lead introvertido
        </h2>

        <p className="mb-8 text-lg text-default-600">
          No necesitas cambiar quién eres. Necesitas{" "}
          <strong>herramientas que se adapten a tu forma de liderar</strong>.
        </p>

        {/* Herramienta 1 */}
        <div className="mb-8 rounded-lg border border-primary/50 p-6 bg-primary/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📝</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                1. Comunicación Asíncrona Primero
              </h3>
              <p className="mb-3 text-default-600">
                En lugar de reuniones, usa:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-default-600">
                <li>
                  <strong>RFCs (Request for Comments)</strong>: Documenta
                  decisiones técnicas. El equipo lee, comenta, decides.
                </li>
                <li>
                  <strong>Slack threads</strong>: Para discusiones complejas.
                  Evita el "ruido" en tiempo real.
                </li>
                <li>
                  <strong>Notion/Confluence</strong>: Tu "segunda voz". Escribe
                  lo que piensas una vez, compártelo infinitas veces.
                </li>
              </ul>
              <p className="mt-3 text-sm text-default-500 italic">
                Beneficio: Procesas información a tu ritmo. No hay presión de
                "pensar rápido" en el momento.
              </p>
            </div>
          </div>
        </div>

        {/* Herramienta 2 */}
        <div className="mb-8 rounded-lg border border-primary/50 p-6 bg-primary/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎯</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                2. Reuniones Estructuradas (No Improvisación)
              </h3>
              <p className="mb-3 text-default-600">
                Los introvertidos odiamos la "improvisación caótica". Solución:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-default-600">
                <li>
                  <strong>Agenda enviada 24h antes</strong>: Todos saben qué
                  esperar. Tú te preparas mentalmente.
                </li>
                <li>
                  <strong>Timeboxing estricto</strong>: 30 min máximo. Si no se
                  resuelve, se agenda otra reunión.
                </li>
                <li>
                  <strong>Roles claros</strong>: Facilitador, Timekeeper,
                  Note-taker. No todo recae en ti.
                </li>
              </ul>
              <p className="mt-3 text-sm text-default-500 italic">
                Beneficio: Reduces ansiedad y agotamiento. Las reuniones dejan
                de ser "wildcards".
              </p>
            </div>
          </div>
        </div>

        {/* Herramienta 3 */}
        <div className="mb-8 rounded-lg border border-primary/50 p-6 bg-primary/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🔇</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                3. "Zoom Fatigue"? Apaga la Cámara
              </h3>
              <p className="mb-3 text-default-600">
                Sí, leíste bien. Si estás agotado:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-default-600">
                <li>
                  <strong>Avisa antes</strong>: "Hoy apago cámara para
                  concentrarme mejor en lo que dicen".
                </li>
                <li>
                  <strong>Usa micrófono estratégicamente</strong>: Habla cuando
                  aporta valor, no por obligación.
                </li>
                <li>
                  <strong>Walking meetings</strong>: Para 1-on-1s, propón
                  llamadas caminando. Menos presión visual.
                </li>
              </ul>
              <p className="mt-3 text-sm text-default-500 italic">
                Beneficio: Conservas energía. Un líder agotado no lidera bien.
              </p>
            </div>
          </div>
        </div>

        {/* Herramienta 4 */}
        <div className="mb-8 rounded-lg border border-primary/50 p-6 bg-primary/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💬</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                4. 1-on-1s Profundos (Tu Superpoder)
              </h3>
              <p className="mb-3 text-default-600">
                Los introvertidos brillamos en conversaciones 1-a-1. Úsalo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-default-600">
                <li>
                  <strong>Preguntas poderosas</strong>: "¿Qué te quita el sueño
                  del proyecto?", "¿En qué necesitas crecer?"
                </li>
                <li>
                  <strong>Silencio activo</strong>: No llenes cada pausa.
                  Espera. La magia ocurre en el silencio.
                </li>
                <li>
                  <strong>Follow-up por escrito</strong>: Resume los puntos
                  clave en Notion. Muestra que escuchaste.
                </li>
              </ul>
              <p className="mt-3 text-sm text-default-500 italic">
                Beneficio: Tu equipo siente que los VES. Eso es liderazgo real.
              </p>
            </div>
          </div>
        </div>

        {/* Herramienta 5 */}
        <div className="mb-8 rounded-lg border border-primary/50 p-6 bg-primary/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🛡️</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                5. Protege tu "Tiempo de Recarga"
              </h3>
              <p className="mb-3 text-default-600">
                Los introvertidos nos recargamos en soledad. No negociable:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-default-600">
                <li>
                  <strong>Bloques de 2h sin reuniones</strong>: Calendario
                  bloqueado. "Deep Work" o "Focus Time".
                </li>
                <li>
                  <strong>Almuerzo solo</strong>: No tienes que almorzar con el
                  equipo todos los días. Está bien.
                </li>
                <li>
                  <strong>Post-reunión break</strong>: 15 min de pausa después
                  de cada call. Camina, respira, resetea.
                </li>
              </ul>
              <p className="mt-3 text-sm text-default-500 italic">
                Beneficio: Evitas el burnout. Un líder quemado no inspira a
                nadie.
              </p>
            </div>
          </div>
        </div>

        {/* Herramienta 6 */}
        <div className="mb-8 rounded-lg border border-primary/50 p-6 bg-primary/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📢</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                6. Usa "Portavoces" Estratégicos
              </h3>
              <p className="mb-3 text-default-600">
                No tienes que ser tú quien presente TODO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-default-600">
                <li>
                  <strong>Delega demos</strong>: Que un senior presente el
                  sprint review. Tú facilitas Q&A.
                </li>
                <li>
                  <strong>Co-liderazgo</strong>: Si hay un extrovertido en tu
                  equipo, aliado. Él habla en público, tú diseñas la estrategia.
                </li>
                <li>
                  <strong>Escribe, otros hablan</strong>: Tú documentas la
                  visión. Otros la evangelizan.
                </li>
              </ul>
              <p className="mt-3 text-sm text-default-500 italic">
                Beneficio: Desarrollas a tu equipo. Liderazgo no es "hacer todo
                solo".
              </p>
            </div>
          </div>
        </div>

        {/* Herramienta 7 */}
        <div className="mb-8 rounded-lg border border-primary/50 p-6 bg-primary/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎭</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                7. Sé Vulnerable (Tu Ventaja Secreta)
              </h3>
              <p className="mb-3 text-default-600">
                Los extrovertidos proyectan confianza. Los introvertidos
                proyectamos <strong>autenticidad</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-default-600">
                <li>
                  <strong>Admite tus límites</strong>: "Soy introvertido, las
                  reuniones largas me agotan. Por eso prefiero ser conciso".
                </li>
                <li>
                  <strong>Comparte tus miedos</strong>: "No sé la respuesta.
                  Vamos a investigar juntos".
                </li>
                <li>
                  <strong>Pide feedback</strong>: "¿Cómo me ves como líder?
                  ¿Qué podría mejorar?"
                </li>
              </ul>
              <p className="mt-3 text-sm text-default-500 italic">
                Beneficio: Creas <strong>seguridad psicológica</strong>. Tu
                equipo también se permite ser humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Mi Historia */}
      <section className="mb-12 rounded-lg bg-default-100 p-8">
        <h2 className="mb-4 text-2xl font-bold">
          Cómo llegué a esto (spoiler: no fue fácil)
        </h2>

        <p className="mb-4">
          Durante años pensé que <strong>estaba roto</strong>. Veía a otros
          Tech Leads que parecían "naturales": hablaban en standups con
          carisma, organizaban after-office, conocían a todos por su nombre.
        </p>

        <p className="mb-4">
          Yo, en cambio, necesitaba 2 días para recuperarme de una reunión de 3
          horas. Me sentía culpable por preferir documentar en Notion que hablar
          en Slack.
        </p>

        <p className="mb-4">
          A los 35 años, después de un{" "}
          <strong>burnout severo por fingir extroversión</strong>, decidí hacer
          coaching. Y descubrí algo que cambió todo:
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          "El liderazgo no es una personalidad. Es una práctica. Y los
          introvertidos tenemos fortalezas que los extrovertidos no: escucha
          profunda, reflexión antes de actuar, empatía silenciosa."
        </blockquote>

        <p className="mb-4">
          Hoy, después de 18+ años en tech, lidero equipos sin fingir. Uso
          comunicación asíncrona. Protejo mi tiempo de recarga. Y soy
          brutalmente honesto sobre mis límites.
        </p>

        <p className="font-semibold">
          ¿El resultado?{" "}
          <span className="text-primary">
            Equipos más cohesionados, menos burnout, y liderazgo sostenible
          </span>
          .
        </p>
      </section>

      {/* CTA Final */}
      <section className="rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          ¿Quieres desarrollar tu estilo de liderazgo introvertido?
        </h2>

        <p className="mb-6 text-lg">
          Te ofrezco una <strong>sesión gratuita de 45 minutos</strong> donde
          trabajaremos:
        </p>

        <ul className="mb-8 space-y-2 text-left text-default-600 mx-auto max-w-xl">
          <li>
            ✅ Identificar tu "tipo de introversión" y cómo usarla como
            fortaleza.
          </li>
          <li>
            ✅ Diseñar un sistema de comunicación que no te agote (asíncrono +
            estructurado).
          </li>
          <li>
            ✅ Plan de 90 días para liderar sin fingir extroversión ni quemarte.
          </li>
          <li>
            ✅ Herramientas para crear seguridad psicológica en tu equipo.
          </li>
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
          💚 <strong>Modelo Non-Profit:</strong> Si decides continuar después
          de la primera sesión, trabajamos por donación voluntaria. El 100% va
          a causas sociales en Perú.
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
              Tech Lead Introvertido | Coach ICF | 18+ años liderando equipos
              sin fingir extroversión
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
