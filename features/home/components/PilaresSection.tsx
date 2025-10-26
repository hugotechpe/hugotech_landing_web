"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";
import IconBoxCard from "@/components/cards/IconBoxCard";
import { useMessages, useTranslations } from "next-intl";
import { IconComponentMap, IconKey } from "@/features/home/enums/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export function PilaresSection() {
  const t = useTranslations("Sections.Pilares");
  const messages = useMessages() as any;

  const sectionTitle = messages?.Sections?.Pilares?.title ?? "Los 6 pilares de la experiencia HugoTech";
  const items = (messages?.Sections?.Pilares?.items ?? []) as Array<{ title: string; description: string; iconKey?: string }>;

  return (
    <section
      id="pilares"
      aria-label={sectionTitle}
      itemScope
      itemType="https://schema.org/Person"
      className="scroll-mt-0 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-1400 px-6 py-16 md:py-24 relative z-10">
        {/* Encabezado y presentación */}
        <div className="grid grid-cols-1 lg:grid-cols-[63%_37%] items-start gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="mb-12 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block bg-gradient-to-r from-primary to-brand text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold mb-6 uppercase tracking-wider"
              >
                ✨ 6 Pilares Fundamentales
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray leading-tight">
                {sectionTitle}
              </h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              role="list"
            >
              {items.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  variants={fadeInUp} 
                  role="listitem"
                  whileHover={{ 
                    scale: 1.03, 
                    rotateY: 3,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  {/* Badge numérico premium */}
                  <div className="absolute -top-3 -left-3 z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className="w-12 h-12 bg-gradient-to-br from-primary to-brand rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                    >
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </motion.div>
                  </div>

                  <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-primary/30 transition-all shadow-lg hover:shadow-2xl h-full" shadow="lg">
                    <CardBody className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Icono con efecto */}
                        {item.iconKey && IconComponentMap[item.iconKey as IconKey] && (
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/10 to-brand/10 rounded-xl flex items-center justify-center"
                          >
                            {React.createElement(IconComponentMap[item.iconKey as IconKey], {
                              className: "w-8 h-8 text-primary"
                            })}
                          </motion.div>
                        )}
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-customgray mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Imagen de perfil con efectos premium */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative h-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-brand/20 to-purple-500/20 blur-3xl rounded-full transform scale-90" />
              
              {/* Frame decorativo */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary via-brand to-primary rounded-3xl opacity-20" />
                
                <Image
                  src="/images/image5.png"
                  alt="Foto de Hugo Casanova, mentor y coach en tecnología"
                  width={520}
                  height={375}
                  className="relative object-cover w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />

                {/* Badge flotante */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                >
                  <Card className="bg-gradient-to-r from-primary to-brand text-white shadow-2xl" shadow="lg">
                    <CardBody className="px-6 py-3 text-center">
                      <p className="text-sm font-bold">{t("badge")}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
