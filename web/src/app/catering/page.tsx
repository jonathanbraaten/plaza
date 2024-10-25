import Header from '../components/header';
import Footer from '../components/footer';

import CateringPageHandler from '@/components/pageBlock/catering';
import { sanityFetch } from '@/sanity/lib/client';
import { CATERING_PAGE_QUERY } from '@/sanity/queries/cateringPageQuery';
import { notFound } from 'next/navigation';
import CateringDishPageBlockComponent from '@/components/pageBlock/catering/cateringDishPageBlock';

async function fetchPageData() {
  const data = await sanityFetch({
    query: CATERING_PAGE_QUERY,
    params: { slug: 'catering' },
    revalidate: 0,
    tags: ['page', 'catering'],
  });

  return data;
}
export default async function Page() {
  const data = await fetchPageData();

  if (!data) notFound();
  return (
    <>
      <Header />
      <main className="bg-secondary">
        <CateringPageHandler data={data} />
        <CateringDishPageBlockComponent />
      </main>
      <Footer />
    </>
  );
}
