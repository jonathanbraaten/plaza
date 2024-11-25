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

export type CateringHandler = {
  _type: 'cateringHandler';
  catering?: Array<{
    title: string;
    allergy: Array<string>;
    description: FullPortableText;
    pricePerPerson: number;
    _type: 'cateringDishes';
    _key: string;
  }>;
};

export type DishHandler = {
  _type: 'dishHandler';
  title: string;
  image?: {
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
  };
  dishes: Array<{
    title: string;
    allergy: Array<string>;
    description: string;
    dineInPrice: number;
    takeAwayPrice: number;
    _type: 'dishes';
    _key: string;
  }>;
};

export type CateringPageBlock = {
  _type: 'cateringPageBlock';
  title?: string;
  content?: MinimalPortableText;
  cateringInfo?: FullPortableText;
};

export type MenuPageBlock = {
  _type: 'menuPageBlock';
  title: string;
  image: {
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
  };
  description: string;
  linkEmbed?: LinkEmbed;
};

export type CTAPageBlock = {
  _type: 'CTAPageBlock';
  title: string;
  subtitle?: string;
  linkEmbed?: LinkEmbed;
};

export type LinkEmbed = {
  _type: 'linkEmbed';
  label?: string;
  href?: string;
};

export type IntroPageBlock = {
  _type: 'introPageBlock';
  title: string;
  description: string;
  image?: {
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
  };
};

export type Footer = {
  _id: string;
  _type: 'footer';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  openingHours: Array<{
    day?: string;
    time?: string;
    _type: 'openingHour';
    _key: string;
  }>;
  socialMedia: Array<{
    socialType?: 'Facebook' | 'Instagram';
    socialLinks: string;
    _type: 'socials';
    _key: string;
  }>;
};

export type Dishes = {
  _id: string;
  _type: 'dishes';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  allergy: Array<string>;
  description: string;
  dineInPrice: number;
  takeAwayPrice: number;
};

export type Dish = {
  _id: string;
  _type: 'dish';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  dishTable?: Array<
    {
      _key: string;
    } & DishHandler
  >;
};

export type AllergyIcons = {
  _id: string;
  _type: 'allergyIcons';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  allergyName: string;
  image: {
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
  };
};

export type Allergy = Array<string>;

export type Banner = {
  _id: string;
  _type: 'banner';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  header: string;
  subHeader?: string;
  bannerImage: {
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
  };
};

export type CateringDishes = {
  _id: string;
  _type: 'cateringDishes';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  allergy: Allergy;
  description: FullPortableText;
  pricePerPerson: number;
};

export type CateringDish = {
  _id: string;
  _type: 'cateringDish';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  dish: Array<
    {
      _key: string;
    } & CateringHandler
  >;
};

export type CateringPage = {
  _id: string;
  _type: 'cateringPage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  metaDescription: string;
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
  };
  body?: Array<
    | {
        header: string;
        subHeader?: string;
        bannerImage: {
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
        };
        _type: 'banner';
        _key: string;
      }
    | ({
        _key: string;
      } & CateringPageBlock)
  >;
};

export type Menu = {
  _id: string;
  _type: 'menu';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  metaDescription: string;
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
  };
  body?: Array<{
    header: string;
    subHeader?: string;
    bannerImage: {
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
    };
    _type: 'banner';
    _key: string;
  }>;
};

export type Page = {
  _id: string;
  _type: 'page';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  metaDescription: string;
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
  };
  body?: Array<
    | {
        header: string;
        subHeader?: string;
        bannerImage: {
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
        };
        _type: 'banner';
        _key: string;
      }
    | ({
        _key: string;
      } & MenuPageBlock)
    | ({
        _key: string;
      } & CTAPageBlock)
    | ({
        _key: string;
      } & IntroPageBlock)
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
  current: string;
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
  | CateringHandler
  | DishHandler
  | CateringPageBlock
  | MenuPageBlock
  | CTAPageBlock
  | LinkEmbed
  | IntroPageBlock
  | Footer
  | Dishes
  | Dish
  | AllergyIcons
  | Allergy
  | Banner
  | CateringDishes
  | CateringDish
  | CateringPage
  | Menu
  | Page
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../web/src/sanity/queries/cateringDishQuery.ts
// Variable: CATERING_DISH_QUERY
// Query: *[_type == 'cateringDish'].dish[0].catering[]{    _key,  _id,  title,  allergy,  pricePerPerson,  description,  _type}
export type CATERING_DISH_QUERYResult = Array<{
  _key: string;
  _id: null;
  title: string;
  allergy: Array<string>;
  pricePerPerson: number;
  description: FullPortableText;
  _type: 'cateringDishes';
} | null>;

