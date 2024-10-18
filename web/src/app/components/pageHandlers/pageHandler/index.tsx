import { PAGE_QUERYResult } from '@/sanity/lib/types/sanity.types';
import HeroBanner from '../../banner';

export default function PageHandler({ data }: { data: PAGE_QUERYResult }) {
  console.log(data?.body);
  return (
    <>
      {data?.body?.map((block) => {
        console.log(block._type);
        switch (block._type) {
          case 'banner':
            return <HeroBanner key={block._key} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
