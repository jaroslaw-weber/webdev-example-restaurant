<template>
  <div>
    <div
      class="h-screen-half bg-center"
      :style="{ 'background-image': `url(${background}) ` }"
    >
      <div class="dark-bg h-full">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    background: String,
  },
};
</script>

<style scoped>
.dark-bg {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>