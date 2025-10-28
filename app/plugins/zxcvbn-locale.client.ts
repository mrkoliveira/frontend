import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const lang = nuxtApp.vueApp.config.globalProperties.$i18n?.locale ?? 'en'

    const getZxcvbnLocale = async () => {
        switch (lang) {
            case 'pt':
                return await import('@zxcvbn-ts/language-pt-br')
            case 'fr':
                return await import('@zxcvbn-ts/language-fr')
            case 'es':
                return await import('@zxcvbn-ts/language-es-es')
            case 'de':
                return await import('@zxcvbn-ts/language-en')
            default:
                return await import('@zxcvbn-ts/language-en')
        }
    }

    return {
        provide: {
            zxcvbnLocale: getZxcvbnLocale,
        },
    }
})
