import { montserrat } from '@/ui/fonts';
import styles from './styles.module.css';
import clsx from 'clsx';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { Dish } from '@/sanity/lib/types/types';
export default function Grid({ data }: { data: Dish[] }) {
  return (
    <ul className={clsx(styles.grid, 'my-20')}>
      {data.map(({ _key, title, takeAwayPrice, dineInPrice, allergy, description }) => (
        <li key={_key} className={clsx(styles.subgrid, 'p-4 gap-2 bg-fillFaded')}>
          <div className="flex flex-col gap-2">
            <h3 className={clsx(montserrat.className, 'text-mobile-h3 md:text-desktop-h3')}>
              {title}
            </h3>
            <p className="max-w-[55ch]">{description}</p>
          </div>
          <div className="self-start">
            <p className="flex">
              <span>Spise inne:</span>
              ..................
              <span>{dineInPrice}kr</span>
            </p>
            <p className="flex">
              <span>Ta med:</span>
              <span>......................</span>
              <span>{takeAwayPrice}kr</span>
            </p>
          </div>
          <div>
            <p className="inline-flex items-center flex-wrap py-1 rounded-md">
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
      ))}
    </ul>
  );
}
