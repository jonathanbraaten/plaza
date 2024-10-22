import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'socialMediaFooterBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'Facebook link',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Instagram link',
    }),
  ],
})
