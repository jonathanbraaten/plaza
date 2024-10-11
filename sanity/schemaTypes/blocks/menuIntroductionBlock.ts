import { defineField, defineType } from 'sanity';
import { PiLego } from 'react-icons/pi';

export default defineType({
  name: 'menuIntroductionBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'The title for the block.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'content',
      type: 'minimalPortableText',
    }),
  ],
});
