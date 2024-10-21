import { ICTAPageBlock } from '@/sanity/lib/types/pageBlock';
import Wrapper from '../wrapper';
import Link from 'next/link';

type Props = {
  data: ICTAPageBlock;
};
export default function CtaPageBlock({ data: { title, subtitle, linkEmbed } }: Props) {
  return (
    <>
      <div className="bg-primary py-32 text-center text-white">
        <Wrapper>
          <h2 className="font-semibold text-3xl mb-6">{title}</h2>
          <div className="flex justify-center">
            <p className="mb-8 max-w-lg">{subtitle}</p>
          </div>
          <Link
            href={linkEmbed?.href as string}
            className="rounded-full p-2 px-4 bg-white text-primary"
          >
            {linkEmbed?.label}
          </Link>
        </Wrapper>
      </div>
    </>
  );
}
