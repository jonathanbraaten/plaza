import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'licenseFooterBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'license',
      title: 'License',
      type: 'url',
      description: 'Url for the license information.',
    }),
  ],
})
