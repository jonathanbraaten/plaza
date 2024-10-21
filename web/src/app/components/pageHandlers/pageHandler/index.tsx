import { PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import AboutPageBlock from '../../about';
import HeroBanner from '../../banner';
import CtaPageBlock from '../../cta';
import MenuPageBlock from '../../menu';

export default function PageHandler({ data }: { data: PAGE_QUERYResult }) {
  return (
    <>
      {data?.body?.map((block) => {
        switch (block._type) {
          case 'banner':
            return <HeroBanner key={block._key} data={block} />;
          case 'aboutPageBlock':
            return <AboutPageBlock key={block._key} data={block} />;
          case 'CTAPageBlock':
            return <CtaPageBlock key={block._key} data={block} />;
          case 'menuPageBlock':
            return <MenuPageBlock key={block._key} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
