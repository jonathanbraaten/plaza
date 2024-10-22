import { PAGE_QUERYResult } from '@/sanity/lib/sanity.types';
import HomeBannerPageBlockComponent from '@/components/pageBlock/home/homeBannerPageBlock';
import CtaPageBlockComponent from '@/components/pageBlock/home/ctaPageBlock';
import AboutPageBlockComponent from '@/components/pageBlock/home/aboutPageBlock';
import MenuPageBlockComponent from '@/components/pageBlock/home/menuPageBlock';
export default function homePageHandler({ data }: { data: PAGE_QUERYResult }) {
  return (
    <>
      {data?.body?.map((block) => {
        switch (block._type) {
          case 'banner':
            return (
              <HomeBannerPageBlockComponent
                key={block._key}
                header={block.header}
                subHeader={block.subHeader}
                bannerImage={block.bannerImage}
              />
            );
          case 'aboutPageBlock':
            return (
              <AboutPageBlockComponent
                key={block._key}
                title={block.title}
                description={block.description}
                image={block.image}
              />
            );
          case 'CTAPageBlock':
            return (
              <CtaPageBlockComponent
                key={block._key}
                title={block.title}
                subtitle={block.subtitle}
                linkEmbed={block.linkEmbed}
              />
            );
          case 'menuPageBlock':
            return (
              <MenuPageBlockComponent
                key={block._key}
                title={block.title}
                description={block.description}
                image={block.image}
                linkEmbed={block.linkEmbed}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
