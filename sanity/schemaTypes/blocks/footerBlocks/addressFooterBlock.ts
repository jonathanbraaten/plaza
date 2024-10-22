import {defineField, defineType} from 'sanity'
import {PiLego} from 'react-icons/pi'

export default defineType({
  name: 'addressFooterBlock',
  type: 'object',
  icon: PiLego,
  fields: [
    defineField({
      name: 'streetName',
      title: 'Street Name',
      type: 'string',
      description: 'Street or road for the address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'streetNumber',
      title: 'Street Number',
      type: 'number',
      description: 'House number associated with the address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'postalCode',
      title: 'Postal Code',
      type: 'number',
      description: 'Postal code or ZIP code',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'town',
      title: 'Town/Village',
      type: 'string',
      description: 'Name of the town or village',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
