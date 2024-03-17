import { defineField } from 'sanity';

export default defineField({
  name: 'internalLink',
  title: 'Internal Link',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      to: [
        { type: 'page' }, 
        { type: 'post' }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'reference.title',
      subtitle: 'reference.slug.current',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
});