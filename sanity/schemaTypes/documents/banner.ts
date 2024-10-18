import { defineField, defineType } from 'sanity';
import { PiFileImage } from 'react-icons/pi';

export default defineType({
  name: 'banner',
  type: 'document',
  icon: PiFileImage,
  fields: [
    defineField({
      name: 'header',
      title: 'Banner Header',
      type: 'string',
      description: 'Optional title for the banners.',
    }),
    defineField({
      name: 'subHeader',
      title: 'Banner Subheader',
      type: 'string',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'Alternative text for screen readers.',
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
