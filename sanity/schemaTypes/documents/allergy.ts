import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'allergy',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
