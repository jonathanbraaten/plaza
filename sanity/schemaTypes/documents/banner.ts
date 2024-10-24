import { defineField, defineType } from 'sanity';
import { PiFileImage } from 'react-icons/pi';

export default defineType({
  name: 'banner',
  type: 'document',
  icon: PiFileImage,
  fields: [
    defineField({
      name: 'header',
      title: 'Hovedtittel',
      type: 'string',
      description: 'Hovedtittel for banner. (påkrevd)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subHeader',
      title: 'Sekundærtittel',
      type: 'string',
      description: 'Sekundærtittel for banner. (valgfritt)',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Bilde',
      type: 'image',
      options: { hotspot: true },
      description: 'Banner bilde som vises på toppen av nettsiden. (påkrevd)',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative tekst',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'Alernativ tekst for skjermleser. (påkrevd)',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'header',
      media: 'bannerImage',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title ? title : 'Banner',
        media: media ? media : PiFileImage,
      };
    },
  },
});
