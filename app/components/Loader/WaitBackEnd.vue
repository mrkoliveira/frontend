<template>
	<div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
		<div class="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900 shadow-2xl ring-1 ring-zinc-700/50 w-[90vw] max-w-xs">
			<svg class="animate-spin h-12 w-12 text-teal-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
			</svg>
			<p class="text-white text-lg font-semibold text-center">
				<slot>{{ $t('components.others.waiting') }}</slot>
			</p>
			<p class="text-sm text-zinc-400 mt-4 text-center">
				<slot name="desc">
					<span class="loading-dots ml-1" aria-label="...">
						<span class="dot">.</span>
						<span class="dot">.</span>
						<span class="dot">.</span>
					</span>
					{{ $t('components.others.working') }}
					<span class="loading-dots ml-1" aria-label="...">
						<span class="dot">.</span>
						<span class="dot">.</span>
						<span class="dot">.</span>
					</span>
				</slot>
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { t } = useI18n()
	defineProps<{ show: boolean }>()
</script>

<style scoped>
	.loading-dots .dot {
  opacity: 0.3;
  animation: blink 1.4s infinite both;
  font-size: 1.3em;
  display: inline-block;
  /* Para suavidade */
}
.loading-dots .dot:nth-child(2) {
  animation-delay: 0.2s;
}
.loading-dots .dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0.3;
  }
  60% {
    opacity: 1;
  }
}
</style>
