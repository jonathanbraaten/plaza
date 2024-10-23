import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Wrapper from '@/app/components/wrapper';
import { Menu } from '@/sanity/lib/types/types';
import { montserrat } from '@/ui/fonts';
import clsx from 'clsx';
import CustomLink from '@/app/components/customLink';
export default function MenuPageBlockComponent({ title, description, image, linkEmbed }: Menu) {
  return (
    <section>
      <Wrapper optionalStyle="flex flex-col-reverse md:flex-row md:justify-between  gap-5">
        <div className="flex flex-col gap-2 max-w-[50ch] md:max-w-[45ch] lg:max-w-[60ch] pl-0 md:pl-4">
          <div>
            <h2 className={clsx(montserrat.className, 'text-mobile-h2 lg:text-desktop-h2')}>
              {title}
            </h2>
            <p>{description}</p>
          </div>

          {linkEmbed?.href && linkEmbed.label && (
            <CustomLink variant="primary" position="self-start" href={linkEmbed.href}>
              {linkEmbed.label}
            </CustomLink>
          )}
        </div>

        <Image
          className="aspect-[4/3] self- object-cover w-full md:max-w-[550px]"
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
      </Wrapper>
    </section>
  );
}
