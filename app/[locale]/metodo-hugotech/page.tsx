import { setRequestLocale } from "next-intl/server";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { 
  Sparkles, 
  Heart, 
  Target, 
  Zap, 
  Shield, 
  CheckCircle2,
  Brain,
  Rocket,
  Users,
  TrendingUp,
  Bot,
  Lightbulb,
  MessageCircle,
  Award,
  ArrowRight
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { generateMetadata as genMetadata } from "@/lib/metadata";
import HomeLayout from "../HomeLayout";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return genMetadata({
    title:
      locale === "es"
        ? "El Camino HugoTech: Acompañamiento Profundo para Desarrolladores | Hugo Casanova"
        : "The HugoTech Path: Deep Accompaniment for Developers | Hugo Casanova",
    description:
      locale === "es"
        ? "Acompañamiento integral para desarrolladores: mentoría técnica para juniors, coaching ontológico ICF para líderes. Hugo Casanova, Coach Certificado Ruwalab + ICF Nivel 2, estudiando ontología en ACP Newfield. Transformación desde el SER."
        : "Comprehensive accompaniment for developers: technical mentoring for juniors, ICF ontological coaching for leaders. Hugo Casanova, Certified Coach Ruwalab + ICF Level 2, studying ontology at ACP Newfield. Transformation from BEING.",
    keywords:
      locale === "es"
        ? [
            "acompañamiento desarrolladores tech",
            "coaching ontológico desarrolladores",
            "mentoría tech perú lima",
            "coach certificado ICF tech",
            "transformación liderazgo tech",
            "hugo casanova coach",
            "coaching newfield tech",
            "mentoría personalizada programadores",
          ]
        : [
            "tech developers accompaniment",
            "ontological coaching developers",
            "tech mentoring peru lima",
            "ICF certified tech coach",
            "tech leadership transformation",
            "hugo casanova coach",
            "newfield tech coaching",
            "personalized programming mentoring",
          ],
    locale,
    path: "metodo-hugotech",
  });
}

