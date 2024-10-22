import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Wrapper from '@/app/components/wrapper';
import Link from 'next/link';
import { Menu } from '@/sanity/lib/types/types';
import { montserrat } from '@/ui/fonts';
import clsx from 'clsx';
export default function MenuPageBlockComponent({ title, description, image, linkEmbed }: Menu) {
  return (
    <Wrapper>
      <div className="grid grid-cols-2 gap-4 my-[15.25rem] items-center">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h2 className={clsx(montserrat.className, 'text-[2.875rem] font-medium mb-[1.875rem]')}>
              {title}
            </h2>
            <p>{description}</p>
          </div>
          <Link
            href={linkEmbed?.href as string}
            className="p-2 px-4 text-primary bg-[#BC8585] w-fit"
          >
            {linkEmbed?.label}
          </Link>
        </div>
        <div>
          <Image
            className="object-cover"
            src={urlFor(image as SanityImageObject).url()}
            width={600}
            height={600}
            alt={image?.alt as string}
          />
        </div>
      </div>
    </Wrapper>
  );
}
