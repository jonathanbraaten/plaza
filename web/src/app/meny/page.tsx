export const dynamic = 'force-dynamic';
export const revalidate = 0;
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
import Allergies from '../components/allergies';

export async function generateMetadata() {
  const data = await sanityFetch({
    query: MENU_QUERY,
    revalidate: 3600,
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
  try {
    const data = await sanityFetch({
      query: MENU_QUERY,
      params: { slug: 'meny' },
      revalidate: 60,
      tags: ['page', 'meny'],
    });

    return data;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return null;
  }
}

export default async function Page() {
  try {
    const data = await fetchPageData();

    if (!data) {
      notFound();
    }

    return (
      <>
        <Header />
        <main className="bg-secondary flex flex-col">
          {data && <MenuHandler data={data} />}
          <Allergies />
          <DishPageBlockComponent />
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Error rendering menu page:', error);
    return (
      <>
        <Header />
        <main className="bg-secondary flex flex-col p-4">
          <div className="text-center py-8">
            <h1 className="text-xl font-bold mb-2">Beklager, noe gikk galt</h1>
            <p>Vi kunne ikke laste menyen akkurat nå. Vennligst prøv igjen senere.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
