<template>
  <form @submit.prevent="enterSearch" class="search-bar__container">
    <input
      class="search-bar__input"
      v-model="searchInput"
      type="search"
      name=""
      placeholder="Search store name"
    />
    <button type="submit" class="search-bar__button">Search</button>
  </form>
</template>

<style lang="scss">
@import "./SearchBar.scss";
</style>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    enterSearch() {
      this.$emit("enterSearch", this.searchInput);
    },
  },
};
</script>
