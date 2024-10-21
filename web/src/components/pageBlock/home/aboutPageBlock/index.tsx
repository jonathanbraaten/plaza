import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import { IAboutPageBlock } from '@/sanity/lib/types/pageBlock';
import Wrapper from '@/app/components/wrapper';
type Props = {
  data: IAboutPageBlock;
};
export default function AboutPageBlockComponent({ data: { title, description, image } }: Props) {
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
          <h1 className="text-[2.875rem] font-medium mb-[1.875rem]">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>
  );
}
