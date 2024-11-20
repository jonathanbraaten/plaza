'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdArrowUp } from 'react-icons/io';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    const menuNav = document.getElementById('menu-navigation');
    if (menuNav) {
      observer.observe(menuNav);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    const menuNav = document.getElementById('menu-navigation');
    if (menuNav) {
      menuNav.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  const content = showButton ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-2 rounded-full right-1 text-sm md:text-base md:bottom-8 md:right-8 bg-black shadow-md text-white px-2 py-2
        flex items-center gap-2
        cursor-pointer duration-100
        transition-colors hover:bg-black/90 focus:bg-black/90 "
      aria-label="Gå til meny-søk"
    >
      <IoMdArrowUp className="w-5 h-5 md:h-7 md:w-7" />
    </button>
  ) : null;

  return createPortal(content, document.body);
}
