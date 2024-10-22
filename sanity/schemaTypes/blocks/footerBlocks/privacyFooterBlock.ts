import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'privacyFooterBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'privacy',
      title: 'Privacy',
      type: 'url',
      description: 'Url for the privacy information.',
    }),
  ],
})
