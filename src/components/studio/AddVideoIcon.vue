<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <img :src="src" max-width="40px" min-width="40px" margin-left="10px" />
</template>

<script lang="ts">
import Src from "@/assets/nav/add_black.png";

export default {
  name: "AddVideoIcon",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
