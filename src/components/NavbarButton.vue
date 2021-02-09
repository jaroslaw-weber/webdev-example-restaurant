<template>
  <button :class="`py-7 hover:text-primary-700 ${classes}`"><slot /></button>
</template>
<script>
export default {
  props: {
    isSelected: Boolean,
  },
  computed: {
    classes: function () {
      if (this.isSelected) return "text-primary-600";
      return "";
    },
  },
};
</script>