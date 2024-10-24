import { PiBowlFood } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dishes',
  title: 'Dish',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      description: 'Beskrivelse av matretten.',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'dineInPrice',
      title: 'Spise inne pris',
      description: 'Prisen for å ta med maten hjem.',
      type: 'number',
      validation: (Rule) => Rule.positive().required(),
    },
    {
      name: 'takeAwayPrice',
      title: 'Ta med pris',
      description: 'Prisen for å spise på Plaza Kafe.',
      type: 'number',
      validation: (Rule) => Rule.positive().required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      dineInPrice: 'dineInPrice',
      takeAwayPrice: 'takeAwayPrice',
    },
    prepare(selection) {
      const { title, dineInPrice, takeAwayPrice } = selection;
      return {
        title: title,
        media: PiBowlFood,
        subtitle: `Spise inne: ${dineInPrice}kr | Ta med: ${takeAwayPrice}kr`,
      };
    },
  },
});