export default async function MetodoHugotechPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <HomeLayout>
      <Breadcrumb
        items={[
          { name: locale === "es" ? "Inicio" : "Home", url: `/${locale}` },
          {
            name: locale === "es" ? "Método Hugotech" : "Hugotech Method",
            url: `/${locale}/metodo-hugotech`,
          },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-primary animate-pulse" />
          <Chip color="primary" size="lg" variant="flat">
            {locale === "es" ? "Acompañamiento desde el SER, no solo desde el Hacer" : "Accompaniment from BEING, not just Doing"}
          </Chip>
          <Heart className="w-6 h-6 text-primary animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-primary">
            {locale === "es"
              ? "El Camino HugoTech"
              : "The HugoTech Path"}
          </span>
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-customgray mb-8">
          {locale === "es"
            ? "Cuando el Código No Basta para Ser Quien Quieres Ser"
            : "When Code Isn't Enough to Be Who You Want to Be"}
        </p>
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <p className="text-xl md:text-2xl text-default-600 leading-relaxed">
            {locale === "es"
              ? "No es un método. No es una receta. Es un espacio de transformación donde puedes dejar de fingir que todo está bien."
              : "It's not a method. It's not a recipe. It's a transformation space where you can stop pretending everything is fine."}
          </p>
          <p className="text-xl md:text-2xl text-default-700 font-medium">
            {locale === "es"
              ? "Aquí acompañamos desarrolladores que necesitan crecer técnicamente... y líderes que necesitan transformarse ontológicamente."
              : "Here we accompany developers who need to grow technically... and leaders who need to transform ontologically."}
          </p>
        </div>
        <div className="inline-flex items-center gap-3 bg-primary-50 px-8 py-6 rounded-2xl mb-10 shadow-lg border-2 border-primary-200">
          <Brain className="w-10 h-10 text-primary" />
          <p className="text-xl md:text-2xl font-bold text-customgray">
            {locale === "es"
              ? "El problema no es lo que sabes. Es quién eres cuando programas, lideras o te equivocas."
              : "The problem isn't what you know. It's who you are when you code, lead, or make mistakes."}
          </p>
        </div>
        <Link href="/pricing">
          <Button 
            color="primary" 
            size="lg" 
            className="font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            endContent={<Rocket className="w-5 h-5" />}
          >
            {locale === "es" ? "Primera Sesión Gratuita" : "Free First Session"}
          </Button>
        </Link>
      </div>

      {/* La Esencia */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-customgray mb-4">
            {locale === "es"
              ? "Quién Acompaña Tu Proceso"
              : "Who Accompanies Your Process"}
          </h2>
          <p className="text-xl text-default-600 max-w-3xl mx-auto">
            {locale === "es"
              ? "No te vendo un método porque yo tampoco seguí uno. Te acompaño desde mi propia transformación."
              : "I don't sell you a method because I didn't follow one either. I accompany you from my own transformation."}
          </p>
        </div>
        <Card className="bg-white border-2 border-primary-200 hover:shadow-2xl transition-shadow">
          <CardBody className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lado izquierdo: La historia */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warning-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-warning-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-customgray mb-3">
                      {locale === "es" ? "Yo también me quemé" : "I Also Burned Out"}
                    </h3>
                    <p className="text-lg text-default-700 leading-relaxed">
                      {locale === "es"
                        ? "Fui Senior Developer, Tech Lead, Architect. 18+ años escribiendo código. Llegué a liderar equipos grandes... y me rompí por dentro. Burnout severo. No fue por falta de habilidad técnica. Fue porque no sabía QUIÉN ERA sin el cargo."
                        : "I was Senior Developer, Tech Lead, Architect. 18+ years writing code. I led large teams... and broke inside. Severe burnout. It wasn't lack of technical skill. It was because I didn't know WHO I WAS without the title."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-customgray mb-3">
                      {locale === "es" ? "Mi transformación" : "My Transformation"}
                    </h3>
                    <p className="text-lg text-default-700 leading-relaxed">
                      {locale === "es"
                        ? "Descubrí el coaching. Primero como cliente, luego como estudiante. Me certifiqué como Coach Profesional en Ruwalab Perú (ICF Nivel 2). Hoy estudio Coaching Ontológico en ACP Newfield, aprendiendo que el verdadero cambio no está en nuevas técnicas, sino en transformar el observador que somos."
                        : "I discovered coaching. First as a client, then as a student. I became certified as Professional Coach at Ruwalab Peru (ICF Level 2). Today I study Ontological Coaching at ACP Newfield, learning that real change isn't in new techniques, but in transforming the observer we are."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-customgray mb-3">
                      {locale === "es" ? "Por qué puedo acompañarte" : "Why I Can Accompany You"}
                    </h3>
                    <p className="text-lg text-default-700 leading-relaxed">
                      {locale === "es"
                        ? "No soy un gurú que 'llegó'. Soy alguien en transformación permanente que puede acompañarte porque VIVÍ lo que vives: el síndrome del impostor, la ansiedad de la IA, el miedo a no ser suficiente, el burnout silencioso. Y encontré un camino que no es perfecto, pero es auténtico."
                        : "I'm not a guru who 'arrived'. I'm someone in permanent transformation who can accompany you because I LIVED what you live: impostor syndrome, AI anxiety, fear of not being enough, silent burnout. And I found a path that's not perfect, but it's authentic."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lado derecho: Credenciales actuales */}
              <div className="bg-white/60 rounded-xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-customgray mb-6 text-center">
                  {locale === "es" ? "Mis Credenciales" : "My Credentials"}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-primary-100 rounded-lg border border-primary-200">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-customgray">
                        {locale === "es" 
                          ? "Coach Profesional Certificado"
                          : "Certified Professional Coach"}
                      </p>
                      <p className="text-sm text-default-600">
                        {locale === "es"
                          ? "Ruwalab Perú | ICF Nivel 2"
                          : "Ruwalab Peru | ICF Level 2"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-secondary-100 rounded-lg border border-secondary-200">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-customgray">
                        {locale === "es"
                          ? "Estudiante de Coaching Ontológico"
                          : "Ontological Coaching Student"}
                      </p>
                      <p className="text-sm text-default-600">
                        ACP Newfield (en formación)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-success-100 rounded-lg border border-success-200">
                    <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-customgray">
                        {locale === "es"
                          ? "Ingeniero de Software Senior"
                          : "Senior Software Engineer"}
                      </p>
                      <p className="text-sm text-default-600">
                        {locale === "es"
                          ? "18+ años | Tech Lead | Architect"
                          : "18+ years | Tech Lead | Architect"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-warning-100 rounded-lg border border-warning-200">
                    <CheckCircle2 className="w-6 h-6 text-warning-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-customgray">
                        {locale === "es"
                          ? "Facilitador Management 3.0"
                          : "Management 3.0 Facilitator"}
                      </p>
                      <p className="text-sm text-default-600">
                        {locale === "es"
                          ? "Liderazgo ágil y equipos"
                          : "Agile leadership and teams"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-primary-100 rounded-xl border-2 border-primary-200">
                  <p className="text-lg font-bold text-center text-customgray">
                    {locale === "es"
                      ? "No te enseño desde la teoría. Te acompaño desde la experiencia vivida."
                      : "I don't teach from theory. I accompany from lived experience."}
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Por qué nace el método */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-2xl mb-4">
            <Users className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-customgray mb-4">
            {locale === "es"
              ? "Dos Caminos, Un Mismo Espacio"
              : "Two Paths, One Same Space"}
          </h2>
          <p className="text-xl text-default-600 max-w-4xl mx-auto">
            {locale === "es"
              ? "Dependiendo de dónde estés en tu carrera, te acompaño de forma diferente. No es mejor uno que otro. Es lo que necesitas HOY."
              : "Depending on where you are in your career, I accompany you differently. One isn't better than the other. It's what you need TODAY."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Camino 1: Mentoría Técnica */}
          <Card className="border-2 border-success-200 hover:shadow-2xl transition-all group bg-white">
            <CardBody className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-success-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Rocket className="w-9 h-9 text-white" />
                </div>
                <div>
                  <Chip color="success" size="lg" variant="flat">
                    {locale === "es" ? "🎯 Mentoría Técnica" : "🎯 Technical Mentoring"}
                  </Chip>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-customgray mb-4">
                {locale === "es"
                  ? "Para Desarrolladores que Necesitan Crecer"
                  : "For Developers Who Need to Grow"}
              </h3>

              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {locale === "es"
                  ? "Si eres Junior, estás cambiando de carrera, o eres Mid-level que necesita subir de nivel técnico."
                  : "If you're Junior, changing careers, or Mid-level needing to level up technically."}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-1" />
                  <p className="text-default-700">
                    {locale === "es"
                      ? "Claridad sobre tu perfil ideal (Backend, Frontend, QA, DevOps)"
                      : "Clarity on your ideal profile (Backend, Frontend, QA, DevOps)"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-1" />
                  <p className="text-default-700">
                    {locale === "es"
                      ? "Plan de aprendizaje personalizado (no recetas genéricas)"
                      : "Personalized learning plan (not generic recipes)"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-1" />
                  <p className="text-default-700">
                    {locale === "es"
                      ? "Acompañamiento hasta tu primer empleo o promoción"
                      : "Accompaniment until your first job or promotion"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success-600 flex-shrink-0 mt-1" />
                  <p className="text-default-700">
                    {locale === "es"
                      ? "Integración de IA como herramienta (no como amenaza)"
                      : "AI integration as a tool (not as a threat)"}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-success-50 border-l-4 border-success-600 rounded-lg">
                <p className="text-lg font-semibold text-customgray">
                  {locale === "es"
                    ? "Aquí te enseño código, arquitectura, buenas prácticas... pero también trabajamos tu confianza y tu síndrome del impostor."
                    : "Here I teach you code, architecture, best practices... but we also work on your confidence and impostor syndrome."}
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Camino 2: Coaching Ontológico */}
          <Card className="border-2 border-primary-200 hover:shadow-2xl transition-all group bg-white">
            <CardBody className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Brain className="w-9 h-9 text-white" />
                </div>
                <div>
                  <Chip color="primary" size="lg" variant="flat">
                    {locale === "es" ? "🧠 Coaching Ontológico" : "🧠 Ontological Coaching"}
                  </Chip>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-customgray mb-4">
                {locale === "es"
                  ? "Para Líderes que Necesitan Transformarse"
                  : "For Leaders Who Need to Transform"}
              </h3>

              <p className="text-lg text-default-700 leading-relaxed mb-6">
                {locale === "es"
                  ? "Si ya eres Senior, Tech Lead, EM, o CTO... pero sientes que algo interno te bloquea."
                  : "If you're already Senior, Tech Lead, EM, or CTO... but feel something internal is blocking you."}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-default-700">
                    {locale === "es"
                      ? "Transformación ontológica: cambiar QUIÉN ERES cuando lideras"
                      : "Ontological transformation: changing WHO YOU ARE when you lead"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-default-700">
                    {locale === "es"
                      ? "Prevención y recuperación de burnout profundo"
                      : "Prevention and recovery from deep burnout"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-default-700">
                    {locale === "es"
                      ? "Liderazgo auténtico sin máscaras corporativas"
                      : "Authentic leadership without corporate masks"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-default-700">
                    {locale === "es"
                      ? "Alto rendimiento sostenible (sin sacrificar tu salud mental)"
                      : "Sustainable high performance (without sacrificing mental health)"}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-primary-50 border-l-4 border-primary rounded-lg">
                <p className="text-lg font-semibold text-customgray">
                  {locale === "es"
                    ? "Aquí NO te enseño técnicas de liderazgo. Acompañamos la transformación de tu OBSERVADOR: cómo ves, cómo sientes, cómo hablas."
                    : "Here I DON'T teach you leadership techniques. We accompany the transformation of your OBSERVER: how you see, feel, speak."}
                </p>
              </div>

              <div className="mt-6">
                <Link href="/coaching-tecnologico">
                  <Button
                    color="primary"
                    size="lg"
                    className="w-full font-semibold"
                    endContent={<ArrowRight className="w-5 h-5" />}
                  >
                    {locale === "es"
                      ? "Ver RecoProgramación® Ontológica"
                      : "See Ontological ReCode®"}
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Nota importante */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-warning-50 border-2 border-warning-200">
            <CardBody className="p-8 text-center">
              <Lightbulb className="w-12 h-12 text-warning-600 mx-auto mb-4" />
              <p className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "No tienes que elegir desde el inicio"
                  : "You Don't Have to Choose from the Start"}
              </p>
              <p className="text-lg text-default-700 leading-relaxed">
                {locale === "es"
                  ? "En la primera sesión gratuita conversamos y descubrimos juntos qué tipo de acompañamiento necesitas HOY. Muchos empiezan con mentoría técnica y luego descubren que necesitan coaching ontológico. Otros al revés. El proceso es tuyo."
                  : "In the first free session we talk and discover together what type of accompaniment you need TODAY. Many start with technical mentoring and then discover they need ontological coaching. Others vice versa. The process is yours."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Cómo Te Acompaño */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-customgray mb-4">
            {locale === "es"
              ? "Cómo Te Acompaño"
              : "How I Accompany You"}
          </h2>
          <p className="text-xl text-default-600 max-w-3xl mx-auto">
            {locale === "es"
              ? "No trabajo con pilares ni frameworks. Trabajo contigo, desde donde estés."
              : "I don't work with pillars or frameworks. I work with you, from wherever you are."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border border-primary-100">
            <CardBody className="p-8">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "1. Primera Sesión Gratuita"
                  : "1. Free First Session"}
              </h3>
              <p className="text-default-700 leading-relaxed">
                {locale === "es"
                  ? "Sin compromiso. Conversamos sobre dónde estás y qué necesitas. Descubrimos juntos si tiene sentido trabajar conmigo."
                  : "No commitment. We talk about where you are and what you need. We discover together if it makes sense to work with me."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border border-secondary-100">
            <CardBody className="p-8">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "2. Diagnóstico Profundo"
                  : "2. Deep Diagnosis"}
              </h3>
              <p className="text-default-700 leading-relaxed">
                {locale === "es"
                  ? "Exploramos tu momento actual: técnico, emocional, profesional. No solo qué sabes, sino quién eres cuando trabajas."
                  : "We explore your current moment: technical, emotional, professional. Not just what you know, but who you are when you work."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border border-success-100">
            <CardBody className="p-8">
              <div className="w-14 h-14 bg-success-600 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "3. Plan Personalizado"
                  : "3. Personalized Plan"}
              </h3>
              <p className="text-default-700 leading-relaxed">
                {locale === "es"
                  ? "No hay recetas genéricas. Diseñamos un camino que respete tus tiempos, tu contexto, tus miedos."
                  : "No generic recipes. We design a path that respects your timing, your context, your fears."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border border-warning-100">
            <CardBody className="p-8">
              <div className="w-14 h-14 bg-warning-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "4. Sesiones 1-a-1"
                  : "4. 1-on-1 Sessions"}
              </h3>
              <p className="text-default-700 leading-relaxed">
                {locale === "es"
                  ? "Sesiones semanales o quincenales donde trabajamos lo técnico (si necesitas mentoría) o lo ontológico (si necesitas coaching)."
                  : "Weekly or biweekly sessions where we work on the technical (if you need mentoring) or the ontological (if you need coaching)."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border border-primary-100">
            <CardBody className="p-8">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "5. Seguimiento Asincrónico"
                  : "5. Async Follow-up"}
              </h3>
              <p className="text-default-700 leading-relaxed">
                {locale === "es"
                  ? "Entre sesiones estoy disponible por WhatsApp/email para dudas rápidas, feedback de código, o simplemente para acompañarte cuando lo necesites."
                  : "Between sessions I'm available via WhatsApp/email for quick questions, code feedback, or simply to accompany you when you need it."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border border-secondary-100">
            <CardBody className="p-8">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "6. Evolución Continua"
                  : "6. Continuous Evolution"}
              </h3>
              <p className="text-default-700 leading-relaxed">
                {locale === "es"
                  ? "Tu proceso evoluciona contigo. Si empezaste con mentoría y descubres que necesitas coaching, cambiamos. El proceso es tuyo, no mío."
                  : "Your process evolves with you. If you started with mentoring and discover you need coaching, we change. The process is yours, not mine."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Cross-Link a Coaching Tecnológico */}
      <section className="mb-20">
        <Card className="bg-primary-50 border-2 border-primary-200">
          <CardBody className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Chip className="mb-4" color="warning" size="lg" variant="flat">
                  {locale === "es" ? "🚀 Transformación Profunda" : "🚀 Deep Transformation"}
                </Chip>
                <h3 className="text-3xl md:text-4xl font-bold text-customgray mb-4">
                  {locale === "es"
                    ? "¿Ya eres líder tech? Descubre RecoProgramación® Ontológica"
                    : "Already a tech leader? Discover Ontological ReCode®"}
                </h3>
                <p className="text-lg md:text-xl text-default-700 mb-6 leading-relaxed">
                  {locale === "es"
                    ? "Si ya lideras equipos pero sientes que algo interno te bloquea, o te preguntas quién eres sin el cargo... el coaching ontológico transforma quién ERES cuando lideras, no solo qué HACES."
                    : "If you already lead teams but feel something internal is blocking you, or wonder who you are without the title... ontological coaching transforms who you ARE when you lead, not just what you DO."}
                </p>
                <Link href="/coaching-tecnologico">
                  <Button 
                    color="primary" 
                    size="lg" 
                    className="font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    endContent={<ArrowRight className="w-5 h-5" />}
                  >
                    {locale === "es" 
                      ? "Conocer RecoProgramación® Ontológica" 
                      : "Discover Ontological ReCode®"}
                  </Button>
                </Link>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-primary rounded-3xl flex items-center justify-center shadow-2xl">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
      {/* CTA Final */}
      <section className="mt-24">
        <Card className="bg-primary border-4 border-primary-300 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <CardBody className="p-12 md:p-20 text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-xl">
              <Sparkles className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {locale === "es"
                ? "El Éxito No Es Solo un Sueldo"
                : "Success Is Not Just a Salary"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white/90 mb-8">
              {locale === "es"
                ? "o un Framework"
                : "or a Framework"}
            </h3>
            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-2xl md:text-3xl text-white/95 leading-relaxed mb-6">
                {locale === "es"
                  ? "Es sentirte pleno, seguro, conectado contigo…"
                  : "It's feeling fulfilled, secure, connected with yourself…"}
              </p>
              <p className="text-2xl md:text-3xl text-white font-bold">
                {locale === "es"
                  ? "Y desde ahí, construir lo que sueñas."
                  : "And from there, building what you dream."}
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-10 max-w-3xl mx-auto">
              <p className="text-xl text-white/95">
                {locale === "es"
                  ? "La primera sesión es 100% gratuita. Sin compromiso. Solo tú, yo, y un plan claro para tu siguiente nivel profesional."
                  : "The first session is 100% free. No commitment. Just you, me, and a clear plan for your next professional level."}
              </p>
            </div>
            <Link href="/pricing">
              <Button 
                color="default"
                size="lg" 
                className="bg-white text-primary font-bold text-2xl px-14 py-10 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all"
                endContent={<Rocket className="w-7 h-7" />}
              >
                {locale === "es" ? "Quiero mi Sesión Gratuita" : "I Want My Free Session"}
              </Button>
            </Link>
          </CardBody>
        </Card>
      </section>
      </div>
    </HomeLayout>
  );
}
