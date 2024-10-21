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
      description: 'Tittel for seksjonen.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'minimalPortableText',
      description: 'Generell informasjon av allergener.',
    }),
    defineField({
      name: 'menuAllergy',
      type: 'array',
      of: [defineArrayMember({ type: 'allergyIcons', validation: (Rule) => Rule.required() })],

      options: {
        layout: 'grid',
      },
    }),
  ],
});
