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
  Award
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
        ? "Método Hugotech: Mentoría Tech + IA 2025 para Desarrolladores | Hugo Casanova"
        : "Hugotech Method: Tech Mentoring + AI 2025 for Developers | Hugo Casanova",
    description:
      locale === "es"
        ? "El único método que integra mentoría técnica, coaching profesional e inteligencia artificial para acelerar tu crecimiento como desarrollador o tech lead. 5 pilares probados con +200 desarrolladores en Perú."
        : "The only method that integrates technical mentoring, professional coaching and artificial intelligence to accelerate your growth as a developer or tech lead. 5 proven pillars with +200 developers in Peru.",
    keywords:
      locale === "es"
        ? [
            "método hugotech",
            "mentoría tech perú",
            "coaching para desarrolladores",
            "tech mentor IA",
            "crecimiento desarrollador senior",
            "método tech lead",
            "mentoría personalizada tech",
            "coaching tech lima",
          ]
        : [
            "hugotech method",
            "tech mentoring peru",
            "coaching for developers",
            "AI tech mentor",
            "senior developer growth",
            "tech lead method",
            "personalized tech mentoring",
            "tech coaching lima",
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
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          <Chip color="primary" size="lg" variant="flat">
            {locale === "es" ? "El Puente entre lo Técnico y lo Humano" : "The Bridge Between Technical and Human"}
          </Chip>
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-customgray mb-8 leading-tight">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            {locale === "es"
              ? "Transforma tu Carrera Tech"
              : "Transform Your Tech Career"}
          </span>
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-customgray mb-8">
          {locale === "es"
            ? "Del Estancamiento al Liderazgo con Propósito"
            : "From Stagnation to Leadership with Purpose"}
        </p>
        <div className="max-w-3xl mx-auto mb-8 space-y-3">
          <p className="text-xl md:text-2xl text-default-600">
            {locale === "es"
              ? "¿Llevas años programando, pero sientes que no avanzas?"
              : "Have you been coding for years but feel like you're not moving forward?"}
          </p>
          <p className="text-xl md:text-2xl text-default-600">
            {locale === "es"
              ? "¿Tu éxito técnico te cuesta la salud mental?"
              : "Is your technical success costing you your mental health?"}
          </p>
        </div>
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-warning-100 to-primary-100 px-8 py-4 rounded-2xl mb-10 shadow-lg">
          <Zap className="w-8 h-8 text-warning-600" />
          <p className="text-2xl md:text-3xl font-bold text-customgray">
            {locale === "es"
              ? "No es falta de talento. Es falta de método."
              : "It's not a lack of talent. It's a lack of method."}
          </p>
        </div>
        <Link href="/pricing">
          <Button 
            color="primary" 
            size="lg" 
            className="font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            endContent={<Rocket className="w-5 h-5" />}
          >
            {locale === "es" ? "Agenda tu Sesión Gratuita" : "Schedule Your Free Session"}
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
              ? "La Esencia de HugoTech"
              : "The Essence of HugoTech"}
          </h2>
        </div>
        <Card className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 border-2 border-primary-100 hover:shadow-2xl transition-shadow">
          <CardBody className="p-8 md:p-12">
            <p className="text-xl text-default-700 leading-relaxed mb-8 text-center">
              {locale === "es"
                ? "Somos el único espacio que integra la mentoría técnica, el coaching profesional y la estrategia de IA para acelerar tu carrera. Pero vamos más allá de las herramientas."
                : "We are the only space that integrates technical mentoring, professional coaching and AI strategy to accelerate your career. But we go beyond tools."}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-white/60 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-default-700 font-medium">
                  {locale === "es"
                    ? "Aquí no corregimos: acompañamos. No exigimos: despertamos."
                    : "Here we don't correct: we accompany. We don't demand: we awaken."}
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/60 rounded-xl">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-lg text-default-700 font-medium">
                  {locale === "es"
                    ? "Creemos que la mejor tecnología se construye cuando las personas están bien por dentro."
                    : "We believe the best technology is built when people are well inside."}
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white/60 rounded-xl">
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-success-600" />
                </div>
                <p className="text-lg text-default-700 font-medium">
                  {locale === "es"
                    ? "Lo que más transforma no es el código que aprendes, sino lo que descubres cuando te miras sin máscaras."
                    : "What transforms most is not the code you learn, but what you discover when you look at yourself without masks."}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Por qué nace el método */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-warning-100 rounded-2xl mb-4">
            <Target className="w-8 h-8 text-warning-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-customgray mb-4">
            {locale === "es"
              ? "Este Espacio es Para Ti Si..."
              : "This Space is For You If..."}
          </h2>
          <p className="text-xl text-default-600 max-w-3xl mx-auto">
            {locale === "es"
              ? "Te identificas con alguno de estos dolores que sanamos juntos:"
              : "You identify with any of these challenges we heal together:"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Problema 1 */}
          <Card className="border-l-4 border-l-warning hover:shadow-xl transition-all group">
            <CardBody className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-warning-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-warning-600" />
                </div>
                <h3 className="text-2xl font-bold text-customgray pt-2">
                  {locale === "es"
                    ? "El Agotamiento Silencioso (Burnout)"
                    : "Silent Exhaustion (Burnout)"}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {locale === "es"
                  ? "Trabajas 10+ horas diarias, aprendes frameworks cada mes, pero sientes que pierdes años en modo supervivencia. El burnout no grita, susurra."
                  : "You work 10+ hours daily, learn frameworks every month, but feel like you're losing years in survival mode. Burnout doesn't scream, it whispers."}
              </p>
              <p className="text-lg font-semibold text-warning-600">
                {locale === "es"
                  ? "→ Te enseñamos a crecer sin quemarte, a decir no sin culpa, y a liderar sin sacrificar tu salud mental."
                  : "→ We teach you to grow without burning out, to say no without guilt, and to lead without sacrificing your mental health."}
              </p>
            </CardBody>
          </Card>

          {/* Problema 2 */}
          <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all group">
            <CardBody className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Bot className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-customgray pt-2">
                  {locale === "es"
                    ? "La Ansiedad de la IA (2025)"
                    : "AI Anxiety (2025)"}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {locale === "es"
                  ? "Te sientes amenazado por ChatGPT, GitHub Copilot, Cursor... La IA escribe código más rápido que tú y necesitas una estrategia para no quedar obsoleto."
                  : "You feel threatened by ChatGPT, GitHub Copilot, Cursor... AI writes code faster than you and you need a strategy to stay relevant."}
              </p>
              <p className="text-lg font-semibold text-primary">
                {locale === "es"
                  ? "→ Te posicionamos como el líder humano que la IA no puede reemplazar: el que toma decisiones críticas y resuelve problemas ambiguos."
                  : "→ We position you as the human leader that AI cannot replace: the one who makes critical decisions and solves ambiguous problems."}
              </p>
            </CardBody>
          </Card>

          {/* Problema 3 */}
          <Card className="border-l-4 border-l-secondary hover:shadow-xl transition-all group">
            <CardBody className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-customgray pt-2">
                  {locale === "es"
                    ? "El Síndrome del Impostor"
                    : "Impostor Syndrome"}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {locale === "es"
                  ? 'Llegaste a Senior, pero te preguntas: "¿Merezco este salario?" o "¿Y si descubren que no sé tanto?" Cada nueva tecnología te recuerda lo que no sabes.'
                  : 'You reached Senior, but you wonder: "Do I deserve this salary?" or "What if they find out I don\'t know that much?" Every new technology reminds you what you don\'t know.'}
              </p>
              <p className="text-lg font-semibold text-secondary">
                {locale === "es"
                  ? "→ Te ayudamos a reconocer tu valor real, validar tus logros sin compararte, y liderar con confianza (no con soberbia)."
                  : "→ We help you recognize your real value, validate your achievements without comparing, and lead with confidence (not arrogance)."}
              </p>
            </CardBody>
          </Card>

          {/* Problema 4 */}
          <Card className="border-l-4 border-l-success hover:shadow-xl transition-all group">
            <CardBody className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-success-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-success-600" />
                </div>
                <h3 className="text-2xl font-bold text-customgray pt-2">
                  {locale === "es"
                    ? "La Falta de Claridad (Junior/Career Changer)"
                    : "Lack of Clarity (Junior/Career Changer)"}
                </h3>
              </div>
              <p className="text-lg text-default-700 leading-relaxed mb-4">
                {locale === "es"
                  ? 'Estás iniciando tu camino tech y te sientes perdido. No sabes si "esto es para ti", qué tecnología elegir, o cómo conseguir tu primer empleo.'
                  : 'You\'re starting your tech path and feel lost. You don\'t know if "this is for you", which technology to choose, or how to get your first job.'}
              </p>
              <p className="text-lg font-semibold text-success-600">
                {locale === "es"
                  ? "→ Te damos claridad sobre tu perfil ideal, estrategia de aprendizaje personalizada, y acompañamiento real hasta tu primer empleo."
                  : "→ We give you clarity on your ideal profile, personalized learning strategy, and real guidance until your first job."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* El Camino Contigo (El Proceso) */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-2xl mb-4">
            <Rocket className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-customgray mb-4">
            {locale === "es"
              ? "El Camino Contigo"
              : "The Path With You"}
          </h2>
          <p className="text-xl text-default-600 max-w-3xl mx-auto">
            {locale === "es"
              ? "Un sistema completo de transformación, con sesiones 1-a-1 y seguimiento personalizado:"
              : "A complete transformation system, with 1-on-1 sessions and personalized follow-up:"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardBody className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Conversación Inicial"
                  : "Initial Conversation"}
              </h3>
              <p className="text-default-700 text-sm leading-relaxed">
                {locale === "es"
                  ? "Nos conocemos y exploramos lo que estás viviendo. Sin juicio, sin presión."
                  : "We get to know each other and explore what you're experiencing. No judgment, no pressure."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardBody className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Entrenamiento Humano"
                  : "Human Training"}
              </h3>
              <p className="text-default-700 text-sm leading-relaxed">
                {locale === "es"
                  ? "Fortalecemos tu SER: confianza, comunicación, autoestima y manejo del estrés."
                  : "We strengthen your BEING: confidence, communication, self-esteem and stress management."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardBody className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Camino Técnico"
                  : "Technical Path"}
              </h3>
              <p className="text-default-700 text-sm leading-relaxed">
                {locale === "es"
                  ? "Descubre tu área ideal (backend, frontend, QA) y optimiza tu desempeño."
                  : "Discover your ideal area (backend, frontend, QA) and optimize your performance."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardBody className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Plan de Vuelo"
                  : "Flight Plan"}
              </h3>
              <p className="text-default-700 text-sm leading-relaxed">
                {locale === "es"
                  ? "Definimos metas claras, foco estratégico y la energía para lograrlas sin agotarte."
                  : "We define clear goals, strategic focus and the energy to achieve them without burning out."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardBody className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  5
                </div>
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Integración IA"
                  : "AI Integration"}
              </h3>
              <p className="text-default-700 text-sm leading-relaxed">
                {locale === "es"
                  ? "Te posicionamos como el humano que toma decisiones críticas y lidera problemas ambiguos."
                  : "We position you as the human who makes critical decisions and leads ambiguous problems."}
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
            <CardBody className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  6
                </div>
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-customgray mb-3">
                {locale === "es"
                  ? "Sostenemos Juntos"
                  : "We Sustain Together"}
              </h3>
              <p className="text-default-700 text-sm leading-relaxed">
                {locale === "es"
                  ? "Acompañamiento real con mentorías y coaching certificado. No estás solo."
                  : "Real support with mentoring and certified coaching. You're not alone."}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Desde mi SER (Conexión Personal) */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl mb-4">
            <Heart className="w-8 h-8 text-secondary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-customgray mb-4">
            {locale === "es"
              ? "¿Quién Te Acompaña?"
              : "Who Accompanies You?"}
          </h2>
        </div>
        <Card className="bg-gradient-to-br from-secondary-50/50 to-primary-50/50 border-2 border-secondary-100 hover:shadow-2xl transition-shadow">
          <CardBody className="p-10 md:p-16">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-default-700 leading-relaxed">
              <p className="text-xl">
                {locale === "es"
                  ? "Fui tech. Programé bajo presión. Me frustré. Me comparé. Me perdí."
                  : "I was tech. I coded under pressure. I got frustrated. I compared myself. I got lost."}
              </p>
              <div className="flex items-center gap-3 my-8">
                <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <Sparkles className="w-8 h-8 text-primary" />
                <div className="flex-grow h-0.5 bg-gradient-to-r from-primary via-primary to-transparent" />
              </div>
              <p className="text-2xl font-bold text-primary text-center">
                {locale === "es"
                  ? "Pero también me encontré."
                  : "But I also found myself."}
              </p>
              <div className="flex items-center gap-3 my-8">
                <div className="flex-grow h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <Award className="w-8 h-8 text-secondary" />
                <div className="flex-grow h-0.5 bg-gradient-to-r from-primary via-primary to-transparent" />
              </div>
              <p className="text-xl">
                {locale === "es"
                  ? "Me formé como coach profesional certificado por ICF. En ese viaje descubrí algo clave: no se trata solo de escalar posiciones, se trata de aprender a estar bien contigo mientras lo haces."
                  : "I trained as a professional coach certified by ICF. On that journey I discovered something key: it's not just about climbing positions, it's about learning to be well with yourself while you do it."}
              </p>
              <p className="text-xl">
                {locale === "es"
                  ? "Hoy, desde esa experiencia y con humildad, acompaño a otros a cruzar sus propios puentes. No desde la perfección, sino desde la autenticidad de quien también ha estado en el fondo."
                  : "Today, from that experience and with humility, I accompany others to cross their own bridges. Not from perfection, but from the authenticity of someone who has also been at the bottom."}
              </p>
              <p className="text-2xl font-semibold text-center text-customgray pt-6 border-t-2 border-dashed border-primary-200 mt-8">
                {locale === "es"
                  ? "Este no es un curso. Es un camino humano."
                  : "This is not a course. It's a human journey."}
              </p>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Declaración de Principios (Espacio Seguro) */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-2xl mb-4">
            <CheckCircle2 className="w-8 h-8 text-success-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-customgray mb-4">
            {locale === "es"
              ? "Tu Espacio Seguro"
              : "Your Safe Space"}
          </h2>
          <p className="text-xl text-default-600 max-w-3xl mx-auto">
            {locale === "es"
              ? "Declaración de principios de este espacio:"
              : "Declaration of principles of this space:"}
          </p>
        </div>

        <Card className="bg-gradient-to-br from-success-50/30 to-primary-50/30 border-2 border-success-200 hover:shadow-2xl transition-shadow">
          <CardBody className="p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 bg-white/60 rounded-xl">
                <CheckCircle2 className="w-7 h-7 text-success-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-default-700 font-medium">
                  {locale === "es"
                    ? "Aquí nadie es menos por no saber."
                    : "Here no one is less for not knowing."}
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/60 rounded-xl">
                <CheckCircle2 className="w-7 h-7 text-success-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-default-700 font-medium">
                  {locale === "es"
                    ? "Lo técnico no define tu valor como persona."
                    : "Technical skills don't define your value as a person."}
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/60 rounded-xl">
                <CheckCircle2 className="w-7 h-7 text-success-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-default-700 font-medium">
                  {locale === "es"
                    ? "El proceso es tuyo, yo solo te acompaño."
                    : "The process is yours, I just accompany you."}
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/60 rounded-xl">
                <CheckCircle2 className="w-7 h-7 text-success-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-default-700 font-medium">
                  {locale === "es"
                    ? "Aquí se viene a SER, no a demostrar."
                    : "Here you come to BE, not to prove."}
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl max-w-2xl">
                <Sparkles className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <p className="text-xl text-customgray font-bold">
                  {locale === "es"
                    ? "Puedes venir con miedo, pero no saldrás igual."
                    : "You can come with fear, but you won't leave the same."}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* CTA Final */}
      <section className="mt-24">
        <Card className="bg-gradient-to-br from-primary via-secondary to-primary border-4 border-primary-200 overflow-hidden relative">
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
