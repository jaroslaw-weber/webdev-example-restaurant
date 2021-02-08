<template>
  <div>
    <p class="pl-8 text-left text-primary-600 font-bold text-2xl">
      Featured Foods
    </p>
    <p class="pl-8 text-left font-bold text-6xl pt-6">lorem ipsum</p>
    <div class="flex space-x-8 px-8 pt-10">
      <div v-for="dish in dishes" :key="dish.name">
        <div class="hover:shadow flex flex-col bg-primary-50">
          <img :src="dish.img" />
          <div class="p-8">
            <p class="font-bold pt-4 text-xl text-left">{{ dish.name }}</p>
            <p class="pt-4 text-left">{{ dish.description }}</p>
            <p class="text-right font-bold text-2xl pt-9">
              {{ dish.price }} yen
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
          name: "dish name",
          img: "/food2.jpg",
          description: "description of the dish",
          price: 10,
        },
        {
          name: "dish name",
          img: "/food2.jpg",
          description: "description of the dish",
          price: 10,
        },
        {
          name: "dish name",
          img: "/food2.jpg",
          description: "description of the dish",
          price: 10,
        },
      ],
    };
  },
};
</script>