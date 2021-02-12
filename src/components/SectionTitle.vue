<template>
  <div>
    <div class="flex items-center space-x-4">
      <p class="text-right text-primary-600 text-xl font-bold">
        <slot />
      </p>
      <div class="w-20">
        <hr class="section-title-line bg-black w-full" />
      </div>
    </div>
    <div v-if="subtitle">
      <p class="text-left pt-5 text-5xl">{{ subtitle }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    subtitle: String,
  },
};
</script>
<style scoped>
.section-title-line {
  height: 3px;
}
</style>
