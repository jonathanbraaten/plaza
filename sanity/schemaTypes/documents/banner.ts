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
      description: 'Valgfri hovedtittel for bildet.',
    }),
    defineField({
      name: 'subHeader',
      title: 'Sekundærtittel',
      type: 'string',
      description: 'Valgfri sekundærtittel for bildet.',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Bilde',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative tekst',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'Alernativ tekst for skjermleser.',
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
