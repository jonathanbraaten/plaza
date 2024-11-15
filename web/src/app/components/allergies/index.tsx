import clsx from 'clsx';
import styles from './style.module.css';
import Wrapper from '../wrapper';
const allergener = [
  'Gluten',
  'Sesamfrø',
  'Nøtter',
  'Skalldyr',
  'Egg',
  'Fisk',
  'Sennep',
  'Melk',
  'Selleri',
  'Soya',
  'Bløtdyr',
  'Lupin',
  'Sulfitter',
  'Peanøtter',
];

export default function Allergies() {
  return (
    <section className="py-20 flex flex-col  justify-center gap-10 bg-secondary">
      <h2 className="text-mobile-h2 md:text-desktop-h2 text-center ">Allergener</h2>
      <Wrapper>
        <ul className={clsx(styles.grid)}>
          {allergener.map((allergy, index) => (
            <li className="inline-block items-center" key={index}>
              {allergy}
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
