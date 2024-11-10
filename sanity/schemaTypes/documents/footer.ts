import { defineField, defineArrayMember } from 'sanity';
import { IoMdClock, IoMdLocate } from 'react-icons/io';

export default defineField({
  name: 'footer',
  type: 'document',
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: 'openingHours',
      title: 'Åpningstider (påkrevd)',
      type: 'array',
      validation: (Rule) => Rule.required(),
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
      name: 'socialMedia',
      type: 'array',
      title: 'Sosiale medier (påkrevd)',
      validation: (Rule) => Rule.required(),
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
                  { title: 'Facebook', value: 'Facebook' },
                  { title: 'Instagram', value: 'Instagram' },
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
