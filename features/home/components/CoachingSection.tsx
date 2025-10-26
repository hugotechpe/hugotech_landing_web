"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useTranslations, useMessages } from "next-intl";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const bulletIcons = ["🎯", "💡", "🚀", "🌟", "💪"];

export function CoachingSection() {
  const t = useTranslations("Sections.CCCausa");
  const messages = useMessages() as any;
  const bullets: string[] = messages?.Sections?.CCCausa?.content?.bullets ?? [];

  return (
    <section
      id="cccausa"
      aria-label={t("title")}
      className="scroll-mt-0 bg-gradient-to-b from-primary via-[#0a3d3c] to-primary relative overflow-hidden"
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Columna izquierda: imagen de referencia */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative w-full mx-auto order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow effect detrás */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-yellow-400/30 blur-3xl rounded-full" />
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <Image
                  src="/images/image6.png"
                  alt={t("images.mainAlt")}
                  width={538}
                  height={660}
                  priority
                  className="block object-cover rounded-2xl shadow-2xl"
                  style={{ width: "100%", height: "auto" }}
                />
                
                {/* Badges mejorados */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -right-10 lg:-right-20 bottom-5 md:bottom-20 z-20"
                >
                  <Image
                    src="/images/image8.png"
                    alt={t("images.badgeRightAlt")}
                    width={300}
                    height={171}
                    className="hidden sm:block shadow-2xl"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: 20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="absolute left-0 top-0 md:-left-5 md:-top-0 z-20"
                >
                  <Image
                    src="/images/image7.png"
                    alt={t("images.badgeLeftAlt")}
                    width={300}
                    height={171}
                    className="hidden sm:block shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna derecha: contenido SEO semántico */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brand text-customgray px-5 py-2 rounded-full text-xs md:text-sm font-bold mb-6 uppercase tracking-wider"
            >
              {t("badge")}
            </motion.div>

            <h2 itemProp="headline" className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              {t("title")}
            </h2>
            <p className="text-lg md:text-xl text-brand font-semibold mb-6">
              {t("subtitle")}
            </p>

            <div className="space-y-6">
              <p itemProp="description" className="text-white/90 text-base md:text-lg leading-[1.9] tracking-wide">
                {t("content.p1")}
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white font-semibold text-base md:text-lg mb-5 leading-relaxed">
                  {t.rich("content.pBold1", {
                    b: (chunk) => <span className="text-brand">{chunk}</span>,
                  })}
                </p>

                {/* Bullets mejorados con iconos */}
                <ul className="space-y-4">
                  {bullets.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-brand rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-xl">{bulletIcons[idx % bulletIcons.length]}</span>
                      </div>
                      <span className="text-white/90 text-[15px] leading-[1.9] flex-1">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <p className="text-white/80 text-[15px] md:text-base italic font-quote pl-5 border-l-4 border-brand leading-[2] tracking-wide">
                {t("content.p2")}
              </p>

              {/* Invite mejorado */}
              <div className="bg-gradient-to-r from-brand/20 to-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-brand/30">
                <p className="font-bold text-white text-base md:text-lg mb-2">
                  {t.rich("content.invite.pBold", { b: (chunk) => <span className="text-brand">{chunk}</span> })}
                </p>
                <p className="text-white/90 text-[15px]">
                  {t("content.invite.p")}
                </p>
              </div>

              {/* CTA prominente */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  as={Link}
                  href="#agenda"
                  size="lg"
                  className="bg-brand hover:bg-yellow-400 text-customgray font-bold shadow-2xl hover:shadow-brand/50 transition-all hover:scale-105"
                >
                  {t("ctas.schedule")}
                </Button>
                <Button
                  as={Link}
                  href="#mepresento"
                  size="lg"
                  variant="bordered"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold"
                >
                  {t("ctas.learnMore")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
