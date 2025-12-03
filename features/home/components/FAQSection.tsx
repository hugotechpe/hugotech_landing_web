"use client";

import React from "react";
import { Link } from "@heroui/link";
import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";

export function FAQSection() {
  const t = useTranslations("Sections.FAQ");
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const scrollToAgenda = (e: React.MouseEvent) => {
    e.preventDefault();
    const agendaSection = document.getElementById("cita");
    if (agendaSection) {
      agendaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToDonacion = (e: React.MouseEvent) => {
    e.preventDefault();
    const donacionSection = document.getElementById("porquegratuito");
    if (donacionSection) {
      donacionSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Leer las preguntas desde las traducciones
  const questions = Array.from({ length: 5 }, (_, i) => ({
    question: t(`questions.${i}.question`),
    answer: t.raw(`questions.${i}.answer`), // Usar .raw para obtener el string sin procesar
  }));

  return (
    <section
      aria-label={t("title")}
      className="scroll-mt-20 bg-default-50"
      id="faq"
    >
      <div className="container mx-auto max-w-screen-xl px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {questions.map((faq, index) => (
            <Card
              key={index}
              className="border border-default-200 hover:border-primary transition-colors"
            >
              <CardBody className="p-6">
                <div
                  className="flex items-start justify-between gap-4 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenIndex(openIndex === index ? null : index);
                    }
                  }}
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-3">
                      <span className="text-primary text-2xl">❓</span>
                      {faq.question}
                    </h3>
                    {openIndex === index && (
                      <div className="text-default-600 leading-relaxed mt-4 pl-11">
                        {faq.answer.includes("<link>") ? (
                          <p>
                            {faq.answer.split("<link>")[0]}
                            <Link
                              className="text-primary font-semibold hover:underline cursor-pointer"
                              onClick={scrollToDonacion}
                            >
                              {faq.answer.split("<link>")[1].split("</link>")[0]}
                            </Link>
                            {faq.answer.split("</link>")[1]}
                          </p>
                        ) : (
                          <p>{faq.answer}</p>
                        )}
                      </div>
                    )}
                  </div>
                  <span
                    aria-label={
                      openIndex === index ? "Cerrar respuesta" : "Ver respuesta"
                    }
                    className="text-primary text-2xl font-bold flex-shrink-0"
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* CTA al final */}
        <div className="text-center mt-12">
          <p className="text-default-600 text-lg mb-4">
            ¿Tienes más preguntas? Hablemos en tu sesión gratuita.
          </p>
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
            onClick={scrollToAgenda}
          >
            Reservar mi Sesión Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
