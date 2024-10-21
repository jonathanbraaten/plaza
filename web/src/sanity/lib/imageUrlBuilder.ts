import { client } from './client/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { SanityImageAsset } from './sanity.types';
const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageObject | SanityImageAsset) {
  return builder.image(source).auto('format');
}
