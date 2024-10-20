import { defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'featureBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel.',
      type: 'string',
      description: 'Tittelen på seksjonen.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative tekst',
          description: 'Alternativ tekst for skjermlesere..',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'minimalPortableText',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
