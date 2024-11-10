import { defineQuery } from 'next-sanity';

export const MENU_QUERY = defineQuery(`
*[_type == 'menu' && slug.current == $slug][0] {
  title,
  "slug":slug.current,
  metaDescription,
  metaImage,
    body[]{
      _type,
      _type == 'banner'=> {
        _key,
          header,
        subHeader,
        bannerImage
      },
    },

}
  `);
