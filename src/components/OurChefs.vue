<template>
  <div>
    <p class="text-left text-primary-600 font-bold text-2xl">Our Chefs</p>
    <p class="text-left text-4xl pt-6">We are here for you</p>
    <div class="flex space-x-8 pt-10">
      <div v-for="chef in chefes" :key="chef.name" class="flex-1">
        <div
          class="hover:shadow flex-1 flex flex-col bg-cover bg-primary-50 p-2"
          :style="`background-image: url(${chef.img})`"
        >
          <div />
          <div class="flex-shrink bg-white p-2 mt-80">
            <p class="font-bold text-xl text-left">{{ chef.name }}</p>
            <p class="pt-2 text-left">{{ chef.description }}</p>
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
      chefes: [
        {
          name: "chef name",
          img: "/chef.jpg",
          description: "description of the chef",
        },
        {
          name: "chef name",
          img: "/chef.jpg",
          description: "description of the chef",
        },
        {
          name: "chef name",
          img: "/chef.jpg",
          description: "description of the chef",
        },
      ],
    };
  },
};
</script>