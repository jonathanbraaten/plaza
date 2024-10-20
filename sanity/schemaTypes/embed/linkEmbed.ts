import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'linkEmbed',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Tekst',
      type: 'string',
      description: 'Teksten på knappen.',
    }),
    defineField({
      name: 'href',
      title: 'Lenke',
      type: 'url',
      description: 'Legg til en URL.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
});
