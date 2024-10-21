import {
  internalGroqTypeReferenceTo,
  MinimalPortableText,
  SanityImageCrop,
  SanityImageHotspot,
} from '../sanity.types';

export type BannerBlock = {
  _type: 'banner';
  _key: string;
  header: string | null;
  subHeader: string | null;
  bannerImage: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  } | null;
};

export type AllergyBlock = {
  _type: 'allergyBlock';
  title?: string | null;
  content?: MinimalPortableText | null | undefined;
  menuAllergy?: Array<{
    allergyName?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
    };
    _type: 'allergyIcons';
    _key: string;
  }>;
};
