'use client';
import ScrollToTop from '@/app/meny/components/ScrollToTop';
import MenuNavigation from '../MenuNavigation';

import { Dishes } from '@/sanity/lib/types/types';

export default function SearchWrapper({ data }: { data: Dishes }) {
  return (
    <>
      <MenuNavigation data={data} />
      <ScrollToTop />
    </>
  );
}
