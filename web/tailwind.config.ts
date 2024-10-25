import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(205,65%,20%)',
        'text-strong': 'hsl(226, 64%, 14%)',
        'text-weak': 'hsl(226,43%, 18%)',
        'stroke-strong': 'hsl(216,65%, 72%)',
        'stroke-weak': 'hsl(221,65%, 84%)',
        accent: 'hsl(30, 25%, 52%)',
        fill: 'hsl(227,66%,93%)',
      },
      fontSize: {
        // Web/Desktop Values
        'desktop-h1': '3.25rem', // 52px
        'desktop-h2': '2.3rem', // 40px
        'desktop-h3': '1.6rem', // 32px
        'desktop-h4': '1.5625rem', // 25px
        'desktop-h5': '1.125rem', // 18px

        // Mobile Values
        'mobile-h1': ' 2.375rem', // 38px
        'mobile-h2': '1.8rem', // 32px
        'mobile-h3': '1.5rem', // 26px
        'mobile-h4': '1.3125rem', // 21px
        'mobile-h5': '1rem', // 16px
        body: '1.125rem',
        subtext: '0.875rem',
      },
    },
  },
  plugins: [],
};
export default config;
