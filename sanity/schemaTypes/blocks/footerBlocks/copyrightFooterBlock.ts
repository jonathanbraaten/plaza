import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'copyrightFooterBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'copyright',
      title: 'Copyright Notice',
      type: 'url',
      description: 'Url for the copyright information.',
    }),
  ],
})
