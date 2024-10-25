import { defineQuery } from 'next-sanity';

export const CATERING_DISH_QUERY = defineQuery(`*[_type == 'cateringDishes']{
  _id,
  title,
  allergy,
  description,
  pricePerPerson

}`);
