'use client';
import { useState } from 'react';
import Nav from '../nav';
import Wrapper from '../wrapper';
/* import Image from 'next/image'; */
import { RxHamburgerMenu } from 'react-icons/rx';
export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const openNavigation = () => setIsActive(true);
  const closeNavigation = () => setIsActive(false);

  return (
    <header>
      <Wrapper optionalStyle="flex justify-between items-center  py-4">
        <div className="uppercase font-bold h-full">
          <p>logo</p>
          {/* <Image
            src={'/plaza-logo-removebg-preview 1.png'}
            width={100}
            height={100}
            className="max-h-[5rem]"
            alt="Plaza kafe logo"
          /> */}
        </div>
        <Nav isActive={isActive} onClick={closeNavigation} />
        <button
          aria-haspopup="true"
          aria-expanded={isActive}
          aria-label="open navigation/åpne navigasjon"
          data-testid="hamburger-button"
          className="md:hidden"
          onClick={openNavigation}
        >
          <RxHamburgerMenu aria-hidden="true" size={30} />
        </button>
      </Wrapper>
    </header>
  );
}
