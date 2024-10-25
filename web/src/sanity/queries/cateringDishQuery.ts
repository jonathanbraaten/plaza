import { defineQuery } from 'next-sanity';

export const cateringDishQuery = defineQuery(`*[_type == 'cateringDishes']{
  _id,
  title,
  allergy,
  description,
  pricePerPerson

}`);