// Source: ../web/src/sanity/queries/cateringPageQuery.ts
// Variable: CATERING_PAGE_QUERY
// Query: *[_type == 'cateringPage' && slug.current == $slug][0]{  title,  "slug": slug.current,  metaDescription,  metaImage,body[]{  _type,      _type == 'banner' => {      _key,      header,      subHeader,      bannerImage    },    _type == 'cateringPageBlock' => {      _key,     title,        content,        cateringInfo,    },}}
export type CATERING_PAGE_QUERYResult = {
  title: string;
  slug: string;
  metaDescription: string;
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
  };
  body: Array<
    | {
        _type: 'banner';
        _key: string;
        header: string;
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
          alt: string;
          _type: 'image';
        };
      }
    | {
        _type: 'cateringPageBlock';
        _key: string;
        title: string | null;
        content: MinimalPortableText | null;
        cateringInfo: FullPortableText | null;
      }
  > | null;
} | null;

// Source: ../web/src/sanity/queries/dishQuery.ts
// Variable: DISH_QUERY
// Query: *[_type == 'dish']{    "dishes": dish[]{      _key,      title,      image,      dishes    }  }[0].dishes
export type DISH_QUERYResult = null;

// Source: ../web/src/sanity/queries/footerQuery.ts
// Variable: FOOTER_QUERY
// Query: *[_type == 'footer'][0] {  openingHours,  socialMedia}
export type FOOTER_QUERYResult = {
  openingHours: Array<{
    day?: string;
    time?: string;
    _type: 'openingHour';
    _key: string;
  }>;
  socialMedia: Array<{
    socialType?: 'Facebook' | 'Instagram';
    socialLinks: string;
    _type: 'socials';
    _key: string;
  }>;
} | null;

// Source: ../web/src/sanity/queries/menuQuery.ts
// Variable: MENU_QUERY
// Query: *[_type == 'menu' && slug.current == $slug][0] {  title,  "slug":slug.current,  metaDescription,  metaImage,    body[]{      _type,      _type == 'banner'=> {        _key,          header,        subHeader,        bannerImage      },    },}
export type MENU_QUERYResult = {
  title: string;
  slug: string;
  metaDescription: string;
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
  };
  body: Array<{
    _type: 'banner';
    _key: string;
    header: string;
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
      alt: string;
      _type: 'image';
    };
  }> | null;
} | null;

// Source: ../web/src/sanity/queries/pageQuery.ts
// Variable: PAGE_QUERY
// Query: *[_type == 'page' && slug.current == $slug][0]{  title,  "slug": slug.current,  metaDescription,  metaImage,  body[]{    _type,    _type == 'banner' => {      _key,      header,      subHeader,      bannerImage    },    _type == 'featureBlock' => {      _key,      title,      image,      content    },    _type == 'CTAPageBlock' => {      _key,      title,      subtitle,      linkEmbed {        label,        href      }    },    _type == 'introPageBlock' => {      _key,      title,      description,      image    },     _type == 'menuPageBlock' => {      _key,      title,      description,      image,       linkEmbed {        label,        href      }    },    _type == 'cateringBlock' => {      _key,      title,      content,      linkEmbed {        label,        href      }    }  }}
export type PAGE_QUERYResult = {
  title: string;
  slug: string;
  metaDescription: string;
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
  };
  body: Array<
    | {
        _type: 'banner';
        _key: string;
        header: string;
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
          alt: string;
          _type: 'image';
        };
      }
    | {
        _type: 'CTAPageBlock';
        _key: string;
        title: string;
        subtitle: string | null;
        linkEmbed: {
          label: string | null;
          href: string | null;
        } | null;
      }
    | {
        _type: 'introPageBlock';
        _key: string;
        title: string;
        description: string;
        image: {
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
      }
    | {
        _type: 'menuPageBlock';
        _key: string;
        title: string;
        description: string;
        image: {
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
        };
        linkEmbed: {
          label: string | null;
          href: string | null;
        } | null;
      }
  > | null;
} | null;

