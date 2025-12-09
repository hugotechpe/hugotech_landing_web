"use client";

import { useState } from "react";
import { Chip } from "@heroui/chip";

import { Category } from "@/types/sanity";

interface CategoryFilterProps {
  categories: Category[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      <Chip
        className="cursor-pointer"
        color="primary"
        variant={selectedCategory === null ? "solid" : "flat"}
        onClick={() => setSelectedCategory(null)}
      >
        Todos
      </Chip>
      {categories.map((category) => (
        <Chip
          key={category._id}
          className="cursor-pointer"
          color={
            category.color === "blue"
              ? "primary"
              : category.color === "green"
                ? "success"
                : category.color === "purple"
                  ? "secondary"
                  : "warning"
          }
          variant={selectedCategory === category._id ? "solid" : "flat"}
          onClick={() => handleCategoryClick(category._id)}
        >
          {category.title} {category.postCount && `(${category.postCount})`}
        </Chip>
      ))}
    </div>
  );
}
