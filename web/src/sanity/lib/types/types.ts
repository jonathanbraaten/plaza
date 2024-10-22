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
