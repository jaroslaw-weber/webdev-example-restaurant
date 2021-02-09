<template>
  <div :class="classes">
    <navbar-button :isSelected="true">ホーム</navbar-button>
    <navbar-button class="hidden md:block">コンセプト</navbar-button>
    <navbar-button class="hidden md:block">メニュー</navbar-button>
    <navbar-button class="hidden md:block">シェフ</navbar-button>
    <navbar-button class="hidden md:block">ブログ</navbar-button>
    <navbar-button>問い合わせ</navbar-button>
  </div>
</template>
<script>
import NavbarButton from "./NavbarButton";
export default {
  components: { NavbarButton },

  computed: {
    classes: function () {
      return "bg-white text-gray-900 space-x-6 justify-around md:justify-end md:pr-12 flex w-full";
    },
  },
};
</script>