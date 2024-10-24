import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dish',
  title: 'Meny liste',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Matretter',
      type: 'string',
      hidden: true,
      initialValue: 'Meny',
    }),
    defineField({
      name: 'dish',
      title: 'Matretter',
      description: 'Holder dataen av alle matrettene.',
      type: 'array',
      of: [{ type: 'dishHandler' }],
    }),
  ],
});
