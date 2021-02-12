<template>
  <div>
    <div
      class="h-screen-half bg-center"
      :style="{ 'background-image': `url(${background}) ` }"
    >
      <slot />
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
