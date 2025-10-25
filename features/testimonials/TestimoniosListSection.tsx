import React from "react";
import TestimonioCard from "@/components/cards/TestimonioCard";
import { TESTIMONIOS_LIST } from "@/features/testimonials/enums/testimonios";

export function TestimoniosListSection() {
  return (
    <section
      id="testimonios"
      aria-label="Testimonios"
      className="scroll-mt-0 bg-white"
    >
      <div className="container mx-auto max-w-1400 px-6 py-10 md:py-20">
        {/* Masonry layout: 1 columna en mobile, 2 columnas desde md en adelante */}
        <div className="columns-1 md:columns-2 [column-gap:1.5rem]">
          {TESTIMONIOS_LIST.map((t, idx) => (
            <div key={idx} className="break-inside-avoid mb-6">
              <TestimonioCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}