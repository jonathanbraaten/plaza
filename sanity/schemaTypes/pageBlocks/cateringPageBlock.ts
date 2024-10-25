import { MdFastfood } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cateringPageBlock',
  type: 'object',
  title: 'Catering seksjon',
  icon: MdFastfood,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Hovedtittel for seksjonen. (påkrevd)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'minimalPortableText',
      title: 'Innhold',
      description: 'CTA tekst for catering. (valgfritt)',
    }),
    defineField({
      name: 'cateringInfo',
      title: 'Informasjonsboks',
      description: 'Boks som viser infromasjon/betingelser relatert til catering. (påkrevd)',
      validation: (Rule) => Rule.required(),
      type: 'fullPortableText',
    }),
  ],
});
