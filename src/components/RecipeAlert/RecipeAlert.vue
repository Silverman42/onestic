<template>
  <div class="recipe-alert__container">
    <p>
      You can cook {{ meals }} meals with the quantity of ingredents you entered
    </p>
  </div>
</template>
<style lang="scss" scoped>
@import "./RecipeAlert.scss";
</style>
<script>
export default {
  props: {
    meals: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>
