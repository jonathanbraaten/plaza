import clsx from 'clsx';
import Grid from './grid';
import Wrapper from '@/app/components/wrapper';
import styles from './styles.module.css';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { IoMdInformationCircleOutline } from 'react-icons/io';

type Props = {
  data: {
    _type: 'lunchBlock';
    title: string | null;
    _key: string;
    dishReference: Array<{
      _id: string;
      _type: 'lunch';
      title: string | null;
      description: string | null;
      dineInPrice: number | null;
      takeawayPrice: number | null;
      allergy: Array<string> | null;
    }> | null;
  };
};

export default function Dishes({ data }: Props) {
  return (
    <section className="mt-10">
      {data.map(({ _key, title, image, dishes }) => (
        <div key={_key}>
          <Wrapper optionalStyle="flex  flex-col gap-4 my-10">
            <h2 className=" text-4xl self-center">{title}</h2>
            <Grid>
              {dishes.map(({ _type, title, dineInPrice, takeAwayPrice, description, allergy }) => (
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
              ))}
            </Grid>
          </Wrapper>
        </div>
      ))}
    </section>
  );
}
