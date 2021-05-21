<template>
  <div class="recipe-alert__container">
    <p>
      {{ mealNumber }}
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
  computed: {
    mealNumber() {
      if (isNaN(this.meals)) {
        return `Invalid number of Meals`;
      }
      return `You can cook ${this.meals} meals with the quantity of ingredents you entered`;
    },
  },
};
</script>
