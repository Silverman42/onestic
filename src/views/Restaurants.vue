<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <div class="pages__stores-list">
      <StoreList
        :stores="paginatedStores"
        :total-store-count="cachedStore.length"
      />
      <simple-paginator
        :current-page="pagination.currentPage"
        :total-pages="pagination.lastPage"
        @clickNextPage="incrementPage"
        @clickPreviousPage="decrementPage"
      ></simple-paginator>
    </div>
  </div>
</template>

<script>
import { getCurrentTime } from "@/helpers/time";
import StoreList from "@/components/StoreList/StoreList";
import SimplePaginator from "@/components/SimplePaginator/SimplePaginator";
// const stores = require("@/assets/stores/stores.json");

export default {
  name: "Stores",
  components: {
    StoreList,
    SimplePaginator,
  },
  data() {
    return {
      currentTime: this.getCurrentTime(),
      stores: [],
      cachedStore: [],
      paginatedStores: [],
      pagination: {
        start: 0,
        end: 99,
        interval: 100,
        currentPage: 1,
        firstPage: 1,
        lastPage: 1,
      },
    };
  },
  computed: {
    welcomeMessage() {
      return (
        "Welcome to our restaurants list! Your local time is: " +
        this.currentTime
      );
    },
  },
  mounted() {
    this.getStores();
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = this.getCurrentTime();
        setTimer();
      }, 1000);
    setTimer();
  },
  methods: {
    getCurrentTime,
    async getStores() {
      await import("@/assets/stores/stores.json").then((item) => {
        this.cachedStore = Object.values(item);
        this.paginateCachedStores(this.cachedStore);
      });
    },
    paginateCachedStores(stores = []) {
      this.pagination.lastPage = Math.ceil(
        stores.length / this.pagination.interval
      );
      this.pagination.start =
        (this.pagination.currentPage - 1) * this.pagination.interval;
      this.pagination.end = this.pagination.start + this.pagination.interval;
      this.paginatedStores = stores.slice(
        this.pagination.start,
        this.pagination.end
      );
    },
    incrementPage() {
      window.scrollTo(0, 0);
      if (this.pagination.currentPage < this.pagination.lastPage) {
        const current = this.pagination.currentPage + 1;
        this.pagination.currentPage = current;
        this.paginateCachedStores(this.cachedStore);
      }
    },
    decrementPage() {
      window.scrollTo(0, 0);
      if (this.pagination.currentPage > this.pagination.firstPage) {
        const current = this.pagination.currentPage - 1;
        this.pagination.currentPage = current;
        this.paginateCachedStores(this.cachedStore);
      }
    },
  },
};
</script>
