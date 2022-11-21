<template>
  <v-app>
    <v-app>
      <v-main>
        <NavBar />
        <v-container fluid><router-view></router-view></v-container>
      </v-main>
    </v-app>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/components/navbar/NavBar.vue";
</script>
