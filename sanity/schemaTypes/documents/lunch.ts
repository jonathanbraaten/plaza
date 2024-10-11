import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'lunch',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'allergy',
      type: 'allergy',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    {
      name: 'dineInPrice',
      type: 'number',
      title: 'Dine-In Price',
    },
    {
      name: 'takeawayPrice',
      type: 'number',
      title: 'Takeaway Price',
    },
  ],
  preview: {
    select: {
      title: 'title',
      dineInPrice: 'dineInPrice',
      takeawayPrice: 'takeawayPrice',
    },
    prepare(selection) {
      const { title, dineInPrice, takeawayPrice } = selection;
      return {
        title: title,
        subtitle: `Dine-In: ${dineInPrice}kr | Takeaway: ${takeawayPrice}kr`,
      };
    },
  },
});
