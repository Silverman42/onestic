<template>
  <div class="page page__carbonara">
    <h1>Pasta carbonara meals</h1>
    <div class="page__carbonara-meals">
      <RecipeForm :ingredients="secretIngredients" />
    </div>
  </div>
</template>
<script>
import RecipeForm from "@/components/RecipeForm/RecipeForm";
import SecretIngredents from "@/helpers/formular";

export default {
  name: "Meals",
  components: {
    RecipeForm,
  },
  data() {
    return {
      secretIngredients: {
        ...SecretIngredents,
      },
    };
  },
};
</script>
