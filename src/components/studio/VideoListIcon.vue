<template>
  <img :src="src" />
</template>

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
