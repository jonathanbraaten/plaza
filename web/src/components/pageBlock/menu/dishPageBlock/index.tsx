import { Dish } from '@/sanity/lib/sanity.types';
import { DISH_QUERY } from '@/sanity/queries/dishQuery';
import { sanityFetch } from '@/sanity/lib/client';
import { Dishes } from '@/sanity/lib/types/types';
import Wrapper from '@/app/components/wrapper';
import Grid from './Grid';
import clsx from 'clsx';
import styles from './styles.module.css';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import React from 'react';
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
        ({ _key, title, dishes }: { _key: string; title: string; dishes: unknown }) => {
          return (
            <article className="flex flex-col" key={_key}>
              <h2 className={clsx(montserrat.className, 'self-center')}>{title}</h2>
              <div>
                <Wrapper optionalStyle="flex flex-col gap-4 my-10">
                  <Grid>
                    {(dishes as Dish[])?.map(
                      ({
                        _type,
                        title,
                        dineInPrice,
                        takeAwayPrice,
                        description,
                        allergy,
                      }: Dish) => (
                        <li
                          className={clsx(styles.subgrid, 'rounded-md p-4  gap-2 bg-slate-50/40')}
                          key={_type}
                        >
                          <div className="flex flex-col gap-2">
                            <p>{title}</p>
                            <p className="max-w-[55ch]">{description}</p>
                          </div>
                          <div className=" self-start">
                            <p className="flex">
                              <span>Spise inne:</span>
                              ..................
                              <span> {dineInPrice}kr</span>
                            </p>
                            <p className="flex">
                              <span>Ta med:</span> <span>.......................</span>
                              <span>{takeAwayPrice}kr</span>
                            </p>
                          </div>

                          <div>
                            <p className=" inline-flex items-center gap-2 py-1 px-2 rounded-md bg-slate-200/40 ">
                              <IoMdInformationCircleOutline size={22} />
                              <span className="font-bold">Allergener:</span>
                              {allergy?.map((ele, index) => (
                                <span key={index}>
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
