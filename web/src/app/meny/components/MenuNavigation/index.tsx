'use client';
import Wrapper from '@/app/components/wrapper';
import { Dishes } from '@/sanity/lib/types/types';
import clsx from 'clsx';
import { MdOutlineFastfood } from 'react-icons/md';
import styles from './styles.module.css';
type Props = {
  data: Dishes;
};

export default function MenuNavigation({ data }: Props) {
  const scrollToSection = (_key: string) => {
    const element = document.getElementById(_key);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      const focusTarget = element.querySelector('h2, button, [tabindex="0"]');
      if (focusTarget instanceof HTMLElement) {
        focusTarget.focus();
      }
    }
  };

  if (!Array.isArray(data)) {
    return null;
  }
  return (
    <nav className={clsx(styles.menu_bg)} id="menu-navigation">
      <Wrapper optionalStyle="flex flex-col gap-5  py-20 md:py-32 ">
        <ul className="flex  flex-wrap gap-5">
          {(data as Dishes).slice(1).map(({ _key, title }) => (
            <li key={_key}>
              <button
                onClick={() => scrollToSection(_key)}
                className={clsx(
                  'flex items-center gap-5  px-4 py-2  bg-white text-lg md:text-base border rounded-md hover:cursor-pointer hover:shadow-md focus:shadow-md hover:border-black focus:border-black transition-colors duration-75',
                )}
              >
                <MdOutlineFastfood size={22} />
                <span> {title}</span>
              </button>
            </li>
          ))}
        </ul>
      </Wrapper>
    </nav>
  );
}
