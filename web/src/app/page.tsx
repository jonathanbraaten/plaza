import { sanityFetch } from '@/sanity/lib/client/client';
import Footer from './components/footer';
import Header from './components/header';
import Wrapper from './components/wrapper';
import { PAGE_QUERY } from '@/sanity/queries/pageQuery';
import { PAGE_QUERYResult } from '@/sanity/lib/types/sanity.types';
import PageHandler from './components/pageHandlers/pageHandler';

async function fetchPageData(): Promise<PAGE_QUERYResult> {
  const data = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: 'hjem' },
    revalidate: 0,
    tags: ['page', 'hjem'],
  });

  return data;
}
export default async function Home() {
  const data = await fetchPageData();
  return (
    <>
      <Header />
      <main>
        <PageHandler data={data} />
        <Wrapper>hello</Wrapper>
      </main>
      <Footer />
    </>
  );
}
