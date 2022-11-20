<template>
  <v-layout>
    <v-main>
      <NavBar />
      <v-container fluid> </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import NavBar from "@/components/navbar/NavBar.vue";

export default {
  name: "Home",

  components: {
    NavBar,
  },

  props: {},
};
</script>
