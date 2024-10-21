import { AllergyBlock, MENU_QUERYResult } from '@/sanity/lib/sanity.types';
import AllergyBlockComponent from '@/app/meny/components/allergyPageBlock';
import MenuBanner from '@/app/meny/components/menuBanner';
import Dishes from '@/app/meny/components/dishesPageBlock';

export default function MenuHandler({ data }: { data: MENU_QUERYResult }) {
  return (
    <>
      {data?.body?.map((block) => {
        switch (block._type) {
          case 'banner':
            return <MenuBanner key={block._key} data={block} />;

          case 'allergyBlock':
            return <AllergyBlockComponent key={block._key} data={block as AllergyBlock} />;
          case 'lunchBlock':
            return <Dishes key={block._key} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
