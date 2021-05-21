<template>
  <div class="recipe-form">
    <p>
      Introduce below the quantity for each ingredient you have and we will
      calculate how many Pasta Carbonara meals you can cook!
    </p>
    <form @submit.prevent="calculate" class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="eggs"
        id="recipe-eggs"
        v-model="quantity.eggs"
        value="0"
      />
      <label for="recipe-pasta">Pasta</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="pasta"
        id="recipe-pasta"
        v-model="quantity.pasta"
        value="0"
      />
      <label for="recipe-butter">Butter</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="butter"
        id="recipe-butter"
        v-model="quantity.butter"
        value="0"
      />
      <label for="recipe-milk">Milk</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="milk"
        id="recipe-milk"
        v-model="quantity.milk"
        value="0"
      />
      <label for="recipe-oil">Oil</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="oil"
        id="recipe-oil"
        v-model="quantity.oil"
        value="0"
      />
      <label for="recipe-bacon">Bacon</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="bacon"
        id="recipe-bacon"
        v-model="quantity.bacon"
        value="0"
      />
      <button type="submit">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
@import "./RecipeForm.scss";
</style>
<script>
export default {
  name: "RecipeForm",
  data() {
    return {
      shouldAlert: false,
      meals: 0,
      quantity: {
        eggs: 0,
        pasta: 0,
        butter: 0,
        milk: 0,
        oil: 0,
        bacon: 0,
      },
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    calculate() {
      const aggregates = Object.keys(this.ingredients).map((ingredent) => {
        let quantity = parseInt(this.quantity[ingredent]);
        if (quantity === 0 || isNaN(quantity)) return 0;
        return Math.round(quantity / this.ingredients[ingredent]);
      });
      this.meals = Math.min(...aggregates);
      this.$emit("calculateRecipe", this.meals);
    },
  },
};
</script>
