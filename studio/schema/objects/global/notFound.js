import { defineField, defineArrayMember } from 'sanity'

export default defineField({
  name: 'notFoundSettings',
  title: '404 Settings',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body'
    }),
  ],
})