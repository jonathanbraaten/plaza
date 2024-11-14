'use client';
import ScrollToTop from '@/app/meny/components/ScrollToTop';
import MenuNavigation from '../MenuNavigation';
import { useState } from 'react';
import { Dishes } from '@/sanity/lib/types/types';

export default function SearchWrapper({ data }: { data: Dishes }) {
  const [searchClicked, setSearchClicked] = useState(false);
  const handleSearchSelect = () => setSearchClicked(true);
  const handleSearchReset = () => setSearchClicked(false);

  return (
    <>
      <MenuNavigation data={data} handleSearchSelect={handleSearchSelect} />
      <ScrollToTop handleSearchReset={handleSearchReset} searchClicked={searchClicked} />
    </>
  );
}
