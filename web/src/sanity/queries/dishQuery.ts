import { defineQuery } from 'next-sanity';

export const DISH_QUERY = defineQuery(`
 *[_type == 'dishSection'].dish[]{
  _key,
image,
  title,
  dishes
}
  `);
