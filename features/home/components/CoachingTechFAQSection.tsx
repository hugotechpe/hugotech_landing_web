"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { useLocale } from "next-intl";

/**
 * Sección FAQ optimizada para aparecer en Featured Snippets de Google
 * Preguntas específicas sobre "Coaching Tech" para SEO local (Lima/Perú)
 */
export function CoachingTechFAQSection() {
  const locale = useLocale();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0); // Primera abierta por defecto

  // FAQs optimizadas para "¿Qué es...?" queries
  const faqsES = [
    {
      question: "¿Qué es un Technical Coach?",
      answer:
        "Un Technical Coach es un profesional que ayuda a desarrolladores y líderes técnicos a crecer más allá de sus habilidades de programación. Se enfoca en desarrollar liderazgo, comunicación, gestión de carrera y bienestar mental en el contexto tech. A diferencia de un mentor técnico que te enseña código, un coach tech te ayuda a navegar decisiones de carrera, superar el síndrome del impostor y liderar equipos efectivamente.",
    },
    {
      question: "¿Cómo funciona el coaching para programadores?",
      answer:
        "El coaching para programadores consiste en sesiones 1-a-1 (generalmente 60-90 minutos) donde trabajas con un coach especializado en la industria tech. A través de preguntas poderosas y herramientas específicas, identificas tus objetivos profesionales, superas bloqueos mentales y diseñas un plan de acción concreto. No es teoría: cada sesión termina con tareas prácticas que aplicas inmediatamente en tu trabajo.",
    },
    {
      question: "¿Cuál es la diferencia entre mentoría y coaching tech?",
      answer:
        "La mentoría técnica se enfoca en enseñar habilidades específicas (frameworks, arquitectura, code reviews), mientras que el coaching tech trabaja en tu desarrollo como profesional integral: liderazgo, toma de decisiones, gestión de carrera y bienestar. Un mentor te dice 'cómo' hacer las cosas desde su experiencia; un coach te ayuda a descubrir 'tu propio cómo' que funcione para ti. Idealmente, los mejores programas combinan ambos enfoques.",
    },
    {
      question: "¿El coaching tech es para mí si soy senior?",
      answer:
        "¡Absolutamente! Los seniors son quienes más se benefician del coaching tech. Si eres senior o tech lead, probablemente ya dominas lo técnico, pero enfrentas desafíos nuevos: liderar sin autoridad formal, gestionar equipos distribuidos, comunicarte con stakeholders, decidir entre management o IC, o simplemente evitar el burnout mientras escalas. El coaching tech está diseñado precisamente para estas transiciones que las skills técnicas no resuelven.",
    },
  ];

  const faqsEN = [
    {
      question: "What is a Technical Coach?",
      answer:
        "A Technical Coach is a professional who helps developers and technical leaders grow beyond their programming skills. They focus on developing leadership, communication, career management, and mental wellness in the tech context. Unlike a technical mentor who teaches you code, a tech coach helps you navigate career decisions, overcome impostor syndrome, and lead teams effectively.",
    },
    {
      question: "How does coaching for programmers work?",
      answer:
        "Coaching for programmers consists of 1-on-1 sessions (typically 60-90 minutes) where you work with a coach specialized in the tech industry. Through powerful questions and specific tools, you identify your professional goals, overcome mental blocks, and design a concrete action plan. It's not theory: each session ends with practical tasks you apply immediately in your work.",
    },
    {
      question: "What's the difference between mentorship and tech coaching?",
      answer:
        "Technical mentorship focuses on teaching specific skills (frameworks, architecture, code reviews), while tech coaching works on your development as a whole professional: leadership, decision-making, career management, and wellness. A mentor tells you 'how' to do things from their experience; a coach helps you discover 'your own how' that works for you. Ideally, the best programs combine both approaches.",
    },
    {
      question: "Is tech coaching for me if I'm a senior?",
      answer:
        "Absolutely! Seniors benefit the most from tech coaching. If you're a senior or tech lead, you probably already master the technical side, but face new challenges: leading without formal authority, managing distributed teams, communicating with stakeholders, deciding between management or IC, or simply avoiding burnout while scaling. Tech coaching is designed precisely for these transitions that technical skills don't solve.",
    },
  ];

  const faqs = locale === "en" ? faqsEN : faqsES;

  return (
    <section
      aria-label="Preguntas sobre Coaching Tech"
      className="bg-gradient-to-br from-default-50 via-primary-50/20 to-default-50 py-12 md:py-16"
      id="coaching-tech-faq"
    >
      <div className="container mx-auto max-w-screen-lg px-6">
        {/* Header compacto */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {locale === "en"
              ? "Quick Answers About Tech Coaching"
              : "Respuestas rápidas sobre Coaching Tech"}
          </h2>
          <p className="text-default-600 text-sm md:text-base">
            {locale === "en"
              ? "Everything you need to know before your first session"
              : "Todo lo que necesitas saber antes de tu primera sesión"}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Card
                key={index}
                className={`border transition-all duration-200 ${
                  isOpen
                    ? "border-primary shadow-md"
                    : "border-default-200 hover:border-default-300"
                }`}
              >
                <CardBody className="p-4 md:p-5">
                  <button
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-start justify-between gap-3"
                    type="button"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <h3 className="text-base md:text-lg font-semibold text-foreground flex-1">
                      {faq.question}
                    </h3>
                    <span
                      className={`text-primary text-xl transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-default-200">
                      <p className="text-default-700 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* CTA pequeño */}
        <div className="text-center mt-8">
          <p className="text-sm text-default-600 mb-3">
            {locale === "en"
              ? "Still have questions? Let's talk in a free exploratory session"
              : "¿Más preguntas? Hablemos en una sesión exploratoria gratuita"}
          </p>
          <a
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            href="#cita"
          >
            {locale === "en" ? "Schedule now" : "Agendar ahora"} →
          </a>
        </div>
      </div>
    </section>
  );
}
