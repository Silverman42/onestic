<template>
  <div class="page">
    <banner
      text="Equitorial Cousine"
      text-distribution="over"
      :backgroundMedia="{
        type: 'image',
        src:
          'https://www.onholdinc.com/mohblog/wp-content/uploads/2018/03/restaurant.jpg',
      }"
      text-horizontal-alignment="center"
      text-vertical-alignment="left"
    />
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner";
export default {
  components: {
    Banner,
  },
};
</script>

<style></style>
