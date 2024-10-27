import { MinimalPortableText } from '@/sanity/lib/sanity.types';
import { Catering } from '@/sanity/lib/types/types';
import { PortableText } from 'next-sanity';
import { CateringPortableText } from '../portableTextComponent';
import Wrapper from '@/app/components/wrapper';

export default function CateringPageBlockComponent({ title, cateringInfo, content }: Catering) {
  return (
    <section className="py-20 mb-10 md:mb-20 bg-fillFaded/10">
      <Wrapper
        optionalStyle='optionalStyle="flex flex-col gap-4 '
        /* optionalStyle="flex flex-col gap-4 py-10 md:py-20" */
      >
        <div className="flex flex-col gap-1 max-w-[75ch]">
          <h2 className="text-mobile-h2 md:text-desktop-h2">{title}</h2>
          <PortableText value={content as MinimalPortableText} />
        </div>
        <div className="bg-fillFaded  flex flex-col  p-5  max-w-[75ch] ">
          <CateringPortableText value={cateringInfo} />
        </div>
      </Wrapper>
      {/*       <hr className="mt-5" /> */}
    </section>
  );
}
