<template>
  <div class="base">
    Home
    <PhosphorIconSun class="icon-themed" :size="48" />
    <PhosphorIconMoonStars :size="48" />
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.icon-themed {
  @include themed() {
    fill: asset($icon-accent);
  }
}
</style>
