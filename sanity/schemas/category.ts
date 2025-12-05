import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Categoría",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          { title: "Azul", value: "blue" },
          { title: "Verde", value: "green" },
          { title: "Morado", value: "purple" },
          { title: "Naranja", value: "orange" },
          { title: "Rojo", value: "red" },
          { title: "Rosa", value: "pink" },
        ],
      },
    }),
  ],
});
