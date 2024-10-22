import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'contactFooterBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'telephone',
      title: 'Telephone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
