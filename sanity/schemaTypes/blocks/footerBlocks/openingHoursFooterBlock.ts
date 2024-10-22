import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'openingHoursFooterBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'monday',
      title: 'Monday',
      type: 'string',
      description: 'Opening hours on Monday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tuesdayThursday',
      title: 'Tuesday-Thursday',
      type: 'string',
      description: 'Opening hours on Tuesday-Thursday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fridaySaturday',
      title: 'Friday-Saturday',
      type: 'string',
      description: 'Opening hours on Friday-Saturday.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sunday',
      title: 'Sunday',
      type: 'string',
      description: 'Opening hours on Sunday.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
