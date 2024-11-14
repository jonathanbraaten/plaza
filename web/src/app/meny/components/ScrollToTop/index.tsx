'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdArrowUp } from 'react-icons/io';

type Props = {
  handleSearchReset: () => void;
  searchClicked: boolean;
};

export default function ScrollToTop({ handleSearchReset, searchClicked }: Props) {
  const [showButton, setShowButton] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSearch = () => {
    const searchSection = document.getElementById('menu-navigation');
    if (searchSection) {
      const headerOffset = 100;
      const elementPosition = searchSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      handleSearchReset();
    }
  };

  if (!mounted) return null;

  const content =
    showButton && searchClicked ? (
      <button
        onClick={scrollToSearch}
        className="fixed bottom-2 right-1 text-sm md:text-base  md:bottom-8 md:right-8 bg-fill/70 shadow-md  text-black px-4 py-2 rounded-md
        flex items-center gap-2
        cursor-pointer duration-100
                  transition-colors hover:bg-fill/90 focus:bg-fill/90

                 "
        aria-label="Gå til meny-søk"
      >
        <IoMdArrowUp className="w-5 h-5 md:h-7 md:w-7" />
        <span>Til toppen</span>
      </button>
    ) : null;

  return createPortal(content, document.body);
}
