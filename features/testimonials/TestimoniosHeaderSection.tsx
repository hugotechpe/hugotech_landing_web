"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { useTranslations } from "next-intl";

export function TestimoniosHeaderSection() {
  const t = useTranslations("Sections.Testimonials.header");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background con parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-[#0d4746] to-[#083635]"
        style={{ y }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>
      </motion.div>

      <motion.div 
        className="container mx-auto max-w-1400 px-6 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Chip color="warning" variant="shadow" size="lg" className="mb-8 text-base md:text-lg px-6 py-2">
              {t("chip")}
            </Chip>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight">
              <span dangerouslySetInnerHTML={{ 
                __html: t.raw("title").replace(
                  /<highlight>(.*?)<\/highlight>/g, 
                  '<span class="text-brand">$1</span>'
                )
              }} />
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 leading-[1.8] tracking-wide max-w-4xl mx-auto font-quote italic">
              {t("description")}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 md:mb-24"
            >
              <Button
                as={Link}
                href="#historias"
                size="lg"
                className="bg-brand text-white font-bold text-base sm:text-lg px-8 py-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                {t("cta.primary")}
              </Button>
              <Button
                as={Link}
                href="/#cita"
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white font-bold text-base sm:text-lg px-8 py-6 hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto"
              >
                {t("cta.secondary")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="text-white/70 text-sm font-medium mb-2">{t("scroll.text")}</div>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-2.5 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}