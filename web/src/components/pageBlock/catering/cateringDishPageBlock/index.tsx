import { sanityFetch } from '@/sanity/lib/client';
import { CATERING_DISH_QUERY } from '@/sanity/queries/cateringDishQuery';
import CateringGrid from './components/grid/cateringGrid';
import Wrapper from '@/app/components/wrapper';
import { CateringDish } from '@/sanity/lib/types/types';
async function fetchDishData() {
  const data = await sanityFetch({
    query: CATERING_DISH_QUERY,
    revalidate: 0,
    tags: [],
  });
  return data;
}

export default async function CateringDishPageBlockComponent() {
  const data: unknown = await fetchDishData();
  return (
    <section className="flex flex-col gap-10 my-20">
      <Wrapper>
        <CateringGrid data={data as CateringDish[]} />
      </Wrapper>
    </section>
  );
}
