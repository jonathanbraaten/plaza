import { Dish } from '@/sanity/lib/types/types';
import { Dishes } from '@/sanity/lib/types/types';
import { DISH_QUERY } from '@/sanity/queries/dishQuery';
import { sanityFetch } from '@/sanity/lib/client';
import Wrapper from '@/app/components/wrapper';
import Grid from './Grid';
import clsx from 'clsx';
import styles from './styles.module.css';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import React from 'react';
import { SanityImage } from '@/sanity/lib/types/reusableType';
import MenuBanner from '@/app/components/menuBanner';
import { montserrat } from '@/ui/fonts';

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
    <section>
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
            <article className="flex flex-col" key={_key}>
              <MenuBanner title={title} image={image} />
              <div>
                <Wrapper optionalStyle="flex flex-col gap-4 my-10">
                  <Grid>
                    {(dishes as Dish[])?.map(
                      ({ _key, title, dineInPrice, takeAwayPrice, description, allergy }: Dish) => (
                        <li
                          className={clsx(styles.subgrid, ' p-4  gap-2 bg-accent/5  ')}
                          key={_key}
                        >
                          <div className="flex flex-col gap-2">
                            <h3
                              className={clsx(
                                montserrat.className,
                                'text-mobile-h3 md:text-desktop-h3',
                              )}
                            >
                              {title}
                            </h3>
                            <p className="max-w-[55ch]">{description}</p>
                          </div>
                          <div className=" self-start">
                            <p className="flex">
                              <span>Spise inne:</span>
                              ..................
                              <span> {dineInPrice}kr</span>
                            </p>
                            <p className="flex">
                              <span>Ta med:</span> <span>......................</span>
                              <span>{takeAwayPrice}kr</span>
                            </p>
                          </div>

                          <div>
                            <p className=" inline-flex  items-center flex-wrap  py-1 px-2 rounded-md bg-fill/30 ">
                              <IoMdInformationCircleOutline className="mr-1" size={25} />
                              <span className="font-bold mr-2">Inneholder:</span>
                              {allergy?.map((ele, index) => (
                                <span className="mr-1" key={index}>
                                  {ele}
                                  {index < allergy.length - 1 && ','}
                                </span>
                              ))}
                            </p>
                          </div>
                        </li>
                      ),
                    )}
                  </Grid>
                </Wrapper>
              </div>
            </article>
          );
        },
      )}
    </section>
  );
}
