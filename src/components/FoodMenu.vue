<template>
  <div class="">
    <div class="px-8 md:px-0">
      <p class="text-right text-2xl font-bold text-primary-600">メニュー</p>

      <p class="text-4xl text-right py-8">ゆっくりでランチを楽しましょう</p>
    </div>
    <div class="grid lg:grid-cols-2 gap-6">
      <div v-for="dish in dishes" :key="dish.name">
        <div class="bg-primary-50 p-4 flex">
          <img :src="dish.img" class="w-1/4" />
          <div
            class="space-y-6 flex-col flex px-8 flex-grow justify-center text-left"
          >
            <p class="font-bold text-xl">{{ dish.name }}</p>
            <p class="">{{ dish.description }}</p>
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
          img: "/food2.jpg",
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
          img: "/food2.jpg",
          description: "サラダ添え",
          price: 1000,
        },
        {
          name: "パルマ産生ハム",
          img: "/food2.jpg",
          description: "野菜のタルタルと共に",
          price: 800,
        },
        {
          name: "ポークテリーヌ",
          img: "/food2.jpg",
          description: "サラダ添え",
          price: 1000,
        },
        {
          name: "パルマ産生ハム",
          img: "/food2.jpg",
          description: "野菜のタルタルと共に",
          price: 800,
        },
        {
          name: "ポークテリーヌ",
          img: "/food2.jpg",
          description: "サラダ添え",
          price: 1000,
        },
      ],
    };
  },
};
</script>