import { sanityFetch } from '@/sanity/lib/client';
import Header from './components/header';
import Footer from './components/footer';
import { PAGE_QUERY } from '@/sanity/queries/pageQuery';
import { PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import PageHandler from '@/components/pageBlock/home';

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
      <main className="flex flex-col gap-[10rem]">
        <PageHandler data={data} />
      </main>
      <Footer />
    </>
  );
}
