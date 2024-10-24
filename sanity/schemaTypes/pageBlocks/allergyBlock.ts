import { defineArrayMember, defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'allergyBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Hovedtittel for seksjonen. (påkrevd)',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'minimalPortableText',
      description: 'Informasjon. (valgfri)',
    }),
    defineField({
      name: 'menuAllergy',
      title: 'Allergener',
      type: 'array',
      description: 'Array av allergener med ikon og navn. (14 påkrevd)',
      of: [
        defineArrayMember({
          type: 'allergyIcons',
          validation: (Rule) => Rule.required(),
        }),
      ],

      options: {
        layout: 'list',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },

    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
});
