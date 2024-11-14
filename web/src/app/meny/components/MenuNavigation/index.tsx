'use client';
import Wrapper from '@/app/components/wrapper';
import { Dishes } from '@/sanity/lib/types/types';

type Props = {
  data: Dishes;
  handleSearchSelect: () => void;
};

export default function MenuNavigation({ data, handleSearchSelect }: Props) {
  const scrollToSection = (_key: string) => {
    const element = document.getElementById(_key);
    if (element) {
      const headerOffset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      handleSearchSelect();
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
    <nav id="menu-navigation">
      <Wrapper optionalStyle="flex gap-5">
        <ul className="flex gap-5">
          {(data as Dishes).map(({ _key, title }) => (
            <li key={_key}>
              <button
                onClick={() => scrollToSection(_key)}
                className="px-4 py-1
               bg-white
                border rounded-md hover:cursor-pointer hover:shadow-md"
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </Wrapper>
    </nav>
  );
}
