import { sanityFetch } from '@/sanity/lib/client';
import { MENU_SITEMAP_QUERY } from './menuSitemapQuery';
import { PAGE_SITEMAP_QUERY } from './pageSitemapQuery';
import { CATERING_SITEMAP_QUERY } from './cateringSitemapQuery';

const fetchPageSitemap = async () => {
  return await sanityFetch({
    query: PAGE_SITEMAP_QUERY,
    params: { slug: 'heim' },
  });
};

const fetchMenuSitemap = async () => {
  return await sanityFetch({
    query: MENU_SITEMAP_QUERY,
    params: { slug: 'meny' },
  });
};

const fetchCateringSitemap = async () => {
  return await sanityFetch({
    query: CATERING_SITEMAP_QUERY,
    params: { slug: 'catering' },
  });
};

export { fetchPageSitemap, fetchMenuSitemap, fetchCateringSitemap };
