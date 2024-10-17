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
  header,
  subHeader,
  bannerImage
},
_type == 'featureBlock'=>{
  title,
  image,
  content,
  content
},
_type == 'cateringBlock'=> {
  title,
  content,
  linkEmbed{
  label, href
    }
    }
}}`);
