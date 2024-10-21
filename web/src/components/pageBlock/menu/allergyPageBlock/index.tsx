import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import clsx from 'clsx';
import styles from './styles.module.css';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Wrapper from '@/app/components/wrapper';
import React from 'react';

import { AllergyBlock, MinimalPortableText } from '@/sanity/lib/sanity.types';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
type Props = {
  data: AllergyBlock;
};
export default function AllergyBlockComponent({ data }: Props) {
  return (
    <section className="bg-green-200">
      <Wrapper optionalStyle="flex flex-col">
        <article className="mx-auto">
          <h2> {data.title}</h2>
          <PortableText value={data.content as MinimalPortableText} />
        </article>
        <div className={clsx(styles.grid, '  rounded-md p-10')}>
          {data.menuAllergy?.map(({ _key, image, allergyName }) => (
            <article className="flex flex-col items-center " key={_key}>
              <Image
                src={urlFor(image as SanityImageObject).url()}
                alt={image?.alt || 'Bilde av allergener ikoner'}
                width={100}
                height={100}
                className="object-cover aspect-auto"
              />
              <p>{allergyName}</p>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
