'use client';
import { useState } from 'react';
import Nav from '../nav';
import Wrapper from '../wrapper';
import Image from 'next/image';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const openNavigation = () => setIsActive(true);
  const closeNavigation = () => setIsActive(false);
  return (
    <header>
      <Wrapper optionalStyle="flex justify-between items-center  py-4 ">
        <div className="uppercase font-bold h-full">
          <Image
            src={'/plaza-logo-removebg-preview 1.png'}
            width={100}
            height={100}
            alt="Plaza kafe logo"
          />
        </div>
        <Nav isActive={isActive} onClick={closeNavigation} />
        <button className="md:hidden" onClick={openNavigation}>
          menu
        </button>
      </Wrapper>
    </header>
  );
}
