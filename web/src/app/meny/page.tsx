import { sanityFetch } from '@/sanity/lib/client';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuHandler from '@/components/pageBlock/menu';
import { MENU_QUERY } from '@/sanity/queries/menuQuery';
import DishPageBlockComponent from '@/components/pageBlock/menu/dishPageBlock';
import { notFound } from 'next/navigation';
import { uppercaseHelper } from '@/utils/uppercaseHelper';
import { menuMetaHelper } from '@/utils/metaDataHelpers';

export async function generateMetadata() {
  const data = await sanityFetch({
    query: MENU_QUERY,
    params: { slug: 'meny' },
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
      : menuMetaHelper.fallbackTitle,
    description: data?.metaDescription ? data.metaDescription : menuMetaHelper.fallbackDescription,
    keywords: [
      'Plaza Kafe & Spieri',
      'Lonevåg',
      'Osterøy',
      'Meny',
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
        : menuMetaHelper.fallbackTitle,
      images: {
        url: '/public/open-graph-plaza-logo.png',
        alt: 'Plaza Kafe & Spiseri logo',
      },
      description: data.metaDescription ? data.metaDescription : menuMetaHelper.fallbackDescription,
      type: 'website',
      siteName: 'Plaza Kafe & Spiseri',
      locale: 'nn_NO',
      url: 'https://plazakafe.no',
    },
  };
}

async function fetchPageData() {
  const data = await sanityFetch({
    query: MENU_QUERY,
    params: { slug: 'meny' },
    revalidate: 0,
    tags: ['page', 'meny'],
  });

  return data;
}

export default async function Page() {
  const data = await fetchPageData();
  if (!data) notFound(); //TODO FIX THIS
  return (
    <>
      <Header />
      <main className="bg-secondary flex flex-col">
        <MenuHandler data={data} />
        <DishPageBlockComponent />
      </main>
      <Footer />
    </>
  );
}
