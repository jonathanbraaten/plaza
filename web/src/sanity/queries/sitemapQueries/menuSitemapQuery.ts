import { defineQuery } from 'next-sanity';

export const MENU_SITEMAP_QUERY = defineQuery(`
  *[_type == 'menu' && slug.current == $slug][0]{
    _updatedAt,
    "slug": slug.current,
  }
  `);
