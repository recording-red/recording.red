<template>
  <div>
    <Header />
    <Info />
    <Form />
  </div>
</template>

<script lang="ts">
import { userStore } from "../stores/user";
import Header from "@/components/channel/Header.vue";
import Info from "@/components/channel/Info.vue";
import Form from "@/components/channel/Form.vue";

export default {
  name: "ChannelView",

  components: { Header, Info, Form },

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
