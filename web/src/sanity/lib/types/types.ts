import { Allergy, FullPortableText, MinimalPortableText } from '../sanity.types';
import { SanityImage, SanityLinkEmbed } from './reusableType';

export type Banner = {
  header: string | null;
  subHeader: string | null;
  bannerImage: SanityImage;
};

export type CTA = {
  title: string;
  subtitle?: string;
  linkEmbed: SanityLinkEmbed;
};

export type Intro = {
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

export type Catering = {
  title?: string;
  content?: MinimalPortableText | null;
  cateringInfo?: FullPortableText;
};
export type CateringDish = {
  _key: string;
  _type: 'cateringDishes';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  allergy: Allergy;
  description: FullPortableText;
  pricePerPerson: number;
};

export type Dishes = Array<{
  _key: string;
  title: string;
  image: SanityImage;
  dishes: Dish;
}>;

export type Dish = {
  _key: string;
  _id: string;
  _type: 'dish';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  allergy: Array<string>;
  description?: string;
  dineInPrice?: number;
  takeAwayPrice?: number;
};
