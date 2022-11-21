<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <!-- // LogoHiragino.png -->
  <v-img class="logo" :src="src" max-width="150px" margin-left="10px" />
</template>

<style>
.logo {
  max-width: 150px;
  min-width: 150px;
  margin-left: 10px;
}
</style>

<script lang="ts">
import Src from "@/assets/logo.png";

export default {
  name: "Logo",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
