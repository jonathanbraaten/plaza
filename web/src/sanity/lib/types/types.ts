import { SanityImage, SanityLinkEmbed } from './reusableType';

/* ======= Frontpage types ======= */
export type Banner = {
  header: string | null;
  subHeader: string | null;
  bannerImage: SanityImage;
};

export type CTA = {
  title: string;
  subtitle: string;
  linkEmbed: SanityLinkEmbed;
};

export type About = {
  title: string;
  description: string;
  image: SanityImage;
  /*   linkEmbed: SanityLinkEmbed; */
};

export type Menu = {
  title: string;
  description: string;
  image: SanityImage;
  linkEmbed: SanityLinkEmbed;
};
/* ======= Frontpage types ======= */

/* ======= Footer types ======= */

export type IAddressFooter = {
  streetName: string;
  streetNumber: number;
  postalCode: number;
  town: string;
};

export type IOpeningHoursFooter = {
  sunday: string;
  monday: number;
  tuesdayThursday: number;
  fridaySaturday: string;
};

export type IContactFooter = {
  telephone: string;
  email: string;
};

export type ISocialMediaFooterBlock = {
  facebook: string;
  instagram: string;
};

/* ======= Footer types ======= */

/* export type DISH_QUERYResult = Array<{
  _key: null;
  image: null;
  title: string | null;
  dish: Array<{
    _key: string;
    title: string;
    dishes: Array<{
      title: string;
      allergy: Array<string>;
      description?: string;
      dineInPrice?: number;
      takeAwayPrice?: number;
      _type: 'dish';
      _key: string;
    }> | null;
  }> | null;
}>;*/
