import {
  internalGroqTypeReferenceTo,
  LinkEmbed,
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

export type IAboutPageBlock = {
  _type: 'aboutPageBlock';
  _key: string;
  title: string | null;
  description: string | null;
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
  } | null;
};

export type IMenuPageBlock = {
  _type: 'menuPageBlock';
  _key: string;
  title: string | null;
  description: string | null;
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
  } | null;
  linkEmbed?: LinkEmbed;
};

export type ICTAPageBlock = {
  _type: 'CTAPageBlock';
  _key: string;
  title: string | null;
  subtitle: string | null;
  linkEmbed?: LinkEmbed;
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
