import { defineQuery } from 'next-sanity';

export const FOOTER_QUERY = defineQuery(`
*[_type == 'page' && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  metaDescription,
  metaImage,
  footer[] {
    _type,
    _type == 'addressFooterBlock' => {
      _key,
      streetName,
      streetNumber,
      postalCode,
      town
    },
    _type == 'openingHoursFooterBlock' => {
      _key,
      monday,
      tuesdayThursday,
      fridaySaturday,
      sunday
    },
    _type == 'contactFooterBlock' => {
      _key,
      telephone,
      email
    },
    _type == 'socialMediaFooterBlock' => {
      _key,
      facebook,
      instagram
    },
  }
}
`);
