<template>
  <div>
    <navbar />
    <div class="max-w-screen">
      <top-part />
      <about-us class="mt-10 md:mt-20" />
      <featured-food class="mt-10 md:mt-20" />
      <offer />
      <food-menu class="mt-10 md:mt-20" />
      <reservation />
      <our-chefs />
      <reservation-form />
      <blog />
      <page-footer />
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar";
import TopPart from "./TopPart";
import AboutUs from "./AboutUs";
import FeaturedFood from "./FeaturedFood";
import FoodMenu from "./FoodMenu";

export default {
  components: { Navbar, TopPart, AboutUs, FeaturedFood, FoodMenu },
};
</script>