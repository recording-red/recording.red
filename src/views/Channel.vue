<template>
  <!-- <button @click="increment">aaa</button> -->

  <div class="header">
    <Picture />
    <Background />
    <Description />
  </div>
</template>

<style>
.header {
  background-color: #ededed;
  min-width: 100vw;
  padding: 2em 0em 2em 0em;
  display: flex;
}
</style>

<script lang="ts">
// import { storeToRefs } from "pinia";
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
