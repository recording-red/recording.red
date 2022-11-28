<!-- https://next.vuetifyjs.com/en/components/images/ -->

<template>
  <span class="circle">
    <img class="instrument-icon" :src="src" />
  </span>
</template>

<style>
.circle {
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  display: inline-block;
}

.instrument-icon {
  max-height: 2em;
  max-width: 2em;
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
