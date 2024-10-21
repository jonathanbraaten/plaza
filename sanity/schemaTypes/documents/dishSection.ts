import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dishSection',
  title: 'Matrett Seksjon',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Tittelen på seksjonen. "Lunsj, Hamburger".',
    }),
    defineField({
      name: 'dishes',
      title: 'Matretter',
      description: '',
      type: 'array',
      of: [{ type: 'dish' }],
    }),
  ],
});
