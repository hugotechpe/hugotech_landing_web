import { client } from "./sanity.client";

// Obtener todos los posts
export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image,
        role
      },
      publishedAt,
      readTime,
      featured
    }`
  );
}

// Obtener posts destacados
export async function getFeaturedPosts(limit = 3) {
  return client.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image,
        role
      },
      publishedAt,
      readTime
    }`
  );
}

// Obtener un post por slug
export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image,
        bio,
        role,
        social
      },
      publishedAt,
      body,
      readTime,
      seo
    }`,
    { slug }
  );
}

// Obtener posts por categoría
export async function getPostsByCategory(categorySlug: string) {
  return client.fetch(
    `*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image,
        role
      },
      publishedAt,
      readTime
    }`,
    { categorySlug }
  );
}

// Obtener todas las categorías
export async function getAllCategories() {
  return client.fetch(
    `*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      color,
      "postCount": count(*[_type == "post" && references(^._id)])
    }`
  );
}

// Obtener posts relacionados
export async function getRelatedPosts(currentPostId: string, categories: string[], limit = 3) {
  return client.fetch(
    `*[_type == "post" && _id != $currentPostId && count((categories[]._ref)[@ in $categories]) > 0] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      "categories": categories[]-> {
        _id,
        title,
        slug,
        color
      },
      "author": author-> {
        _id,
        name,
        slug,
        image
      },
      publishedAt,
      readTime
    }`,
    { currentPostId, categories }
  );
}
