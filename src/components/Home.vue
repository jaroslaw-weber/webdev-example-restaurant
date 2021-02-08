<template>
  <div>
    <navbar />
    <div class="w-full md:w-3/4 md:mx-auto pt-20">
      <top-part />
      <about-us class="mt-40" />
      <featured-food class="mt-40" />
      <offer />
      <food-menu class="mt-40" />
      <reservation />
      <our-chefs class="mt-40" />
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

export default {
  components: { Navbar, TopPart, AboutUs, FeaturedFood, FoodMenu, OurChefs },
};
</script>