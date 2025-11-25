import type { TestimonioCardProps } from "@/components/cards/TestimonioCard";
import { TESTIMONIOS_LIST as TESTIMONIOS_LIST_ES } from "./testimonios-es";
import { TESTIMONIOS_LIST as TESTIMONIOS_LIST_EN } from "./testimonios-en";

// Function to get testimonials list based on locale
export function getTestimoniosList(
  locale: string = "es",
): TestimonioCardProps[] {
  if (locale === "en") {
    return TESTIMONIOS_LIST_EN;
  }
  return TESTIMONIOS_LIST_ES;
}

// Export enum for compatibility
export { TestimonioId } from "./testimonios-es";
