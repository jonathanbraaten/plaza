import { defineArrayMember, defineField, defineType } from 'sanity';
import { MdFastfood } from 'react-icons/md';

export default defineType({
  name: 'cateringHandler',
  type: 'object',
  icon: MdFastfood,
  title: 'Catering',
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: 'catering',
      title: 'Matrett',
      type: 'array',
      validation: (Rule) => Rule.required(),
      description: 'Her legger du inn catering. (påkrevd)',
      of: [defineArrayMember({ type: 'cateringDishes' })],
    }),
  ],
  preview: {
    select: {
      title: 'hei',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title ? title : 'Catering',
      };
    },
  },
});
