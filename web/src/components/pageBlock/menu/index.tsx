import { AllergyBlock, MENU_QUERYResult } from '@/sanity/lib/sanity.types';
import AllergyBlockComponent from '@/components/pageBlock/menu/allergyPageBlock';
import MenuBannerPageBlockComponent from '@/components/pageBlock/menu/menuBannerPageBlock';

export default function MenuPageBlockHandler({ data }: { data: MENU_QUERYResult }) {
  return (
    <>
      {data?.body?.map((block) => {
        switch (block._type) {
          case 'banner':
            return (
              <MenuBannerPageBlockComponent
                key={block._key}
                header={block.header}
                subHeader={block.subHeader}
                bannerImage={block.bannerImage}
              />
            );
          case 'allergyBlock':
            return <AllergyBlockComponent key={block._key} data={block as AllergyBlock} />;
          default:
            return null;
        }
      })}
    </>
  );
}
