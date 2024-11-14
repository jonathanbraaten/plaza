import clsx from 'clsx';
import styles from './style.module.css';
import Image from 'next/image';
import Wrapper from '../wrapper';
const allergener = [
  {
    id: 1,
    name: 'Gluten',
    icon: '/allergyIcons/gluten_grey_200.png',
    alt: 'Gluten',
  },
  {
    id: 2,
    name: 'Sesamfrø',
    icon: '/allergyIcons/sesame_grey_200x200.png',
    alt: 'Sesamfrø',
  },
  {
    id: 3,
    name: 'Nøtter',
    icon: '/allergyIcons/treenut_grey_200x200.png',
    alt: 'Nøtter',
  },
  {
    id: 4,
    name: 'Skalldyr',
    icon: '/allergyIcons/crustaceans_3-removebg-preview.png',
    alt: 'Skalldyr',
  },
  {
    id: 5,
    name: 'Egg',
    icon: '/allergyIcons/eggs_grey_200x200.png',
    alt: 'Egg',
  },
  {
    id: 6,
    name: 'Fisk',
    icon: '/allergyIcons/fish_grey_200x200.png',
    alt: 'Fisk',
  },
  {
    id: 7,
    name: 'Sennep',
    icon: '/allergyIcons/mustard_grey_200x200.png',
    alt: 'Sennep',
  },
  {
    id: 8,
    name: 'Melk',
    icon: '/allergyIcons/milk_grey_200x200.png',
    alt: 'Melk',
  },
  {
    id: 9,
    name: 'Selleri',
    icon: '/allergyIcons/celery_grey_200x200.png',
    alt: '',
  },
  {
    id: 10,
    name: 'Soya',
    icon: '/allergyIcons/soya_grey_200x200.png',
    alt: '',
  },
  {
    id: 11,
    name: 'Bløtdyr',
    icon: '/allergyIcons/molluscs_grey_200x200.png',
    alt: '',
  },
  {
    id: 12,
    name: 'Lupin',
    icon: '/allergyIcons/lupin_grey_200x200.png',
    alt: '',
  },
  {
    id: 13,
    name: 'Sulfitter',
    icon: '/allergyIcons/su;phurdioxide_grey_200x200.png',
    alt: '',
  },
  {
    id: 14,
    name: 'Peanøtter',
    icon: '/allergyIcons/peanut_grey_200x200.png',
    alt: '',
  },
];

export default function Allergies() {
  return (
    <section className="my-20">
      <Wrapper optionalStyle="flex flex-col gap-10">
        <h2 className="text-mobile-h2 md:text-desktop-h2 text-center">Allergener</h2>
        <ul className={clsx(styles.grid)}>
          {allergener.map(({ id, name, icon, alt }) => (
            <li className="flex flex-col  items-center" key={id}>
              <Image width={50} height={50} alt={alt} src={icon} />
              <span className="font-medium">{name}</span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
