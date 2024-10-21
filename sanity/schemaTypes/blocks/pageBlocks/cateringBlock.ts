import { defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'cateringBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel på seksjonen.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'minimalPortableText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkEmbed',
      title: 'Knappe-lenker',
      type: 'linkEmbed',
      description: 'Legg til URL-en som denne siden skal peke til.',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
