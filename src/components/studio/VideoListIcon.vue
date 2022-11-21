<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <v-img
    class="list-icon"
    :src="src"
    max-width="40px"
    min-width="40px"
    margin-left="10px"
  />
</template>

<style>
.list-icon {
  max-width: 50px;
  margin-left: 10px;
}
</style>

<script lang="ts">
import Src from "@/assets/nav/list_black.png";

export default {
  name: "VideoListIcon",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
ngs_
