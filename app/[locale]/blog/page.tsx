import { Suspense } from "react";
import { getAllPosts, getAllCategories } from "@/lib/sanity.queries";
import BlogList from "@/components/blog/BlogList";
import { title } from "@/components/primitives";
import HomeLayout from "../HomeLayout";
import { Spinner } from "@heroui/spinner";
import { Chip } from "@heroui/chip";

export const metadata = {
  title: "Blog - Mentoring Tech y Desarrollo Personal | HugoTech",
  description:
    "Reflexiones sobre carrera tech, liderazgo y desarrollo personal. Aprende sobre coaching tech, primer empleo, burnout, síndrome del impostor y crecimiento profesional.",
  keywords: [
    "blog tech",
    "carrera programación",
    "burnout desarrolladores",
    "liderazgo técnico",
    "primer empleo tech",
    "síndrome impostor",
    "crecimiento profesional",
  ],
};

async function BlogContent() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <>
      {posts && posts.length > 0 ? (
        <BlogList initialPosts={posts} categories={categories} />
      ) : (
        <div className="col-span-full text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold mb-2">Próximamente</h3>
            <p className="text-lg text-default-500 mb-6">
              Estamos preparando contenido valioso sobre carrera tech, liderazgo y desarrollo personal.
            </p>
            <Chip color="primary" variant="flat">
              Primer artículo disponible pronto
            </Chip>
          </div>
        </div>
      )}
    </>
  );
}

export default function BlogPage() {
  return (
    <HomeLayout>
      <div className="w-full min-h-screen px-6 md:px-12 lg:px-16 xl:px-24 py-12">
        {/* Container for centered content with max-width */}
        <div className="max-w-screen-2xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <Chip
              className="mb-4"
              color="success"
              variant="flat"
              size="sm"
            >
              ✨ Contenido de Valor
            </Chip>
            <h1 className={title({ class: "mb-4" })}>Blog</h1>
            <p className="text-lg md:text-xl text-default-600 leading-relaxed">
              Reflexiones sobre <strong className="text-primary">carrera tech</strong>, 
              <strong className="text-success"> liderazgo</strong> y 
              <strong className="text-secondary"> desarrollo personal</strong>
            </p>
          </div>

          <Suspense
            fallback={
              <div className="flex justify-center py-20">
                <Spinner size="lg" color="primary" />
              </div>
            }
          >
            <BlogContent />
          </Suspense>
        </div>
      </div>
    </HomeLayout>
  );
}
