import Wrapper from '@/app/components/wrapper';
import { sanityFetch } from '@/sanity/lib/client';
import { Dishes } from '@/sanity/lib/types/types';
import { DISH_QUERY } from '@/sanity/queries/dishQuery';

async function fetchDishData() {
  const data = await sanityFetch({
    query: DISH_QUERY,
    revalidate: 0,
    tags: [],
  });

  return data;
}
export default async function MenuSearch() {
  const data = await fetchDishData();
  if (!Array.isArray(data)) {
    return null;
  }
  return (
    <section>
      <Wrapper optionalStyle="flex gap-5">
        {(data as Dishes).map(({ _key, title }) => (
          <article
            className="px-4 py-1 border rounded-md inline-block hover:cursor-pointer hover:bg-fill"
            key={_key}
          >
            <p>{title}</p>
          </article>
        ))}
      </Wrapper>
    </section>
  );
}
