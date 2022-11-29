<template>
  <div class="channel">
    <div class="channel-header">
      <Picture />
      <Background />
      <Description />
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/style.scss";

.channel-header {
  background-color: $color-medium-grey;
  min-width: 100vw;
  min-height: $channel-header-height;
  display: flex;
  // justify-content: center;
}

.channel-header-item {
  flex-grow: 1;
}
</style>

<script lang="ts">
import { userStore } from "../stores/user";
import Picture from "@/components/channel/Picture.vue";
import Background from "@/components/channel/Background.vue";
import Description from "@/components/channel/Description.vue";

export default {
  name: "Channel",

  components: { Picture, Background, Description },

  data() {
    return {
      user: userStore(),
    };
  },

  methods: {},

  computed: {
    userHandle() {
      return this.user.handle;
    },
  },
};
</script>
