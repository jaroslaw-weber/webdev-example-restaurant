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
    </div>
    <hero class="mt-40" background="interia1.jpg">
      <div class="flex flex-col text-white justify-center h-full">
        <p class="font-bold">ランチにきてみませんか？</p>
        <p class="text-3xl font-bold pt-4">営業時間: 10時 - 20時</p>
        <simple-button class="mt-12">予約する</simple-button>
      </div></hero
    >
    <div class="w-full md:w-3/4 md:mx-auto">
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
import Hero from "./Hero.vue";

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
    Hero,
  },

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Home",
  },
};
</script>