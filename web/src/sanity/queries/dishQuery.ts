import { defineQuery } from 'next-sanity';

export const DISH_QUERY = defineQuery(`
 *[_type == 'dish'].dish[]{
  _key,
  dishes,
  image,
  title,

}
  `);
