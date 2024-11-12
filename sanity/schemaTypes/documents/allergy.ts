import { defineType } from 'sanity';

export default defineType({
  name: 'allergy',
  type: 'array',
  validation: (Rule) => Rule.required(),
  description: 'Trykk på boksene for å legge til allergener.',
  of: [
    {
      type: 'string',
    },
  ],

  options: {
    list: [
      { title: 'Egg', name: 'eggs', value: 'Egg' },
      { title: 'Fisk', name: 'fish', value: 'Fisk' },
      { title: 'Gluten', name: 'gluten', value: 'Gluten' },
      { title: 'Hvete', name: 'hvete', value: 'Hvete' },
      { title: 'Gluten/Hvete', name: 'gluten-wheat', value: 'Gluten/Hvete' },
      { title: 'Melk', name: 'milk', value: 'Melk' },
      { title: 'Nøtter', name: 'nuts', value: 'Nøtter' },
      { title: 'Peanøtt', name: 'peanut', value: 'Peanøtter' },
      { title: 'Selleri', name: 'celery', value: 'Selleri' },
      { title: 'Sennep', name: 'mustard', value: 'Sennep' },
      { title: 'Sesamfrø', name: 'sesame', value: 'Sesamfrø' },
      { title: 'Bløtdyr', name: 'shellfish', value: 'Bløtdyr' },
      { title: 'Soya', name: 'soy', value: 'Soya' },
      { title: 'Sulfitter', name: 'sulfites', value: 'Sulfitter' },
      { title: 'Skalldyr', name: 'crustaceans', value: 'Skalldyr' },
      { title: 'Lupin', name: 'lupin', value: 'Lupin' },
    ],
    layout: 'grid',
  },
});
