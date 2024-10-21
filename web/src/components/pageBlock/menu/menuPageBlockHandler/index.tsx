import { AllergyBlock, MENU_QUERYResult } from '@/sanity/lib/sanity.types';
import AllergyBlockComponent from '@/components/pageBlock/menu/allergyPageBlock';
import MenuBanner from '@/components/pageBlock/menu/menuBannerPageBlock';

export default function MenuPageBlockHandler({ data }: { data: MENU_QUERYResult }) {
  return (
    <>
      {data?.body?.map((block) => {
        switch (block._type) {
          case 'banner':
            return <MenuBanner key={block._key} data={block} />;
          case 'allergyBlock':
            return <AllergyBlockComponent key={block._key} data={block as AllergyBlock} />;
          default:
            return null;
        }
      })}
    </>
  );
}
