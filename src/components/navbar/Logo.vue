<template>
  <!-- // LogoHiragino.png -->
  <img class="logo" :src="src" />
</template>

<style>
.logo {
  max-height: 2.5em;
  display: block;
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
