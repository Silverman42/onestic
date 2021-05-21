<template>
  <div class="jotd__container">
    <h6 class="jotd__heading">Joke of the day</h6>
    <p>{{ joke }}</p>
  </div>
</template>
<style lang="scss" scoped>
@import "./JokeOfTheDay.scss";
</style>
<script>
export default {
  data() {
    return {
      joke: "",
    };
  },
  mounted() {
    fetch("https://api.jokes.one/jod?category=knock-knock")
      .then((response) => response.json())
      .then((response) => {
        this.joke = response.contents.jokes[0].joke.text;
      })
      .catch(() => {
        this.joke = "Oh so sorry, no jokes are currently available";
      });
  },
};
</script>

<style></style>
