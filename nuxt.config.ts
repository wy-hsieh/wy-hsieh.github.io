// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    'nuxt-gtag',
  ],
  plugins: [
    { src: '~/plugins/gsap.ts', mode: 'client' },
  ],
  gtag: {
    id: 'G-Q8RPPF090N',
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/static/',
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },
  css: [
    '~/assets/css/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
