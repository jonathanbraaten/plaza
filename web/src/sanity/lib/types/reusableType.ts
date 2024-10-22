import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from '../sanity.types';

export type SanityLinkEmbed = {
  label?: string | null | undefined;
  href?: string | null | undefined;
} | null;

export type SanityImage = {
  asset?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt: string;
  _type: 'image';
} | null;
