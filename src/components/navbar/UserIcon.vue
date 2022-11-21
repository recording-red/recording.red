<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <!-- // UserWhite.png -->
  <v-img class="user-icon" :src="src" max-width="30px" margin-left="10px" />
</template>

<style>
.user-icon {
  max-width: 30px;
  margin-left: 10px;
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
