<template>
  <img :src="src" max-width="40px" min-width="40px" margin-left="10px" @click="editChannel()"/>
</template>

<script lang="ts">
import Src from "@/assets/nav/settings_black.png";

export default {
  name: "SettingsIcon",

  data() {
    return {
      src: Src,
    };
  },

  methods: {
    editChannel() {
      this.$router.push("channel");
    }
  }
};
</script>
