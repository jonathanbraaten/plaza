import clsx from 'clsx';
import Grid from './grid';
import Wrapper from '@/app/components/wrapper';
import styles from './styles.module.css';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/imageUrlBuilder';

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
    <section>
      {data.map(({ _key, title, image, dishes }) => (
        <section key={_key}>
          <div>
            <div className=" z-[2]absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
              <h2 className="text-4xl  self-center">{title}</h2>
            </div>

            <div className="relative">
              {image && (
                <Image
                  className="max-h-[500px] w-full object-cover aspect-auto"
                  src={urlFor(image).url()}
                  alt={image.alt}
                  width={1400}
                  height={1200}
                />
              )}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
          <Wrapper optionalStyle="flex  flex-col gap-[10rem] ">
            <Grid>
              {dishes.map(({ _type, title, dineInPrice, takeAwayPrice, description, allergy }) => (
                <li className={clsx(styles.subgrid, 'border rounded-md p-4  gap-2')} key={_type}>
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
                    <p className=" inline-block">
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
        </section>
      ))}
    </section>
  );
}
