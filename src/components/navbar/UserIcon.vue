<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <!-- // UserWhite.png -->
  <img class="user-icon" :src="src" />
</template>

<style>
.user-icon {
  max-height: 2em;
}
</style>

<script lang="ts">
import Src from "@/assets/user.png";

export default {
  name: "UserIcon",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
