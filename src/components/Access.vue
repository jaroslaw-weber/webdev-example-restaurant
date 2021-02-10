<template>
  <div>
    <p class="text-right text-primary-600 font-bold text-2xl px-8 md:px-0">
      アクセス
    </p>
    <div class="flex md:flex-row-reverse flex-col mt-10">
      <div class="flex-1 h-screen-half">
        <Map />
      </div>
      <div class="flex-1 flex flex-col text-right space-y-4 justify-around p-8">
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
  </div>
</template>
<script>
import Map from "./Map";
export default {
  components: { Map },
};
</script>
