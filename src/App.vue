<template>
  <v-app>
    <v-app>
      <v-main>
        <NavBar />
        <v-content>
          <v-container fluid><router-view></router-view></v-container>
        </v-content>
      </v-main>
    </v-app>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/components/navbar/NavBar.vue";
</script>
