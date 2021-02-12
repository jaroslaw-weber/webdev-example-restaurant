<template>
  <hero background="interia1.jpg">
    <div class="dark-bg h-full">
      <div class="flex flex-col text-white justify-center h-full">
        <p class="font-bold">ランチにきてみませんか？</p>
        <p class="text-3xl font-bold pt-4">営業時間: 10時 - 20時</p>
        <simple-button class="mt-12">予約する</simple-button>
      </div>
    </div></hero
  >
</template>
<script>
import Hero from "./Hero.vue";
export default {
  components: {
    Hero,
  },
};
</script>

<style scoped>
.dark-bg {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>