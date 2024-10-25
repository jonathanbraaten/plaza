import { sanityFetch } from '@/sanity/lib/client';
import { CATERING_DISH_QUERY } from '@/sanity/queries/cateringDishQuery';
import CateringGrid from './cateringGrid';
import { PortableText } from 'next-sanity';
import { MdGroups } from 'react-icons/md';
import Wrapper from '@/app/components/wrapper';
/* import { CateringPortableText } from '../portableTextComponent';
 */ import clsx from 'clsx';
import styles from './styles.module.css';
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
    <section>
      <Wrapper>
        <CateringGrid>
          {data.map(({ _id, title, allergy, pricePerPerson, description }) => (
            <article
              key={_id}
              /* className="bg-accent/5 p-4 flex flex-col gap-4 " */ className={clsx(
                styles.subgrid,
              )}
            >
              <div>
                <h2 className="text-mobile-h2 md:text-mobile-h2">{title}</h2>
                <div /*  className="pl-4" */>
                  <PortableText value={description} />
                  {/* <CateringPortableText value={description} /> */}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-fill/30 self-start p-2">
                  <p className="flex items-center">
                    <span className="flex items-center gap-2">
                      <MdGroups size={30} />
                      Pris per person:
                    </span>
                    ..........
                    {pricePerPerson}kr
                  </p>
                </div>
              </div>
            </article>
          ))}
        </CateringGrid>
      </Wrapper>
    </section>
  );
}
