<template>
  <v-app>
    <v-main>
      <NavBar />
      <v-container class="pa-0" fluid><router-view></router-view></v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/components/navbar/NavBar.vue";
</script>
