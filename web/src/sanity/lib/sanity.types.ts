/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type FullPortableText = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
      listItem?: 'bullet' | 'number';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
      _key: string;
    }
>;

export type MinimalPortableText = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: 'span';
    _key: string;
  }>;
  style?: 'normal' | 'blockquote';
  listItem?: never;
  markDefs?: Array<{
    href?: string;
    _type: 'link';
    _key: string;
  }>;
  level?: number;
  _type: 'block';
  _key: string;
}>;

export type LunchBlock = {
  _type: 'lunchBlock';
  title?: string;
  lunchReference?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'lunch';
  }>;
};

export type AllergyBlock = {
  _type: 'allergyBlock';
  title?: string;
  content?: MinimalPortableText;
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

export type CateringBlock = {
  _type: 'cateringBlock';
  title?: string;
  content?: MinimalPortableText;
  linkEmbed?: LinkEmbed;
};

export type MenuBlock = {
  _type: 'menuBlock';
  title?: string;
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
  content?: MinimalPortableText;
  linkEmbed?: LinkEmbed;
};

export type LinkEmbed = {
  _type: 'linkEmbed';
  label?: string;
  href?: string;
};

export type FeatureBlock = {
  _type: 'featureBlock';
  title?: string;
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
  content?: MinimalPortableText;
};

export type Dessert = {
  _id: string;
  _type: 'dessert';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  allergy?: Array<string>;
  description?: string;
  dineInPrice?: number;
  takeawayPrice?: number;
};

export type KidsMenu = {
  _id: string;
  _type: 'kidsMenu';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  allergy?: Array<string>;
  description?: string;
  dineInPrice?: number;
  takeawayPrice?: number;
};

export type Pizza = {
  _id: string;
  _type: 'pizza';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  allergy?: Array<string>;
  description?: string;
  dineInPrice?: number;
  takeawayPrice?: number;
};

export type AllergyIcons = {
  _id: string;
  _type: 'allergyIcons';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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
};

export type Allergy = Array<string>;

export type Burgers = {
  _id: string;
  _type: 'burgers';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  allergy?: Allergy;
  description?: string;
  dineInPrice?: number;
  takeawayPrice?: number;
};

export type Lunch = {
  _id: string;
  _type: 'lunch';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  allergy?: Allergy;
  description?: string;
  dineInPrice?: number;
  takeawayPrice?: number;
};

export type Menu = {
  _id: string;
  _type: 'menu';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  metaDescription?: string;
  metaImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  body?: Array<
    | {
        header?: string;
        subHeader?: string;
        bannerImage?: {
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
        _type: 'banner';
        _key: string;
      }
    | ({
        _key: string;
      } & AllergyBlock)
    | ({
        _key: string;
      } & LunchBlock)
  >;
};

export type Banner = {
  _id: string;
  _type: 'banner';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  header?: string;
  subHeader?: string;
  bannerImage?: {
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
};

export type Page = {
  _id: string;
  _type: 'page';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  metaDescription?: string;
  metaImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  body?: Array<
    | {
        header?: string;
        subHeader?: string;
        bannerImage?: {
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
        _type: 'banner';
        _key: string;
      }
    | ({
        _key: string;
      } & FeatureBlock)
    | ({
        _key: string;
      } & CateringBlock)
    | ({
        _key: string;
      } & MenuBlock)
  >;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | FullPortableText
  | MinimalPortableText
  | LunchBlock
  | AllergyBlock
  | CateringBlock
  | MenuBlock
  | LinkEmbed
  | FeatureBlock
  | Dessert
  | KidsMenu
  | Pizza
  | AllergyIcons
  | Allergy
  | Burgers
  | Lunch
  | Menu
  | Banner
  | Page
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../web/src/sanity/queries/menuQuery.ts
// Variable: MENU_QUERY
// Query: *[_type == 'menu' && slug.current == $slug][0] {  title,  "slug":slug.current,  metaDescription,  metaImage,    body[]{      _type,      _type == 'banner'=> {        _key,          header,        subHeader,        bannerImage      },      _type == 'allergyBlock'=>{        _key,        title,         content,          menuAllergy      },      _type == 'lunchBlock' => {        title,        _key,          "dishReference":lunchReference[]->{        _id,        _type,        title,        description,        dineInPrice,        takeawayPrice,        allergy[]      }      },    },}
export type MENU_QUERYResult = {
  title: string | null;
  slug: string | null;
  metaDescription: string | null;
  metaImage: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  body: Array<
    | {
        _type: 'allergyBlock';
        _key: string;
        title: string | null;
        content: MinimalPortableText | null;
        menuAllergy: Array<{
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
        }> | null;
      }
    | {
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
      }
    | {
        _type: 'lunchBlock';
        title: string | null;
        _key: string;
        dishReference: Array<{
          _id: string;
          _type: 'lunch';
          title: string | null;
          description: string | null;
          dineInPrice: number | null;
          takeawayPrice: number | null;
          allergy: Array<string> | null;
        }> | null;
      }
  > | null;
} | null;

// Source: ../web/src/sanity/queries/pageQuery.ts
// Variable: PAGE_QUERY
// Query: *[_type == 'page' && slug.current == $slug][0]{  title,  "slug":slug.current,  metaDescription,  metaImage,  body[]{_type,_type == 'banner'=>{  _key,  header,  subHeader,  bannerImage},_type == 'featureBlock'=>{  _key,  title,  image,  content,  content},_type == 'aboutBlock'=>{  _key,  aboutTitle,  aboutImage,  description,},_type == 'cateringBlock'=> {  _key,  title,  content,  linkEmbed{  label, href    }    }}}
export type PAGE_QUERYResult = {
  title: string | null;
  slug: string | null;
  metaDescription: string | null;
  metaImage: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  } | null;
  body: Array<
    | {
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
      }
    | {
        _type: 'cateringBlock';
        _key: string;
        title: string | null;
        content: MinimalPortableText | null;
        linkEmbed: {
          label: string | null;
          href: string | null;
        } | null;
      }
    | {
        _type: 'featureBlock';
        _key: string;
        title: string | null;
        image: {
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
        content: MinimalPortableText | null;
      }
    | {
        _type: 'menuBlock';
      }
  > | null;
} | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    "\n*[_type == 'menu' && slug.current == $slug][0] {\n  title,\n  \"slug\":slug.current,\n  metaDescription,\n  metaImage,\n    body[]{\n      _type,\n      _type == 'banner'=> {\n        _key,\n          header,\n        subHeader,\n        bannerImage\n      },\n      _type == 'allergyBlock'=>{\n        _key,\n        title,\n         content,\n          menuAllergy\n      },\n      _type == 'lunchBlock' => {\n        title,\n        _key,\n          \"dishReference\":lunchReference[]->{\n        _id,\n        _type,\n        title,\n        description,\n        dineInPrice,\n        takeawayPrice,\n        allergy[]\n\n      }\n      },\n    },\n\n}\n  ": MENU_QUERYResult;
    "\n*[_type == 'page' && slug.current == $slug][0]{\n  title,\n  \"slug\":slug.current,\n  metaDescription,\n  metaImage,\n  body[]{\n_type,\n_type == 'banner'=>{\n  _key,\n  header,\n  subHeader,\n  bannerImage\n},\n_type == 'featureBlock'=>{\n  _key,\n  title,\n  image,\n  content,\n  content\n},\n_type == 'aboutBlock'=>{\n  _key,\n  aboutTitle,\n  aboutImage,\n  description,\n},\n_type == 'cateringBlock'=> {\n  _key,\n  title,\n  content,\n  linkEmbed{\n  label, href\n    }\n    }\n}}": PAGE_QUERYResult;
  }
}
