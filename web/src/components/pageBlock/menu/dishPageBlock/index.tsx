import { Dish, Dishes } from '@/sanity/lib/types/types';
import { DISH_QUERY } from '@/sanity/queries/dishQuery';
import { sanityFetch } from '@/sanity/lib/client';
import DishGrid from './grid/dishGrid';
import React from 'react';
import Wrapper from '@/app/components/wrapper';

async function fetchDishData() {
  const data = await sanityFetch({
    query: DISH_QUERY,
    revalidate: 0,
    tags: [],
  });
  return data;
}

export default async function DishPageBlockComponent() {
  const data: unknown = await fetchDishData();
  return (
    <section className="flex flex-col gap-10 my-10">
      {(data as Dishes).map(
        ({
          _key,
          title,
          /*    image, */
          dishes,
        }: {
          _key: string;
          title: string;
          /*       image: SanityImage; */
          dishes: unknown;
        }) => {
          return (
            <Wrapper key={_key} optionalStyle="flex flex-col gap-5">
              <h2 className="text-mobile-h2 md:text-desktop-h2 text-center">{title}</h2>
              <DishGrid data={dishes as Dish[]} />
            </Wrapper>
          );
        },
      )}
    </section>
  );
}
