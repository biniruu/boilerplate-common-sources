/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {},
      fontSize: {},
      colors: {
        green: '#11ac3a',
        red: '#e33920',
        yellow: '#dfb230',
      },
      backgroundColor: (theme: (arg0: string) => any) => ({
        ...theme('colors'),
      }),
    },
  },
  plugins: [],
}
