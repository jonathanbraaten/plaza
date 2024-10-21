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
      _type == 'allergyBlock'=>{
        _key,
        title,
         content,
          menuAllergy
      },
      _type == 'lunchBlock' => {
        title,
        _key,
          "dishReference":lunchReference[]->{
        _id,
        _type,
        title,
        description,
        dineInPrice,
        takeawayPrice,
        allergy[]

      }
      },
    },

}
  `);
