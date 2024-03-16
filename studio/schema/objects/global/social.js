import { defineField, defineArrayMember } from 'sanity'

export default defineField({
  name: 'socialSettings',
  title: 'Social Settings',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string'
    }),
  ],
})