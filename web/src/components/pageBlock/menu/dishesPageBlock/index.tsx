import clsx from 'clsx';
import Grid from './grid';
import Wrapper from '@/app/components/wrapper';
import styles from './styles.module.css';

import { IoMdInformationCircleOutline } from 'react-icons/io';
import { DISH_QUERYResult, internalGroqTypeReferenceTo } from '@/sanity/lib/sanity.types';

import { SanityImageObject } from '@sanity/image-url/lib/types/types';

type Props = {
  data: DISH_QUERYResult;
};

export default function Dishes({ data }: Props) {
  return (
    <section className="mt-10">
      {data.map(
        ({
          _key,
          title,
          image,
          dishes,
        }: {
          _key: string;
          title: string;
          image: SanityImageObject;
          dishes: Dish[];
        }) => (
          <div key={_key}>
            <Wrapper optionalStyle="flex  flex-col gap-4 my-10">
              <h2 className=" text-4xl self-center">{title}</h2>
              <Grid>
                {dishes?.map(
                  ({ _type, title, dineInPrice, takeAwayPrice, description, allergy }: Dish) => (
                    <li className={clsx(styles.subgrid, 'rounded-md p-4  gap-2')} key={_type}>
                      <div className="flex flex-col gap-2">
                        <p className="font-bold">{title}</p>
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
                        <p className=" inline-flex items-center gap-2 py-1 px-2 rounded-md bg-[#E5F1FA] ">
                          <IoMdInformationCircleOutline size={22} />
                          <span className="font-medium">Allergener:</span> {''}
                          {allergy?.map((ele, index) => (
                            <span key={index}>
                              {ele}
                              {index < allergy.length - 1 && ', '}
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
        ),
      )}
    </section>
  );
}
