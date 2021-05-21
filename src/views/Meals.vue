<template>
  <div class="page page__carbonara">
    <h1>Pasta carbonara meals</h1>
    <div class="page__carbonara-meals">
      <RecipeForm
        :ingredients="secretIngredients"
        @calculateRecipe="getNumberOfMeals($event)"
      />
    </div>
    <div v-if="shouldAlert === true">
      <recipe-alert :meals="meals" />
      <p>
        Please wait while we redirect you to the secret recipe for cooking a
        Pasta Carbonara meal .....
      </p>
    </div>
  </div>
</template>
<script>
import RecipeForm from "@/components/RecipeForm/RecipeForm";
import RecipeAlert from "@/components/RecipeAlert/RecipeAlert";
import SecretIngredents from "@/helpers/formular";

export default {
  name: "Meals",
  components: {
    RecipeForm,
    RecipeAlert,
  },
  data() {
    return {
      secretIngredients: {
        ...SecretIngredents,
      },
      meals: 0,
      shouldAlert: false,
    };
  },
  methods: {
    getNumberOfMeals(mealNumber) {
      this.shouldAlert = true;
      this.meals = mealNumber;
      setTimeout(() => {
        this.$router.push({ name: "Recipe", query: { meal: mealNumber } });
      }, 3000);
    },
  },
};
</script>
