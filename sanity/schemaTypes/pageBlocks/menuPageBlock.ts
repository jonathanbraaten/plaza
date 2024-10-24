import { defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'menuPageBlock',
  type: 'object',
  title: 'Meny seksjon',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Tittel på seksjonen. (påkrevd)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Bilde på seksjonen. (påkrevd)',

      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative tekst',
          description: 'Alternativ tekst for skjermleser. (påkrevd)',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'description',
      title: 'Innhold',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Tekst for seksjonen. (Påkrevd)',
    }),
    defineField({
      title: 'Navigasjonshåndtering. NB! Fyll ut begge feltene, eller ingen (valgfri)',
      name: 'linkEmbed',
      type: 'linkEmbed',
    }),
  ],
});
