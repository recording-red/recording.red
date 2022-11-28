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
import Src from "@/assets/logo_circle.png";

export default {
  name: "SmallLogo",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
