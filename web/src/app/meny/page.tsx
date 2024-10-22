import { sanityFetch } from '@/sanity/lib/client';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuHandler from '@/components/pageBlock/menu';
import { MENU_QUERY } from '@/sanity/queries/menuQuery';
/* import { DISH_QUERY } from '@/sanity/queries/dishQuery';
import Dishes from '@/components/pageBlock/menu/dishesPageBlock';
import { DISH_QUERYResult } from '@/sanity/lib/sanity.types'; */

async function fetchPageData() {
  const data = await sanityFetch({
    query: MENU_QUERY,
    params: { slug: 'meny' },
    revalidate: 0,
    tags: ['page', 'meny'],
  });
  return data;
}

/* async function fetchDishData(): Promise<DISH_QUERYResult> {
  const data = await sanityFetch({
    query: DISH_QUERY,
    revalidate: 0,
    tags: [],
  });
  return data;
} */
export default async function Page() {
  const data = await fetchPageData();
  /*   const dish = await fetchDishData(); */

  return (
    <>
      <Header />
      <main>
        <MenuHandler data={data} />
        {/* TODO FIX THIS TYPE*/}
        {/*       {dish.length !== 0 && <Dishes data={dish} />} */}
      </main>
      <Footer />
    </>
  );
}
