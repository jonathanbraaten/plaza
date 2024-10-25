import HeroBanner from '@/app/components/heroBanner';
import { CATERING_PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import CateringPageBlockComponent from './cateringPageBlock';

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
          case 'cateringPageBlock':
            return (
              <CateringPageBlockComponent
                key={block._key}
                title={block.title}
                cateringInfo={block.cateringInfo}
                content={block.content}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
