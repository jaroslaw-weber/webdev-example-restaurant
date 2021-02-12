<template>
  <div>
    <div class="px-8 md:px-0">
      <section-title subtitle="高級な味">おすすめの料理</section-title>
    </div>
    <div
      class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 pt-10"
    >
      <div v-for="dish in dishes" :key="dish.name" class="flex-1">
        <div class="hover:shadow flex flex-col bg-primary-50">
          <div class="square overflow-hidden">
            <img :src="dish.img" class="" />
          </div>
          <div class="p-8">
            <p class="font-bold pt-4 text-xl text-left">{{ dish.name }}</p>
            <p class="pt-4 text-left">{{ dish.description }}</p>
            <p class="text-right font-bold text-2xl pt-9 text-primary-600">
              {{ dish.price }}円
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      dishes: [
        {
          name: "ポークテリーヌ",
          img: "/food4.jpg",
          description: "サラダ添え",
          price: 700,
        },
        {
          name: "パルマ産生ハム",
          img: "/food2.jpg",
          description: "野菜のタルタルと共に",
          price: 800,
        },
        {
          name: "ポークテリーヌ",
          img: "/food3.jpg",
          description: "サラダ添え",
          price: 1000,
        },
      ],
    };
  },
};
</script>