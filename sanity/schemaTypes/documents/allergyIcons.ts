import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'allergyIcons',
  type: 'document',
  fields: [
    defineField({
      name: 'allergyName',
      title: 'Navn på allergen.',
      type: 'string',
      description: 'Navnet på allergenen. "Egg", "Melk"',
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Bilde av allergen.',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternativ tekst',
          description: 'Alternativ tekst for skjermleser.',
        }),
      ],
    }),
  ],
});
