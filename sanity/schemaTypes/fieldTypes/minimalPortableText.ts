import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  name: 'minimalPortableText',
  type: 'array',
  title: 'Content',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    }),
  ],
});
