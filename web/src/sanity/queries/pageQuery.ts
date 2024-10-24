import { defineQuery } from 'next-sanity';

export const PAGE_QUERY = defineQuery(`
*[_type == 'page' && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  metaDescription,
  metaImage,
  body[]{
    _type,
    _type == 'banner' => {
      _key,
      header,
      subHeader,
      bannerImage
    },
    _type == 'featureBlock' => {
      _key,
      title,
      image,
      content
    },
    _type == 'CTAPageBlock' => {
      _key,
      title,
      subtitle,
      linkEmbed {
        label,
        href
      }
    },
    _type == 'introPageBlock' => {
      _key,
      title,
      description,
      image
    },
     _type == 'menuPageBlock' => {
      _key,
      title,
      description,
      image,
       linkEmbed {
        label,
        href
      }
    },
    _type == 'cateringBlock' => {
      _key,
      title,
      content,
      linkEmbed {
        label,
        href
      }
    }
  }
}
`);
