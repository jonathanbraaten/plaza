import { MdFastfood } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cateringDish',
  type: 'document',
  icon: MdFastfood,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel på dokumentet. Ferdig utfylt (kan ikke forandres).',
      type: 'string',
      hidden: true,
      initialValue: 'Plaza Kafe & Spiseri Catering',
    }),
    defineField({
      name: 'dish',
      title: 'Tabell av catering retter',
      type: 'array',
      of: [{ type: 'cateringHandler' }],
      validation: (Rule) => Rule.required().min(1).max(1),
      description: 'Her legger du inn ulike catering muligheter. MAKS ETT ELEMENT (påkrevd)',
    }),
  ],
});