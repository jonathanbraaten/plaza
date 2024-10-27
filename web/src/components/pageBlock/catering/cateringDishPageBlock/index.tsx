import { sanityFetch } from '@/sanity/lib/client';
import { CATERING_DISH_QUERY } from '@/sanity/queries/cateringDishQuery';
import CateringGrid from './cateringGrid';
import { MdGroups } from 'react-icons/md';
import Wrapper from '@/app/components/wrapper';
import clsx from 'clsx';
import styles from './styles.module.css';
import { CateringPortableText } from '../portableTextComponent';
import { CateringDish } from '@/sanity/lib/types/types';
import { Allergy, FullPortableText } from '@/sanity/lib/sanity.types';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { montserrat } from '@/ui/fonts';
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
    <section className="py-10 md:py-20">
      <Wrapper>
        <CateringGrid>
          {(data as CateringDish[]).map(
            ({
              _id,
              title,
              allergy,
              pricePerPerson,
              description,
            }: {
              _id: string;
              title: string;
              allergy: Allergy;
              pricePerPerson: number;
              description: FullPortableText;
            }) => (
              <article key={_id} className={(clsx(styles.subgrid), 'bg-fillFaded/10 p-5 ')}>
                <div className="flex flex-col gap-2 mb-4 ">
                  <h2 className={clsx(montserrat.className, 'text-mobile-h3 md:text-mobile-h3')}>
                    {title}
                  </h2>
                  <div className="max-w-[75ch]">
                    <CateringPortableText value={description} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1 self-start ">
                    <p className=" inline-flex  items-center flex-wrap  py-1 rounded-md">
                      <span className="flex items-center gap-2">
                        <MdGroups size={25} />
                        <span className="font-bold"> Pris per person:</span>
                      </span>
                      ..........
                      {pricePerPerson}kr
                    </p>
                    <p className=" inline-flex  items-center flex-wrap  py-1  rounded-md  ">
                      <span className="flex items-center gap-1 mr-1">
                        <IoMdInformationCircleOutline className="mr-1" size={25} />
                        <span className="font-bold"> Inneholder:</span>
                      </span>
                      {allergy.map((ele, index) => (
                        <span className="mr-1" key={index}>
                          {ele}
                          {index < allergy.length - 1 && ','}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </article>
            ),
          )}
        </CateringGrid>
      </Wrapper>
    </section>
  );
}
