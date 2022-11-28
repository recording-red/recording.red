<template>
  <img class="search-icon" :src="src" />
  <input class="search" placeholder="Rerchercher" />
</template>

<style lang="scss">
@import "src/assets/style.scss";

.search {
  min-height: 2.3em;
  min-width: 20vw;
  border-radius: 25em;
  border: solid 1px $color-white;
  background-color: $color-black;
  color: $color-white;
  padding: 0em 0em 0.1em 2.5em;
}

.search-icon {
  max-height: 1.2em;
  position: absolute;
  padding: 0.5em 0em 0em 0.5em;
}
</style>

<script lang="ts">
import Src from "@/assets/search.png";

export default {
  name: "Search",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
