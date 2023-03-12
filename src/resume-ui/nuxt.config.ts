// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@fortawesome/free-brands-svg-icons",
  ],
  modules: ["nuxt-highcharts"],
  app: {
    head: {
      title: 'jeferagudeloc',
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
