import { sanityFetch } from '@/sanity/lib/client';
import { CATERING_DISH_QUERY } from '@/sanity/queries/cateringDishQuery';
import CateringGrid from './components/grid/cateringGrid';
import Wrapper from '@/app/components/wrapper';
import { CateringDish } from '@/sanity/lib/types/types';
import CateringGridItem from './components/grid/cateringGridItem';
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
  console.log(data);

  return (
    <section className="py-10 md:py-20">
      <Wrapper>
        <CateringGrid>
          {(data as CateringDish[]).map(({ _id, title, allergy, pricePerPerson, description }) => (
            <CateringGridItem
              key={_id}
              _id={_id}
              title={title}
              pricePerPerson={pricePerPerson}
              allergy={allergy}
              description={description}
            />
          ))}
        </CateringGrid>
      </Wrapper>
    </section>
  );
}
