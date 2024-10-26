import { urlFor } from '@/sanity/lib/imageUrlBuilder';
import { SanityImageAsset } from '@/sanity/lib/sanity.types';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export const metaImageBuilder = (img: SanityImageObject | SanityImageAsset) => {
  return urlFor(img).width(1200).height(630).url();
};
