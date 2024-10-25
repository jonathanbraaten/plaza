import { MdFastfood } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cateringDishes',
  title: 'Catering',
  type: 'document',
  icon: MdFastfood,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),

      description: 'Tittelen på catering matretten "Konfirmasjon Spesial. (påkrevd)',
    }),
    defineField({
      name: 'allergy',
      type: 'allergy',
      title: 'Allergener',
      description: 'Legg til allergener. (påkrevd)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'fullPortableText',
      description: 'Beskrivelse av matretten.',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'pricePerPerson',
      title: 'Pris per person',
      description: 'Pris for hver person. (påkrevd)',
      type: 'number',
      validation: (Rule) => Rule.positive().required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      pricePerPerson: 'pricePerPerson',
      takeAwayPrice: 'takeAwayPrice',
    },
    prepare(selection) {
      const { title, pricePerPerson } = selection;
      return {
        title: title,
        media: MdFastfood,
        subtitle: `Spise inne: ${pricePerPerson}kr`,
      };
    },
  },
});
