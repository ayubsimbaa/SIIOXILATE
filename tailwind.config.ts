import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

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

        gray: {
          light: '#f5f5f5',
          dark: '#d9d9d9',
        },
        blue: {
          dark: '#00a8cb',
        },
        'purple-100': '#F0F5FF',
        'blue-300': '#299DB7',
        'blue-400': '#0088EB',
        'blue-500': '#2F80ED',
        'gray-100': '#A5A5A5',
        'gray-200': '#B0DDE7',
        'gray-300': '#91A1C1',
        'gray-400': '#405A6D',
        'gray-500': '#2A313F',
        'gray-600': '#707175',
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
}
export default config
