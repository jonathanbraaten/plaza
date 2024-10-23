import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Wrapper from '@/app/components/wrapper';
import { About } from '@/sanity/lib/types/types';
import { montserrat } from '@/ui/fonts';
import clsx from 'clsx';

export default function AboutPageBlockComponent({ title, description, image }: About) {
  return (
    <section>
      <Wrapper optionalStyle="flex flex-col md:flex-row md:justify-between  gap-5">
        <Image
          className="aspect-[4/3] object-cover w-full md:max-w-[550px]"
          sizes="(max-width:748px), 100vw, (max-width:1200px), 50vw, 800px"
          src={urlFor(image as SanityImageObject)
            .width(800)
            .url()}
          width={1400}
          height={1000}
          quality={70}
          loading="lazy"
          alt={image?.alt as string}
        />

        <div className="max-w-[50ch] md:max-w-[45ch] lg:max-w-[60ch] pl-0 md:pl-4">
          <h2 className={clsx(montserrat.className, 'text-mobile-h2 lg:text-desktop-h2 mb-2')}>
            {title}
          </h2>
          <p>{description}</p>
        </div>
      </Wrapper>
    </section>
  );
}
