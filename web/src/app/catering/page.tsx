import Header from '../components/header';
import Footer from '../components/footer';

import CateringPageHandler from '@/components/pageBlock/catering';
import { sanityFetch } from '@/sanity/lib/client';
import { CATERING_PAGE_QUERY } from '@/sanity/queries/cateringPageQuery';
import { notFound } from 'next/navigation';
import CateringDishPageBlockComponent from '@/components/pageBlock/catering/cateringDishPageBlock';
import { cateringMetaHelper } from '@/utils/metaDataHelpers';
import { uppercaseHelper } from '@/utils/uppercaseHelper';
export async function generateMetadata() {
  const data = await sanityFetch({
    query: CATERING_PAGE_QUERY,
    params: { slug: 'catering' },
  });

  if (!data) {
    return {
      title: 'Kunne ikke finne siden',
      description: 'Siden du leter etter finnes ikke.',
    };
  }

  return {
    title: data?.title
      ? `Plaza Kafe & Spiseri - ${uppercaseHelper(data.title)}`
      : cateringMetaHelper.fallbackTitle,
    description: data?.metaDescription
      ? data.metaDescription
      : cateringMetaHelper.fallbackDescription,
    keywords: [
      'Plaza Kafe & Spieri',
      'Lonevåg',
      'Osterøy',
      'Catering',
      'Konfirmasjon',
      'Arragement',
      'Focaccia',
      'Baguette',
      'Brie',
      'Ost og skinke',
      'Spekeskinke',
      'Kylling',
      'Laks',
      'Eggerøre',
    ],
    openGraph: {
      title: data?.title
        ? `Plaza Kafe & Spiseri - ${uppercaseHelper(data.title)}`
        : cateringMetaHelper.fallbackTitle,
      images: {
        url: '/public/open-graph-plaza-logo.png',
        alt: 'Plaza Kafe & Spiseri logo',
      },
      description: data.metaDescription
        ? data.metaDescription
        : cateringMetaHelper.fallbackDescription,
      type: 'website',
      siteName: 'Plaza Kafe & Spiseri',
      locale: 'nn_NO',
      url: 'https://plazakafe.no',
    },
  };
}

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
