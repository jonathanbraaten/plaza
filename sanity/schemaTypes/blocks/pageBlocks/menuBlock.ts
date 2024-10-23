import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'menuBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Tittel på seksjonen.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative tekst',
          description: 'Alternativ tekst for skjermleser.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'minimalPortableText',
    }),
    defineField({name: 'linkEmbed', type: 'linkEmbed'}),
  ],
})
