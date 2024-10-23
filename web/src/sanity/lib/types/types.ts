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

export type Dishes = Array<{
  _key: string;
  title: string;
  image: SanityImage;
  dishes: Array<{
    title: string;
    allergy: Array<string>;
    description: string; //
    dineInPrice: number; //
    takeAwayPrice: number;
    _key: string;
    image: SanityImage;
  }>;
}>;

export type ArrOfDishes = Array<{
  dishes: Array<{
    title: string;
    allergy: Array<string>;
    description: string; //
    dineInPrice: number; //
    takeAwayPrice: number;
    _key: string;
    image: SanityImage;
  }> | null;
}>;
/* ======= Frontpage types ======= */

/* ======= Footer types ======= */
export type IAddressFooter = {
  _key?: string;
  streetName: string;
  streetNumber: number;
  postalCode: number;
  town: string;
};

export type IOpeningHourFooter = Array<{
  _key?: string;
  day: string;
  hours: string;
}>;

export type IContactFooter = {
  _key?: string;
  phone: string;
  email: string;
};

export type ISocialMediaFooter = Array<{
  _key?: string;
  platform: string;
  url: string;
}>;
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
