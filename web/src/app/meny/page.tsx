import { sanityFetch } from '@/sanity/lib/client';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuHandler from '@/components/pageBlock/menu';
import { MENU_QUERY } from '@/sanity/queries/menuQuery';

import DishPageBlockComponent from '@/components/pageBlock/menu/dishPageBlock';

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

  return (
    <>
      <Header />
      <main>
        <MenuHandler data={data} />
        <DishPageBlockComponent />
      </main>
      <Footer />
    </>
  );
}
