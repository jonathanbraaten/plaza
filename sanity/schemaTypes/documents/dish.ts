import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dish',
  title: 'Matrett Seksjon',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Meny',
      type: 'string',
      hidden: true,
      initialValue: 'Meny',
    }),
    defineField({
      name: 'dish',
      title: 'Matretter',
      description: 'Holder dataen av alle matrettene.',
      type: 'array',
      of: [{ type: 'dishObject' }],
    }),
  ],
});
