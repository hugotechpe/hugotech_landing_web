import Image from "next/image";
import { PortableTextComponents } from "@portabletext/react";

import { urlFor } from "@/lib/sanity.image";

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <figure className="my-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              alt={value.alt || "Imagen del post"}
              className="object-cover"
              fill
              src={urlFor(value).width(1200).url()}
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-default-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    youtube: ({ value }) => {
      const { url } = value;
      const videoId = url?.split("v=")[1]?.split("&")[0];

      if (!videoId) return null;

      return (
        <div className="my-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}`}
            />
          </div>
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-8 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-6 text-2xl font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-4 text-xl font-bold">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary pl-6 italic text-default-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = value.blank ? "noopener noreferrer" : undefined;
      const target = value.blank ? "_blank" : undefined;

      return (
        <a
          href={value.href}
          rel={rel}
          target={target}
          className="text-primary underline hover:text-primary-600"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-default-200 px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
  },
};
