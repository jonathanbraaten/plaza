import { sanityFetch } from '@/sanity/lib/client';
import Header from './components/header';
import Footer from './components/footer';
import { PAGE_QUERY } from '@/sanity/queries/pageQuery';
import { PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import PageHandler from '@/components/pageBlock/home';
import { notFound } from 'next/navigation';
import { pageMetaHelper } from '@/utils/metaDataHelpers';
import { uppercaseHelper } from '@/utils/uppercaseHelper';
export async function generateMetadata() {
  const data = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: 'heim' },
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
      : pageMetaHelper.fallbackTitle,
    description: data?.metaDescription ? data.metaDescription : pageMetaHelper.fallbackDescription,
    image: data.metaImage,
    keywords: ['Plaza Kafe & Spieri', 'Lonevåg', 'Osterøy', 'Heim', 'Catering'],
    openGraph: {
      title: data?.title
        ? `Plaza Kafe & Spiseri - ${uppercaseHelper(data.title)}`
        : pageMetaHelper.fallbackTitle,
      images: {
        url: '/public/open-graph-plaza-logo.png',
        alt: 'Plaza Kafe & Spiseri logo',
      },
      description: data.metaDescription ? data.metaDescription : pageMetaHelper.fallbackDescription,
      type: 'website',
      siteName: 'Plaza Kafe & Spiseri',
      locale: 'nn_NO',
      url: 'https://plazakafe.no',
    },
  };
}

async function fetchPageData(): Promise<PAGE_QUERYResult> {
  const data = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: 'heim' },
    revalidate: 0,
    tags: ['page', 'heim'],
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
