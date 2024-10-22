import { defineType } from 'sanity';

export default defineType({
  name: 'allergy',
  type: 'array',
  validation: (Rule) => Rule.required(),
  description: 'Check the boxes to add allergies to this dish.',
  of: [
    {
      type: 'string',
    },
  ],

  options: {
    list: [
      { title: 'Egg', name: 'eggs', value: 'egg' },
      { title: 'Fisk', name: 'fish', value: 'fisk' },
      { title: 'Gluten', name: 'gluten', value: 'gluten' },
      { title: 'Melk', name: 'milk', value: 'melk' },
      { title: 'Nøtter', name: 'nuts', value: 'nøtter' },
      { title: 'Peanøtt', name: 'peanut', value: 'peanøtter' },
      { title: 'Selleri', name: 'celery', value: 'seleri' },
      { title: 'Sennep', name: 'mustard', value: 'sennep' },
      { title: 'Sesamfrø', name: 'sesame', value: 'sesamfrø' },
      { title: 'Bløtdyr', name: 'shellfish', value: 'bløtdyr' },
      { title: 'Soya', name: 'soy', value: 'soy' },
      { title: 'Sulfitter', name: 'sulfites', value: 'sulfitter' },
      { title: 'Skalldyr', name: 'crustaceans', value: 'skalldyr' },
      { title: 'Lupin', name: 'lupin', value: 'lupin' },
    ],
    layout: 'grid',
  },
});
