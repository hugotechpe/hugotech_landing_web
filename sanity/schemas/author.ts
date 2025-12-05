import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Autor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Foto",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Biografía",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "role",
      title: "Rol",
      type: "string",
      placeholder: "Coach Tech Senior, Mentor...",
    }),
    defineField({
      name: "social",
      title: "Redes Sociales",
      type: "object",
      fields: [
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "twitter", type: "url", title: "Twitter/X" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "website", type: "url", title: "Website" },
      ],
    }),
  ],
});
