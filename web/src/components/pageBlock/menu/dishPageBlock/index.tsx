import { Dish, Dishes } from '@/sanity/lib/types/types';
import DishGrid from './grid/dishGrid';
import React from 'react';
import Wrapper from '@/app/components/wrapper';
import MenuBanner from '@/app/components/menuBanner';
import { SanityImage } from '@/sanity/lib/types/reusableType';

export default async function DishPageBlockComponent({ data }: { data: Dishes }) {
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
            <section id={_key} className="flex flex-col my-20" key={_key}>
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
