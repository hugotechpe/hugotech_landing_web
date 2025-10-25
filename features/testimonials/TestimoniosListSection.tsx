"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
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

  return (
    <section
      id="testimonios"
      aria-label="Testimonios"
      className="scroll-mt-0 bg-white"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        {/* Bento Grid: layout asimétrico con cards destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: (idx % ITEMS_PER_PAGE) * 0.05, // Reset delay en cada carga
                  ease: "easeOut" 
                }}
              >
                <TestimonioCard 
                  {...t} 
                  className="h-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Botón "Cargar más" */}
        {hasMore && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              size="lg"
              color="primary"
              variant="bordered"
              onClick={loadMore}
              className="font-semibold px-8 hover:bg-primary hover:text-white transition-all"
            >
              Cargar más historias ({TESTIMONIOS_LIST.length - visibleCount} restantes)
            </Button>
          </motion.div>
        )}

        {/* Mensaje cuando se muestran todos */}
        {!hasMore && TESTIMONIOS_LIST.length > ITEMS_PER_PAGE && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-600 text-lg">
              ✨ Has visto todas las historias de transformación ({TESTIMONIOS_LIST.length} testimonios)
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}