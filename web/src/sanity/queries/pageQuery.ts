import { defineQuery } from 'next-sanity';

export const PAGE_QUERY = defineQuery(`
*[_type == 'page' && slug.current == $slug][0]{
  title,
  "slug":slug.current,
  metaDescription,
  metaImage,
  body[]{
_type,
_type == 'banner'=>{
  _key,
  header,
  subHeader,
  bannerImage
},
_type == 'featureBlock'=>{
  _key,
  title,
  image,
  content,
  content
},
_type == 'cateringBlock'=> {
  _key,
  title,
  content,
  linkEmbed{
  label, href
    }
    }
}}`);
