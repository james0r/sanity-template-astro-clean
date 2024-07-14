import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: 'imageContentSplit',
  title: 'Image Content Split',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 1
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 4
    },
    {
      name: 'imageWithAlt',
      title: 'Image',
      type: 'imageWithAlt'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'body',
      media: 'image'
    }
  }
});