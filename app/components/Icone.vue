<template>
  <div :class="wrapperClass">
    <img
      :src="logoSrc"
      :alt="alt"
      class="object-contain logo-responsive"
      :style="inlineStyle"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  alt?: string
  width?: string | number
  mobileWidth?: string | number
  height?: string | number
  align?: "left" | "center" | "right"
  customClass?: string
}>()

const logoSrc = "/img/icone-t.png"

const wrapperClass = computed(() => {
  const alignMap: Record<string, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }
  const base = props.customClass || ""
  return `flex w-full ${alignMap[props.align || "center"]} ${base}`.trim()
})

const inlineStyle = computed(() => {
  const styles: Record<string, string> = {}
  if (props.width) {
    styles.width =
      typeof props.width === "number" ? `${props.width}px` : props.width
  }
  if (props.height) {
    styles.height =
      typeof props.height === "number" ? `${props.height}px` : props.height
  }
  return styles
})

// Valor para o CSS, garantindo que seja uma string válida
const mobileWidthValue = computed(() => {
  if (!props.mobileWidth) return "auto"
  return typeof props.mobileWidth === "number"
    ? `${props.mobileWidth}px`
    : props.mobileWidth
})
</script>

<style scoped>
.logo-responsive {
  /* Vincula a prop mobileWidth a uma variável CSS */
  --mobile-width: v-bind(mobileWidthValue);
}

@media (max-width: 640px) {
  .logo-responsive {
    width: var(--mobile-width) !important;
  }
}
</style>
