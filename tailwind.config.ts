// tailwind.config.js
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#202225',
        red: {
          500: '#f56565',
          400: '#fc8181',
        },
        orange: {
          500: '#ed8936',
          400: '#f6ad55',
        },
        yellow: {
          500: '#ecc94b',
          400: '#f6e05e',
        },
        green: {
          500: '#48bb78',
          400: '#68d391',
        },
        blue: {
          dark: '#00a8cb',
          300: '#299DB7',
          400: '#0088EB',
          500: '#2F80ED',
        },
        indigo: {
          500: '#667eea',
          400: '#9f7aea',
        },
        violet: {
          500: '#9f7aea',
          400: '#b794ef',
        },
        gray: {
          light: '#f5f5f5',
          dark: '#d9d9d9',
          100: '#A5A5A5',
          200: '#B0DDE7',
          300: '#91A1C1',
          400: '#405A6D',
          500: '#2A313F',
          600: '#707175',
        },
        purple: {
          100: '#F0F5FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
    colors: {
      white: '#ffffff',
    },
    fontFamily: {
      lato: ['var(--font-lato)', ...fontFamily.sans],
      averia: ['var(--font-averia)', ...fontFamily.sans],
      actor: ['var(--font-actor)', ...fontFamily.sans],
    },
  },
  plugins: [],
};

export default config;
