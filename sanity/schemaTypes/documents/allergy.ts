import { defineType } from 'sanity';

export default defineType({
  name: 'allergy',
  type: 'array',
  hidden: ({ document }) => !document?.title,

  of: [
    {
      type: 'string',
    },
  ],

  options: {
    list: [
      { title: 'Egg', name: 'eggs', value: 'eggs' },
      { title: 'Fisk', name: 'fish', value: 'fish' },
      { title: 'Gluten', name: 'gluten', value: 'gluten' },
      { title: 'Melk', name: 'milk', value: 'milk' },
      { title: 'Nøtter', name: 'nuts', value: 'nuts' },
      { title: 'Peanøtt', name: 'peanut', value: 'peanut' },
      { title: 'Selleri', name: 'celery', value: 'celery' },
      { title: 'Sennep', name: 'mustard', value: 'mustard' },
      { title: 'Sesamfrø', name: 'sesame', value: 'sesame' },
      { title: 'Bløtdyr', name: 'shellfish', value: 'shellfish' },
      { title: 'Soya', name: 'soy', value: 'soy' },
      { title: 'Sulfitter', name: 'sulfites', value: 'sulfites' },
      { title: 'Skalldyr', name: 'crustaceans', value: 'crustaceans' },
      { title: 'Lupin', name: 'lupin', value: 'lupin' },
    ],
  },
});
