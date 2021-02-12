<template>
  <div>
    <div class="px-8 md:px-0">
      <section-title subtitle="おしゃれな雰囲気">インテリア</section-title>
    </div>
    <div class="grid gap-8 md:grid-cols-2 pt-10">
      <div v-for="photo in photos" :key="photo.name" class="col-span-1">
        <div class="hover:shadow flex flex-col bg-primary-50">
          <div class="overflow-hidden">
            <img :src="photo.img" class="" />
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
      photos: [
        {
          img: "/interia1.jpg",
        },
        {
          img: "/interia2.jpg",
        },
        {
          img: "/interia3.jpg",
        },
        {
          img: "/interia4.jpg",
        },
      ],
    };
  },
};
</script>