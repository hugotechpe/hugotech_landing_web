"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import TestimonioCard from "@/components/cards/TestimonioCard";
import { TESTIMONIOS_LIST } from "@/features/testimonials/enums/testimonios";

// Definir qué testimonios serán "destacados" (más grandes)
const FEATURED_INDICES = [0, 6, 13, 20, 27, 35, 42]; // Distribuidos cada 6-7 testimonios
const ITEMS_PER_PAGE = 12; // Mostrar 12 testimonios por carga

export function TestimoniosListSection() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  
  const hasMore = visibleCount < TESTIMONIOS_LIST.length;
  const visibleTestimonios = TESTIMONIOS_LIST.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, TESTIMONIOS_LIST.length));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="historias"
      aria-label="Testimonios de transformación"
      className="scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-16 md:py-24"
    >
      <div className="container mx-auto max-w-1400 px-6">
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-customgray mb-6 leading-tight">
            {TESTIMONIOS_LIST.length}+ Personas Transformadas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-[1.9] tracking-wide max-w-3xl mx-auto">
            Cada testimonio es una historia real de crecimiento, vulnerabilidad y valentía. 
            Personas tech que se atrevieron a <strong className="text-primary">mirarse dentro</strong> para crecer afuera.
          </p>
        </motion.div>

        {/* Bento Grid: layout asimétrico con cards destacadas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {visibleTestimonios.map((t, idx) => {
            const isFeatured = FEATURED_INDICES.includes(idx);
            
            // Cards destacadas ocupan más espacio en el grid
            const gridSpan = isFeatured 
              ? "md:col-span-8" 
              : "md:col-span-6";

            return (
              <motion.div
                key={idx}
                className={gridSpan}
                variants={fadeIn}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut" 
                }}
                whileHover={{ scale: 1.02 }}
              >
                <TestimonioCard 
                  {...t} 
                  className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Botón "Cargar más" con animación */}
        {hasMore && (
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              color="primary"
              variant="bordered"
              onClick={loadMore}
              className="font-semibold text-lg px-10 py-7 border-2 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
            >
              Ver más historias reales ({TESTIMONIOS_LIST.length - visibleCount} restantes) →
            </Button>
          </motion.div>
        )}

        {/* Mensaje final cuando se muestran todos */}
        {!hasMore && TESTIMONIOS_LIST.length > ITEMS_PER_PAGE && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-primary/10 via-brand/10 to-primary/10 border-2 border-primary/20">
              <CardBody className="p-10 text-center">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-customgray mb-4">
                  Has visto todas las historias
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {TESTIMONIOS_LIST.length} personas que confiaron, crecieron y se transformaron. 
                  <strong className="text-primary block mt-2">¿Quieres ser la próxima historia?</strong>
                </p>
                <Button
                  as="a"
                  href="/#cita"
                  size="lg"
                  className="bg-primary text-white font-bold text-lg px-10 py-7 hover:scale-110 hover:shadow-2xl transition-all duration-300"
                >
                  Agenda tu sesión gratuita 1-a-1
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}