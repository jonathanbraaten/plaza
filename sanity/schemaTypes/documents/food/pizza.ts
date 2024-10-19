import { PiBowlFood } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pizza',
  title: 'Pizza',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Tittelen på matretten.',
    }),
    defineField({
      name: 'allergy',
      type: 'allergy',
      title: 'Allergener',
      description: 'Legg til allergener',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      description: 'Beskrivelse av matretten',
    }),
    {
      name: 'dineInPrice',
      title: 'Spise inne pris',
      description: 'Prisen for å ta med maten hjem.',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    },
    {
      name: 'takeawayPrice',
      title: 'Ta med pris',
      description: 'Prisen for å spise på Plaza Kafe.',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      dineInPrice: 'dineInPrice',
      takeawayPrice: 'takeawayPrice',
    },
    prepare(selection) {
      const { title, dineInPrice, takeawayPrice } = selection;
      return {
        title: title,
        media: PiBowlFood,
        subtitle: `Spise inne: ${dineInPrice}kr | Ta med: ${takeawayPrice}kr`,
      };
    },
  },
});
