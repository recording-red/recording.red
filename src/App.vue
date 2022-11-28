<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "src/assets/style.scss";
</style>

<script setup lang="ts">
import NavBar from "@/components/navbar/NavBar.vue";
</script>
