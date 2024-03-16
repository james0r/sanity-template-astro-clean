import { defineField, defineArrayMember } from 'sanity'

export default defineField({
  name: 'headerSettings',
  title: 'Header',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'headerNavigation',
      title: 'Navigation',
      type: 'reference',
      to: [{ type: 'navigation' }]
    }),
  ],
})