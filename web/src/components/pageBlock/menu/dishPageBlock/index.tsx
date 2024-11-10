import { Dish, Dishes } from '@/sanity/lib/types/types';
import { DISH_QUERY } from '@/sanity/queries/dishQuery';
import { sanityFetch } from '@/sanity/lib/client';
import DishGrid from './grid/dishGrid';
import React from 'react';
import Wrapper from '@/app/components/wrapper';
import MenuBanner from '@/app/components/menuBanner';
import { SanityImage } from '@/sanity/lib/types/reusableType';

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
          image,
          dishes,
        }: {
          _key: string;
          title: string;
          image: SanityImage;
          dishes: unknown;
        }) => {
          return (
            <section className="flex flex-col my-20" key={_key}>
              <MenuBanner title={title} image={image} />
              <Wrapper key={_key} optionalStyle="flex flex-col">
                <DishGrid data={dishes as Dish[]} />
              </Wrapper>
            </section>
          );
        },
      )}
    </section>
  );
}
