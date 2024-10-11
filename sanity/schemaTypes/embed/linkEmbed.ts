import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'linkEmbed',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'The label for the button.',
    }),
    defineField({
      name: 'href',
      type: 'url',
      description: 'Point to the url.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
});
