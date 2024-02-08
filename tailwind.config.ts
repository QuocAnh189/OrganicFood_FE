import { error } from 'console';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my-image': "url('../assets/images/bg.png')"
      }
    },
    colors: {
      primary: '#00B207',
      subprimary: '#74E291',
      black: '#333333',
      white: '#FFFFFF',
      gray200: '#F2F2F2',
      gray500: '#808080',
      error: '#FF004D'
    }
  },
  plugins: []
};
export default config;
