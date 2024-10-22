import Wrapper from '@/app/components/wrapper';
import Link from 'next/link';
import { CTA } from '@/sanity/lib/types/types';
import clsx from 'clsx';
import { montserrat } from '@/ui/fonts';

export default function CtaPageBlockComponent({ title, subtitle, linkEmbed }: CTA) {
  return (
    <>
      <div className="bg-primary py-32 text-center text-white">
        <Wrapper>
          <h2 className={clsx(montserrat.className, ' text-3xl mb-6')}>{title}</h2>
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
