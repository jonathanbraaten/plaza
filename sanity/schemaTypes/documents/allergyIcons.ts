import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'allergyIcons',
  type: 'document',
  fields: [
    defineField({
      name: 'allergyName',
      title: 'Allergen merking. (påkrevd)',
      type: 'string',
      description: 'Navnet på allergenen. "Egg", "Melk", "Gluten".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Allergen ikon. (påkrevd)',
      description: 'Ikon for visuell visning av allergen.',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternativ tekst',
          description: 'Alternativ tekst for skjermleser. (påkrevd)',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
});
