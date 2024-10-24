import { defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'featureBlock',
  type: 'object',
  icon: PiLego,
  title: 'Introduksjons seksjon (feature)',
  description: 'hey',
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
      options: {
        hotspot: true,
      },
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
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
});
