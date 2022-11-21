<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <v-img :src="src" max-width="40px" min-width="40px" margin-left="10px" />
</template>

<script lang="ts">
import Src from "@/assets/nav/stats_black.png";

export default {
  name: "StatisticsIcon",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
