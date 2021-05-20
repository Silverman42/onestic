<template>
  <div>
    <p>
      Here you can find all of our restaurants. We have
      {{ totalStoreCount }} stores right now!
    </p>
    <div class="store-list">
      <Store
        class="store-list__item"
        :title="store.name"
        :photo="store.image"
        :location="store.location"
        v-for="store in storesWithImages"
        :key="store.id"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "./StoreList.scss";
</style>
<script>
import Store from "@/components/Store/Store";

export default {
  name: "StoreList",
  components: {
    Store,
  },
  props: {
    stores: {
      type: Array,
      default: () => [],
    },
    totalStoreCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    storesWithImages() {
      return this.stores.map((store) => {
        store["image"] = `https://via.placeholder.com/300?text=${store.name}`;
        return store;
      });
    },
  },
};
</script>
