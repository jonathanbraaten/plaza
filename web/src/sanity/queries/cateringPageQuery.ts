import { defineQuery } from 'next-sanity';

export const CATERING_PAGE_QUERY = defineQuery(`
*[_type == 'cateringPage' && slug.current == $slug][0]{
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
    _type == 'cateringPageBlock' => {
      _key,
     title,
        content,
        cateringInfo,
    },
}

}
`);
