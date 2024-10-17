import { sanityFetch } from '@/sanity/lib/client/client';
import Footer from './components/footer';
import Header from './components/header';
import Wrapper from './components/wrapper';
import { PAGE_QUERY } from '@/sanity/queries/pageQuery';
import { PAGE_QUERYResult } from '@/sanity/lib/types/sanity.types';

export async function getData(): Promise<PAGE_QUERYResult> {
  const data = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: 'hjem' },
    revalidate: 0,
    tags: ['page'],
  });

  return data;
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Header />
      <main>
        <Wrapper>hello</Wrapper>
      </main>
      <Footer />
    </>
  );
}
