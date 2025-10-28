<template>
  <div class="text-center">
    <BaseText size="sm" class="text-muted-400">
      © {{ new Date().getFullYear() }} {{ $t("config.infoCopy") }}
      <p></p>
      <small>{{ $t("config.infoCopy2") }} </small>
    </BaseText>
  </div>
</template>
