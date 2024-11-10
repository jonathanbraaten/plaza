import { MdFastfood } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dish',
  type: 'document',
  icon: MdFastfood,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel på dokumentet. Ferdig utfylt (kan ikke forandres).',
      type: 'string',
      hidden: true,
      initialValue: 'Meny',
    }),
    defineField({
      name: 'dishTable',
      title: 'Tabell av matretter',
      type: 'array',

      of: [{ type: 'dishHandler' }],
    }),
  ],
});
