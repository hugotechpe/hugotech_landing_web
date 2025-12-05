import { PortableTextBlock } from "@portabletext/types";

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  color?: string;
  postCount?: number;
}

export interface Author {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  bio?: string;
  role?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  categories: Category[];
  author: Author;
  publishedAt: string;
  body?: PortableTextBlock[];
  featured?: boolean;
  readTime?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}
