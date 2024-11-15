import HeroBanner from '@/app/components/heroBanner';
import { CATERING_PAGE_QUERYResult } from '@/sanity/lib/sanity.types';

export default function CateringPageHandler({ data }: { data: CATERING_PAGE_QUERYResult }) {
  return (
    <>
      {data?.body?.map((block) => {
        switch (block._type) {
          case 'banner':
            return (
              <HeroBanner
                key={block._key}
                header={block.header}
                subHeader={block.subHeader}
                bannerImage={block.bannerImage}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
