import Header from '../components/header';
import Footer from '../components/footer';

import CateringPageHandler from '@/components/pageBlock/catering';
import { sanityFetch } from '@/sanity/lib/client';
import { CATERING_PAGE_QUERY } from '@/sanity/queries/cateringPageQuery';
import { notFound } from 'next/navigation';
import CateringDishPageBlockComponent from '@/components/pageBlock/catering/cateringDishPageBlock';
import { cateringMetaHelper } from '@/utils/metaDataHelpers';
import { uppercaseHelper } from '@/utils/uppercaseHelper';
import { metaImageBuilder } from '@/utils/metaImageBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
export async function generateMetadata() {
  const data = await sanityFetch({
    query: CATERING_PAGE_QUERY,
    revalidate: 86400,
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

    openGraph: {
      title: data?.title
        ? `Plaza Kafe & Spiseri - ${uppercaseHelper(data.title)}`
        : cateringMetaHelper.fallbackTitle,
      images: [
        {
          url: data.metaImage
            ? metaImageBuilder(data.metaImage as SanityImageObject)
            : '/plaza-logo-use.png',
          width: 1200,
          height: 630,
          alt: 'Plaza Kafe & Spiseri logo',
        },
      ],
      description: data.metaDescription
        ? data.metaDescription
        : cateringMetaHelper.fallbackDescription,
      type: 'website',
      siteName: 'Plaza Kafe & Spiseri',
      locale: 'nn_NO',
      url: 'https://plazakafe.no/catering',
    },
  };
}

async function fetchPageData() {
  const data = await sanityFetch({
    query: CATERING_PAGE_QUERY,
    params: { slug: 'catering' },
    revalidate: 3600,
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
