import { defineArrayMember, defineField, defineType } from 'sanity';
import { MdFastfood } from 'react-icons/md';

export default defineType({
  name: 'dishHandler',
  type: 'object',
  icon: MdFastfood,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      description: 'Tittelen på seksjonen som vises på siden. For eksempel: "Lunsj" (påkrevd).',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      /*   title: 'Banner bilde.', */
      title: 'IKKE LEGG TIL BANNER BILDE',
      type: 'image',
      description: 'IKKE LEGG TIL BANNER FØR BILDER ER FASTSATT',
      /* description: 'Banner bilde som vises på seksjonen. (påkrevd)', */
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternativ tekst',
          description: 'Alternativ tekst for skjermleser. (påkrevd)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'dishes',
      title: 'Matrett',
      type: 'array',
      validation: (Rule) => Rule.required(),
      description: 'Her legger du inn nye matretter som tilhører seksjonen. (påkrevd)',
      of: [defineArrayMember({ type: 'dishes' })],
    }),
  ],
});
