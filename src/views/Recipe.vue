<template>
  <div class="page page_recipe">
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
    <joke-of-the-day />
    <recipe-alert :meals="meals" />
    <div class="page_recipe__ingredents">
      <h4>Secret Ingredent for Pasta Carbonara</h4>
      <dl>
        <dt>Pasta</dt>
        <dd>{{ secretIngredients.pasta }}</dd>
        <dt>Bacon</dt>
        <dd>{{ secretIngredients.bacon }}</dd>
        <dt>Eggs</dt>
        <dd>{{ secretIngredients.eggs }}</dd>
        <dt>Milk</dt>
        <dd>{{ secretIngredients.milk }}</dd>
        <dt>Butter</dt>
        <dd>{{ secretIngredients.butter }}</dd>
        <dt>Oil</dt>
        <dd>{{ secretIngredients.oil }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner/Banner";
import JokeOfTheDay from "@/components/JokeOfTheDay/JokeOfTheDay";
import RecipeAlert from "@/components/RecipeAlert/RecipeAlert";
import SecretIngredents from "@/helpers/formular";
export default {
  components: {
    Banner,
    RecipeAlert,
    JokeOfTheDay,
  },
  data() {
    return {
      meals: 0,
      secretIngredients: {
        ...SecretIngredents,
      },
    };
  },
  mounted() {
    this.meals = this.$route.query?.meal || 0;
  },
};
</script>

<style></style>
