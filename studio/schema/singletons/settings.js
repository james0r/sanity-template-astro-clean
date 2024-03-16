import { CogIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

const TITLE = 'Settings'

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'social',
      title: 'Social',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'not-found',
      title: '404',
    }
  ],
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'headerSettings',
      group: 'header',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footerSettings',
      group: 'footer',
    }),
    defineField({
      name: 'social',
      title: 'Social',
      type: 'socialSettings',
      group: 'social',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoSettings',
      group: 'seo',
    }),
    defineField({
      name: 'notFound',
      title: '404',
      type: 'notFoundSettings',
      group: 'not-found',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})