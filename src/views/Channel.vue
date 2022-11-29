<template>
  <div class="channel">
    <Header />
  </div>
</template>

<script lang="ts">
import { userStore } from "../stores/user";
import Header from "@/components/channel/Header.vue";

export default {
  name: "Channel",

  components: { Header },

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
