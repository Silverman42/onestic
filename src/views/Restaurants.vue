<template>
  <div class="page page__stores">
    <p>{{ welcomeMessage }}</p>
    <search-bar @enterSearch="enterSearch($event)" />
    <joke-of-the-day />
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
import SearchBar from "@/components/SearchBar/SearchBar";
import JokeOfTheDay from "@/components/JokeOfTheDay/JokeOfTheDay";

export default {
  name: "Stores",
  components: {
    StoreList,
    SimplePaginator,
    SearchBar,
    JokeOfTheDay,
  },
  data() {
    return {
      currentTime: this.getCurrentTime(),
      searchInput: "",
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
        this.cachedStore.pop();
        this.paginateCachedStores(this.cachedStore);
      });
      // await this.paginateCachedStores(this.cachedStore);
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
        this.searchCachedStores().then((stores) => {
          this.paginateCachedStores(stores);
        });
      }
    },
    decrementPage() {
      window.scrollTo(0, 0);
      if (this.pagination.currentPage > this.pagination.firstPage) {
        const current = this.pagination.currentPage - 1;
        this.pagination.currentPage = current;
        this.searchCachedStores().then((stores) => {
          this.paginateCachedStores(stores);
        });
      }
    },
    async enterSearch(searchValue) {
      this.searchInput = searchValue;
      this.pagination.currentPage = 1;
      this.searchCachedStores().then((stores) => {
        this.paginateCachedStores(stores);
      });
    },
    async searchCachedStores() {
      if (this.searchInput.length === 0) {
        return this.cachedStore;
      }
      const filteredStores = await this.cachedStore.filter((store) => {
        return store.name
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
      return filteredStores;
    },
  },
};
</script>
