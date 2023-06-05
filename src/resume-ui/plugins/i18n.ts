import { createI18n } from 'vue-i18n'
import { TRANSLATIONS_PT } from '~~/config/i18n/pt/translations'
import { TRANSLATIONS_EN } from '~~/config/i18n/en/translations'
import { TRANSLATIONS_ES } from '~~/config/i18n/es/translations'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    locale: 'EN',
    fallbackLocale: 'ES',
    globalInjection: true,
    messages: {
        EN: TRANSLATIONS_EN,
        PT: TRANSLATIONS_PT,
        ES: TRANSLATIONS_ES,
    },
  })

  vueApp.use(i18n)
});