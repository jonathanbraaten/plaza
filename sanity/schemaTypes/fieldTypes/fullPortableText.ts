import { defineArrayMember, defineType } from 'sanity';

export default defineType({
  name: 'fullPortableText',
  title: 'Content',
  type: 'array',
  of: [
    defineArrayMember({ type: 'block' }),
    defineArrayMember({
      type: 'image',
    }),
  ],
});
