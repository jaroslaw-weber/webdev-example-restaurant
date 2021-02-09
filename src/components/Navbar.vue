<template>
  <div :class="classes">
    <navbar-button :isSelected="true">ホーム</navbar-button>
    <navbar-button>コンセプト</navbar-button>
    <navbar-button>メニュー</navbar-button>
    <navbar-button>シェフ</navbar-button>
    <navbar-button>ブログ</navbar-button>
    <navbar-button>問い合わせ</navbar-button>
  </div>
</template>
<script>
import NavbarButton from "./NavbarButton";
export default {
  components: { NavbarButton },

  computed: {
    classes: function () {
      return "bg-white text-gray-900 space-x-6 justify-end md:pr-12 flex w-full";
    },
  },
};
</script>