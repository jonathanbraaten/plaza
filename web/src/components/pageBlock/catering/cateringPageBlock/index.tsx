import { MinimalPortableText } from '@/sanity/lib/sanity.types';
import { Catering } from '@/sanity/lib/types/types';
import { PortableText } from 'next-sanity';
import { CateringPortableText } from '../portableTextComponent';
import Wrapper from '@/app/components/wrapper';

export default function CateringPageBlockComponent({ title, cateringInfo, content }: Catering) {
  return (
    <section className="py-10">
      <Wrapper optionalStyle="flex flex-col gap-4">
        <div className="flex flex-col gap-1 max-w-[75ch]">
          <h2 className="text-mobile-h2 md:text-desktop-h2">{title}</h2>
          <PortableText value={content as MinimalPortableText} />
        </div>
        <div className="bg-accent/20 px-10 py-5 max-w-[75ch]">
          <CateringPortableText value={cateringInfo} />
        </div>
      </Wrapper>
    </section>
  );
}
