import { defineField, defineType } from "sanity";
export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "This description populates meta-tags on the webpage. Approximately 150 characters is recommended.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: false,
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "body",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "sections",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
    }
  },
});
