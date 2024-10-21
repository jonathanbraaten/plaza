import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Wrapper from '@/app/components/wrapper';
import { IMenuPageBlock } from '@/sanity/lib/types/pageBlock';
import Link from 'next/link';

type Props = {
  data: IMenuPageBlock;
};
export default function MenuPageBlockComponent({
  data: { title, description, image, linkEmbed },
}: Props) {
  return (
    <Wrapper>
      <div className="grid grid-cols-2 gap-4 my-[15.25rem] items-center">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h1 className="text-[2.875rem] font-medium mb-[1.875rem]">{title}</h1>
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
