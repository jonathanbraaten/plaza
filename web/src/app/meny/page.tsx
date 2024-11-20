import { sanityFetch } from '@/sanity/lib/client';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuHandler from '@/components/pageBlock/menu';
import { MENU_QUERY } from '@/sanity/queries/menuQuery';
import DishPageBlockComponent from '@/components/pageBlock/menu/dishPageBlock';
import { notFound } from 'next/navigation';
import { uppercaseHelper } from '@/utils/uppercaseHelper';
import { menuMetaHelper } from '@/utils/metaDataHelpers';
import { metaImageBuilder } from '@/utils/metaImageBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import SearchWrapper from './components/SearchWrapper';
import { DISH_QUERY } from '@/sanity/queries/dishQuery';

export async function generateMetadata() {
  const data = await sanityFetch({
    query: MENU_QUERY,
    revalidate: 86400,
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

    openGraph: {
      title: data?.title
        ? `Plaza Kafe & Spiseri - ${uppercaseHelper(data.title)}`
        : menuMetaHelper.fallbackTitle,
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
      description: data.metaDescription ? data.metaDescription : menuMetaHelper.fallbackDescription,
      type: 'website',
      siteName: 'Plaza Kafe & Spiseri',
      locale: 'nn_NO',
      url: 'https://plazakafe.no/meny',
    },
  };
}

async function fetchPageData() {
  const data = await sanityFetch({
    query: MENU_QUERY,
    params: { slug: 'meny' },
    revalidate: 3600,
    tags: ['page', 'meny'],
  });

  return data;
}
async function fetchDishData() {
  const data = await sanityFetch({
    query: DISH_QUERY,
    revalidate: 0,
    tags: [],
  });

  return data;
}

export default async function Page() {
  const data = await fetchPageData();
  const dishData = await fetchDishData();
  if (!data) {
    notFound();
  }
  return (
    <>
      <Header />
      <main className="bg-secondary flex flex-col">
        {data && <MenuHandler data={data} />}
        <div>
          <div>
            <SearchWrapper data={dishData || []} />
          </div>
          <DishPageBlockComponent data={dishData || []} />
        </div>
      </main>
      <Footer />
    </>
  );
}
