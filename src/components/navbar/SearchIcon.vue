<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <!-- // SearchWhite.png -->
  <v-img class="search-icon" :src="src" max-width="30px" margin-left="10px" />
</template>

<style>
.search-icon {
  max-width: 30px;
  margin-left: 10px;
}
</style>

<script lang="ts">
import Src from "@/assets/search.png";

export default {
  name: "SearchIcon",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
