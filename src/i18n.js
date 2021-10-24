import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
  locale: (window.navigator.language && window.navigator.language.split('-')[0]) || 'hu',
  fallbackLocale: 'hu',
  silentTranslationWarn: true,
  silentFallbackWarn: true,
});
