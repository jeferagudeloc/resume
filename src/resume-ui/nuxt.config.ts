// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      script: [{
        src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
      }],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})