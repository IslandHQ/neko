import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { messages } from '~/locale'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ja',
  fallbackLocale: 'ja',
  messages,
})
