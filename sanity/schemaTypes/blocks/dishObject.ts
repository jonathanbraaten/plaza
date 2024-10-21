import { defineArrayMember, defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'dishObject',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'lunchReference',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'dish' } })],
    }),
  ],
});
