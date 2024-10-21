import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Forside',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO'},
    {name: 'blocks', title: 'Blocks'},
  ],
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
        defineArrayMember({type: 'banner'}),
        defineArrayMember({type: 'featureBlock'}),
        defineArrayMember({type: 'cateringBlock'}),
        defineArrayMember({type: 'menuBlock'}),
        defineArrayMember({type: 'aboutPageBlock'}),
        defineArrayMember({type: 'CTAPageBlock'}),
        defineArrayMember({type: 'menuPageBlock'}),
      ],

      options: {
        insertMenu: {
          groups: [
            {
              name: 'blocks',
              title: 'Blocks',
              of: [
                'featureBlock',
                'cateringBlock',
                'menuBlock',
                'aboutPageBlock',
                'CTAPageBlock',
                'menuPageBlock',
              ],
            },
          ],
        },
      },
    }),
  ],
})
