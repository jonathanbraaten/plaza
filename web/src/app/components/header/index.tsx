'use client';
import { useState } from 'react';
import Nav from '../nav';
import Wrapper from '../wrapper';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const openNavigation = () => setIsActive(true);
  const closeNavigation = () => setIsActive(false);
  return (
    <header>
      <Wrapper optionalStyle="flex justify-between items-center bg-blue-500">
        <div className="uppercase font-bold">LOGO</div>
        <Nav isActive={isActive} onClick={closeNavigation} />
        <button className="md:hidden" onClick={openNavigation}>
          menu
        </button>
      </Wrapper>
    </header>
  );
}
