<template>
  <div class="paginator__container">
    <button class="paginator__btn" @click="clickPreviousPage()">Prev</button>
    <div class="paginator__number">{{ `${currentPage} / ${totalPages}` }}</div>
    <button class="paginator__btn" @click="clickNextPage()">Next</button>
  </div>
</template>
<style lang="scss">
@import "./SimplePaginator.scss";
</style>
<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    clickNextPage() {
      this.$emit("clickNextPage");
    },
    clickPreviousPage() {
      this.$emit("clickPreviousPage");
    },
  },
};
</script>

<style></style>
