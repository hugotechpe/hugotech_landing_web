/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Burnout Silencioso en Tech: 7 Señales y Plan Anti-Burnout 2026 | HugoTech",
    description:
      "¿Trabajas pero te sientes vacío? El burnout silencioso es la epidemia invisible de 2025. Aprende a detectar las 7 señales antes de renunciar y reconstruye tu relación con el trabajo tech.",
    keywords: [
      "burnout silencioso tech",
      "síntomas burnout programadores",
      "agotamiento emocional tech",
      "equilibrio vida trabajo programadores",
      "prevención burnout developers",
      "salud mental tech",
      "cómo evitar burnout en tecnología",
      "recuperación burnout tech 2026",
    ],
    openGraph: {
      title: "Burnout Silencioso en Tech: Lo que nadie te dice sobre el agotamiento invisible",
      description:
        "7 señales de burnout silencioso + Plan de 30 días para recuperar tu energía sin renunciar.",
      type: "article",
      publishedTime: "2025-12-03T14:00:00.000Z",
      authors: ["Hugo Casanova"],
      tags: [
        "Mental Health",
        "Burnout Prevention",
        "Work-Life Balance",
        "Developer Wellness",
        "Career Sustainability",
      ],
    },
  };
}

export default async function BurnoutSilenciosoPage() {
  return (
    <article className="container mx-auto max-w-4xl px-4 py-12">
      {/* Hero Section */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-sm text-default-500">
          <time dateTime="2025-12-03">3 de diciembre, 2025</time>
          <span>•</span>
          <span>14 min de lectura</span>
          <span>•</span>
          <span>Por Hugo Casanova</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Burnout Silencioso en Tech:
          <br />
          <span className="text-primary">
            Lo que nadie te dice sobre el agotamiento invisible
          </span>
        </h1>

        <p className="text-xl text-default-600">
          ¿Trabajas 8 horas pero te sientes vacío? 7 señales de burnout
          silencioso + Plan de 30 días para recuperar tu energía sin renunciar.
        </p>
      </header>

      {/* Intro: El Problema */}
      <section className="prose prose-lg dark:prose-invert mb-12">
        <h2 className="text-3xl font-bold">No es que seas flojo. Es burnout.</h2>

        <p>
          Llegas el lunes. Abres tu laptop. Tienes energía física. No estás
          enfermo. Pero algo está <strong>apagado</strong>.
        </p>

        <p>Haces tu trabajo. Cumples deadlines. Pero:</p>

        <ul>
          <li>No sientes orgullo cuando terminas un feature.</li>
          <li>Evitas las reuniones como si fueran tortura.</li>
          <li>
            El código que antes te emocionaba ahora te parece "una lista de
            tareas sin sentido".
          </li>
          <li>
            Te sientes culpable porque "no deberías quejarte" (tienes buen
            sueldo, trabajo remoto, beneficios).
          </li>
        </ul>

        <p>
          <strong>Eso no es pereza. Es burnout silencioso.</strong>
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic">
          El burnout clásico te tira al suelo. El burnout silencioso te mantiene
          de pie... pero vacío por dentro. Sigues funcionando. Pero no estás
          vivo.
        </blockquote>

        <p>
          Y lo peor: nadie lo nota. Ni tu manager, ni tu equipo, ni siquiera tú
          mismo hasta que un día piensas:{" "}
          <em>"¿Para qué hago todo esto?"</em>
        </p>
      </section>

      {/* Sección 1: Las 7 Señales */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          Las 7 señales del burnout silencioso
        </h2>

        <p className="mb-8 text-lg text-default-600">
          Si reconoces <strong>3 o más</strong>, estás en la zona de peligro:
        </p>

        {/* Señal 1 */}
        <div className="mb-8 rounded-lg border-l-4 border-warning p-6 bg-warning/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">⚡</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-warning">
                1. "No me emociona nada" (Apatía Emocional)
              </h3>
              <p className="mb-3 text-default-600">
                <strong>Antes:</strong> Celebrabas cuando deployabas a
                producción. Te emocionaba aprender una nueva tecnología.
              </p>
              <p className="mb-3 text-default-600">
                <strong>Ahora:</strong> Todo es "meh". Terminas un proyecto y
                piensas: "Bueno, lo siguiente".
              </p>
              <div className="rounded-lg bg-default-100 p-4 mt-3">
                <p className="text-sm font-semibold mb-2">
                  🚨 Por qué es peligroso:
                </p>
                <p className="text-sm">
                  La apatía es el primer síntoma. Tu cerebro está en "modo
                  supervivencia". Apagó las emociones para protegerte del dolor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Señal 2 */}
        <div className="mb-8 rounded-lg border-l-4 border-warning p-6 bg-warning/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">😴</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-warning">
                2. "Cansado aunque duerma 8 horas" (Agotamiento Cognitivo)
              </h3>
              <p className="mb-3 text-default-600">
                Duermes bien. Comes bien. Haces ejercicio. Pero tu cerebro está
                en niebla constante.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-default-600">
                <li>Lees el mismo párrafo de documentación 3 veces.</li>
                <li>Te cuesta concentrarte más de 20 minutos.</li>
                <li>Olvidas cosas simples (¿qué estaba haciendo?).</li>
              </ul>
              <div className="rounded-lg bg-default-100 p-4 mt-3">
                <p className="text-sm font-semibold mb-2">
                  🚨 Por qué es peligroso:
                </p>
                <p className="text-sm">
                  No es cansancio físico. Es sobrecarga cognitiva. Tu cerebro
                  está procesando estrés crónico 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Señal 3 */}
        <div className="mb-8 rounded-lg border-l-4 border-warning p-6 bg-warning/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🤐</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-warning">
                3. "No quiero hablar con nadie" (Aislamiento Social)
              </h3>
              <p className="mb-3 text-default-600">
                Ignoras mensajes de Slack. Pones excusas para no ir a reuniones.
                Tu equipo te pregunta "¿Todo bien?" y respondes: "Sí, solo
                cansado".
              </p>
              <div className="rounded-lg bg-default-100 p-4 mt-3">
                <p className="text-sm font-semibold mb-2">
                  🚨 Por qué es peligroso:
                </p>
                <p className="text-sm">
                  El aislamiento retroalimenta el burnout. Menos conexión =
                  menos apoyo = más agotamiento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Señal 4 */}
        <div className="mb-8 rounded-lg border-l-4 border-warning p-6 bg-warning/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">😤</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-warning">
                4. "Todo me irrita" (Cinismo y Resentimiento)
              </h3>
              <p className="mb-3 text-default-600">
                Antes eras paciente con juniors. Ahora piensas: "¿Por qué no lo
                googlean?". Tu manager pide algo y tu primer pensamiento es:
                "Otra estupidez más".
              </p>
              <div className="rounded-lg bg-default-100 p-4 mt-3">
                <p className="text-sm font-semibold mb-2">
                  🚨 Por qué es peligroso:
                </p>
                <p className="text-sm">
                  El cinismo es un mecanismo de defensa. Tu mente te protege de
                  "importarte demasiado" porque duele.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Señal 5 */}
        <div className="mb-8 rounded-lg border-l-4 border-warning p-6 bg-warning/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🎭</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-warning">
                5. "Finjo estar bien" (Máscara Funcional)
              </h3>
              <p className="mb-3 text-default-600">
                En reuniones sonríes, asientes, participas. Pero apenas termina
                el call, vuelves a sentirte vacío. Es como actuar en una obra de
                teatro 8 horas al día.
              </p>
              <div className="rounded-lg bg-default-100 p-4 mt-3">
                <p className="text-sm font-semibold mb-2">
                  🚨 Por qué es peligroso:
                </p>
                <p className="text-sm">
                  Fingir consume energía cognitiva masiva. Es por eso que llegas
                  al viernes destruido aunque "no hiciste nada pesado".
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Señal 6 */}
        <div className="mb-8 rounded-lg border-l-4 border-warning p-6 bg-warning/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🍕</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-warning">
                6. "Mis hábitos están rotos" (Autosabotaje Sutil)
              </h3>
              <p className="mb-3 text-default-600">
                Comes mal (delivery, comida rápida). Dejas de hacer ejercicio.
                Scrolleas TikTok/Instagram 2 horas antes de dormir. Sabes que te
                hace mal, pero "no tienes energía para cambiar".
              </p>
              <div className="rounded-lg bg-default-100 p-4 mt-3">
                <p className="text-sm font-semibold mb-2">
                  🚨 Por qué es peligroso:
                </p>
                <p className="text-sm">
                  No es falta de disciplina. Es que tu sistema nervioso está en
                  modo "emergencia" y busca dopamina rápida para sobrevivir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Señal 7 */}
        <div className="mb-8 rounded-lg border-l-4 border-warning p-6 bg-warning/5">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💭</span>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-warning">
                7. "¿Y si renuncio?" (Fantasías de Escape)
              </h3>
              <p className="mb-3 text-default-600">
                Piensas: "Si me voy a otra empresa, todo mejorará". O peor: "Si
                dejo tech y vendo empanadas, seré feliz". Pasas horas viendo
                ofertas de trabajo o calculando cuánto dinero necesitas para
                renunciar.
              </p>
              <div className="rounded-lg bg-default-100 p-4 mt-3">
                <p className="text-sm font-semibold mb-2">
                  🚨 Por qué es peligroso:
                </p>
                <p className="text-sm">
                  El escape no resuelve el burnout. Si no cambias tu relación
                  con el trabajo, lo reproducirás en el siguiente lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Por qué pasa */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          ¿Por qué el burnout silencioso es epidemia en tech?
        </h2>

        <div className="space-y-6">
          <div className="rounded-lg bg-primary/10 p-6">
            <h3 className="mb-3 text-xl font-semibold flex items-center gap-2">
              <span>🎯</span> Razón 1: Metas sin sentido
            </h3>
            <p className="text-default-600">
              Trabajas en features que nadie usa. Sprints que cambian cada
              semana. Tu impacto es invisible. Cuando no ves propósito, tu
              cerebro apaga las emociones.
            </p>
          </div>

          <div className="rounded-lg bg-primary/10 p-6">
            <h3 className="mb-3 text-xl font-semibold flex items-center gap-2">
              <span>⚙️</span> Razón 2: Trabajo remoto sin límites
            </h3>
            <p className="text-default-600">
              Antes: Oficina cerrada = fin del día. Ahora: Tu laptop está en tu
              cuarto. "Un email rápido" a las 10pm. Domingo revisando Slack
              "por si acaso". No hay OFF.
            </p>
          </div>

          <div className="rounded-lg bg-primary/10 p-6">
            <h3 className="mb-3 text-xl font-semibold flex items-center gap-2">
              <span>🤖</span> Razón 3: Ansiedad por IA
            </h3>
            <p className="text-default-600">
              "¿ChatGPT me reemplazará?" "Tengo que aprender más, ser más
              rápido". La presión de "no quedar obsoleto" genera estrés crónico
              invisible.
            </p>
          </div>

          <div className="rounded-lg bg-primary/10 p-6">
            <h3 className="mb-3 text-xl font-semibold flex items-center gap-2">
              <span>🏆</span> Razón 4: Cultura del "hustle"
            </h3>
            <p className="text-default-600">
              LinkedIn glorifica las 12 horas diarias. Twitter celebra el "no
              sleep grind". Si no estás agotado, "no estás trabajando lo
              suficiente". Eso es una mentira tóxica.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: El Plan de 30 Días */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          Plan Anti-Burnout de 30 Días (Sin Renunciar)
        </h2>

        <p className="mb-8 text-lg text-default-600">
          No necesitas vacaciones de 3 meses. Necesitas{" "}
          <strong>pequeños cambios sostenibles</strong>:
        </p>

        {/* Semana 1 */}
        <div className="mb-8 rounded-lg border-2 border-primary p-6">
          <h3 className="mb-4 text-2xl font-bold text-primary">
            Semana 1: Auditoría de Energía
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">🔍 Día 1-3: Rastrear drenajes</p>
              <p className="text-default-600 mb-2">
                Cada día, anota qué te agotó:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-default-600">
                <li>¿Qué reuniones te drenaron?</li>
                <li>¿Qué tareas te costaron más energía de lo normal?</li>
                <li>¿En qué momento del día te sentiste peor?</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">✂️ Día 4-7: Cortar lo innecesario</p>
              <p className="text-default-600 mb-2">Elimina 3 cosas:</p>
              <ul className="list-disc pl-6 space-y-1 text-default-600">
                <li>1 reunión semanal que no aporta (delega o rechaza).</li>
                <li>1 notificación de Slack que te interrumpe (silencia).</li>
                <li>
                  1 "favor" que siempre haces pero no es tu responsabilidad.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Semana 2 */}
        <div className="mb-8 rounded-lg border-2 border-primary p-6">
          <h3 className="mb-4 text-2xl font-bold text-primary">
            Semana 2: Proteger el OFF
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">
                🚪 Día 8-10: Crear límites digitales
              </p>
              <ul className="list-disc pl-6 space-y-1 text-default-600">
                <li>
                  <strong>Slack:</strong> Modo "No molestar" después de las 7pm.
                </li>
                <li>
                  <strong>Email:</strong> Cerrar Gmail fuera del horario
                  laboral.
                </li>
                <li>
                  <strong>Laptop:</strong> Guardarla en un lugar físico
                  diferente (no en tu mesa).
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">
                🌅 Día 11-14: Ritual de cierre
              </p>
              <p className="text-default-600 mb-2">
                Cada día, antes de "terminar", haz esto:
              </p>
              <ol className="list-decimal pl-6 space-y-1 text-default-600">
                <li>Escribe 3 cosas que lograste hoy (por pequeñas que sean).</li>
                <li>Anota 1 prioridad para mañana.</li>
                <li>
                  Cierra todas las tabs. Apaga la laptop. Di en voz alta:
                  "Terminé".
                </li>
              </ol>
              <p className="text-sm text-default-500 mt-3 italic">
                Esto le dice a tu cerebro: "Puedes desconectar. El trabajo
                terminó".
              </p>
            </div>
          </div>
        </div>

        {/* Semana 3 */}
        <div className="mb-8 rounded-lg border-2 border-primary p-6">
          <h3 className="mb-4 text-2xl font-bold text-primary">
            Semana 3: Recuperar Conexión
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">
                👥 Día 15-18: Hablar con alguien real
              </p>
              <p className="text-default-600 mb-2">
                El burnout te aísla. Rompe eso:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-default-600">
                <li>Llama a un amigo (no texto, voz o video).</li>
                <li>
                  Agenda un café con alguien de tu equipo (1-on-1 informal).
                </li>
                <li>
                  Únete a una comunidad tech (Discord, Slack) y participa en 1
                  conversación.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">
                💬 Día 19-21: Hablar con tu manager
              </p>
              <p className="text-default-600 mb-2">
                Sí, da miedo. Pero es necesario. Di algo como:
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic my-3 text-default-600">
                "Últimamente me siento agotado. No es algo específico del
                proyecto, es acumulativo. ¿Podemos hablar sobre cómo ajustar mi
                carga o prioridades?"
              </blockquote>
              <p className="text-sm text-default-500 italic">
                Si tu manager reacciona mal, es señal de que necesitas cambiar
                de equipo/empresa.
              </p>
            </div>
          </div>
        </div>

        {/* Semana 4 */}
        <div className="mb-8 rounded-lg border-2 border-primary p-6">
          <h3 className="mb-4 text-2xl font-bold text-primary">
            Semana 4: Reencontrar Propósito
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">
                🎯 Día 22-25: Pregúntate el "¿Para qué?"
              </p>
              <p className="text-default-600 mb-2">Escribe tus respuestas:</p>
              <ul className="list-disc pl-6 space-y-1 text-default-600">
                <li>¿Qué parte de mi trabajo me sigue emocionando?</li>
                <li>
                  ¿Qué quiero aprender en los próximos 6 meses? (Técnico o
                  humano).
                </li>
                <li>¿Qué impacto quiero tener más allá del código?</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">
                🌱 Día 26-30: Pequeño proyecto "por pasión"
              </p>
              <p className="text-default-600 mb-2">
                Dedica 2 horas semanales a:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-default-600">
                <li>Un side project que TE emocione (no por dinero).</li>
                <li>Mentorar a alguien junior (enseñar reabre tu curiosidad).</li>
                <li>
                  Contribuir a open source de algo que uses y valores.
                </li>
              </ul>
              <p className="text-sm text-default-500 mt-3 italic">
                Objetivo: Recordar por qué elegiste tech en primer lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Cuándo sí renunciar */}
      <section className="mb-12 rounded-lg bg-danger/10 border border-danger/50 p-8">
        <h2 className="mb-4 text-2xl font-bold">
          ⚠️ Señales de que SÍ deberías renunciar
        </h2>

        <p className="mb-4">
          A veces el burnout no es "temporal". Es sistémico. Considera
          renunciar si:
        </p>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-xl">🚩</span>
            <div>
              <strong>Tu salud física está en riesgo:</strong> Insomnio crónico,
              problemas digestivos, ataques de pánico. Tu cuerpo está diciendo
              "basta".
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🚩</span>
            <div>
              <strong>El problema es cultural:</strong> Si toda tu empresa
              glorifica el overwork y nadie respeta límites, no vas a cambiar
              eso solo.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🚩</span>
            <div>
              <strong>Perdiste tu identidad:</strong> Si piensas "no sé quién
              soy sin este trabajo", estás fusionado emocionalmente. Necesitas
              distancia.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🚩</span>
            <div>
              <strong>Llevas 6+ meses así:</strong> Si implementaste el plan de
              30 días, hablaste con tu manager y nada cambió... es momento de
              irte.
            </div>
          </li>
        </ul>

        <p className="mt-6 text-sm text-default-600 italic">
          Nota: Renunciar no es fracaso. Es autoprotección.
        </p>
      </section>

      {/* Sección 5: Mi Historia */}
      <section className="mb-12 rounded-lg bg-default-100 p-8">
        <h2 className="mb-4 text-2xl font-bold">Mi historia con el burnout</h2>

        <p className="mb-4">
          A los 33 años tuve mi primer episodio de burnout. Trabajaba 12 horas
          diarias en una startup. Dormía 4-5 horas. Comía en mi escritorio.
        </p>

        <p className="mb-4">
          Pensaba: <em>"Estoy construyendo algo importante"</em>. Pero mi cuerpo
          decía otra cosa: insomnio, gastritis, ansiedad constante.
        </p>

        <p className="mb-4">
          Un día, literalmente, <strong>no pude levantarme de la cama</strong>.
          No era depresión clínica. Era agotamiento total. Mi sistema nervioso
          dijo: "Ya no más".
        </p>

        <p className="mb-4">
          Renuncié. Tomé 3 meses sabáticos. Hice terapia. Aprendí sobre límites,
          propósito y autocuidado. Y me certifiqué como Coach para ayudar a
          otros a no llegar donde yo llegué.
        </p>

        <p className="font-semibold">
          Hoy, 18+ años en tech, trabajo 6-7 horas efectivas. Duermo 8 horas.
          Tengo energía para mi familia y proyectos personales.{" "}
          <span className="text-primary">
            El burnout no es inevitable. Es prevenible.
          </span>
        </p>
      </section>

      {/* CTA Final */}
      <section className="rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          ¿Necesitas ayuda para salir del burnout?
        </h2>

        <p className="mb-6 text-lg">
          Te ofrezco una <strong>sesión gratuita de 45 minutos</strong> donde
          trabajaremos:
        </p>

        <ul className="mb-8 space-y-2 text-left text-default-600 mx-auto max-w-xl">
          <li>✅ Identificar tu nivel de burnout y señales de alerta.</li>
          <li>
            ✅ Auditoría de energía: Qué te drena y cómo cortarlo sin renunciar.
          </li>
          <li>
            ✅ Plan de 30 días personalizado para recuperar tu energía y
            propósito.
          </li>
          <li>
            ✅ Decidir si tu burnout es "recuperable" o si necesitas cambiar de
            entorno.
          </li>
        </ul>

        <div className="mb-4">
          <Link
            className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
            href="/es/#cita"
          >
            Reservar mi Sesión Anti-Burnout Gratuita
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
              Sobreviviente de Burnout | Coach ICF | 18+ años ayudando a
              developers a NO quemarse
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
