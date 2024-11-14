import clsx from 'clsx';
import styles from './style.module.css';
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
    <section className="py-24 flex flex-col  justify-center gap-10 bg-secondary">
      <h2 className="text-mobile-h2 md:text-desktop-h2 text-center ">Allergener</h2>
      <ul className={clsx(styles.grid, 'px-5')}>
        {allergener.map((allergy, index) => (
          <li className="inline-block items-center" key={index}>
            {allergy}
          </li>
        ))}
      </ul>
    </section>
  );
}
