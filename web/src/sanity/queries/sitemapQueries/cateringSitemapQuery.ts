import { defineQuery } from 'next-sanity';

export const CATERING_SITEMAP_QUERY = defineQuery(`
  *[_type == 'catering' && slug.current == $slug][0]{
    _updatedAt,
    "slug": slug.current,
  }
  `);
