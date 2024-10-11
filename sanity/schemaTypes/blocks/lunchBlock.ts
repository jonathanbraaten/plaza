import { defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'lunchBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'lunchReference',
      type: 'reference',
      to: { type: 'lunch' },
    }),
  ],
});
