import { FullPortableText } from '@/sanity/lib/sanity.types';
import { PortableText, PortableTextComponents } from 'next-sanity';

const component: PortableTextComponents = {
  list: {
    bullet: ({ children }) => <ul className="list-disc flex flex-col gap-1 pl-3">{children}</ul>,
  },
};

interface CateringPortableTextProps {
  value: FullPortableText;
}

export const CateringPortableText = ({ value }: CateringPortableTextProps) => {
  return <PortableText value={value} components={component} />;
};
