import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from '@/sanity/lib/types/sanity.types';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
type Props = {
  data: {
    _type: 'banner';
    _key: string;
    header: string | null;
    subHeader: string | null;
    bannerImage: {
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
    } | null;
  };
};
export default function HeroBanner({ data: { header, subHeader, bannerImage } }: Props) {
  return (
    <section className="relative ">
      {header && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
          <h1 className="text-white text-4xl">{header}</h1>
          {subHeader && <h2>{subHeader}</h2>}
        </div>
      )}
      <div className="relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <Image
          priority
          width={1500}
          height={1200}
          quality={80}
          className="max-w-full w-full  object-cover aspect-square max-h-[700px]"
          sizes="(max-width:768px) 100vw, (max-width:1068px), 50vw, 33vw"
          alt={bannerImage?.alt as string}
          src={urlFor(bannerImage as SanityImageObject).url()}
        />
      </div>
    </section>
  );
}
