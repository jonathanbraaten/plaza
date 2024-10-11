import { defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'cateringBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'Content',
      type: 'fullPortableText',
    }),
    defineField({
      name: 'linkEmbed',
      type: 'linkEmbed',
    }),
  ],
});
