import { Dish, Dishes } from '@/sanity/lib/types/types';
import DishGrid from './grid/dishGrid';
import React from 'react';
import Wrapper from '@/app/components/wrapper';
/* import MenuBanner from '@/app/components/menuBanner'; */
import { SanityImage } from '@/sanity/lib/types/reusableType';
import { montserrat } from '@/ui/fonts';
import clsx from 'clsx';

export default async function DishPageBlockComponent({ data }: { data: Dishes }) {
  return (
    <section className="flex flex-col gap-10">
      {(data as Dishes).map(
        (
          {
            _key,
            title,
            /*    image, */
            dishes,
          }: {
            _key: string;
            title: string;
            image: SanityImage;
            dishes: unknown;
          },
          index,
        ) => {
          return (
            <section
              id={_key}
              className={clsx('flex flex-col border-b', {
                'border-none': index === data.length - 1,
              })}
              key={_key}
            >
              {/*    <MenuBanner title={title} image={image} /> */}
              <h2
                className={clsx(
                  montserrat.className,
                  'self-center  text-mobile-h2 md:text-desktop-h2',
                )}
              >
                {title}
              </h2>
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
