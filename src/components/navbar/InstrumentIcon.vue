<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <!-- // Guitar.png -->
  <v-img class="instrument-icon" :src="src" />
</template>

<style>
.instrument-icon {
  max-width: 30px;
  margin-left: 10px;
}
</style>

<script lang="ts">
import Src from "@/assets/intruments/guitar_white.png";

export default {
  name: "InstrumentIcon",

  data() {
    return {
      src: Src,
    };
  },
};
</script>
