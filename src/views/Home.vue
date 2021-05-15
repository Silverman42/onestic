<template>
  <div class="page page__home">
    <p>{{ welcomeMessage }}</p>
  </div>
</template>

<script>
import { getCurrentTime } from "../helpers/time";
export default {
  name: "Home",
  data() {
    return {
      currentTime: this.getCurrentTime(),
    };
  },
  computed: {
    welcomeMessage() {
      return "Welcome! Your local time is: " + this.currentTime;
    },
  },
  mounted() {
    const setTimer = () =>
      setTimeout(() => {
        this.currentTime = this.getCurrentTime();
        setTimer();
      }, 1000);
    setTimer();
  },
  methods: {
    getCurrentTime,
  },
};
</script>
