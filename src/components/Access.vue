<template>
  <div class="bg-primary-50">
    <width-container>
      <section-title class="pl-8 md:pl-0">アクセス</section-title>
      <div class="flex md:flex-row flex-col mt-10">
        <div class="flex-1 h-screen-half">
          <Map />
        </div>
        <div
          class="flex-1 flex flex-col text-left space-y-4 justify-around p-8"
        >
          <p class="font-bold">所在地</p>
          <p>
            レストラン シェ・ソワ<br />〒179-0084 東京都練馬区氷川台3-35-11<br />メゾンM・T
            1F
          </p>
          <p class="font-bold">交通手段</p>
          <p>
            東京メトロ 有楽町線・副都心線「氷川台駅」<br />
            2番出口（正久保橋口）より徒歩2分
          </p>
        </div>
      </div>
    </width-container>
  </div>
</template>
<script>
import Map from "./Map";
export default {
  components: { Map },
};
</script>
