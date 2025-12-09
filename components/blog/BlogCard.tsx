"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Post } from "@/types/sanity";
import { urlFor } from "@/lib/sanity.image";

interface BlogCardProps {
  post: Post;
  compact?: boolean;
  index?: number;
}

export default function BlogCard({
  post,
  compact = false,
  index = 0,
}: BlogCardProps) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(800).height(500).quality(90).url()
    : "/images/blog-placeholder.jpg";

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card
        isPressable
        as={Link}
        className="group h-full w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-2 border-transparent hover:border-primary/30"
        href={`/es/blog/${post.slug.current}`}
      >
        <CardHeader className="p-0 relative overflow-hidden">
          <div className="relative w-full h-64">
            <Image
              fill
              alt={post.mainImage?.alt || post.title}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={imageUrl}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </CardHeader>

        <CardBody className="gap-4 p-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category) => (
              <Chip
                key={category._id}
                className="font-semibold"
                color={
                  category.color === "blue"
                    ? "primary"
                    : category.color === "green"
                      ? "success"
                      : category.color === "purple"
                        ? "secondary"
                        : "warning"
                }
                size="sm"
                variant="flat"
              >
                {category.title}
              </Chip>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-bold leading-normal transition-colors duration-300 group-hover:text-primary text-xl lg:text-2xl min-h-[4rem]">
            {post.title}
          </h3>

          {/* Excerpt */}
          {!compact && (
            <p className="text-default-600 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-default-500">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="text-primary" size={16} />
              <time className="font-medium" dateTime={post.publishedAt}>
                {formattedDate}
              </time>
            </div>
            {post.readTime && (
              <>
                <span className="text-default-300">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="text-success" size={16} />
                  <span className="font-medium">
                    {post.readTime} min lectura
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Read more CTA */}
          <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Leer más</span>
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={16}
            />
          </div>
        </CardBody>

        {/* Author Footer */}
        {!compact && post.author && (
          <CardFooter className="border-t border-default-200 p-4 bg-default-50">
            <div className="flex items-center gap-3">
              {post.author.image && (
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <Image
                    fill
                    alt={post.author.name}
                    className="object-cover"
                    src={urlFor(post.author.image).width(48).height(48).url()}
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm font-bold text-default-900">
                  {post.author.name}
                </p>
                {post.author.role && (
                  <p className="text-xs text-default-500">{post.author.role}</p>
                )}
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
