import { defineField, defineArrayMember } from 'sanity';
import { IoMdClock, IoMdLocate } from 'react-icons/io';

export default defineField({
  name: 'footer',
  type: 'document',
  fields: [
    defineField({
      name: 'location',
      title: 'Lokasjon',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'address',
          type: 'object',
          icon: IoMdLocate,
          fields: [
            defineField({
              name: 'place',
              type: 'string',
              title: 'Plassering',
            }),
            defineField({
              name: 'postalCode',
              type: 'string',
            }),
            defineField({
              name: 'streetNumber',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'openingHours',
      title: 'Åpningstider',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'openingHour',
          type: 'object',
          icon: IoMdClock,

          fields: [
            defineField({
              name: 'day',
              type: 'string',
              title: 'Dag',
            }),
            defineField({
              name: 'time',
              type: 'string',
              title: 'Tidspunkt',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Kontakt',
      type: 'object',

      fields: [
        defineField({
          name: 'telephone',
          type: 'string',
          title: 'Telefon',
          validation: (Rule) =>
            Rule.regex(/^\+?[0-9\s-()]{8,}$/).error('Please enter a valid phone number'),
        }),
        defineField({
          name: 'email',
          type: 'email',
          title: 'E-postadresse',
        }),
      ],
    }),

    defineField({
      name: 'socialMedia',
      type: 'array',
      title: 'Sosiale medier',
      of: [
        defineArrayMember({
          name: 'socials',
          type: 'object',

          fields: [
            defineField({
              name: 'socialType',
              title: 'Sosiale medier typer',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'socialLinks',
              title: 'URL til sosialt medium. (påkrevd)',
              validation: (Rule) => Rule.required(),

              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: 'Footer',
      };
    },
  },
});
