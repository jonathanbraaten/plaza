import { defineQuery } from 'next-sanity';

/* export const CATERING_DISH_QUERY = defineQuery(`*[_type == 'cateringDishes']{
  _id,
  title,
  allergy,
  description,
  pricePerPerson

}`);
 */
export const CATERING_DISH_QUERY = defineQuery(`

  *[_type == 'cateringDish'].dish[0].catering[]{
    _key,
  _id,
  title,
  allergy,
  pricePerPerson,
  description,
  _type
}
  `);
