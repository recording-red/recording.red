<template>
  <div class="channel-header">
    <Picture class="channel-header-item" />
    <Background class="channel-header-item" />
    <Description class="channel-header-item" />
  </div>
</template>

<style lang="scss">
@import "src/assets/style.scss";

.channel-header {
  background-color: $color-medium-grey;
  min-width: 100vw;
  min-height: $channel-header-height;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.channel-header-item {
  flex-grow: 1;
  align-self: center;
}
</style>

<script lang="ts">
import Picture from "@/components/channel/Picture.vue";
import Background from "@/components/channel/Background.vue";
import Description from "@/components/channel/Description.vue";

export default {
  name: "Header",

  components: { Picture, Background, Description },
};
</script>
