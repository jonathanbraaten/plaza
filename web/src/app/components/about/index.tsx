import Image from 'next/image';
import Wrapper from '../wrapper';
import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from '@/sanity/lib/sanity.types';

type Props = {
  data: {
    _type: 'aboutBlock';
    _key: string;
    aboutTitle: string;
    description: string;
    aboutImage: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
    };
  };
};
export default function About({ data: { aboutTitle, description, aboutImage } }: Props) {
  return (
    <Wrapper>
      <div className="grid grid-cols-2 gap-4 my-[15.25rem] items-center">
        <div>
          <Image
            src={urlFor(aboutImage as SanityImageObject).url()}
            width={600}
            height={600}
            alt="Plaza kafe logo"
          />
        </div>
        <div>
          <h1 className="text-[2.875rem] font-medium mb-[1.875rem]">{aboutTitle}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>
  );
}
