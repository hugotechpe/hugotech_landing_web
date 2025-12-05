"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { CalendarDays, Clock } from "lucide-react";
import { Post } from "@/types/sanity";
import { urlFor } from "@/lib/sanity.image";

interface BlogCardProps {
  post: Post;
  compact?: boolean;
}

export default function BlogCard({ post, compact = false }: BlogCardProps) {
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : "";
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card
      as={Link}
      href={`/es/blog/${post.slug.current}`}
      className="group transition-all hover:scale-[1.02] hover:shadow-lg"
      isPressable
    >
      {imageUrl && (
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardHeader>
      )}

      <CardBody className={compact ? "gap-2 p-4" : "gap-3 p-6"}>
        <div className="flex flex-wrap gap-2">
          {post.categories.slice(0, 2).map((category) => (
            <Chip
              key={category._id}
              size="sm"
              color={
                category.color === "blue"
                  ? "primary"
                  : category.color === "green"
                    ? "success"
                    : category.color === "purple"
                      ? "secondary"
                      : "warning"
              }
              variant="flat"
            >
              {category.title}
            </Chip>
          ))}
        </div>

        <h3 className={`font-bold group-hover:text-primary ${compact ? "text-lg" : "text-2xl"}`}>
          {post.title}
        </h3>

        {!compact && <p className="text-default-600">{post.excerpt}</p>}

        <div className="flex flex-wrap items-center gap-3 text-xs text-default-500">
          <div className="flex items-center gap-1">
            <CalendarDays size={14} />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
          {post.readTime && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime} min</span>
              </div>
            </>
          )}
        </div>
      </CardBody>

      {!compact && post.author && (
        <CardFooter className="border-t border-default-200 p-4">
          <div className="flex items-center gap-3">
            {post.author.image && (
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={urlFor(post.author.image).width(40).height(40).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-sm font-semibold">{post.author.name}</p>
              {post.author.role && (
                <p className="text-xs text-default-500">{post.author.role}</p>
              )}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
