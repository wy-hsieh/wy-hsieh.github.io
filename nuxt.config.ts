// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
  ],
  plugins: [
    { src: '~/plugins/gsap.ts', mode: 'client' },
  ],
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
