import { defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'featureBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'The title for the block.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Alternative text used for screen readers.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'content',
      type: 'minimalPortableText',
    }),
  ],
});
