import { defineArrayMember, defineField, defineType } from 'sanity';

import { IoMdDocument } from 'react-icons/io';
export default defineType({
  name: 'page',
  title: 'Heim',
  type: 'document',
  icon: IoMdDocument,
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'blocks', title: 'Blocks' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Tittelen på siden. (påkrevd)',
      group: 'seo',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
      description: 'Brukes for å hente riktig data. (påkrevd)',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Beskrivelse',
      type: 'text',
      description: 'Meta beskrivelse. Brukes for SEO. (påkrevd)',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaImage',
      title: 'Meta bilde',
      type: 'image',
      description: 'Meta bilde. Brukes for SEO og deling på sosiale medier. (påkrevd)',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({ type: 'banner' }),
        defineArrayMember({ type: 'menuPageBlock' }),
        defineArrayMember({ type: 'CTAPageBlock' }),
        defineArrayMember({ type: 'introPageBlock' }),
      ],

      options: {
        insertMenu: {
          groups: [
            {
              name: 'seksjoner',
              title: 'Seksjoner',
              of: ['banner', 'menuPageBlock', 'ctaPageBlock'],
            },
          ],
        },
      },
    }),
  ],
});
