"use client";

import { useState, useMemo } from "react";
import { Chip } from "@heroui/chip";
import { motion, AnimatePresence } from "framer-motion";

import BlogCard from "./BlogCard";

import { Post, Category } from "@/types/sanity";

interface BlogListProps {
  initialPosts: Post[];
  categories: Category[];
}

export default function BlogList({ initialPosts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtrar posts según la categoría seleccionada
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return initialPosts;

    return initialPosts.filter((post) =>
      post.categories.some((cat) => cat._id === selectedCategory),
    );
  }, [initialPosts, selectedCategory]);

  // Agregar contador de posts por categoría
  const categoriesWithCount = useMemo(() => {
    return categories.map((category) => {
      const count = initialPosts.filter((post) =>
        post.categories.some((cat) => cat._id === category._id),
      ).length;

      return { ...category, postCount: count };
    });
  }, [categories, initialPosts]);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Chip
            className="cursor-pointer transition-all font-semibold"
            color="primary"
            size="lg"
            variant={selectedCategory === null ? "solid" : "bordered"}
            onClick={() => setSelectedCategory(null)}
          >
            📚 Todos ({initialPosts.length})
          </Chip>
        </motion.div>

        {categoriesWithCount.map((category) => (
          <motion.div
            key={category._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Chip
              className="cursor-pointer transition-all font-semibold"
              color={
                category.color === "blue"
                  ? "primary"
                  : category.color === "green"
                    ? "success"
                    : category.color === "purple"
                      ? "secondary"
                      : "warning"
              }
              size="lg"
              variant={selectedCategory === category._id ? "solid" : "bordered"}
              onClick={() => setSelectedCategory(category._id)}
            >
              {category.title} ({category.postCount})
            </Chip>
          </motion.div>
        ))}
      </div>

      {/* Posts Grid */}
      <AnimatePresence mode="wait">
        {filteredPosts.length > 0 ? (
          <motion.div
            key={selectedCategory || "all"}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-8 w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPosts.map((post, index) => (
              <BlogCard key={post._id} index={index} post={post} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            animate={{ opacity: 1 }}
            className="col-span-full text-center py-20"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">
              No hay artículos en esta categoría
            </h3>
            <p className="text-default-500">
              Pronto agregaremos contenido sobre este tema
            </p>
            <Chip
              className="mt-4 cursor-pointer"
              color="primary"
              variant="flat"
              onClick={() => setSelectedCategory(null)}
            >
              Ver todos los artículos
            </Chip>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
