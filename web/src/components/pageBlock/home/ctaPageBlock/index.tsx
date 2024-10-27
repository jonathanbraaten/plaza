import Wrapper from '@/app/components/wrapper';
import { CTA } from '@/sanity/lib/types/types';
import clsx from 'clsx';
import { montserrat } from '@/ui/fonts';
import CustomLink from '@/app/components/customLink';

export default function CtaPageBlockComponent({ title, subtitle, linkEmbed }: CTA) {
  return (
    <aside className="bg-primary py-32 text-center text-white">
      <Wrapper>
        <h2 className={clsx(montserrat.className, ' text-3xl mb-6')}>{title}</h2>
        <div className="flex justify-center">
          <p className="mb-8 max-w-lg">{subtitle}</p>
        </div>
        {linkEmbed?.href && linkEmbed.label && (
          <CustomLink variant="secondary" href={linkEmbed.href}>
            {linkEmbed.label}
          </CustomLink>
        )}
      </Wrapper>
    </aside>
  );
}
