import { montserrat } from '@/ui/fonts';
import styles from './styles.module.css';
import clsx from 'clsx';
import { CateringPortableText } from '../../../portableTextComponent';
import { MdGroups } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { CateringDish } from '@/sanity/lib/types/types';
export default function CateringGrid({ data }: { data: CateringDish[] }) {
  return (
    <section className={clsx(styles.grid)}>
      {data.map(({ _key, title, pricePerPerson, description, allergy }) => (
        <article key={_key} className={(clsx(styles.subgrid), 'bg-fillFaded/10 p-5 ')}>
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
      ))}
    </section>
  );
}
