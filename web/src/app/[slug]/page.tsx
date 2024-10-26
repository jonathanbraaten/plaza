import { sanityFetch } from '@/sanity/lib/client';
import Header from '../components/header';
import Footer from '../components/footer';
import { PAGE_QUERY } from '@/sanity/queries/pageQuery';
import { PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import PageHandler from '@/components/pageBlock/home';
import { notFound } from 'next/navigation';

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
  if (!data) notFound();
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[10rem] hsl(30, 25%, 52%)">
        <PageHandler data={data} />
      </main>
      <Footer />
    </>
  );
}
