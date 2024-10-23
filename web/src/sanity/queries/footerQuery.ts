import { defineQuery } from 'next-sanity';

export const FOOTER_QUERY = defineQuery(`
    *[_type == 'footer'][0] {

      address {
        streetName,
        streetNumber,
        postalCode,
        town
      },
      openingHours[]{
      _key,
        day,
        hours
      },
      contact {
      
        phone,
        email
      },
      socialMedia[]{
      _key,
        platform,
        url
      }
    }
`);
