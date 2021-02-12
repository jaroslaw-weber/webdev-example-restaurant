<template>
  <button :class="`${classes}`"><slot /></button>
</template>
<script>
export default {
  props: {
    isSelected: Boolean,
    isFixed: Boolean,
  },
  computed: {
    classes: function () {
      let arr = this.baseClasses;
      if (this.isSelected) {
        if (this.isFixed) {
          arr.push("bg-white");
          arr.push("text-gray-900");
        } else {
          arr.push("text-primary-600");
        }
      }
      /*else {
        if (this.isFixed) {
        } else {
        }
      }*/

      //hover
      if (this.isFixed) {
        arr.push("hover:bg-white");
        arr.push("hover:text-primary-600");
      } else {
        arr.push("hover:text-primary-600");
      }
      return arr.join(" ");
    },

    baseClasses: () => {
      return ["py-7 px-6"];
    },
  },
};
</script>