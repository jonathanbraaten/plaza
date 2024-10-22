import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'termsOfUseFooterBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'termsOfUse',
      title: 'Terms Of Use',
      type: 'url',
      description: 'Url for terms of use information',
    }),
  ],
})
