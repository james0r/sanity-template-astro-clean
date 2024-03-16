import { defineField, defineArrayMember } from 'sanity'

export default defineField({
  name: 'footerSettings',
  title: 'Footer',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'text'
    }),
    defineField({
      name: 'copyrightLineText',
      title: 'Copyright Line Text',
      type: 'string'
    }),
  ],
})