import { Banner } from '@/sanity/lib/types/types';

import HeroBanner from '@/app/components/heroBanner';
export default function HomeBannerPageBlockComponent({ header, subHeader, bannerImage }: Banner) {
  return <HeroBanner header={header} subHeader={subHeader} bannerImage={bannerImage} />;
}
