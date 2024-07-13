export default {
  name: 'imageWithAlt',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'imageWithAlt',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for the image',
      validation: Rule => Rule.error('Alternative text is required.').required(),
    },
  ]
};