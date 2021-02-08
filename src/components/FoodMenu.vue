<template>
  <div class="p-8">
    <p class="text-right text-2xl font-bold text-primary-600">Food Menu</p>

    <p class="text-6xl text-right py-6">Subtitle</p>
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
          name: "Dish Name",
          description: "Dish Description",
          img: "/food-small.jpg",
          price: 100,
        },
        {
          name: "Dish Name",
          description: "Dish Description",
          img: "/food-small.jpg",
          price: 100,
        },
        {
          name: "Dish Name",
          description: "Dish Description",
          img: "/food-small.jpg",
          price: 100,
        },
        {
          name: "Dish Name",
          description: "Dish Description",
          img: "/food-small.jpg",
          price: 100,
        },
        {
          name: "Dish Name",
          description: "Dish Description",
          img: "/food-small.jpg",
          price: 100,
        },
      ],
    };
  },
};
</script>