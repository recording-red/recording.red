<template>
  <div class="new-video">
    <NewVideo />
  </div>
</template>

<style lang="scss">
.new-video {
  padding: 3em 15em 3em 15em;
}
</style>

<script lang="ts">
import NewVideo from "@/components/new_video/NewVideo.vue";

export default {
  name: "NewVideoView",

  components: { NewVideo },
};
</script>
