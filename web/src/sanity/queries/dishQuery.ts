import { defineQuery } from 'next-sanity';

export const DISH_QUERY = defineQuery(`
  *[_type == 'dish']{
    "dishes": dish[]{
      _key,
      title,
      image,
      dishes
    }
  }[0].dishes
`);
