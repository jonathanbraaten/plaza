import { sanityFetch } from '@/sanity/lib/client';
import { CATERING_SITEMAP_QUERY } from '@/sanity/queries/sitemapQueries/cateringSitemapQuery';
import { MENU_SITEMAP_QUERY } from '@/sanity/queries/sitemapQueries/menuSitemapQuery';
import { PAGE_SITEMAP_QUERY } from '@/sanity/queries/sitemapQueries/pageSitemapQuery';
import { MetadataRoute } from 'next';

type SanityPage = {
  _updatedAt: string;
  slug: string;
};
type StaticPage = {
  url: string;
  priority: number;
}[];

const staticPages: StaticPage = [
  {
    url: '/kontakt',
    priority: 0.7,
  },
  {
    url: '/om-oss',
    priority: 0.5,
  },
];

const fetchPageSitemap = async () => {
  try {
    const data = await sanityFetch({
      query: PAGE_SITEMAP_QUERY,
      params: { slug: 'heim' },
    });
    return data ? [data] : [];
  } catch (error) {
    console.error('Error fetching page sitemap:', error);
    return [];
  }
};

const fetchMenuSitemap = async () => {
  try {
    const data = await sanityFetch({
      query: MENU_SITEMAP_QUERY,
      params: { slug: 'meny' },
    });
    return data ? [data] : [];
  } catch (error) {
    console.error('Error fetching menu sitemap:', error);
    return [];
  }
};

const fetchCateringSitemap = async () => {
  try {
    const data = await sanityFetch({
      query: CATERING_SITEMAP_QUERY,
      params: { slug: 'catering' },
    });
    return data ? [data] : [];
  } catch (error) {
    console.error('Error fetching catering sitemap:', error);
    return [];
  }
};

const getPriority = (slug: string): number =>
  ({
    heim: 1,
    meny: 0.9,
    catering: 0.8,
  })[slug] || 0.1;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [page, menus, catering] = await Promise.all([
    fetchPageSitemap(),
    fetchMenuSitemap(),
    fetchCateringSitemap(),
  ]);

  const allPages = [...page, ...menus, ...catering].filter(
    (page): page is SanityPage =>
      !!page && typeof page._updatedAt === 'string' && typeof page.slug === 'string',
  );

  /*  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'; */
  const domain = 'http://localhost:3000';

  const dynamicPages = allPages.map(({ _updatedAt, slug }) => ({
    url: `${domain}/${slug}`,
    lastModified: new Date(_updatedAt),
    changeFrequency: 'weekly' as const,
    priority: getPriority(slug),
  }));

  const staticEntries = staticPages.map(({ url, priority }) => ({
    url: `${domain}${url ? `/${url}` : ''}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }));

  return [...staticEntries, ...dynamicPages];
}
