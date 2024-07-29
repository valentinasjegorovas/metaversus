import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        grey: '#c7c7c7',
      },
      screens: {
        tablet: {
          max: '1000px',
        },
        mobile: {
          max: '600px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
