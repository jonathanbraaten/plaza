import { defineQuery } from 'next-sanity';

export const PAGE_SITEMAP_QUERY = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _updatedAt,
    "slug": slug.current,
  }
  `);
