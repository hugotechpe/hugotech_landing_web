import { TestimoniosHeaderSection } from "@/features/testimonials/TestimoniosHeaderSection";
import { TestimoniosListSection } from "@/features/testimonials/TestimoniosListSection";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export default function TestimonialPage() {
  return (
    <>
      <Breadcrumb />
      <TestimoniosHeaderSection />
      <TestimoniosListSection />
    </>
  );
}
