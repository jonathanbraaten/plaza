import { sanityFetch } from '@/sanity/lib/client';
import Header from '../components/header';
import Footer from '../components/footer';
import MenuHandler from '@/components/pageBlock/menu/menuPageBlockHandler';
import { MENU_QUERYResult } from '@/sanity/lib/sanity.types';
import { MENU_QUERY } from '@/sanity/queries/menuQuery';

async function fetchPageData(): Promise<MENU_QUERYResult> {
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
      </main>
      <Footer />
    </>
  );
}
