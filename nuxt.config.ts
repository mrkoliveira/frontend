import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  compatibilityDate: '2025-08-14',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },


  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * ["gh:cssninjaStudio/tairo/layers/tairo#v1.4.0", {
     *    install: true,
     *    giget: { auth: import.meta.env.GITHUB_TOKEN },
     * }]
     *
     * @see https://github.com/unjs/c12#extending-config-layer-from-remote-sources
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    './layers/tairo',
  ],

  modules: [
    'reka-ui/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  experimental: {
    viewTransition: true,
    // buildCache: true,
    sharedPrerenderData: true,
    defaults: {
      nuxtLink: {
        // Here we disable the prefetch for visibility and enable it for interaction.
        // This is a good balance between performance and user experience when having a lot of links.
        prefetchOn: {
          visibility: false,
          interaction: true,
        },
      },
    },
  },
  $development: {
    experimental: {
      // Disable prefetch for development, this will make the development faster.
      defaults: {
        nuxtLink: {
          prefetch: false,
        },
      },
    },
  },

  css: [
    /**
     * Load Tailwind CSS
     */
    '~/assets/main.css',
  ],

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },

  typescript: {
    strict: true,
    includeWorkspace: true,
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
      // vueCompilerOptions: {
      //   target: 3.4,
      // },
    },
  },

  runtimeConfig: {
    // só disponível no backend
    pgUrl: process.env.PG_URL,
    timeOutDb: process.env.TIME_OUT_DB || "300000",
    logShowSql: (process.env.DO_SHOW_LOG_SQL_DB === "true") ? true : false,
    logAllSql: (process.env.DO_REGISTER_ALL_LOG_SQL_DB === "true") ? true : false,
    logAllBody: (process.env.DO_LOG_BODY === "true") ? true : false,
    environment: process.env.AMB || "prod",
    jwtSecret: process.env.JWT_SECRET || "",
    tpUserP: process.env.TP_USER_1 || "",
    tpUser2: process.env.TP_USER_2 || "",
    public: {
      mapboxToken: '',        // será NUXT_PUBLIC_MAPBOX_TOKEN
      siteUrl: '',            // será NUXT_PUBLIC_SITE_URL
      defaultLang: '',        // será NUXT_PUBLIC_DEFAULT_LANG
      titlePortal: '',        // será NUXT_PUBLIC_TITLE_PORTAL
      nameJwt: '', // será NUXT_PUBLIC_NAME_JWT
      wsUrl: '', // será NUXT_PUBLIC_WS_URL
      baseApi: '', // será NUXT_PUBLIC_BASE_API
      singInSocial: process.env.SINGIN_SOCIAL === "true",
    },
  },

  i18n: {
    baseUrl: '/',
    defaultLocale: 'pt',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'pt',
      alwaysRedirect: false,
      redirectOn: 'root', // garante redirecionamento só na raiz
    },
    locales: [
      { code: 'pt', dir: 'ltr', language: 'pt-BR', file: 'pt-BR.yaml', name: 'Portuguese', isCatchallLocale: true },
      { code: 'en', dir: 'ltr', language: 'en-US', file: 'en-US.yaml', name: 'English' },
      { code: 'fr', dir: 'ltr', language: 'fr-FR', file: 'fr-FR.yaml', name: 'Français' },
      { code: 'es', dir: 'ltr', language: 'es-ES', file: 'es-ES.yaml', name: 'Español' },
      { code: 'de', dir: 'ltr', language: 'de-DE', file: 'de-DE.yaml', name: 'Deutsch' },
      { code: 'ar', dir: 'rtl', language: 'ar-SA', file: 'ar-SA.yaml', name: 'العربية' },
      { code: 'ja', dir: 'ltr', language: 'ja-JP', file: 'ja-JP.yaml', name: '日本語' },
    ],
    // Use i18n v10 features
    experimental: {
      generatedLocaleFilePathFormat: 'off',
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  routeRules: {
    '/': {
      swr: 3600,
    },
    '/demos': {
      swr: 3600,
    },
    '/auth/**': {
      swr: 3600,
    },
    '/dashboards/**': {
      swr: 3600,
    },
    '/layouts/**': {
      swr: 3600,
    },
    '/wizard/**': {
      swr: 3600,
    },
  },

  sourcemap: {
    server: false,
    client: false,
  },

  nitro: {
    logging: {
      compressedSizes: false,
    },
    // esbuild: {
    //   options: {
    //     target: 'esnext',
    //   },
    // },
  },

  vite: {
    define: {
      // Enable / disable Options API support. Disabling this will result in smaller bundles,
      // but may affect compatibility with 3rd party libraries if they rely on Options API.
      __VUE_OPTIONS_API__: false,
    },
    css: {
      // LightningCSS is a rust based CSS minifier that is faster than the default CSS minifier.
      // @see https://vite.dev/guide/features.html#lightning-css
      // @see https://lightningcss.dev/
      transformer: 'lightningcss',
    },
    build: {
      target: 'esnext',
      cssMinify: 'lightningcss',
      reportCompressedSize: false,
    },
    // Defining the optimizeDeps.include option prebuilds the dependencies, this avoid
    // some reloads when navigating between pages during development.
    // It's also useful to track them usage.
    optimizeDeps: {
      include: [
        'scule',
        'klona',
        'minisearch',
        // AddonDatepicker
        'v-calendar',
        // AddonApexcharts
        'vue3-apexcharts',
        // AddonInputPhone
        'libphonenumber-js/max',
        'country-codes-list',
        // AddonInputPassword
        '@zxcvbn-ts/core',
        '@zxcvbn-ts/language-common',
        '@zxcvbn-ts/language-en',
        '@zxcvbn-ts/language-fr',
        '@zxcvbn-ts/language-pt-br',
        // AddonMapboxLocationPicker
        'ohash',
        'mapbox-gl',
        '@mapbox/mapbox-gl-geocoder',
        // form validation
        '@vee-validate/zod',
        'vee-validate',
        'zod',
        // calendar app
        'vue3-smooth-dnd',
        'date-fns',
        'date-fns/locale',
        // profile edit page
        'imask',
      ],
    },
  },
})
