import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'menu',
  title: 'Meny',
  type: 'document',
  groups: [{ name: 'seo', title: 'SEO' }],
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Tittelen på siden.',
      group: 'seo',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
      description: 'Brukes for å hente riktig data.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Beskrivelse',
      type: 'text',
      description: 'Meta beskrivelse. Brukes for SEO.',
      group: 'seo',
    }),
    defineField({
      name: 'metaImage',
      title: 'Meta bilde',
      type: 'image',
      description: 'Meta bilde. Brukes for SEO og deling på sosiale medier.',
      group: 'seo',
    }),
    defineField({
      name: 'body',
      type: 'array',

      of: [
        defineArrayMember({
          title: 'Banner bilde',
          type: 'banner',
        }),
        defineArrayMember({
          title: 'Informasjon om allergener',
          type: 'allergyBlock',
        }),
      ],
      options: {
        insertMenu: {
          groups: [
            {
              name: 'seksjoner',
              title: 'Seksjoner',
              of: ['banner', 'allergyBlock'],
            },
          ],
        },
      },
    }),
  ],
});
