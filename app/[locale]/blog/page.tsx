import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { getAllPosts, getAllCategories } from "@/lib/sanity.queries";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { title } from "@/components/primitives";
import { Spinner } from "@heroui/spinner";

export const metadata = {
  title: "Blog - HugoTech",
  description:
    "Reflexiones sobre carrera tech, liderazgo y desarrollo personal. Aprende sobre coaching tech, primer empleo, burnout y más.",
};

async function BlogContent() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  return (
    <>
      {categories && categories.length > 0 && (
        <CategoryFilter categories={categories} />
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts && posts.length > 0 ? (
          posts.map((post) => <BlogCard key={post._id} post={post} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-default-500">
              No hay posts publicados aún. Visita{" "}
              <a href="/studio" className="text-primary hover:underline">
                el panel de administración
              </a>{" "}
              para crear tu primer post.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className={title()}>Blog</h1>
        <p className="mt-4 text-lg text-default-600">
          Reflexiones sobre carrera tech, liderazgo y desarrollo personal
        </p>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <Spinner size="lg" />
          </div>
        }
      >
        <BlogContent />
      </Suspense>
    </div>
  );
}
