import { PAGE_QUERYResult } from '@/sanity/lib/types/sanity.types';
import HeroBanner from '../../banner';
import About from '../../about';

export default function PageHandler({ data }: { data: PAGE_QUERYResult }) {
  return (
    <>
      {data?.body?.map((block) => {
        switch (block._type) {
          case 'banner':
            return <HeroBanner key={block._key} data={block} />;
          case 'aboutBlock':
            return <About key={block._key} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
