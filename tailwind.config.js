/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  safelist: [
    'stroke-[#3178C6]',
    'stroke-[#42B883]',
    'stroke-[#8892BF]',
    'stroke-[#E44D26]',
    'stroke-[#F4B400]',
  ],
  theme: {
    extend: {
      colors: {
        'base': '#F5F5F5',
        'black': '#1A1A1A',
        'white': '#E0E0E0',
        'pure_white': '#FFFFFF',
        'watermark_light': '#FDFDFD',
        'watermark_dark': '#2A2A2A',
        'muted_gray': '#CCCCCC',
      },
    },
  },
  plugins: [],
};
