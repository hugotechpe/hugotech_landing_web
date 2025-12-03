"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export function HabilidadesBlandasSection() {
  const t = useTranslations("Sections.HabilidadesBlandas");

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F0FAF9] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-1400 px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
        >
          <motion.div transition={{ duration: 0.6 }} variants={fadeIn}>
            <Chip
              className="mb-6 bg-primary/10 text-primary font-semibold"
              size="lg"
              variant="flat"
            >
              {t("badge")}
            </Chip>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight"
            transition={{ duration: 0.6, delay: 0.1 }}
            variants={fadeIn}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto mb-4"
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            {t("subtitle")}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeIn}
          >
            {t("intro")}
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12"
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {t.raw("skills").map((skill: any, idx: number) => (
            <motion.div key={idx} variants={fadeIn}>
              <Card
                className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-primary/20 hover:border-primary"
                shadow="md"
              >
                <CardBody className="p-5 flex flex-row items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{skill.icon}</div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                    {skill.text}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote & CTA */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
        >
          <motion.blockquote
            className="text-xl md:text-2xl font-quote italic text-gray-700 mb-8 leading-relaxed"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            &ldquo;{t("quote")}&rdquo;
          </motion.blockquote>

          <motion.div
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <Button
              as={Link}
              className="bg-primary text-white font-bold text-base md:text-lg px-8 py-6 hover:scale-105 hover:shadow-2xl"
              href="/#cita"
              size="lg"
            >
              {t("cta")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
