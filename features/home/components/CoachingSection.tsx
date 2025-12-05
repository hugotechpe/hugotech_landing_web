"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useMessages } from "next-intl";

import { Link } from "@/i18n/navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const bulletIcons = ["🎯", "💡", "🚀", "🌟", "💪"];

export function CoachingSection() {
  const t = useTranslations("Sections.CCCausa");
  const messages = useMessages() as any;
  const bullets: string[] = messages?.Sections?.CCCausa?.content?.bullets ?? [];

  return (
    <section
      aria-label={t("title")}
      className="scroll-mt-0 bg-gradient-to-b from-primary via-[#0a3d3c] to-primary relative overflow-hidden"
      id="cccausa"
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Columna izquierda: imagen de referencia */}
          <motion.div
            className="relative w-full mx-auto order-2 lg:order-1"
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            <div className="relative">
              {/* Glow effect detrás */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-yellow-400/30 blur-3xl rounded-full" />

              <motion.div
                className="relative z-10"
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  priority
                  alt={t("images.mainAlt")}
                  className="block object-cover rounded-2xl shadow-2xl"
                  height={660}
                  src="/images/image6.png"
                  style={{ width: "100%", height: "auto" }}
                  width={538}
                />

                {/* Badges mejorados con texto traducible */}
                <motion.div
                  className="absolute -right-10 lg:-right-20 bottom-5 md:bottom-20 z-20 hidden sm:block"
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-[280px] border-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-gray-800 leading-relaxed">
                        {t("badges.support")}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute left-0 top-0 md:-left-5 md:-top-0 z-20 hidden sm:block"
                  initial={{ opacity: 0, scale: 0, rotate: 20 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-[280px] border-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-gray-800 leading-relaxed">
                        {t("badges.adoption")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna derecha: contenido SEO semántico */}
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            <motion.div
              className="inline-block bg-brand text-customgray px-5 py-2 rounded-full text-xs md:text-sm font-bold mb-6 uppercase tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              {t("badge")}
            </motion.div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6 leading-tight"
              itemProp="headline"
            >
              {t("title")}
            </h2>
            <p className="text-lg md:text-xl text-brand font-semibold mb-6 whitespace-pre-line">
              {t.rich("subtitle", {
                b: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <div className="space-y-6">
              <p
                className="text-white/90 text-base md:text-lg leading-[1.9] tracking-wide"
                itemProp="description"
              >
                {t.rich("content.p1", {
                  b: (chunk) => (
                    <strong className="font-bold text-white">{chunk}</strong>
                  ),
                })}
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white font-semibold text-base md:text-lg mb-5 leading-relaxed">
                  {t("content.pBold1")}
                </p>

                {/* Bullets mejorados con iconos */}
                <ul className="space-y-4">
                  {bullets.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-brand rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-xl">
                          {bulletIcons[idx % bulletIcons.length]}
                        </span>
                      </div>
                      <span className="text-white/90 text-[15px] leading-[1.9] flex-1">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <p className="text-white/90 text-[15px] md:text-base italic font-quote pl-5 border-l-4 border-brand leading-[2] tracking-wide">
                {t("content.p2")}
              </p>

              {/* Invite mejorado */}
              <div className="bg-gradient-to-r from-brand/20 to-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 border border-brand/30">
                <p className="font-bold text-white text-base md:text-lg mb-2">
                  {t.rich("content.invite.pBold", {
                    b: (chunk) => <span className="text-brand">{chunk}</span>,
                  })}
                </p>
                <p className="text-white/90 text-[15px]">
                  {t("content.invite.p")}
                </p>
              </div>

              {/* CTA prominente */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-bold bg-brand hover:bg-yellow-400 text-customgray rounded-xl shadow-2xl hover:shadow-brand/50 transition-all duration-500 hover:-translate-y-1"
                  href="https://calendly.com/hugotech/mentoria1a1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t("ctas.schedule")}
                </a>
                <Link
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold border border-white text-white hover:bg-white/10 rounded-xl transition-all"
                  href="/coaching-con-causa"
                >
                  {t("ctas.learnMore")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
