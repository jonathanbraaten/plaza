import { defineField, defineType } from 'sanity';
import { IoMdStar } from 'react-icons/io';

export default defineType({
  name: 'CTAPageBlock',
  type: 'object',
  title: 'CTA seksjon',
  icon: IoMdStar,

  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Hovedtittel for CTA seksjon. (påkrevd)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Sekundærtittel for CTA seksjon. (valgfri)',
    }),

    defineField({
      name: 'linkEmbed',
      type: 'linkEmbed',
      title: 'Navigasjonshåndtering. NB! Fyll ut begge feltene, eller ingen (valgfri)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
      };
    },
  },
});
