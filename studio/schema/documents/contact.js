import { defineField, defineType } from "sanity";
export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 4,
      readOnly: true
    }),
  ],
  preview: {
    select: {
      title: "name",
      createdAt: "_createdAt",
    },
    prepare(selection) {
      const { title, createdAt } = selection;
      return {
        title,
        subtitle: `Created at: ${new Date(createdAt).toLocaleDateString()}`,
      };
    },
  },
});
