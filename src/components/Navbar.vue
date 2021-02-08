<template>
  <div :class="classes">
    <navbar-button>home</navbar-button>
    <navbar-button>about</navbar-button>
    <navbar-button>menu</navbar-button>
    <navbar-button>chef</navbar-button>
    <navbar-button>blog</navbar-button>
    <navbar-button>contact</navbar-button>
  </div>
</template>
<script>
import NavbarButton from "./NavbarButton";
export default {
  components: { NavbarButton },

  computed: {
    classes: function () {
      return "bg-white text-gray-900 space-x-6 justify-end md:pr-12 flex shadow fixed w-full";
    },
  },
};
</script>