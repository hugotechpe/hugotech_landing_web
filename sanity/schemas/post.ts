import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Extracto",
      type: "text",
      rows: 3,
      description: "Breve descripción del post (150-160 caracteres para SEO)",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
          description: "Importante para SEO y accesibilidad",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categorías",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de Publicación",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Abrir en nueva pestaña",
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Texto alternativo",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Pie de foto",
            },
          ],
        },
        {
          type: "object",
          name: "youtube",
          title: "YouTube Video",
          fields: [
            {
              name: "url",
              type: "url",
              title: "YouTube URL",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Post Destacado",
      type: "boolean",
      description: "Marcar como post destacado en la página principal",
      initialValue: false,
    }),
    defineField({
      name: "readTime",
      title: "Tiempo de Lectura (minutos)",
      type: "number",
      description: "Estimado de tiempo de lectura",
      validation: (Rule) => Rule.min(1).max(60),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          type: "string",
          title: "Meta Título",
          description: "Título para motores de búsqueda (50-60 caracteres)",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          type: "text",
          title: "Meta Descripción",
          rows: 3,
          description: "Descripción para motores de búsqueda (150-160 caracteres)",
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          type: "array",
          title: "Palabras Clave",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      date: "publishedAt",
    },
    prepare(selection) {
      const { author, date } = selection;

      return {
        ...selection,
        subtitle: author && date ? `${author} - ${new Date(date).toLocaleDateString()}` : "",
      };
    },
  },
  orderings: [
    {
      title: "Fecha de Publicación, Más reciente",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Fecha de Publicación, Más antigua",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "Título, A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
