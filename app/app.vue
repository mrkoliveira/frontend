<template>
  <ClientOnly>
    <BaseProviders
      :config="{ dir: head.htmlAttrs!.dir as any, locale }"
      :toast="{ position: 'top-center' }"
    >
      <!-- Loader Inicial -->
      <div
        v-show="!isReady"
        class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black transition-opacity duration-300"
      >
        <div
          class="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent mb-4"
        ></div>
        <div class="text-xl font-semibold text-gray-700 dark:text-gray-200">
          {{ config.public.titlePortal }}
        </div>
      </div>

      <!-- Conteúdo principal -->
      <div v-show="isReady">
        <!-- NuxtLayout e NuxtPage devem SEMPRE estar presentes -->
        <NuxtLayout>
          <NuxtLoadingIndicator color="var(--color-primary-500)" />
          <NuxtPage />
        </NuxtLayout>
      </div>
    </BaseProviders>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const head = useLocaleHead();
const route = useRoute();
const config = useRuntimeConfig();
const title = config.public.titlePortal || "";

// Carregamento inicial simulado (pode ser substituído por lógica real)
const isReady = ref(false);
onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  isReady.value = true;
  await useWebSocket(t);
});

// SEO dinâmico
useHead({
  title: title,
  htmlAttrs: {
    lang: () => head.value.htmlAttrs!.lang,
    dir: () => head.value.htmlAttrs!.dir as any,
  },
  link: () => [
    ...(head.value.link || []),
    {
      rel: "icon",
      type: "image/png",
      href: "/img/favicon.png",
    },
  ],
  //@ts-ignore
  meta: () => [
    ...(head.value.meta || []),
    {
      name: "description",
      content: route?.meta?.description ?? "",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@seuUsuarioTwitter",
    },
    {
      property: "og:image",
      content: "/img/preview.png",
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
  ],
});
</script>
