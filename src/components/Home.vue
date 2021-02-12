<template>
  <div>
    <navbar />
    <navbar :isFixed="true" v-if="showFixedNavbar" />
    <width-container>
      <top-part class="mt-10 md:mt-0" />
      <about-us class="mt-40" />
      <featured-food class="mt-40" />
    </width-container>
    <atmosphere class="pt-20 mt-20 pb-20 mb-20" />
    <width-container>
      <offer />
      <food-menu class="" />
    </width-container>
    <business-time class="mt-40" />
    <width-container>
      <reservation />
      <our-chefs class="mt-40" />
    </width-container>
    <access class="pt-20 mt-20 pb-60" />
    <reservation-form />
    <blog />
    <page-footer />
  </div>
</template>
<script>
import Navbar from "./Navbar";
import TopPart from "./TopPart";
import AboutUs from "./AboutUs";
import FeaturedFood from "./FeaturedFood";
import FoodMenu from "./FoodMenu";
import OurChefs from "./OurChefs";
import Access from "./Access.vue";
import Atmosphere from "./Atmosphere.vue";
import BusinessTime from "./BusinessTime";

export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.pageYOffset = window.pageYOffset;
    },
  },
  data: () => {
    return {
      pageYOffset: 0,
    };
  },
  computed: {
    showFixedNavbar: function () {
      return this.pageYOffset > 200;
    },
  },
  components: {
    Navbar,
    TopPart,
    AboutUs,
    FeaturedFood,
    FoodMenu,
    OurChefs,
    Access,
    Atmosphere,
    BusinessTime,
  },

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Home",
  },
};
</script>