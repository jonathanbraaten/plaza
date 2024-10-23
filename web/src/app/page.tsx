import PageHandler from '@/components/pageBlock/home';
import { sanityFetch } from '@/sanity/lib/client';
import { FOOTER_QUERYResult, PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import { FOOTER_QUERY } from '@/sanity/queries/footerQuery';
import { PAGE_QUERY } from '@/sanity/queries/pageQuery';
import Footer from './components/footer';
import Header from './components/header';

async function fetchPageData(): Promise<PAGE_QUERYResult> {
  const data = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: 'hjem' },
    revalidate: 0,
    tags: ['page', 'hjem'],
  });

  return data;
}

async function fetchFooterData(): Promise<FOOTER_QUERYResult> {
  const data = await sanityFetch({
    query: FOOTER_QUERY,
  });

  return data;
}
export default async function Home() {
  const data = await fetchPageData();
  const footer_data = await fetchFooterData();
  return (
    <>
      <Header />
      <main>
        <PageHandler data={data} />
      </main>
      <Footer data={footer_data} />
    </>
  );
}
