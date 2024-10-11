import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'blocks', title: 'Blocks' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The page title.',
      group: 'seo',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
      description: 'The page slug. Needed for fetching correct data.',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      description: 'Meta description. Used for SEO.',
      group: 'seo',
    }),
    defineField({
      name: 'metaImage',
      type: 'image',
      description: 'Meta image. Used for SEO and social sharing.',
      group: 'seo',
    }),

    defineField({
      name: 'body',
      type: 'array',

      of: [
        defineArrayMember({ type: 'reference', to: [{ type: 'banner' }] }),
        defineArrayMember({ type: 'featureBlock' }),
        defineArrayMember({ type: 'cateringBlock' }),
        defineArrayMember({ type: 'menuBlock' }),
      ],

      options: {
        layout: 'grid',
        insertMenu: {
          groups: [
            {
              name: 'blocks',
              title: 'Blocks',
              of: ['featureBlock', 'cateringBlock', 'menuBlock'],
            },
          ],
        },
      },
    }),
  ],
});