// Source: ../web/src/sanity/queries/sitemapQueries/cateringSitemapQuery.ts
// Variable: CATERING_SITEMAP_QUERY
// Query: *[_type == 'catering' && slug.current == $slug][0]{    _updatedAt,    "slug": slug.current,  }
export type CATERING_SITEMAP_QUERYResult = null;

// Source: ../web/src/sanity/queries/sitemapQueries/menuSitemapQuery.ts
// Variable: MENU_SITEMAP_QUERY
// Query: *[_type == 'menu' && slug.current == $slug][0]{    _updatedAt,    "slug": slug.current,  }
export type MENU_SITEMAP_QUERYResult = {
  _updatedAt: string;
  slug: string;
} | null;

// Source: ../web/src/sanity/queries/sitemapQueries/pageSitemapQuery.ts
// Variable: PAGE_SITEMAP_QUERY
// Query: *[_type == 'page' && slug.current == $slug][0]{    _updatedAt,    "slug": slug.current,  }
export type PAGE_SITEMAP_QUERYResult = {
  _updatedAt: string;
  slug: string;
} | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    "\n\n  *[_type == 'cateringDish'].dish[0].catering[]{\n    _key,\n  _id,\n  title,\n  allergy,\n  pricePerPerson,\n  description,\n  _type\n}\n  ": CATERING_DISH_QUERYResult;
    "\n*[_type == 'cateringPage' && slug.current == $slug][0]{\n  title,\n  \"slug\": slug.current,\n  metaDescription,\n  metaImage,\nbody[]{\n  _type,\n      _type == 'banner' => {\n      _key,\n      header,\n      subHeader,\n      bannerImage\n    },\n    _type == 'cateringPageBlock' => {\n      _key,\n     title,\n        content,\n        cateringInfo,\n    },\n}\n\n}\n": CATERING_PAGE_QUERYResult;
    '\n  *[_type == \'dish\']{\n    "dishes": dish[]{\n      _key,\n      title,\n      image,\n      dishes\n    }\n  }[0].dishes\n': DISH_QUERYResult;
    "\n  *[_type == 'footer'][0]\xA0{\n  openingHours,\n  socialMedia\n}\n  ": FOOTER_QUERYResult;
    "\n*[_type == 'menu' && slug.current == $slug][0] {\n  title,\n  \"slug\":slug.current,\n  metaDescription,\n  metaImage,\n    body[]{\n      _type,\n      _type == 'banner'=> {\n        _key,\n          header,\n        subHeader,\n        bannerImage\n      },\n    },\n\n}\n  ": MENU_QUERYResult;
    "\n*[_type == 'page' && slug.current == $slug][0]{\n  title,\n  \"slug\": slug.current,\n  metaDescription,\n  metaImage,\n  body[]{\n    _type,\n    _type == 'banner' => {\n      _key,\n      header,\n      subHeader,\n      bannerImage\n    },\n    _type == 'featureBlock' => {\n      _key,\n      title,\n      image,\n      content\n    },\n    _type == 'CTAPageBlock' => {\n      _key,\n      title,\n      subtitle,\n      linkEmbed {\n        label,\n        href\n      }\n    },\n    _type == 'introPageBlock' => {\n      _key,\n      title,\n      description,\n      image\n    },\n     _type == 'menuPageBlock' => {\n      _key,\n      title,\n      description,\n      image,\n       linkEmbed {\n        label,\n        href\n      }\n    },\n    _type == 'cateringBlock' => {\n      _key,\n      title,\n      content,\n      linkEmbed {\n        label,\n        href\n      }\n    }\n  }\n}\n": PAGE_QUERYResult;
    '\n  *[_type == \'catering\' && slug.current == $slug][0]{\n    _updatedAt,\n    "slug": slug.current,\n  }\n  ': CATERING_SITEMAP_QUERYResult;
    '\n  *[_type == \'menu\' && slug.current == $slug][0]{\n    _updatedAt,\n    "slug": slug.current,\n  }\n  ': MENU_SITEMAP_QUERYResult;
    '\n  *[_type == \'page\' && slug.current == $slug][0]{\n    _updatedAt,\n    "slug": slug.current,\n  }\n  ': PAGE_SITEMAP_QUERYResult;
  }
}
