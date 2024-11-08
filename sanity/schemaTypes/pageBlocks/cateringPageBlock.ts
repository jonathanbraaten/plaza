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
      description: 'Hovedtittel for seksjonen. (valgfri)',
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
      description: 'Boks som viser informasjon/betingelser relatert til catering. (valgfri)',

      type: 'fullPortableText',
    }),
  ],
});
