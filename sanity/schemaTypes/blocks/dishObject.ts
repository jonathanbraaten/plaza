import { defineArrayMember, defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'dishObject',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      description: 'Tittelen på seksjonen som vises på siden. For eksempel: "Lunsj"',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Seksjons bilde.',
      type: 'image',
      description: 'Bilde som vises under teksten på seksjonen.',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternativ tekst',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'dishes',
      title: 'Matrett',
      type: 'array',
      of: [defineArrayMember({ type: 'dish' })],
    }),
  ],
});
