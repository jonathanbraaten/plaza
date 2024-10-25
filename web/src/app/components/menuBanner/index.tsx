import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImage } from '@/sanity/lib/types/reusableType';
import { montserrat } from '@/ui/fonts';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import clsx from 'clsx';
import Image from 'next/image';
type Props = {
  title: string;
  image: SanityImage;
};
export default function MenuBanner({ title, image }: Props) {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
        <h2
          className={clsx(
            montserrat.className,
            'self-center text-white text-mobile-h2 md:text-desktop-h2',
          )}
        >
          {title}
        </h2>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <Image
          priority
          width={1500}
          height={1200}
          quality={80}
          className="max-w-full w-full  object-cover aspect-square max-h-[500px]"
          sizes="(max-width:768px) 100vw, (max-width:1068px), 50vw, 33vw"
          alt={image?.alt as string}
          src={urlFor(image as SanityImageObject).url()}
        />
      </div>
    </div>
  );
}
