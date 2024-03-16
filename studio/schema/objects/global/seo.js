import { defineField, defineArrayMember } from 'sanity'

export default defineField({
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string'
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text'
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image'
    }),
  ],
})