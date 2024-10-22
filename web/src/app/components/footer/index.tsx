import { PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import FooterComponentBlock from './FooterComponentBlock';
import { sanityFetch } from '@/sanity/lib/client';
import { FOOTER_QUERY } from '@/sanity/queries/footerQuery';

async function fetchPageData(): Promise<PAGE_QUERYResult> {
  const data = await sanityFetch({
    query: FOOTER_QUERY,
    params: { slug: 'hjem' },
    revalidate: 0,
    tags: ['page', 'hjem'],
  });
  return data;
}

export default async function Footer() {
  const data = await fetchPageData();

  return <FooterComponentBlock data={data} />;
}
