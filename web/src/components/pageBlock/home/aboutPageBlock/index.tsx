import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Wrapper from '@/app/components/wrapper';
import { About } from '@/sanity/lib/types/types';

export default function AboutPageBlockComponent({ title, description, image }: About) {
  return (
    <Wrapper>
      <div className="grid grid-cols-2 gap-4 my-[15.25rem] items-center">
        <div>
          <Image
            className="object-cover"
            src={urlFor(image as SanityImageObject).url()}
            width={600}
            height={600}
            alt={image?.alt as string}
          />
        </div>
        <div>
          <h2 className="text-[2.875rem] font-medium mb-[1.875rem]">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>
  );
}
