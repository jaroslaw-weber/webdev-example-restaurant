<template>
  <div>
    <navbar />
    <div class="w-full md:w-3/4 md:mx-auto">
      <top-part class="mt-10 md:mt-0" />
      <about-us class="mt-40" />
      <featured-food class="mt-40" />
      <atmosphere class="mt-40" />
      <offer />
      <food-menu class="mt-40" />
      <reservation />
      <our-chefs class="mt-40" />
      <access class="mt-40" />
      <reservation-form />
      <blog />
      <page-footer />
      <div class="mt-40" />
    </div>
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

export default {
  components: {
    Navbar,
    TopPart,
    AboutUs,
    FeaturedFood,
    FoodMenu,
    OurChefs,
    Access,
    Atmosphere,
  },

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Home",
  },
};
</script>