<template>
  <div :class="classes">
    <navbar-button :isFixed="isFixed" :isSelected="true">ホーム</navbar-button>
    <navbar-button :isFixed="isFixed" class="hidden md:block"
      >コンセプト</navbar-button
    >
    <navbar-button :isFixed="isFixed" class="hidden md:block"
      >メニュー</navbar-button
    >
    <navbar-button :isFixed="isFixed" class="hidden md:block"
      >シェフ</navbar-button
    >
    <navbar-button :isFixed="isFixed" class="hidden md:block"
      >ブログ</navbar-button
    >
    <navbar-button :isFixed="isFixed">問い合わせ</navbar-button>
  </div>
</template>
<script>
import NavbarButton from "./NavbarButton";
export default {
  components: { NavbarButton },
  props: {
    isFixed: Boolean,
  },
  computed: {
    classes: function () {
      if (this.isFixed) {
        return `fade-in top-0 fixed bg-primary-900 text-white ${this.baseClasses}`;
      }
      return `bg-white text-gray-900 ${this.baseClasses}`;
    },
    baseClasses: function () {
      return "justify-around md:justify-end md:pr-12 flex w-full";
    },
  },
};
</script>
<style lang="postcss" scoped>
.fade-in {
  animation: fadeIn ease 0.5s;
  -webkit-animation: fadeIn ease 0.5s;
  -moz-animation: fadeIn ease 0.5s;
  -o-animation: fadeIn ease 0.5s;
  -ms-animation: fadeIn ease 0.5s;
}
@keyframes fadeIn {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>