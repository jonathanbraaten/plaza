import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'streetName',
          title: 'Street Name',
          type: 'string',
          description: 'Street or road for the address',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'streetNumber',
          title: 'Street Number',
          type: 'string',
          description: 'House number associated with the address',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
          description: 'Postal code or ZIP code',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'town',
          title: 'Town',
          type: 'string',
          description: 'Name of the town or village',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
              description: 'Name of the day a week',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'hours',
              title: 'Hours',
              type: 'string',
              description: 'Opening hours for the day of a week',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).error('At least one opening hour must be provided'),
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'phone',
          title: 'Telephone',
          type: 'string',
          description: 'Telephone number of the cafe',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          description: 'Email Address of the cafe',
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              description: 'Name of the Platform e.g., Facebook',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'URL of the Platform e.g., facebook.com',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).error('At least one social media link must be provided'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})
