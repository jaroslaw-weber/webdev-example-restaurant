<template>
  <div>
    <div class="px-8 md:px-0">
      <p class="text-left text-primary-600 font-bold text-2xl">シェフ</p>
      <p class="text-left text-4xl pt-6">経験と努力</p>
    </div>
    <div
      class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 pt-10 w-full lg:w-2/3"
    >
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
          name: "田中太郎",
          img: "/chef.jpg",
          description: "20年間フランスレストラン運営",
        },
        {
          name: "島田正弘",
          img: "/chef.jpg",
          description: "10年フランスでレストラン運営",
        },
      ],
    };
  },
};
</script>