import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import { CalendarDays, Clock } from "lucide-react";
import { PortableText } from "@portabletext/react";

import { getPostBySlug, getRelatedPosts } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import ShareButtons from "@/components/blog/ShareButtons";
import AuthorCard from "@/components/blog/AuthorCard";
import BlogCard from "@/components/blog/BlogCard";
import { components } from "@/components/blog/PortableTextComponents";
import { Category, Post } from "@/types/sanity";
import HomeLayout from "../../HomeLayout";

import { Chip } from "@heroui/chip";

interface PageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  const metaTitle = post.seo?.metaTitle || post.title;
  const metaDescription = post.seo?.metaDescription || post.excerpt;
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seo?.keywords?.join(", "),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Obtener posts relacionados
  const categoryIds = post.categories.map((cat: Category) => cat._id);
  const relatedPosts = await getRelatedPosts(post._id, categoryIds, 3);

  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : "";
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    locale === "es" ? "es-ES" : "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  return (
    <HomeLayout>
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.categories.map((category: Category) => (
            <Chip
              key={category._id}
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

        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          {post.title}
        </h1>

        <p className="mb-6 text-xl text-default-600">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-default-500">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
          {post.readTime && (
            <>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime} min de lectura</span>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {imageUrl && (
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            fill
            priority
            alt={post.mainImage.alt || post.title}
            className="object-cover"
            src={imageUrl}
          />
        </div>
      )}

      {/* Share Buttons */}
      <div className="mb-8">
        <ShareButtons
          description={post.excerpt}
          title={post.title}
          url={`https://hugotech.pe/${locale}/blog/${post.slug.current}`}
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg mx-auto max-w-none dark:prose-invert">
        {post.body && (
          <PortableText components={components} value={post.body} />
        )}
      </div>

      {/* Author */}
      <div className="mt-16">
        <AuthorCard author={post.author} />
      </div>

      {/* Share Buttons Bottom */}
      <div className="mt-12 border-t border-default-200 pt-8">
        <p className="mb-4 text-center text-sm font-semibold text-default-700">
          ¿Te gustó este artículo? Compártelo
        </p>
        <ShareButtons
          description={post.excerpt}
          title={post.title}
          url={`https://hugotech.pe/${locale}/blog/${post.slug.current}`}
        />
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary-600 p-8 text-center text-white shadow-xl md:p-12">
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            ¿Listo para tu transformación tech?
          </h3>
          <p className="mb-8 text-lg text-white/90">
            Primera sesión <strong>100% gratuita</strong>. Sin compromiso, sin presión. 
            Solo una conversación honesta sobre tu carrera y cómo dar tu siguiente paso con propósito.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-primary transition-all hover:scale-105 hover:shadow-2xl"
              href={`/${locale}/#cita`}
            >
              Agenda tu Sesión Gratuita →
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-primary"
              href={`/${locale}/about`}
            >
              Conoce mi Historia
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80">
            ✅ Sin costo • ✅ 45 minutos • ✅ 100% online
          </p>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">Artículos relacionados</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost: Post) => (
              <BlogCard key={relatedPost._id} compact post={relatedPost} />
            ))}
          </div>
        </div>
      )}
    </article>
    </HomeLayout>
  );
}
